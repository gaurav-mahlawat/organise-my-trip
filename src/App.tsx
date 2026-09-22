import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { DataProvider } from './context/DataContext';
import { Layout } from './components/common/Layout';

// Page Templates
import { HomePage } from './pages/HomePage';
import { PackagesHubPage } from './pages/PackagesHubPage';
import { PackageDetailPage } from './pages/PackageDetailPage';
import { SeoLandingPage } from './pages/SeoLandingPage';
import { ActivitiesPage } from './pages/ActivitiesPage';
import { ActivityDetailPage } from './pages/ActivityDetailPage';
import { TaxiOverviewPage } from './pages/TaxiOverviewPage';
import { TaxiRoutesHubPage } from './pages/TaxiRoutesHubPage';
import { TaxiRouteDetailPage } from './pages/TaxiRouteDetailPage';
import { CarRentalPage } from './pages/CarRentalPage';
import { BlogIndexPage } from './pages/BlogIndexPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { DestinationGuidePage } from './pages/DestinationGuidePage';
import { DestinationHubPage } from './pages/DestinationHubPage';
import { SightseeingPage } from './pages/SightseeingPage';
import { B2bDmcPage } from './pages/B2bDmcPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { LegalPage } from './pages/LegalPage';
import { AdminPage } from './pages/AdminPage';

const AppContent: React.FC = () => {
  const { currentRoute, currentPath } = useRouter();

  const renderPage = () => {
    switch (currentRoute) {
      case 'home':
        return <HomePage />;

      case 'packages':
        return <PackagesHubPage />;

      case 'package-detail':
        return <PackageDetailPage />;

      case 'seo-landing':
        return <SeoLandingPage />;

      case 'activities':
        return <ActivitiesPage />;

      case 'activity-detail':
        return <ActivityDetailPage />;

      case 'taxi-overview':
        return <TaxiOverviewPage />;

      case 'taxi-routes':
        return <TaxiRoutesHubPage />;

      case 'taxi-detail':
        return <TaxiRouteDetailPage />;

      case 'car-rental':
        return <CarRentalPage />;

      case 'blog-index':
        return <BlogIndexPage />;

      case 'blog-post':
        return <BlogPostPage />;

      case 'destination-guide':
        return <DestinationGuidePage />;

      case 'destinations-hub':
        return <DestinationHubPage />;

      case 'sightseeing':
        return <SightseeingPage />;

      case 'b2b-dmc':
        return <B2bDmcPage />;

      case 'about-us':
        return <AboutUsPage />;

      case 'contact-us':
        return <ContactUsPage />;

      case 'privacy-policy':
        return <LegalPage type="privacy" />;

      case 'terms-and-conditions':
        return <LegalPage type="terms" />;

      case 'cancellation-policy':
        return <LegalPage type="cancellation" />;

      case 'sitemap':
        return <LegalPage type="sitemap" />;

      case 'admin':
        return <AdminPage />;

      default:
        return <HomePage />;
    }
  };

  // If on admin view, we render admin page inside the standard layout or standalone
  return (
    <Layout>
      {renderPage()}
    </Layout>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <DataProvider>
        <AppContent />
      </DataProvider>
    </RouterProvider>
  );
}
