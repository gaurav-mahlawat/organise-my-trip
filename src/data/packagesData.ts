import { TourPackage } from '../types';

const CUSTOMISATION_INCLUSIONS = [
  '3* / 4* / 5* hotel options as per selected category',
  'Breakfast or MAP (Breakfast + Dinner) meal plan',
  'Private air-conditioned vehicle with experienced driver',
  'Safari permits & desert camp (subject to availability)',
  'Cultural evenings & folk programmes as required',
  'Airport / railway transfers'
];

const CUSTOMISATION_EXCLUSIONS = [
  'Professional local guide / tour guide charges',
  'Monument entrance tickets & camera fees',
  'Airfare / train tickets to and from Rajasthan',
  'Meals not part of the selected meal plan',
  'Personal expenses, tips & laundry',
  'Anything not specifically mentioned in inclusions'
];

const HOTEL_TIERS = {
  budget: 'Comfortable 3-star city hotels with breakfast.',
  deluxe: '4-star deluxe hotels & heritage havelis with breakfast or MAP.',
  luxury: '5-star palaces & premium heritage properties with curated dining.'
};

const MEALS = 'As per selected meal plan (Breakfast / MAP)';

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'pkg-01',
    slug: 'royal-rajasthan-highlights',
    title: 'Royal Rajasthan Highlights',
    tagline: 'Ideal for first-time Rajasthan travellers · Heritage + Desert',
    durationDays: 7,
    durationNights: 6,
    destinations: ['Jaipur', 'Pushkar', 'Jodhpur', 'Jaisalmer'],
    citiesCovered: ['Jaipur', 'Pushkar', 'Jodhpur', 'Jaisalmer'],
    route: 'Jaipur → Pushkar → Jodhpur → Jaisalmer',
    theme: 'Heritage & Forts',
    category: 'Heritage & Forts',
    featured: true,
    image: 'images/hero/royal-rajasthan-tour-package.webp',
    gallery: [
      'images/packages/jaipur-amber-fort.jpg',
      'images/packages/jodhpur-blue-city.jpg',
      'images/packages/jaisalmer-golden-fort.jpg'
    ],
    overview: 'A classic 7-day introduction to Rajasthan for first-time travellers, balancing royal heritage with the golden Thar desert. Explore Jaipur, holy Pushkar, the Blue City of Jodhpur, and the living fort of Jaisalmer with a private vehicle and flexible pace.',
    highlights: [
      'Amber Fort, Jal Mahal, City Palace & Hawa Mahal in Jaipur',
      'Sacred Brahma Temple & Pushkar Lake sunset walk',
      'Mehrangarh Fort, Jaswant Thada & Clock Tower Market in Jodhpur',
      'Jaisalmer Fort, Patwon Ki Haveli & Gadisar Lake',
      'Evening Sam / Sam Sand Dunes desert experience'
    ],
    itinerary: [
      { day: 1, title: 'Arrive Jaipur', description: 'Airport/railway pickup, hotel check-in, City Palace area & local market.', meals: MEALS, stayCity: 'Jaipur', nightStay: 'Jaipur' },
      { day: 2, title: 'Jaipur', description: 'Amber Fort, Jal Mahal photo stop, City Palace, Hawa Mahal & evening bazaar.', meals: MEALS, stayCity: 'Jaipur', nightStay: 'Jaipur' },
      { day: 3, title: 'Jaipur → Pushkar', description: 'Brahma Temple, Pushkar Lake & sunset walk. Overnight Pushkar.', meals: MEALS, stayCity: 'Pushkar', nightStay: 'Pushkar' },
      { day: 4, title: 'Pushkar → Jodhpur', description: 'Mehrangarh Fort, Jaswant Thada & Clock Tower Market.', meals: MEALS, stayCity: 'Jodhpur', nightStay: 'Jodhpur' },
      { day: 5, title: 'Jodhpur → Jaisalmer', description: 'En-route desert landscape; evening leisure in Jaisalmer.', meals: MEALS, stayCity: 'Jaisalmer', nightStay: 'Jaisalmer' },
      { day: 6, title: 'Jaisalmer', description: 'Fort, Patwon Ki Haveli, Gadisar Lake; evening Sam/Sam Sand Dunes experience.', meals: MEALS, stayCity: 'Jaisalmer', nightStay: 'Jaisalmer' },
      { day: 7, title: 'Departure', description: 'Transfer to Jaisalmer/Jodhpur airport or railway station.', meals: MEALS, stayCity: 'Departure', nightStay: 'Departure' }
    ],
    inclusions: CUSTOMISATION_INCLUSIONS,
    exclusions: CUSTOMISATION_EXCLUSIONS,
    bestSeason: 'October to March',
    pickupDrop: 'Jaipur Pickup / Jaisalmer or Jodhpur Drop',
    hotels: HOTEL_TIERS
  },
  {
    id: 'pkg-02',
    slug: 'royal-triangle-wildlife',
    title: 'Royal Triangle & Wildlife',
    tagline: 'Ideal for families & wildlife lovers · Heritage + Safari',
    durationDays: 8,
    durationNights: 7,
    destinations: ['Jaipur', 'Ranthambhore', 'Pushkar', 'Jodhpur'],
    citiesCovered: ['Jaipur', 'Ranthambhore', 'Pushkar', 'Jodhpur'],
    route: 'Jaipur → Ranthambhore → Pushkar → Jodhpur',
    theme: 'Wildlife & Safari',
    category: 'Wildlife & Safari',
    featured: true,
    image: 'images/packages/ranthambore-national-park-safari.webp',
    gallery: [
      'images/hero/golden-triangle-tour.webp',
      'images/packages/ranthambore-safari.jpg',
      'images/packages/jaipur-amber-fort.jpg'
    ],
    overview: 'A family-friendly combination of Jaipur heritage and Ranthambhore tiger country, finishing with holy Pushkar and the Blue City of Jodhpur. Includes a morning wildlife safari and a relaxed, balanced pace throughout.',
    highlights: [
      'Amber Fort, City Palace, Jantar Mantar & Hawa Mahal in Jaipur',
      'Morning wildlife safari in Ranthambhore',
      'Pushkar Lake and Brahma Temple',
      'Mehrangarh Fort, Jaswant Thada & old-city walk in Jodhpur',
      'Blue City sightseeing with local crafts & markets'
    ],
    itinerary: [
      { day: 1, title: 'Arrive Jaipur', description: 'Check-in and relaxed evening.', meals: MEALS, stayCity: 'Jaipur', nightStay: 'Jaipur' },
      { day: 2, title: 'Jaipur', description: 'Amber Fort, City Palace, Jantar Mantar, Hawa Mahal & shopping.', meals: MEALS, stayCity: 'Jaipur', nightStay: 'Jaipur' },
      { day: 3, title: 'Jaipur → Ranthambhore', description: 'Resort check-in; leisure / optional nature experience.', meals: MEALS, stayCity: 'Ranthambhore', nightStay: 'Ranthambhore' },
      { day: 4, title: 'Ranthambhore', description: 'Morning wildlife safari; evening at leisure.', meals: MEALS, stayCity: 'Ranthambhore', nightStay: 'Ranthambhore' },
      { day: 5, title: 'Ranthambhore → Pushkar', description: 'Scenic drive; Pushkar Lake and Brahma Temple.', meals: MEALS, stayCity: 'Pushkar', nightStay: 'Pushkar' },
      { day: 6, title: 'Pushkar → Jodhpur', description: 'Mehrangarh Fort, Jaswant Thada and old-city walk.', meals: MEALS, stayCity: 'Jodhpur', nightStay: 'Jodhpur' },
      { day: 7, title: 'Jodhpur', description: 'Blue City sightseeing, local crafts & markets.', meals: MEALS, stayCity: 'Jodhpur', nightStay: 'Jodhpur' },
      { day: 8, title: 'Departure', description: 'Departure from Jodhpur.', meals: MEALS, stayCity: 'Departure', nightStay: 'Departure' }
    ],
    inclusions: CUSTOMISATION_INCLUSIONS,
    exclusions: CUSTOMISATION_EXCLUSIONS,
    bestSeason: 'October to March',
    pickupDrop: 'Jaipur Pickup / Jodhpur Drop',
    hotels: HOTEL_TIERS
  },
  {
    id: 'pkg-03',
    slug: 'grand-rajasthan-circuit',
    title: 'Grand Rajasthan Circuit',
    tagline: 'Ideal for a complete Rajasthan holiday · Maximum variety',
    durationDays: 11,
    durationNights: 10,
    destinations: ['Jaipur', 'Ranthambhore', 'Pushkar', 'Jodhpur', 'Jaisalmer', 'Bikaner'],
    citiesCovered: ['Jaipur', 'Ranthambhore', 'Pushkar', 'Jodhpur', 'Jaisalmer', 'Bikaner'],
    route: 'Jaipur → Ranthambhore → Pushkar → Jodhpur → Jaisalmer → Bikaner',
    theme: 'Heritage & Forts',
    category: 'Heritage & Forts',
    featured: true,
    image: 'images/hero/rajasthan-hero-v1.webp',
    gallery: [
      'images/packages/jaipur-amber-fort.jpg',
      'images/packages/jaisalmer-golden-fort.jpg',
      'images/packages/rampuria-haveli-bikaner.webp'
    ],
    overview: 'The complete Rajasthan holiday with maximum variety: royal Jaipur, Ranthambhore safari, sacred Pushkar, the Blue City, the Golden City with desert camp, and heritage Bikaner — all in one grand 11-day circuit.',
    highlights: [
      'Jaipur heritage sightseeing — forts, palaces & markets',
      'Ranthambhore safari experience',
      'Temple town and lake at Pushkar',
      'Mehrangarh Fort & the Jodhpur Blue City',
      'Jaisalmer Golden Fort, havelis, Gadisar Lake & desert camp',
      'Junagarh Fort & local food experience in Bikaner'
    ],
    itinerary: [
      { day: 1, title: 'Days 1–2: Jaipur', description: 'Heritage sightseeing, forts, palaces & markets.', meals: MEALS, stayCity: 'Jaipur', nightStay: 'Jaipur' },
      { day: 3, title: 'Jaipur → Ranthambhore', description: 'Resort check-in; leisure.', meals: MEALS, stayCity: 'Ranthambhore', nightStay: 'Ranthambhore' },
      { day: 4, title: 'Ranthambhore', description: 'Safari experience; evening leisure.', meals: MEALS, stayCity: 'Ranthambhore', nightStay: 'Ranthambhore' },
      { day: 5, title: 'Ranthambhore → Pushkar', description: 'Temple town and lake.', meals: MEALS, stayCity: 'Pushkar', nightStay: 'Pushkar' },
      { day: 6, title: 'Pushkar → Jodhpur', description: 'Mehrangarh Fort and Blue City.', meals: MEALS, stayCity: 'Jodhpur', nightStay: 'Jodhpur' },
      { day: 7, title: 'Jodhpur → Jaisalmer', description: 'Arrival and evening at leisure.', meals: MEALS, stayCity: 'Jaisalmer', nightStay: 'Jaisalmer' },
      { day: 8, title: 'Jaisalmer', description: 'Golden Fort, havelis, Gadisar Lake & desert camp.', meals: MEALS, stayCity: 'Jaisalmer / Desert Camp', nightStay: 'Jaisalmer / Desert Camp' },
      { day: 9, title: 'Jaisalmer → Bikaner', description: 'Junagarh Fort and old city.', meals: MEALS, stayCity: 'Bikaner', nightStay: 'Bikaner' },
      { day: 10, title: 'Bikaner', description: 'Junagarh/heritage sightseeing and local food experience.', meals: MEALS, stayCity: 'Bikaner', nightStay: 'Bikaner' },
      { day: 11, title: 'Departure', description: 'Departure from Bikaner / onward transfer.', meals: MEALS, stayCity: 'Departure', nightStay: 'Departure' }
    ],
    inclusions: CUSTOMISATION_INCLUSIONS,
    exclusions: CUSTOMISATION_EXCLUSIONS,
    bestSeason: 'October to March',
    pickupDrop: 'Jaipur Pickup / Bikaner Drop',
    hotels: HOTEL_TIERS
  },
  {
    id: 'pkg-04',
    slug: 'palaces-lakes-desert',
    title: 'Palaces, Lakes & Desert',
    tagline: 'Ideal for couples · Luxury heritage + romantic landscapes',
    durationDays: 9,
    durationNights: 8,
    destinations: ['Jaipur', 'Udaipur', 'Jodhpur', 'Jaisalmer'],
    citiesCovered: ['Jaipur', 'Udaipur', 'Jodhpur', 'Jaisalmer'],
    route: 'Jaipur → Udaipur → Jodhpur → Jaisalmer',
    theme: 'Luxury & Leisure',
    category: 'Luxury & Leisure',
    featured: true,
    image: 'images/packages/udaipur-city-palace-960.webp',
    gallery: [
      'images/packages/udaipur-city-palace.jpg',
      'images/packages/jodhpur-blue-city.jpg',
      'images/packages/jaisalmer-golden-fort.jpg'
    ],
    overview: 'A romantic journey crafted for couples: royal Jaipur palaces, the lakes of Udaipur with a sunset boat ride, the Blue City lanes of Jodhpur, and the golden dunes of Jaisalmer with a cultural evening.',
    highlights: [
      'Amber Fort, City Palace & Hawa Mahal in Jaipur',
      'Lake Pichola sunset boat ride in Udaipur',
      'City Palace, Jagdish Temple, Saheliyon Ki Bari & old city',
      'En-route Ranakpur option & Mehrangarh Fort in the evening',
      'Jaisalmer fort, havelis & Sam dunes sunset / cultural evening'
    ],
    itinerary: [
      { day: 1, title: 'Days 1–2: Jaipur', description: 'Amber Fort, City Palace, Hawa Mahal & markets.', meals: MEALS, stayCity: 'Jaipur', nightStay: 'Jaipur' },
      { day: 3, title: 'Jaipur → Udaipur', description: 'Arrival; Lake Pichola sunset boat ride.', meals: MEALS, stayCity: 'Udaipur', nightStay: 'Udaipur' },
      { day: 4, title: 'Udaipur', description: 'City Palace, Jagdish Temple, Saheliyon Ki Bari & old city.', meals: MEALS, stayCity: 'Udaipur', nightStay: 'Udaipur' },
      { day: 5, title: 'Udaipur → Jodhpur', description: 'En-route Ranakpur option; Mehrangarh Fort in evening.', meals: MEALS, stayCity: 'Jodhpur', nightStay: 'Jodhpur' },
      { day: 6, title: 'Jodhpur', description: 'Blue City lanes, Jaswant Thada & Clock Tower Market.', meals: MEALS, stayCity: 'Jodhpur', nightStay: 'Jodhpur' },
      { day: 7, title: 'Jodhpur → Jaisalmer', description: 'Desert drive; evening leisure.', meals: MEALS, stayCity: 'Jaisalmer', nightStay: 'Jaisalmer' },
      { day: 8, title: 'Jaisalmer', description: 'Fort & havelis; Sam dunes sunset / cultural evening.', meals: MEALS, stayCity: 'Jaisalmer', nightStay: 'Jaisalmer' },
      { day: 9, title: 'Departure', description: 'Departure from Jaisalmer.', meals: MEALS, stayCity: 'Departure', nightStay: 'Departure' }
    ],
    inclusions: CUSTOMISATION_INCLUSIONS,
    exclusions: CUSTOMISATION_EXCLUSIONS,
    bestSeason: 'October to March',
    pickupDrop: 'Jaipur Pickup / Jaisalmer Drop',
    hotels: HOTEL_TIERS
  },
  {
    id: 'pkg-05',
    slug: 'luxury-rajasthan-escape',
    title: 'Luxury Rajasthan Escape',
    tagline: 'Ideal for premium travellers · Wildlife + Palaces + Desert',
    durationDays: 12,
    durationNights: 11,
    destinations: ['Jaipur', 'Udaipur', 'Jawai', 'Jodhpur', 'Jaisalmer', 'Bikaner'],
    citiesCovered: ['Jaipur', 'Udaipur', 'Jawai', 'Jodhpur', 'Jaisalmer', 'Bikaner'],
    route: 'Jaipur → Udaipur → Jawai → Jodhpur → Jaisalmer → Bikaner',
    theme: 'Luxury & Leisure',
    category: 'Luxury & Leisure',
    featured: true,
    image: 'images/packages/luxury-palace.webp',
    gallery: [
      'images/packages/udaipur-city-palace-960.webp',
      'images/activities/jawai-safari.webp',
      'images/packages/jaisalmer-golden-fort.jpg'
    ],
    overview: 'An indulgent escape for premium travellers combining wildlife, palaces and desert: luxury stays in Jaipur, lakeside Udaipur, the leopard country of Jawai, Jodhpur heritage, Jaisalmer desert camp, and Bikaner.',
    highlights: [
      'Luxury stay, forts, palace sightseeing & curated shopping in Jaipur',
      'Udaipur lakeside experiences, City Palace & boat ride',
      'Jawai leopard country — guided safari / nature experience',
      'Mehrangarh Fort, Jaswant Thada & old city in Jodhpur',
      'Jaisalmer Golden Fort, havelis & desert camp',
      'Junagarh Fort and heritage quarter in Bikaner'
    ],
    itinerary: [
      { day: 1, title: 'Days 1–2: Jaipur', description: 'Luxury stay, forts, palace sightseeing & curated shopping.', meals: MEALS, stayCity: 'Jaipur', nightStay: 'Jaipur' },
      { day: 3, title: 'Days 3–4: Jaipur → Udaipur', description: 'Lakeside experiences, City Palace & boat ride.', meals: MEALS, stayCity: 'Udaipur', nightStay: 'Udaipur' },
      { day: 5, title: 'Days 5–6: Udaipur → Jawai', description: 'Leopard country; guided safari/nature experience.', meals: MEALS, stayCity: 'Jawai', nightStay: 'Jawai' },
      { day: 7, title: 'Jawai → Jodhpur', description: 'Mehrangarh Fort, Jaswant Thada & old city.', meals: MEALS, stayCity: 'Jodhpur', nightStay: 'Jodhpur' },
      { day: 8, title: 'Days 8–9: Jodhpur → Jaisalmer', description: 'Golden Fort, havelis & desert camp.', meals: MEALS, stayCity: 'Jaisalmer', nightStay: 'Jaisalmer' },
      { day: 10, title: 'Jaisalmer', description: 'Full-day heritage + dunes experience.', meals: MEALS, stayCity: 'Jaisalmer', nightStay: 'Jaisalmer' },
      { day: 11, title: 'Jaisalmer → Bikaner', description: 'Junagarh Fort and heritage quarter.', meals: MEALS, stayCity: 'Bikaner', nightStay: 'Bikaner' },
      { day: 12, title: 'Departure', description: 'Departure from Bikaner / onward transfer.', meals: MEALS, stayCity: 'Departure', nightStay: 'Departure' }
    ],
    inclusions: CUSTOMISATION_INCLUSIONS,
    exclusions: CUSTOMISATION_EXCLUSIONS,
    bestSeason: 'October to March',
    pickupDrop: 'Jaipur Pickup / Bikaner Drop',
    hotels: HOTEL_TIERS
  },
  {
    id: 'pkg-06',
    slug: 'rajasthan-family-explorer',
    title: 'Rajasthan Family Explorer',
    tagline: 'Ideal for families & groups · Balanced pace + signature experiences',
    durationDays: 10,
    durationNights: 9,
    destinations: ['Jaipur', 'Ranthambhore', 'Udaipur', 'Jodhpur', 'Jaisalmer'],
    citiesCovered: ['Jaipur', 'Ranthambhore', 'Udaipur', 'Jodhpur', 'Jaisalmer'],
    route: 'Jaipur → Ranthambhore → Udaipur → Jodhpur → Jaisalmer',
    theme: 'Family & Groups',
    category: 'Family & Groups',
    featured: true,
    image: 'images/hero/golden-triangle-tour.webp',
    gallery: [
      'images/packages/jaipur-amber-fort.jpg',
      'images/packages/ranthambore-safari.jpg',
      'images/packages/udaipur-city-palace.jpg'
    ],
    overview: 'A balanced 10-day explorer designed for families and groups: signature forts and markets, a Ranthambhore safari, lakeside Udaipur, Mehrangarh in Jodhpur, and a desert camp finale in Jaisalmer.',
    highlights: [
      'Jaipur forts, palace sightseeing & family-friendly market time',
      'Morning safari in Ranthambhore',
      'Udaipur City Palace, lake boat ride and gardens',
      'Scenic drive & Mehrangarh Fort in Jodhpur',
      'Jaisalmer fort, havelis, Gadisar Lake & desert camp'
    ],
    itinerary: [
      { day: 1, title: 'Days 1–2: Jaipur', description: 'Forts, palace sightseeing and family-friendly market time.', meals: MEALS, stayCity: 'Jaipur', nightStay: 'Jaipur' },
      { day: 3, title: 'Jaipur → Ranthambhore', description: 'Resort stay and leisure.', meals: MEALS, stayCity: 'Ranthambhore', nightStay: 'Ranthambhore' },
      { day: 4, title: 'Ranthambhore', description: 'Morning safari; evening leisure.', meals: MEALS, stayCity: 'Ranthambhore', nightStay: 'Ranthambhore' },
      { day: 5, title: 'Ranthambhore → Udaipur', description: 'Arrival and lakeside evening.', meals: MEALS, stayCity: 'Udaipur', nightStay: 'Udaipur' },
      { day: 6, title: 'Udaipur', description: 'City Palace, lake boat ride and gardens.', meals: MEALS, stayCity: 'Udaipur', nightStay: 'Udaipur' },
      { day: 7, title: 'Udaipur → Jodhpur', description: 'Scenic drive; Mehrangarh Fort.', meals: MEALS, stayCity: 'Jodhpur', nightStay: 'Jodhpur' },
      { day: 8, title: 'Jodhpur → Jaisalmer', description: 'Arrival and local exploration.', meals: MEALS, stayCity: 'Jaisalmer', nightStay: 'Jaisalmer' },
      { day: 9, title: 'Jaisalmer', description: 'Fort, havelis, Gadisar Lake & desert camp.', meals: MEALS, stayCity: 'Jaisalmer', nightStay: 'Jaisalmer' },
      { day: 10, title: 'Departure', description: 'Departure from Jaisalmer.', meals: MEALS, stayCity: 'Departure', nightStay: 'Departure' }
    ],
    inclusions: CUSTOMISATION_INCLUSIONS,
    exclusions: CUSTOMISATION_EXCLUSIONS,
    bestSeason: 'October to March',
    pickupDrop: 'Jaipur Pickup / Jaisalmer Drop',
    hotels: HOTEL_TIERS
  },
  {
    id: 'pkg-07',
    slug: 'desert-wildlife-special',
    title: 'Desert & Wildlife Special',
    tagline: 'Ideal for adventure seekers · Safari + Desert + Heritage',
    durationDays: 9,
    durationNights: 8,
    destinations: ['Ranthambhore', 'Jaipur', 'Bikaner', 'Jaisalmer', 'Jodhpur'],
    citiesCovered: ['Ranthambhore', 'Jaipur', 'Bikaner', 'Jaisalmer', 'Jodhpur'],
    route: 'Ranthambhore → Jaipur → Bikaner → Jaisalmer → Jodhpur',
    theme: 'Desert & Safari',
    category: 'Desert & Safari',
    featured: true,
    image: 'images/packages/desert-tour-rajasthan.webp',
    gallery: [
      'images/packages/ranthambore-safari-960.webp',
      'images/packages/jaisalmer-golden-fort.jpg',
      'images/packages/jodhpur-blue-city.jpg'
    ],
    overview: 'For adventure seekers: start with tiger safaris in Ranthambhore, then dive deep into the desert — Junagarh Fort in Bikaner, the Golden City of Jaisalmer, a Sam dunes desert camp night, and the Blue City of Jodhpur.',
    highlights: [
      'Morning safari in Ranthambhore (optional evening safari subject to availability)',
      'Junagarh Fort and old-city experience in Bikaner',
      'Scenic desert drive from Bikaner to Jaisalmer',
      'Jaisalmer Golden Fort, Patwon Ki Haveli & Gadisar Lake',
      'Sam dunes sunset, folk culture & desert camp experience',
      'Mehrangarh Fort and Blue City in Jodhpur'
    ],
    itinerary: [
      { day: 1, title: 'Arrive Ranthambhore', description: 'Resort check-in and leisure.', meals: MEALS, stayCity: 'Ranthambhore', nightStay: 'Ranthambhore' },
      { day: 2, title: 'Ranthambhore', description: 'Morning safari; optional evening safari subject to availability.', meals: MEALS, stayCity: 'Ranthambhore', nightStay: 'Ranthambhore' },
      { day: 3, title: 'Ranthambhore → Jaipur', description: 'Evening sightseeing / market.', meals: MEALS, stayCity: 'Jaipur', nightStay: 'Jaipur' },
      { day: 4, title: 'Jaipur → Bikaner', description: 'Junagarh Fort and old-city experience.', meals: MEALS, stayCity: 'Bikaner', nightStay: 'Bikaner' },
      { day: 5, title: 'Bikaner → Jaisalmer', description: 'Scenic desert drive; evening leisure.', meals: MEALS, stayCity: 'Jaisalmer', nightStay: 'Jaisalmer' },
      { day: 6, title: 'Jaisalmer', description: 'Golden Fort, Patwon Ki Haveli & Gadisar Lake.', meals: MEALS, stayCity: 'Jaisalmer', nightStay: 'Jaisalmer' },
      { day: 7, title: 'Sam dunes', description: 'Sunset, folk culture & desert camp experience.', meals: MEALS, stayCity: 'Sam Dunes', nightStay: 'Sam Dunes' },
      { day: 8, title: 'Jaisalmer → Jodhpur', description: 'Mehrangarh Fort and Blue City.', meals: MEALS, stayCity: 'Jodhpur', nightStay: 'Jodhpur' },
      { day: 9, title: 'Departure', description: 'Departure from Jodhpur.', meals: MEALS, stayCity: 'Departure', nightStay: 'Departure' }
    ],
    inclusions: CUSTOMISATION_INCLUSIONS,
    exclusions: CUSTOMISATION_EXCLUSIONS,
    bestSeason: 'October to March',
    pickupDrop: 'Ranthambhore Pickup / Jodhpur Drop',
    hotels: HOTEL_TIERS
  },
  {
    id: 'pkg-08',
    slug: 'ultimate-rajasthan-experience',
    title: 'Ultimate Rajasthan Experience',
    tagline: 'Ideal for international & long-stay travellers · The complete Rajasthan story',
    durationDays: 14,
    durationNights: 13,
    destinations: ['Jaipur', 'Ranthambhore', 'Pushkar', 'Udaipur', 'Jawai', 'Jodhpur', 'Jaisalmer', 'Bikaner'],
    citiesCovered: ['Jaipur', 'Ranthambhore', 'Pushkar', 'Udaipur', 'Jawai', 'Jodhpur', 'Jaisalmer', 'Bikaner'],
    route: 'Jaipur → Ranthambhore → Pushkar → Udaipur → Jawai → Jodhpur → Jaisalmer → Bikaner',
    theme: 'Heritage & Forts',
    category: 'Heritage & Forts',
    featured: true,
    image: 'images/hero/rajasthan-banner-wide.webp',
    gallery: [
      'images/hero/rajasthan-hero-v1.webp',
      'images/activities/jawai-safari.webp',
      'images/packages/jaisalmer-golden-fort.jpg'
    ],
    overview: 'The complete Rajasthan story for international and long-stay travellers: forts and bazaars of Jaipur, tigers in Ranthambhore, holy Pushkar, lakeside Udaipur, Jawai leopards, the Blue and Golden cities, dunes of Jaisalmer and heritage Bikaner.',
    highlights: [
      'Jaipur forts, palaces, bazaars & cultural evening',
      'Ranthambhore wildlife safari & nature experience',
      'Pushkar lake & temple, Udaipur lakes & sunset boat ride',
      'Jawai leopard country and guided safari',
      'Mehrangarh Fort and Jodhpur Blue City',
      'Jaisalmer fort, havelis, dunes, sunset & folk cultural programme',
      'Junagarh Fort and heritage sightseeing in Bikaner'
    ],
    itinerary: [
      { day: 1, title: 'Days 1–2: Jaipur', description: 'Forts, palaces, bazaars & cultural evening.', meals: MEALS, stayCity: 'Jaipur', nightStay: 'Jaipur' },
      { day: 3, title: 'Jaipur → Ranthambhore', description: 'Resort stay.', meals: MEALS, stayCity: 'Ranthambhore', nightStay: 'Ranthambhore' },
      { day: 4, title: 'Ranthambhore', description: 'Wildlife safari & nature experience.', meals: MEALS, stayCity: 'Ranthambhore', nightStay: 'Ranthambhore' },
      { day: 5, title: 'Ranthambhore → Pushkar', description: 'Lake, temple and evening stroll.', meals: MEALS, stayCity: 'Pushkar', nightStay: 'Pushkar' },
      { day: 6, title: 'Days 6–7: Pushkar → Udaipur', description: 'City Palace, lakes & sunset boat ride.', meals: MEALS, stayCity: 'Udaipur', nightStay: 'Udaipur' },
      { day: 8, title: 'Udaipur → Jawai', description: 'Leopard country and guided safari.', meals: MEALS, stayCity: 'Jawai', nightStay: 'Jawai' },
      { day: 9, title: 'Jawai → Jodhpur', description: 'Mehrangarh Fort and Blue City.', meals: MEALS, stayCity: 'Jodhpur', nightStay: 'Jodhpur' },
      { day: 10, title: 'Days 10–11: Jodhpur → Jaisalmer', description: 'Fort, havelis & desert camp.', meals: MEALS, stayCity: 'Jaisalmer', nightStay: 'Jaisalmer' },
      { day: 12, title: 'Jaisalmer', description: 'Dunes, sunset & folk cultural programme.', meals: MEALS, stayCity: 'Jaisalmer', nightStay: 'Jaisalmer' },
      { day: 13, title: 'Jaisalmer → Bikaner', description: 'Junagarh Fort and heritage sightseeing.', meals: MEALS, stayCity: 'Bikaner', nightStay: 'Bikaner' },
      { day: 14, title: 'Departure', description: 'Departure from Bikaner / onward transfer.', meals: MEALS, stayCity: 'Departure', nightStay: 'Departure' }
    ],
    inclusions: CUSTOMISATION_INCLUSIONS,
    exclusions: CUSTOMISATION_EXCLUSIONS,
    bestSeason: 'October to March',
    pickupDrop: 'Jaipur Pickup / Bikaner Drop',
    hotels: HOTEL_TIERS
  }
];
