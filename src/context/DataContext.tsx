import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { DESTINATIONS as STATIC_DESTINATIONS } from '../data/destinationsData';
import { TOUR_PACKAGES as STATIC_PACKAGES } from '../data/packagesData';
import { ACTIVITIES as STATIC_ACTIVITIES } from '../data/activitiesData';
import { BLOG_POSTS as STATIC_BLOGS } from '../data/blogData';
import { TAXI_ROUTES as STATIC_ROUTES, TAXI_VEHICLES as STATIC_VEHICLES } from '../data/taxiData';
import { SEO_LANDINGS as STATIC_SEO_LANDINGS } from '../data/seoLandingsData';
import { Destination, TourPackage, ActivityExperience, BlogPost, TaxiRoute, TaxiVehicle } from '../types';

export type CollectionName = 'destinations' | 'packages' | 'activities' | 'blogs' | 'taxiRoutes' | 'taxiVehicles';

interface DataContextType {
  apiAvailable: boolean;
  destinations: Destination[];
  tourPackages: TourPackage[];
  activities: ActivityExperience[];
  blogPosts: BlogPost[];
  taxiRoutes: TaxiRoute[];
  taxiVehicles: TaxiVehicle[];
  seoLandings: typeof STATIC_SEO_LANDINGS;
  createItem: (collection: CollectionName, item: any) => Promise<any>;
  updateItem: (collection: CollectionName, item: any) => Promise<any>;
  deleteItem: (collection: CollectionName, id: string) => Promise<boolean>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const STATIC_MAP: Record<CollectionName, any[]> = {
  destinations: STATIC_DESTINATIONS,
  packages: STATIC_PACKAGES,
  activities: STATIC_ACTIVITIES,
  blogs: STATIC_BLOGS,
  taxiRoutes: STATIC_ROUTES,
  taxiVehicles: STATIC_VEHICLES
};

async function apiFetch(path: string, options?: RequestInit) {
  const res = await fetch(path, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });
  if (!res.ok) throw new Error(`API ${res.status}`);
  return res.json();
}

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [apiAvailable, setApiAvailable] = useState(false);
  const [destinations, setDestinations] = useState<Destination[]>(STATIC_DESTINATIONS);
  const [tourPackages, setTourPackages] = useState<TourPackage[]>(STATIC_PACKAGES);
  const [activities, setActivities] = useState<ActivityExperience[]>(STATIC_ACTIVITIES);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(STATIC_BLOGS);
  const [taxiRoutes, setTaxiRoutes] = useState<TaxiRoute[]>(STATIC_ROUTES);
  const [taxiVehicles, setTaxiVehicles] = useState<TaxiVehicle[]>(STATIC_VEHICLES);

  const setters: Record<CollectionName, React.Dispatch<React.SetStateAction<any[]>>> = {
    destinations: setDestinations,
    packages: setTourPackages,
    activities: setActivities,
    blogs: setBlogPosts,
    taxiRoutes: setTaxiRoutes,
    taxiVehicles: setTaxiVehicles
  };

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [d, p, a, b, tr, tv] = await Promise.all([
          apiFetch('/api/destinations'),
          apiFetch('/api/packages'),
          apiFetch('/api/activities'),
          apiFetch('/api/blogs'),
          apiFetch('/api/taxiRoutes'),
          apiFetch('/api/taxiVehicles')
        ]);
        if (cancelled) return;
        setDestinations(d);
        setTourPackages(p);
        setActivities(a);
        setBlogPosts(b);
        setTaxiRoutes(tr);
        setTaxiVehicles(tv);
        setApiAvailable(true);
      } catch {
        if (!cancelled) setApiAvailable(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const createItem = useCallback(async (collection: CollectionName, item: any) => {
    if (!apiAvailable) {
      const withId = { ...item, id: item.id || `${collection}-${Date.now()}` };
      setters[collection](prev => [withId, ...prev]);
      return withId;
    }
    const created = await apiFetch(`/api/${collection}`, {
      method: 'POST',
      body: JSON.stringify(item)
    });
    setters[collection](prev => [created, ...prev]);
    return created;
  }, [apiAvailable]);

  const updateItem = useCallback(async (collection: CollectionName, item: any) => {
    if (!apiAvailable) {
      setters[collection](prev => prev.map(i => i.id === item.id ? { ...i, ...item } : i));
      return item;
    }
    const updated = await apiFetch(`/api/${collection}/${item.id}`, {
      method: 'PUT',
      body: JSON.stringify(item)
    });
    setters[collection](prev => prev.map(i => i.id === item.id ? updated : i));
    return updated;
  }, [apiAvailable]);

  const deleteItem = useCallback(async (collection: CollectionName, id: string) => {
    if (!apiAvailable) {
      setters[collection](prev => prev.filter(i => i.id !== id));
      return true;
    }
    try {
      await apiFetch(`/api/${collection}/${id}`, { method: 'DELETE' });
    } catch {
      return false;
    }
    setters[collection](prev => prev.filter(i => i.id !== id));
    return true;
  }, [apiAvailable]);

  return (
    <DataContext.Provider
      value={{
        apiAvailable,
        destinations,
        tourPackages,
        activities,
        blogPosts,
        taxiRoutes,
        taxiVehicles,
        seoLandings: STATIC_SEO_LANDINGS,
        createItem,
        updateItem,
        deleteItem
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
