export interface SeoLandingConfig {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  targetDuration: string;
  startingPrice?: number;
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
    metaDescription: 'Book 7 Days Rajasthan Tour Packages with Organise My Trip. Private AC car, verified hotels, Amber Fort, Mehrangarh & Lake Pichola. Customise your 7-day trip.',
    h1: 'Best 7-Day Rajasthan Tour Packages (2026)',
    subtitle: 'Handcrafted week-long itineraries across Jaipur, Jodhpur & Jaisalmer with dedicated chauffeur and local concierge.',
    targetDuration: '7 Days / 6 Nights',
    highlightPoints: [
      'Comprehensive coverage of the royal circuit: Jaipur, Pushkar, Jodhpur & Jaisalmer',
      'Dedicated AC Sedan / SUV with experienced chauffeur',
      'Breakfast or MAP meal plans included',
      'Pushkar Lake walk, Mehrangarh Fort and Sam dunes experience',
      '100% tailor-made flexibility with transparent pricing'
    ],
    recommendedPackageSlugs: ['royal-rajasthan-highlights', 'royal-triangle-wildlife', 'desert-wildlife-special'],
    faqs: [
      { question: 'Is 7 days enough to see Rajasthan?', answer: 'Yes! A 7-day circuit covering Jaipur, Jodhpur, and Udaipur gives you an exceptional introduction to the forts, desert culture, and romantic lakes without rushing.' },
      { question: 'What is the starting price for a 7-day tour?', answer: 'Rates are date-dependent. Final quotations are prepared after confirming travel dates, pax, rooming and hotel category — covering your chosen 3*/4*/5* hotels, meal plan, private cab, safari permits and transfers.' },
      { question: 'Can we customize the route or add Ranthambore?', answer: 'Absolutely. Every Organise My Trip circuit can be customised by hotel category, vehicle, meal plan, safari availability and travel dates.' }
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
    highlightPoints: [
      'Desert camp experience in Sam Sand Dunes Jaisalmer',
      'Safari, sand dunes, and starlit folk culture evening',
      'Explore Junagarh Fort, Jaisalmer Living Fort & Mehrangarh',
      'Lake Pichola private cruise in Udaipur',
      'Comfortable AC Innova Crysta or Sedan throughout'
    ],
    recommendedPackageSlugs: ['rajasthan-family-explorer', 'grand-rajasthan-circuit', 'palaces-lakes-desert'],
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
    metaDescription: 'Doorstep pickup from Delhi Airport / NCR in private AC cab. Explore Jaipur, Ranthambhore, Pushkar, Jodhpur and Jaisalmer with reliable local drivers.',
    h1: 'Rajasthan Tour Packages from Delhi (With Private Cab)',
    subtitle: 'Seamless doorstep pickup from Delhi IGI Airport, Gurgaon or Noida with dedicated highway chauffeurs.',
    targetDuration: '7 to 14 Days Options',
    highlightPoints: [
      'Doorstep pickup from Delhi Airport (T1, T2, T3) or NCR residence',
      'Travel via newly opened Delhi-Mumbai Expressway NE-4 in just 3.5 hrs to Jaipur',
      'Option to combine Ranthambhore Tiger Reserve & Jaisalmer desert camp',
      'Verified commercial tourist permit vehicles with FASTag'
    ],
    recommendedPackageSlugs: ['royal-rajasthan-highlights', 'royal-triangle-wildlife', 'grand-rajasthan-circuit'],
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
    metaDescription: 'Experience royalty with premium palace stays and private luxury transport. Jawai leopard safaris, royal dining, and personal tour concierge.',
    h1: 'Luxury Rajasthan Palace Holidays & Royal Tours',
    subtitle: 'Stay in premium heritage properties with bespoke dining, private boat charters, and executive chauffeurs.',
    targetDuration: '9 to 14 Days',
    highlightPoints: [
      'Premium palace and heritage property stays',
      'Toyota Innova Crysta / Fortuner luxury fleet with senior chauffeurs',
      'Private sunset cruise on Lake Pichola',
      'Jawai leopard country guided safari experience'
    ],
    recommendedPackageSlugs: ['luxury-rajasthan-escape', 'palaces-lakes-desert', 'ultimate-rajasthan-experience'],
    faqs: [
      { question: 'Can we select specific palace properties like Taj Lake Palace or Rambagh?', answer: 'Yes, our luxury concierge books verified heritage suites across all Taj, Oberoi, and historic royal properties with special amenities.' }
    ],
    overviewHtml: 'Rajasthan is the world capital of palace hotels. Walk in the footsteps of kings, dine in courtyards lit by hundreds of oil lamps, and enjoy bespoke service crafted by local destination experts.'
  },
  {
    slug: 'rajasthan-honeymoon-packages',
    title: 'Romantic Rajasthan Honeymoon Packages',
    metaTitle: 'Rajasthan Honeymoon Packages 2026 | Romantic Escapes | Organise My Trip',
    metaDescription: 'Private Lake Pichola cruises, romantic palace stays, and desert camp evenings. Romantic Rajasthan honeymoon packages customized for newly-weds.',
    h1: 'Romantic Rajasthan Honeymoon Tour Packages',
    subtitle: 'Create lifelong memories with private lake cruises, palace stays, and starlit desert evenings.',
    targetDuration: '7 to 12 Days',
    highlightPoints: [
      'Private sunset boat cruise on Lake Pichola with complimentary treats',
      'Palace and heritage stays overlooking illuminated lakes',
      'Sam dunes sunset and cultural evening in Jaisalmer',
      'Special floral room decorations and honeymoon cake on request'
    ],
    recommendedPackageSlugs: ['palaces-lakes-desert', 'luxury-rajasthan-escape', 'royal-rajasthan-highlights'],
    faqs: [
      { question: 'Which cities are best for a Rajasthan honeymoon?', answer: 'Udaipur (City of Lakes) and Mount Abu (Hill Station) are the top picks, often combined with a night under the stars in Jaisalmer or Jaipur royal palaces.' }
    ],
    overviewHtml: 'With its fairy-tale marble palaces reflecting in calm lake waters, Rajasthan has been voted among the top romantic honeymoon destinations globally. Let us handle every romantic detail.'
  }
];
