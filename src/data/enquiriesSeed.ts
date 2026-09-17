import { Enquiry } from '../types';

export const INITIAL_ENQUIRIES: Enquiry[] = [
  {
    id: 'ENQ-8901',
    createdAt: '2026-03-12 14:32',
    type: 'tour',
    name: 'Rajesh & Sunita Sharma',
    fullName: 'Rajesh & Sunita Sharma',
    phone: '+91 98291 44521',
    email: 'rajesh.sharma@example.com',
    travelMonth: 'November 2026',
    arrivalDate: '2026-11-14',
    departureDate: '2026-11-21',
    travelDate: '2026-11-14',
    travellers: 2,
    adults: 2,
    children: 0,
    hotelTier: 'Deluxe (4 Star)',
    packageInterest: 'Royal Rajasthan Highlights (7 Days)',
    message: 'Looking for a private chauffeur driven cab from Jaipur to Udaipur via Jodhpur with nice heritage stays.',
    status: 'new'
  },
  {
    id: 'ENQ-8894',
    createdAt: '2026-03-11 09:15',
    type: 'taxi',
    name: 'Ananya Deshmukh',
    fullName: 'Ananya Deshmukh',
    phone: '+91 97654 81290',
    email: 'ananya.d@example.com',
    pickupCity: 'Jaipur Airport',
    dropCity: 'Udaipur Lakeside',
    tripType: 'One Way',
    vehicleType: 'Toyota Innova Crysta',
    travelDate: '2026-04-05',
    message: 'Need airport pickup at Jaipur 11 AM, quick stopover at Chittorgarh Fort, and drop at hotel in Udaipur.',
    status: 'quoted'
  },
  {
    id: 'ENQ-8889',
    createdAt: '2026-03-10 17:40',
    type: 'b2b',
    name: 'Marcus Weber',
    fullName: 'Marcus Weber',
    phone: '+49 171 8923011',
    email: 'marcus@bavariatravel.de',
    companyName: 'Bavaria Luxury Travel GmbH',
    agencyName: 'Bavaria Luxury Travel GmbH',
    agencyType: 'Outbound Tour Operator (Germany)',
    travellers: 14,
    travelMonth: 'January 2027',
    travelDate: '2027-01-10',
    message: 'We require a trusted DMC in Rajasthan for group of 14 high-net-worth clients for 10-day tour in January 2027.',
    status: 'contacted'
  }
];
