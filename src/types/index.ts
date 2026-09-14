export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  durationDays: number;
  durationNights: number;
  destinations: string[]; // e.g. ['Jaipur', 'Jodhpur', 'Udaipur']
  theme: 'Heritage & Culture' | 'Desert & Forts' | 'Wildlife & Nature' | 'Spiritual & Pilgrimage' | 'Luxury Royal' | 'Romantic Honeymoon' | 'Short Weekend' | string;
  category?: string; // alias for theme/category
  startingPrice: number; // in INR
  originalPrice?: number;
  featured: boolean;
  rating: number;
  reviewCount: number;
  image: string;
  heroImage?: string; // alias for image
  gallery: string[];
  overview: string;
  highlights: string[];
  route?: string; // formatted e.g. "Jaipur → Jodhpur → Udaipur"
  citiesCovered?: string[]; // alias for destinations
  itinerary: {
    day: number;
    title: string;
    description: string;
    meals?: string;
    stayCity?: string;
    nightStay?: string;
    activities?: string[];
  }[];
  inclusions: string[];
  exclusions: string[];
  bestSeason?: string;
  pickupDrop?: string;
  hotels?: {
    budget: string;
    deluxe: string;
    luxury: string;
  };
}

export interface DestinationAttraction {
  slug: string;
  name: string;
  type?: string;
  image: string;
  shortDescription?: string;
  description?: string;
  timing: string;
  entryFee: string;
  id?: string;
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  nickname: string; // e.g. "The Pink City", "City of Lakes"
  tagline?: string; // alias
  image: string;
  heroImage?: string; // alias
  description: string;
  bestTimeToVisit?: string;
  bestMonths?: string; // alias
  idealDays?: string;
  connectivity?: {
    airport: string;
    railway: string;
    road?: string;
  };
  topAttractions: DestinationAttraction[];
  attractions?: DestinationAttraction[]; // alias
  popularFor: string[];
  tourCount: number;
}

export interface ActivityExperience {
  id: string;
  slug: string;
  title: string;
  category: 'Desert Adventure' | 'Cultural Heritage' | 'Wildlife & Safari' | 'Culinary & Village' | 'Royal Luxury' | string;
  location: string;
  duration: string;
  pricePerPerson: number;
  image: string;
  description: string;
  highlights: string[];
  includes: string[];
  idealFor: string;
  timing: string;
}

export interface TaxiVehicle {
  id: string;
  name: string;
  category: 'Sedan' | 'SUV / MPV' | 'Premium MPV' | 'Mini Bus / Tempo' | string;
  models: string; // e.g. "Toyota Etios / Swift Dzire"
  seatingCapacity: number;
  luggageCapacity: number;
  ac: boolean;
  ratePerKm: number;
  minKmPerDay: number;
  image: string;
  features: string[];
}

export interface TaxiRoute {
  id: string;
  slug: string; // e.g. "jaipur-to-jodhpur"
  fromCity: string;
  toCity: string;
  distanceKm: number;
  durationHours: string;
  highway: string;
  popularStops: string[];
  sedanFare: number;
  suvFare: number;
  crystaFare: number;
  tempoFare: number;
  overview: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: 'Travel Tips' | 'Itineraries' | 'Culture & Festivals' | 'Food Guide' | 'Heritage' | string;
  readTime: string;
  publishedDate: string;
  author: string;
  image: string;
  excerpt: string;
  content: string[];
  tags: string[];
}

export interface Enquiry {
  id: string;
  createdAt: string;
  type: 'tour' | 'taxi' | 'b2b' | 'custom' | string;
  name?: string;
  fullName?: string; // alias
  phone: string;
  email: string;
  travelMonth?: string;
  arrivalDate?: string;
  departureDate?: string;
  travellers?: number;
  adults?: number;
  children?: number;
  hotelTier?: 'Budget (3 Star)' | 'Deluxe (4 Star)' | 'Luxury Heritage (5 Star)' | 'Vehicle Only / No Hotel' | string;
  hotelCategory?: string;
  packageInterest?: string;
  pickupCity?: string;
  dropCity?: string;
  tripType?: 'One Way' | 'Round Trip' | 'Multi-City Tour' | string;
  vehicleType?: string;
  travelDate?: string;
  companyName?: string;
  agencyName?: string; // alias
  agencyType?: string;
  message: string;
  status: 'New' | 'Contacted' | 'Quotation Sent' | 'Confirmed' | 'Archived' | 'new' | 'contacted' | 'quoted' | 'confirmed' | 'closed' | string;
}

export type EnquiryRecord = Enquiry;
