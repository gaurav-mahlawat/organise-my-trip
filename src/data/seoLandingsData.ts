export interface SeoLandingConfig {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  targetDuration: string;
  startingPrice: number;
  highlightPoints: string[];
  recommendedPackageSlugs: string[];
  faqs: { question: string; answer: string }[];
  overviewHtml: string;
}

export const SEO_LANDINGS: SeoLandingConfig[] = [
  {
    slug: '7-days-rajasthan-tour-packages',
    title: '7 Days Rajasthan Tour Packages',
    metaTitle: '7 Days Rajasthan Tour Packages 2026 | Organise My Trip',
    metaDescription: 'Book 7 Days Rajasthan Tour Packages with Organise My Trip. Private AC car, verified hotels, Amer Fort, Mehrangarh & Lake Pichola. Customise your 7-day trip.',
    h1: 'Best 7-Day Rajasthan Tour Packages (2026)',
    subtitle: 'Handcrafted week-long itineraries across Jaipur, Jodhpur & Udaipur with dedicated chauffeur and local concierge.',
    targetDuration: '7 Days / 6 Nights',
    startingPrice: 21999,
    highlightPoints: [
      'Comprehensive coverage of the royal golden triangle: Jaipur, Jodhpur & Udaipur',
      'Dedicated AC Sedan / SUV with English-speaking chauffeur',
      'Daily breakfast and traditional dinners included',
      'Lake Pichola sunset boat ride and Mehrangarh fort walk',
      '100% tailor-made flexibility with zero hidden charges'
    ],
    recommendedPackageSlugs: ['classic-rajasthan-7-days', 'rajasthan-culinary-and-food-trail', 'rajasthan-wildlife-and-bird-watching-safari'],
    faqs: [
      { question: 'Is 7 days enough to see Rajasthan?', answer: 'Yes! A 7-day circuit covering Jaipur, Jodhpur, and Udaipur gives you an exceptional introduction to the forts, desert culture, and romantic lakes without rushing.' },
      { question: 'What is the starting price for a 7-day tour?', answer: 'Our private 7-day tours start from INR 21,999 per person on twin-sharing basis including hotels, daily breakfast/dinner, private cab, and toll taxes.' },
      { question: 'Can we customize the route or add Ranthambore?', answer: 'Absolutely. We are local Rajasthan specialists since 2011. Every itinerary can be customized to add an extra night, swap hotels, or include tiger safaris.' }
    ],
    overviewHtml: 'A week in Rajasthan offers the ideal blend of majestic architecture, royal cuisine, and colourful bazaars. Our 7-day itineraries are designed with optimized driving times so you spend more time exploring palaces and less time on the road.'
  },
  {
    slug: '10-days-rajasthan-tour-packages',
    title: '10 Days Rajasthan Tour Packages',
    metaTitle: '10 Days Rajasthan Tour Packages | Desert & Royal Palaces | Organise My Trip',
    metaDescription: 'Explore Jaipur, Bikaner, Jaisalmer Desert, Jodhpur & Udaipur on a 10-day Rajasthan tour with luxury desert camp and private car.',
    h1: '10 Days Rajasthan Grand Tour Packages',
    subtitle: 'From the pink palaces of Jaipur to Thar desert sand dunes and lakeside palaces of Udaipur.',
    targetDuration: '10 Days / 9 Nights',
    startingPrice: 32999,
    highlightPoints: [
      'Stay in authentic Swiss tent camp in Sam Sand Dunes Jaisalmer',
      'Sunset camel safari, 4x4 dune bashing, and starlit folk dance gala',
      'Explore Junagarh Fort, Jaisalmer Living Fort & Mehrangarh',
      'Lake Pichola private cruise in Udaipur',
      'Comfortable AC Innova Crysta or Sedan throughout'
    ],
    recommendedPackageSlugs: ['royal-rajasthan-10-days', 'rajasthan-photography-and-art-tour', 'bikaner-jaisalmer-jodhpur-udaipur-desert-lakes'],
    faqs: [
      { question: 'What cities are covered in a 10-day Rajasthan tour?', answer: 'Our most popular 10-day route covers Jaipur, Bikaner, Jaisalmer (with Sam Desert Camp), Jodhpur, and Udaipur.' },
      { question: 'Is desert camping included in 10-day packages?', answer: 'Yes, 1 night in a luxury Swiss tent with attached bathroom, camel ride, campfire, and cultural program is included.' }
    ],
    overviewHtml: '10 days allows you to venture deep into the Thar Desert while keeping a relaxed travel pace. Sleep under the desert stars, walk through golden sandstone forts, and cruise romantic lakes.'
  },
  {
    slug: 'rajasthan-tour-packages-from-delhi',
    title: 'Rajasthan Tour Packages from Delhi',
    metaTitle: 'Rajasthan Tour Packages from Delhi by Car | Organise My Trip',
    metaDescription: 'Doorstep pickup from Delhi Airport / NCR in private AC cab. Explore Jaipur, Agra Taj Mahal, Ranthambore, and Udaipur with reliable local drivers.',
    h1: 'Rajasthan Tour Packages from Delhi (With Private Cab)',
    subtitle: 'Seamless doorstep pickup from Delhi IGI Airport, Gurgaon or Noida with dedicated highway chauffeurs.',
    targetDuration: '3 to 14 Days Options',
    startingPrice: 18999,
    highlightPoints: [
      'Doorstep pickup from Delhi Airport (T1, T2, T3) or NCR residence',
      'Travel via newly opened Delhi-Mumbai Expressway NE-4 in just 3.5 hrs to Jaipur',
      'Option to combine Agra Taj Mahal & Ranthambore Tiger Reserve',
      'Verified commercial tourist permit vehicles with FASTag'
    ],
    recommendedPackageSlugs: ['golden-triangle-classic-delhi-agra-jaipur', 'golden-triangle-with-ranthambore-wildlife', 'delhi-to-jaipur-agra-3-day-express'],
    faqs: [
      { question: 'Can the driver pick us up directly from Delhi Airport late at night?', answer: 'Yes! Our drivers track your incoming flight and receive you with a personalized name-board at the arrival terminal.' },
      { question: 'Are expressway tolls and state taxes included in the quote?', answer: 'Yes, all our quotes are 100% all-inclusive of interstate road taxes, toll fees, driver allowances, and fuel.' }
    ],
    overviewHtml: 'Delhi is the ideal gateway for exploring Rajasthan. With the world-class Delhi-Mumbai Expressway, you can reach Jaipur in just 3.5 hours, making both weekend breaks and extended road trips effortless.'
  },
  {
    slug: 'luxury-rajasthan-tour-packages',
    title: 'Luxury Rajasthan Tour Packages',
    metaTitle: 'Luxury Rajasthan Tour Packages | 5-Star Palace Stays | Organise My Trip',
    metaDescription: 'Experience royalty with stays at Taj Lake Palace, Rambagh Palace, and Umaid Bhawan. Private luxury transport, royal dining, and personal tour concierge.',
    h1: 'Luxury Rajasthan Palace Holidays & Royal Tours',
    subtitle: 'Stay in authentic maharaja palaces with bespoke dining, private boat charters, and executive chauffeurs.',
    targetDuration: '8 to 14 Days',
    startingPrice: 65000,
    highlightPoints: [
      'Stays at legendary Taj, Oberoi, and heritage palace properties',
      'Toyota Innova Crysta / Fortuner / Mercedes luxury fleet with senior chauffeurs',
      'Private sunset solar yacht cruise on Lake Pichola',
      'Exclusive curator-led access to royal museum galleries'
    ],
    recommendedPackageSlugs: ['luxury-rajasthan-palace-train-and-heritage-stays', 'grand-rajasthan-14-days-expedition', 'romantic-udaipur-mount-abu-honeymoon'],
    faqs: [
      { question: 'Can we select specific palace properties like Taj Lake Palace or Rambagh?', answer: 'Yes, our luxury concierge books verified heritage suites across all Taj, Oberoi, and historic royal properties with special amenities.' }
    ],
    overviewHtml: 'Rajasthan is the world capital of palace hotels. Walk in the footsteps of kings, dine in courtyards lit by hundreds of oil lamps, and enjoy bespoke service crafted by local destination experts.'
  },
  {
    slug: 'rajasthan-honeymoon-packages',
    title: 'Romantic Rajasthan Honeymoon Packages',
    metaTitle: 'Rajasthan Honeymoon Packages 2026 | Romantic Escapes | Organise My Trip',
    metaDescription: 'Intimate candlelight dinners, Lake Pichola private cruises, and luxury desert glamping. Romantic Rajasthan honeymoon packages customized for newly-weds.',
    h1: 'Romantic Rajasthan Honeymoon Tour Packages',
    subtitle: 'Create lifelong memories with private lake cruises, mountain retreats, and starlit desert luxury.',
    targetDuration: '5 to 9 Days',
    startingPrice: 17999,
    highlightPoints: [
      'Private sunset boat cruise on Lake Pichola with complimentary treats',
      'Candlelight lakeside dinners overlooking illuminated palaces',
      'Cool mountain escape in Mount Abu and Aravalli scenic drives',
      'Special floral room decorations and honeymoon cake'
    ],
    recommendedPackageSlugs: ['romantic-udaipur-mount-abu-honeymoon', 'udaipur-city-of-lakes-4-day-retreat', 'classic-rajasthan-7-days'],
    faqs: [
      { question: 'Which cities are best for a Rajasthan honeymoon?', answer: 'Udaipur (City of Lakes) and Mount Abu (Hill Station) are the top picks, often combined with a night under the stars in Jaisalmer or Jaipur royal palaces.' }
    ],
    overviewHtml: 'With its fairy-tale marble palaces reflecting in calm lake waters, Rajasthan has been voted among the top romantic honeymoon destinations globally. Let us handle every romantic detail.'
  }
];
