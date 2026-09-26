import { ActivityExperience } from '../types';

export const ACTIVITIES: ActivityExperience[] = [
  {
    id: 'act-1',
    slug: 'sam-desert-camel-sunset-safari',
    title: 'Thar Desert Sunset Camel Safari & Swiss Camp Gala',
    category: 'Desert Adventure',
    location: 'Sam Sand Dunes, Jaisalmer',
    duration: '6 Hours (or Overnight)',
    pricePerPerson: 1800,
    image: 'images/packages/camel-safari.webp',
    description: 'Ride across shifting golden sand dunes on an authentic camel trek at sunset. Followed by a lively campfire gala in a desert camp featuring Kalbelia folk dances, fire eaters, and an elaborate Rajasthani dinner under the desert stars.',
    highlights: [
      '2-hour camel ride through untouched Thar sand dunes',
      'Spectacular sunset photography opportunities',
      'Traditional Tilak & Dhol musical welcome at camp',
      'Live Kalbelia folk dance, Ghoomar and Chari fire dance',
      'Lavish buffet dinner with local delicacies'
    ],
    includes: ['Camel ride with handler', 'Evening snacks & tea', 'Live cultural show entry', 'Buffet dinner', 'Camp amenities'],
    idealFor: 'Couples, families, photography enthusiasts',
    timing: '4:00 PM to 10:00 PM (or overnight till 9:00 AM next day)'
  },
  {
    id: 'act-2',
    slug: 'jaipur-hot-air-balloon-sunrise-flight',
    title: 'Sunrise Hot Air Balloon Flight over Amer Fort Palaces',
    category: 'Royal Luxury',
    location: 'Amer & Kukas, Jaipur',
    duration: '3 Hours (Flight 60 Mins)',
    pricePerPerson: 12500,
    image: 'images/blog/hot-air-balloon.webp',
    description: 'Float gracefully into the pink morning skies of Jaipur in a commercial hot air balloon. Drift silently over medieval mountain fortresses, rustic desert villages, and the jagged crests of the Aravalli mountains.',
    highlights: [
      '60-minute scenic flight with DGCA-certified international pilot',
      'Unmatched aerial photography of Amer and Jaigarh forts',
      'First flight commemorative certificate signed by pilot',
      'Light refreshments and tea/coffee before launch',
      'Complimentary two-way hotel transfers in Jaipur'
    ],
    includes: ['Pre-flight safety briefing', '1 Hour balloon flight', 'Flight certificate', 'Hotel pickup & drop', 'Passenger insurance'],
    idealFor: 'Honeymooners, luxury seekers, once-in-a-lifetime adventurers',
    timing: '5:30 AM to 8:30 AM (October to April only)'
  },
  {
    id: 'act-3',
    slug: 'ranthambore-open-jeep-tiger-safari',
    title: 'Ranthambore 4x4 Jeep Safari with Wildlife Naturalist',
    category: 'Wildlife & Safari',
    location: 'Ranthambore Tiger Reserve, Sawai Madhopur',
    duration: '3.5 Hours',
    pricePerPerson: 3200,
    image: 'images/activities/jeep-safari.webp',
    description: 'Venture deep into the legendary dry deciduous forests of Ranthambore in an open 6-seater 4WD Maruti Gypsy accompanied by an expert forest tracker to track tigers, leopards, and sloth bears.',
    highlights: [
      'Access to prime core wildlife safari zones (Zones 1-5 or 6-10)',
      'High probability tiger spotting along lakes and waterholes',
      'Knowledgeable government-certified wildlife naturalist',
      'Panoramic view of ancient 10th-century Ranthambore Fort ruins'
    ],
    includes: ['All forest entry permits & eco-development fees', '4x4 Open Gypsy vehicle', 'Authorized naturalist guide fees', 'Hotel pickup and drop in Sawai Madhopur'],
    idealFor: 'Wildlife lovers, photographers, nature explorers',
    timing: 'Morning 6:30 AM - 10:00 AM or Afternoon 2:30 PM - 6:00 PM'
  },
  {
    id: 'act-4',
    slug: 'lake-pichola-private-sunset-boat-cruise',
    title: 'Private Sunset Heritage Boat Cruise on Lake Pichola',
    category: 'Royal Luxury',
    location: 'Lake Pichola, Udaipur',
    duration: '1 Hour',
    pricePerPerson: 1500,
    image: 'images/packages/udaipur-city-palace-640.webp',
    description: 'Glide across the tranquil waters of Lake Pichola as the evening sun bathes the marble City Palace and island palaces in molten gold. Stop at historic Jag Mandir island palace for tea.',
    highlights: [
      'Private chartered royal-style motor boat',
      'Close-up views of Taj Lake Palace and City Palace facade',
      '30-minute stopover on Jag Mandir Island palace',
      'Unrivaled romantic golden hour photo moments'
    ],
    includes: ['Private boat charter', 'Life jackets & safety gear', 'Jag Mandir island entry', 'Bottled mineral water'],
    idealFor: 'Couples, families, relaxing evening explorers',
    timing: '5:00 PM to 6:30 PM'
  },
  {
    id: 'act-5',
    slug: 'bishnoi-village-open-jeep-rural-safari',
    title: 'Bishnoi Village Safari & Eco-Heritage Rural Tour',
    category: 'Culinary & Village',
    location: 'Rohet & Salawas, Jodhpur',
    duration: '4 Hours',
    pricePerPerson: 1400,
    image: 'images/activities/rural-stay.webp',
    description: 'Discover the world’s first eco-warriors. Meet the Bishnoi community who have sacrificed their lives for centuries protecting trees and blackbucks. Visit potters, durry weavers, and experience the traditional opium welcome ceremony (Amal Sabha).',
    highlights: [
      'Spot wild Blackbuck antelopes, desert foxes, and peacocks',
      'Visit master weavers in Salawas weaving famous durries',
      'Try your hands on the traditional potter’s wheel in Guda',
      'Witness customary Amal Sabha hospitality ritual'
    ],
    includes: ['Open 4x4 Jeep with driver', 'Local community guide', 'Visit to 3 artisan villages', 'Mineral water and tea'],
    idealFor: 'Cultural travelers, students, sustainable tourism lovers',
    timing: '9:00 AM - 1:00 PM or 2:30 PM - 6:30 PM'
  },
  {
    id: 'act-6',
    slug: 'jaipur-royal-culinary-masterclass',
    title: 'Authentic Rajasthani Cooking Masterclass & Market Walk',
    category: 'Culinary & Village',
    location: 'C-Scheme & Old City, Jaipur',
    duration: '4 Hours',
    pricePerPerson: 2200,
    image: 'images/activities/activity-1.webp',
    description: 'Begin with a guided spice and vegetable walk through local bazaars, then join a traditional family home kitchen to cook authentic Dal Baati Churma, Ker Sangri, Gatte ki Sabzi, and Masala Chai from scratch.',
    highlights: [
      'Guided spice tasting in Johari Bazaar',
      'Hands-on preparation of 4 signature royal dishes',
      'Secret family spice blend recipes to take home',
      'Sit-down family feast with the host'
    ],
    includes: ['Market walking tour', 'All ingredients and cooking materials', '4-course sit-down meal', 'Printed recipe booklet'],
    idealFor: 'Foodies, amateur chefs, culture lovers',
    timing: '10:30 AM - 2:30 PM or 5:00 PM - 9:00 PM'
  },
  {
    id: 'act-7',
    slug: 'jodhpur-blue-city-heritage-walking-tour',
    title: 'Jodhpur Blue City Alleys & Stepwell Walking Tour',
    category: 'Cultural Heritage',
    location: 'Navchokiya & Brahmapuri, Jodhpur',
    duration: '2.5 Hours',
    pricePerPerson: 850,
    image: 'images/packages/jodhpur-blue-city.jpg',
    description: 'Wander through the maze of cobalt-blue streets beneath Mehrangarh Fort. Learn why the houses were painted blue, discover hidden community stepwells, and sample the best Makhaniya Lassi in Rajasthan.',
    highlights: [
      'Walk through the oldest residential quarters of Navchokiya',
      'Photograph vibrant blue facades and carved wooden doorways',
      'Visit 18th-century Toorji Ka Jhalra stepwell',
      'Sip world-famous Mishrilal Makhaniya Lassi at Clock Tower'
    ],
    includes: ['Experienced local historian guide', 'Lassi & street snack tasting', 'Heritage map of Jodhpur'],
    idealFor: 'Walkers, street photographers, solo travelers',
    timing: '8:00 AM - 10:30 AM or 4:30 PM - 7:00 PM'
  },
  {
    id: 'act-8',
    slug: 'jaisalmer-4x4-dune-bashing-and-quad-biking',
    title: 'Extreme 4x4 Dune Bashing & ATV Quad Biking in Thar',
    category: 'Desert Adventure',
    location: 'Sam Sand Dunes, Jaisalmer',
    duration: '1.5 Hours',
    pricePerPerson: 2500,
    image: 'images/activities/jaisalmer-quad-biking.webp',
    description: 'Get your adrenaline pumping as a modified 4x4 rally vehicle powers over razor-sharp desert crests. Take the handlebars of a powerful 500cc ATV quad bike to navigate the golden desert wilderness.',
    highlights: [
      '30-minute heart-pumping roller-coaster 4x4 dune bashing',
      '20-minute solo Quad ATV driving on designated dunes',
      'Professional desert rally drivers and safety instructors',
      'High-energy action videos and photos'
    ],
    includes: ['Rally vehicle & driver', 'ATV rental & fuel', 'Safety helmets and briefing', 'Bottled water'],
    idealFor: 'Adventure seekers, youth, thrill enthusiasts',
    timing: 'Sunrise 6:00 AM - 8:00 AM or Sunset 4:30 PM - 6:30 PM'
  },
  {
    id: 'act-9',
    slug: 'bagore-ki-haveli-dharohar-folk-dance-night',
    title: 'Dharohar Folk Dance & Puppet Performance at Bagore Ki Haveli',
    category: 'Cultural Heritage',
    location: 'Gangaur Ghat, Udaipur',
    duration: '1.5 Hours',
    pricePerPerson: 650,
    image: 'images/activities/udaipur-tour.webp',
    description: 'Set in the open-air courtyard of the 18th-century Neem Chowk mansion right on the water edge of Lake Pichola. Watch skilled folk performers balance up to 11 earthen pots on their heads while dancing on broken glass.',
    highlights: [
      'Famous Chari dance with burning brass lamps',
      'Intricate traditional Rajasthani Kathputli string puppetry',
      'Bhavai dance feat with 11 pots balanced on performer head',
      'Reserved seating in prime courtyard section'
    ],
    includes: ['Priority entrance ticket', 'Reserved seating', 'Camera pass voucher'],
    idealFor: 'Families, culture enthusiasts, travelers of all ages',
    timing: '7:00 PM to 8:15 PM daily'
  },
  {
    id: 'act-10',
    slug: 'jaipur-sanganer-block-printing-workshop',
    title: 'Traditional Hand-Block Printing Workshop in Sanganer',
    category: 'Cultural Heritage',
    location: 'Sanganer, Jaipur',
    duration: '3 Hours',
    pricePerPerson: 1600,
    image: 'images/activities/activity-2.webp',
    description: 'Spend an inspiring half day in the craft artisan hub of Sanganer. Learn the centuries-old art of natural vegetable dye block printing using hand-carved teak wood blocks, and handcraft your own cotton scarf or tote bag.',
    highlights: [
      'Learn the science of natural mineral and plant-based dyes',
      'Practice rhythmic hand stamping with master Chippa artisans',
      'Create and take home your own custom stamped cotton scarf',
      'Tour of handmade paper making mills in Sanganer'
    ],
    includes: ['Cotton fabric & natural dyes', 'Artisan master instruction', 'Completed souvenir craft item to keep', 'Tea & snacks'],
    idealFor: 'Designers, art lovers, creative travelers',
    timing: '10:00 AM - 1:00 PM or 2:00 PM - 5:00 PM'
  },
  {
    id: 'act-11',
    slug: 'pushkar-sunrise-spiritual-walk-and-aarti',
    title: 'Pushkar Sunrise Holy Lake Ghats Walk & Temple Blessings',
    category: 'Cultural Heritage',
    location: 'Pushkar Lake & Brahma Temple',
    duration: '2 Hours',
    pricePerPerson: 750,
    image: 'images/blog/festivals-rajasthan.webp',
    description: 'Experience the mystical tranquility of Pushkar before the town awakens. Walk the marble ghats where priests chant ancient Sanskrit mantras, offer lotus petals into the waters, and visit the rare Jagatpita Brahma Temple.',
    highlights: [
      'Peaceful morning walk around sacred Brahma and Varaha ghats',
      'Traditional rose petal offering ceremony with local Brahmin',
      'VIP morning darshan at Jagatpita Brahma Temple',
      'Freshly fried Malpua tasting in the temple bazaar'
    ],
    includes: ['Spiritual heritage guide', 'Puja samagri (flowers and prasad)', 'Malpua sweet tasting'],
    idealFor: 'Spiritual seekers, peaceful morning walkers',
    timing: '6:30 AM to 8:30 AM'
  },
  {
    id: 'act-12',
    slug: 'bikaner-camel-breeding-farm-and-desert-trail',
    title: 'National Camel Research Center Tour & Desert Riding',
    category: 'Desert Adventure',
    location: 'Jorbeer & Camel Research Center, Bikaner',
    duration: '2.5 Hours',
    pricePerPerson: 950,
    image: 'images/destinations/bikaner-citytour.webp',
    description: 'Visit Asia’s premier scientific camel breeding center. Interact with distinct breeds including Mewari, Bikaneri, and Jaisalmeri camels. Taste camel milk tea and ice cream, and ride along the sandy desert boundary.',
    highlights: [
      'Interactive encounter with baby camels and champion breeds',
      'Taste pure camel milk, kulfi, and tea at the milk parlor',
      'Informative tour of the Camel Museum and biology lab',
      'Desert camel cart or saddle ride'
    ],
    includes: ['Center entry tickets', 'Guided tour of camel yards', 'Camel ride experience', 'Camel milk kulfi treat'],
    idealFor: 'Families with kids, animal lovers, curious explorers',
    timing: '2:30 PM to 5:30 PM'
  }
];
