import { Destination } from '../types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'dest-jaipur',
    slug: 'jaipur',
    name: 'Jaipur',
    nickname: 'The Pink City',
    tagline: 'The Pink City of Royal Palaces',
    image: 'images/destinations/jaipur-citytour.webp',
    description: 'Capital of Rajasthan, famed for terracotta-pink palaces, hill forts Amer and Nahargarh, royal observatories, and vibrant gemstone bazaars.',
    bestTimeToVisit: 'October to March',
    idealDays: '2-3 Days',
    connectivity: {
      airport: 'Jaipur International Airport (JAI)',
      railway: 'Jaipur Junction (JP)',
      road: 'NH-48 Delhi-Mumbai Expressway'
    },
    popularFor: ['Royal Forts & Palaces', 'Block Print Textiles', 'Jewellery & Handicrafts', 'Dal Baati Churma'],
    tourCount: 14,
    topAttractions: [
      {
        slug: 'amer-fort',
        name: 'Amer (Amber) Fort & Palace',
        type: 'Fort',
        image: 'images/packages/jaipur-amber-fort.jpg',
        shortDescription: 'Magnificent 16th-century fortress on hilltop featuring the legendary Sheesh Mahal (Mirror Palace) and royal courtyards.',
        timing: '8:00 AM - 5:30 PM, Light Show 7:00 PM',
        entryFee: 'INR 100 (Indians), INR 500 (Foreigners)'
      },
      {
        slug: 'hawa-mahal',
        name: 'Hawa Mahal (Palace of Winds)',
        type: 'Palace',
        image: 'images/packages/jaipur-amber-fort-640.webp',
        shortDescription: 'Iconic five-story honeycomb pink facade with 953 jharokhas (casements) designed for royal ladies to observe street life unseen.',
        timing: '9:00 AM - 5:00 PM',
        entryFee: 'INR 50 (Indians), INR 200 (Foreigners)'
      },
      {
        slug: 'city-palace-jaipur',
        name: 'City Palace & Museum',
        type: 'Palace',
        image: 'images/packages/classic-rajasthan.webp',
        shortDescription: 'Sprawling palace complex with courtyards, royal attire museum, silver urns (world record holders), and the Chandra Mahal.',
        timing: '9:30 AM - 5:00 PM',
        entryFee: 'INR 200 (Indians), INR 700 (Foreigners)'
      },
      {
        slug: 'jantar-mantar',
        name: 'Jantar Mantar UNESCO Observatory',
        type: 'Observatory',
        image: 'images/blog/best-places-jaipur.webp',
        shortDescription: 'World’s largest stone astronomical observatory built by Maharaja Sawai Jai Singh II featuring the colossal sundial Samrat Yantra.',
        timing: '9:00 AM - 4:30 PM',
        entryFee: 'INR 50 (Indians), INR 200 (Foreigners)'
      },
      {
        slug: 'jal-mahal',
        name: 'Jal Mahal (Water Palace)',
        type: 'Palace',
        image: 'images/blog/best-time-rajasthan.webp',
        shortDescription: 'Mesmerizing palace appearing to float serenely in the center of Man Sagar Lake, surrounded by the picturesque Aravalli range.',
        timing: 'Exterior view all day',
        entryFee: 'Free (Viewpoint from promenade)'
      },
      {
        slug: 'nahargarh-fort',
        name: 'Nahargarh Fort',
        type: 'Fort',
        image: 'images/blog/rajasthan-tourism.webp',
        shortDescription: 'Perched on the edge of the Aravalli hills, offering the most breathtaking bird’s-eye sunset panoramas over the entire Pink City.',
        timing: '10:00 AM - 5:30 PM',
        entryFee: 'INR 50 (Indians), INR 200 (Foreigners)'
      },
      {
        slug: 'albert-hall-museum',
        name: 'Albert Hall Museum (Central Museum)',
        type: 'Museum',
        image: 'images/packages/custom-tour.webp',
        shortDescription: 'Exquisite Indo-Saracenic building in Ram Niwas Garden hosting royal artifacts, Persian carpets, ivory statues, and an Egyptian mummy.',
        timing: '9:00 AM - 5:00 PM, Night view 7:00 PM - 10:00 PM',
        entryFee: 'INR 40 (Indians), INR 300 (Foreigners)'
      }
    ]
  },
  {
    id: 'dest-udaipur',
    slug: 'udaipur',
    name: 'Udaipur',
    nickname: 'The City of Lakes',
    tagline: 'The Romantic City of Lakes',
    image: 'images/destinations/udaipur-citytour.webp',
    description: 'The romantic capital of Mewar, cradled around Lake Pichola and Fateh Sagar, world-renowned for white marble palaces and sunset ghats.',
    bestTimeToVisit: 'September to March',
    idealDays: '2-3 Days',
    connectivity: {
      airport: 'Maharana Pratap Airport (UDR)',
      railway: 'Udaipur City Station (UDZ)',
      road: 'NH-48 / NH-27'
    },
    popularFor: ['Lakeside Palaces', 'Sunset Boat Cruises', 'Miniature Paintings', 'Romantic Dining'],
    tourCount: 16,
    topAttractions: [
      {
        slug: 'city-palace-udaipur',
        name: 'City Palace Complex Udaipur',
        type: 'Palace',
        image: 'images/packages/udaipur-city-palace.jpg',
        shortDescription: 'The largest palace complex in Rajasthan, towering over Lake Pichola with mirrored balconies, marble domes, and Mewar treasury.',
        timing: '9:00 AM - 5:30 PM',
        entryFee: 'INR 330 (Adults)'
      },
      {
        slug: 'lake-pichola',
        name: 'Lake Pichola & Jag Mandir Island',
        type: 'Lake',
        image: 'images/packages/udaipur-city-palace-640.webp',
        shortDescription: 'Picturesque freshwater lake created in 1362 AD, hosting the famous Lake Palace (Taj) and historic Jag Mandir island retreat.',
        timing: 'Boating 9:00 AM - 6:00 PM',
        entryFee: 'Boating: INR 450 - 800 per person'
      },
      {
        slug: 'saheliyon-ki-bari',
        name: 'Saheliyon-ki-Bari (Courtyard of Maidens)',
        type: 'Garden',
        image: 'images/blog/udaipur.webp',
        shortDescription: 'Lush historic garden with marble elephant fountains, lotus pools, and kiosks created for royal princess maidens.',
        timing: '9:00 AM - 7:00 PM',
        entryFee: 'INR 20 (Indians), INR 100 (Foreigners)'
      },
      {
        slug: 'sajjangarh-monsoon-palace',
        name: 'Sajjangarh (Monsoon Palace)',
        type: 'Palace',
        image: 'images/activities/udaipur-tour.webp',
        shortDescription: 'Hilltop fortress perched high above the lakes, built to watch monsoon clouds gather and enjoy 360-degree sunset panoramas.',
        timing: '9:00 AM - 6:00 PM',
        entryFee: 'INR 100 (Plus forest toll)'
      },
      {
        slug: 'bagore-ki-haveli',
        name: 'Bagore Ki Haveli & Gangaur Ghat',
        type: 'Haveli',
        image: 'images/packages/udaipur-mountabu.webp',
        shortDescription: '18th-century waterfront mansion hosting the famous Dharohar cultural show featuring Rajasthani folk dances and fire balancing acts.',
        timing: 'Museum 9:30 AM - 5:30 PM, Cultural Show 7:00 PM',
        entryFee: 'INR 100 (Show ticket INR 150)'
      },
      {
        slug: 'jagdish-temple',
        name: 'Jagdish Temple',
        type: 'Temple',
        image: 'images/packages/udaipur-city-palace-960.webp',
        shortDescription: 'Indo-Aryan temple dedicated to Lord Vishnu built in 1651 AD, adorned with intricate pillar carvings and active prayer chants.',
        timing: '4:15 AM - 1:00 PM, 5:15 PM - 8:00 PM',
        entryFee: 'Free'
      }
    ]
  },
  {
    id: 'dest-jodhpur',
    slug: 'jodhpur',
    name: 'Jodhpur',
    nickname: 'The Blue City & Sun City',
    tagline: 'The Blue City Beneath Mehrangarh',
    image: 'images/destinations/jodhpur-citytour.webp',
    description: 'Gateway to the Thar desert, crowned by the colossal Mehrangarh Fort towering above an undulating sea of indigo-painted houses.',
    bestTimeToVisit: 'October to March',
    idealDays: '1-2 Days',
    connectivity: {
      airport: 'Jodhpur Airport (JDH)',
      railway: 'Jodhpur Junction (JU)',
      road: 'NH-62'
    },
    popularFor: ['Mehrangarh Fort', 'Blue Alleys Walk', 'Mirchi Vada & Makhaniya Lassi', 'Umaid Bhawan Palace'],
    tourCount: 12,
    topAttractions: [
      {
        slug: 'mehrangarh-fort',
        name: 'Mehrangarh Fort',
        type: 'Fort',
        image: 'images/blog/mehrangarh-jodhpur.webp',
        shortDescription: 'One of the most formidable and magnificent fortresses in India, rising 400 feet above the skyline on perpendicular cliff edges.',
        timing: '9:00 AM - 5:00 PM',
        entryFee: 'INR 100 (Indians), INR 600 (Foreigners)'
      },
      {
        slug: 'jaswant-thada',
        name: 'Jaswant Thada',
        type: 'Cenotaph',
        image: 'images/blog/jodhpur-blue-city.webp',
        shortDescription: 'The Taj Mahal of Marwar — a graceful white marble memorial cenotaph with carved sheets of marble that glow warm in the sunlight.',
        timing: '9:00 AM - 5:00 PM',
        entryFee: 'INR 30 (Indians), INR 50 (Foreigners)'
      },
      {
        slug: 'umaid-bhawan-palace',
        name: 'Umaid Bhawan Palace & Museum',
        type: 'Palace',
        image: 'images/blog/jodhpur.webp',
        shortDescription: 'One of the world’s largest private royal residences, built in golden Chittar sandstone, housing a royal heritage museum and vintage car collection.',
        timing: '10:00 AM - 4:30 PM',
        entryFee: 'INR 30 (Indians), INR 100 (Foreigners)'
      },
      {
        slug: 'toorji-ka-jhalra',
        name: 'Toorji Ka Jhalra Stepwell',
        type: 'Stepwell',
        image: 'images/packages/jodhpur-blue-city.jpg',
        shortDescription: 'Intricate 1740s Rajput stepwell featuring pyramidical stone steps, restored to its glory with chic hipster cafes around it.',
        timing: 'Open 24 Hours',
        entryFee: 'Free'
      },
      {
        slug: 'mandore-gardens',
        name: 'Mandore Gardens',
        type: 'Garden',
        image: 'images/packages/jodhpur-blue-city-640.webp',
        shortDescription: 'Ancient capital of Marwar before Jodhpur was founded, home to ornate rock-cut cenotaphs of Marwar rulers nestled among banyan trees.',
        timing: '8:00 AM - 8:00 PM',
        entryFee: 'Free (Museum INR 50)'
      }
    ]
  },
  {
    id: 'dest-jaisalmer',
    slug: 'jaisalmer',
    name: 'Jaisalmer',
    nickname: 'The Golden City',
    tagline: 'The Golden City of the Thar',
    image: 'images/destinations/jaisalmer.webp',
    description: 'Golden sandstone fortress in the heart of the Great Indian Thar Desert, famous for living fort streets, sand dunes, and desert camel safaris.',
    bestTimeToVisit: 'October to March',
    idealDays: '2 Days',
    connectivity: {
      airport: 'Jaisalmer Airport (JSA)',
      railway: 'Jaisalmer Railway Station (JSM)',
      road: 'NH-11'
    },
    popularFor: ['Sonar Qila Living Fort', 'Sam Sand Dunes', 'Desert Camping', 'Carved Havelis'],
    tourCount: 10,
    topAttractions: [
      {
        slug: 'jaisalmer-fort',
        name: 'Jaisalmer Fort (Sonar Qila)',
        type: 'Fort',
        image: 'images/packages/jaisalmer-golden-fort.jpg',
        shortDescription: 'One of the very few living forts in the world, where one quarter of the old city population still resides inside golden battlements.',
        timing: 'Open 24 Hours (Museum 9:00 AM - 6:00 PM)',
        entryFee: 'Fort is free, Palace Museum INR 100'
      },
      {
        slug: 'sam-sand-dunes',
        name: 'Sam Sand Dunes & Desert Camps',
        type: 'Desert',
        image: 'images/packages/desert-tour-rajasthan.webp',
        shortDescription: 'Sweeping yellow sand dunes offering golden sunset camel rides, 4x4 dune bashing, Rajasthani folk dance nights, and tent camping.',
        timing: 'Best around sunrise and sunset',
        entryFee: 'Free (Camel / Camp charges apply)'
      },
      {
        slug: 'patwon-ki-haveli',
        name: 'Patwon Ki Haveli',
        type: 'Haveli',
        image: 'images/packages/rampuria-haveli-bikaner.webp',
        shortDescription: 'Cluster of five grand merchant mansions famous for filigree stone lattice work, brocade embroidery artifacts, and painted ceilings.',
        timing: '9:00 AM - 5:30 PM',
        entryFee: 'INR 100 (Indians), INR 250 (Foreigners)'
      },
      {
        slug: 'gadisar-lake',
        name: 'Gadisar Lake & Tilon Ki Pol',
        type: 'Lake',
        image: 'images/blog/gadisar-lake-boating.webp',
        shortDescription: '14th-century historic rainwater conservation lake fringed with yellow sandstone shrines, cenotaphs, and migratory birds.',
        timing: 'All day, Boating 8:00 AM - 7:00 PM',
        entryFee: 'Free (Boating INR 100 - 300)'
      },
      {
        slug: 'kuldhara-village',
        name: 'Kuldhara Abandoned Ghost Village',
        type: 'Heritage Site',
        image: 'images/blog/camel-safari.webp',
        shortDescription: 'Mysterious 13th-century village abandoned overnight by Paliwal Brahmins in 1825, preserving stone houses and folklore.',
        timing: '8:00 AM - 6:00 PM',
        entryFee: 'INR 50 (Plus vehicle charge)'
      }
    ]
  },
  {
    id: 'dest-ajmer',
    slug: 'ajmer',
    name: 'Ajmer',
    nickname: 'The Sufi Pilgrimage City',
    tagline: 'The Sufi Pilgrimage City',
    image: 'images/destinations/ajmer-pushkar.webp',
    description: 'Historic city on the banks of Ana Sagar Lake, crowned by the revered Sufi shrine of Khwaja Moinuddin Chishti that draws pilgrims of all faiths from across South Asia.',
    bestTimeToVisit: 'October to March',
    idealDays: '1 Day',
    connectivity: {
      airport: 'Kishangarh Airport (KQH)',
      railway: 'Ajmer Junction (AII)',
      road: 'NH-48'
    },
    popularFor: ['Ajmer Sharif Dargah', 'Ana Sagar Lake', 'Adhai Din Ka Jhonpra', 'Taragarh Fort Views'],
    tourCount: 7,
    topAttractions: [
      {
        slug: 'ajmer-sharif-dargah',
        name: 'Dargah Sharif Ajmer',
        type: 'Shrine',
        image: 'images/destinations/ajmer-pushkar.webp',
        shortDescription: 'One of the most sacred pilgrimage shrines in South Asia, venerated by people of all faiths, with soulful evening qawwali music.',
        timing: '5:00 AM - 10:00 PM',
        entryFee: 'Free'
      },
      {
        slug: 'ana-sagar-lake',
        name: 'Ana Sagar Lake & Daulat Bagh Gardens',
        type: 'Lake',
        image: 'images/blog/rajasthan-tourism.webp',
        shortDescription: 'Picturesque 12th-century artificial lake with marble baradari pavilions and gardens laid by Shah Jahan, perfect for sunset strolls.',
        timing: '8:00 AM - 8:00 PM',
        entryFee: 'Free (Boating extra)'
      },
      {
        slug: 'adhai-din-ka-jhonpra',
        name: 'Adhai Din Ka Jhonpra',
        type: 'Heritage Site',
        image: 'images/blog/best-time-rajasthan.webp',
        shortDescription: 'Remarkable Indo-Islamic structure built from demolished temples, famed for its ornate calligraphic arches and lattice work.',
        timing: 'Sunrise to Sunset',
        entryFee: 'Free'
      },
      {
        slug: 'akbari-fort-museum',
        name: 'Akbari Fort & Museum (Ajmer Museum)',
        type: 'Fort',
        image: 'images/blog/festivals-rajasthan.webp',
        shortDescription: 'Mughal-era fort built by Emperor Akbar in 1570 AD, now housing the government museum with Rajput and Mughal sculptures.',
        timing: '10:00 AM - 4:45 PM (Closed Monday)',
        entryFee: 'INR 20 (Indians), INR 100 (Foreigners)'
      }
    ]
  },
  {
    id: 'dest-pushkar',
    slug: 'pushkar',
    name: 'Pushkar',
    nickname: 'The Holy Lake Town',
    tagline: 'The Holy Lake & Camel Fair Town',
    image: 'images/blog/festivals-rajasthan.webp',
    description: 'Sacred pilgrimage town wrapped around a mythical holy lake, home to the world’s most prominent Brahma Temple and the world-famous Pushkar Camel Fair.',
    bestTimeToVisit: 'October to March (Pushkar Mela in November)',
    idealDays: '1-2 Days',
    connectivity: {
      airport: 'Kishangarh Airport (KQH)',
      railway: 'Ajmer Junction (AII)',
      road: 'NH-48'
    },
    popularFor: ['Lord Brahma Temple', 'Pushkar Holy Lake Ghats', 'Pushkar Camel Fair', 'Ropeway Sunset Views'],
    tourCount: 9,
    topAttractions: [
      {
        slug: 'brahma-temple-pushkar',
        name: 'Jagatpita Brahma Temple Pushkar',
        type: 'Temple',
        image: 'images/blog/festivals-rajasthan.webp',
        shortDescription: 'The world’s most prominent 14th-century temple dedicated to Lord Brahma, marked by a distinctive red spire and silver coin floor.',
        timing: '6:30 AM - 1:30 PM, 3:00 PM - 8:30 PM',
        entryFee: 'Free'
      },
      {
        slug: 'pushkar-lake',
        name: 'Pushkar Sarovar (Holy Lake & 52 Ghats)',
        type: 'Lake',
        image: 'images/destinations/ajmer-pushkar.webp',
        shortDescription: 'Legendary lake believed to have appeared where Lord Brahma dropped a lotus petal; surrounded by 52 bathing ghats with evening aarti.',
        timing: 'Open all day, Evening Aarti around 6:30 PM',
        entryFee: 'Free'
      },
      {
        slug: 'savitri-temple',
        name: 'Savitri Devi Temple (Ratnagiri Hill)',
        type: 'Temple',
        image: 'images/blog/rajasthan-tourism.webp',
        shortDescription: 'Perched on the highest hill above Pushkar lake, accessible by ropeway or 1,000 steps, providing unforgettable sunrise views.',
        timing: '5:00 AM - 8:00 PM',
        entryFee: 'Free (Ropeway INR 150)'
      },
      {
        slug: 'pushkar-camel-fair',
        name: 'Pushkar Camel Fair Grounds (Mela)',
        type: 'Festival',
        image: 'images/blog/camel-safari.webp',
        shortDescription: 'Every November this quiet town erupts into the world’s largest camel fair — races, folk performances, moustache competitions and 50,000 camels.',
        timing: 'November (Kartik Purnima week)',
        entryFee: 'Free (Event charges apply)'
      }
    ]
  },
  {
    id: 'dest-bikaner',
    slug: 'bikaner',
    name: 'Bikaner',
    nickname: 'Camel Country & Desert Citadels',
    tagline: 'The Desert Citadel of Junagarh',
    image: 'images/destinations/bikaner-citytour.webp',
    description: 'Northern desert stronghold founded in 1488 by Rao Bika, celebrated for the unconquered Junagarh Fort, red sandstone Lalgarh Palace, and legendary spicy delicacies.',
    bestTimeToVisit: 'October to March',
    idealDays: '1-2 Days',
    connectivity: {
      airport: 'Nal (Bikaner) Airport (BKB)',
      railway: 'Bikaner Junction (BKN)',
      road: 'NH-11 / NH-62'
    },
    popularFor: ['Junagarh Fort', 'Karni Mata Temple', 'Bikaneri Bhujia & Sweets', 'Camel Breeding Farm'],
    tourCount: 8,
    topAttractions: [
      {
        slug: 'junagarh-fort',
        name: 'Junagarh Fort & Prachina Museum',
        type: 'Fort',
        image: 'images/packages/rampuria-haveli-bikaner.webp',
        shortDescription: 'Rare plains fort built in red sandstone and Italian marble, renowned for never being conquered in its 500-year history.',
        timing: '10:00 AM - 4:30 PM',
        entryFee: 'INR 50 (Indians), INR 300 (Foreigners)'
      },
      {
        slug: 'karni-mata-temple',
        name: 'Karni Mata Temple (Rat Temple) Deshnok',
        type: 'Temple',
        image: 'images/blog/camel-safari.webp',
        shortDescription: 'Remarkable 600-year-old marble temple home to 25,000 revered black rats (kabbas); spotting a white rat is considered auspicious.',
        timing: '4:00 AM - 10:00 PM',
        entryFee: 'Free'
      },
      {
        slug: 'national-camel-centre',
        name: 'National Research Centre on Camel',
        type: 'Research Centre',
        image: 'images/packages/camel-safari.webp',
        shortDescription: 'Asia’s premier camel breeding institution where visitors sample camel milk ice cream, kulfi, and view rare breeds.',
        timing: '10:00 AM - 5:00 PM',
        entryFee: 'INR 50'
      }
    ]
  },
  {
    id: 'dest-mount-abu',
    slug: 'mount-abu',
    name: 'Mount Abu',
    nickname: 'Rajasthans Only Hill Station',
    tagline: 'The Only Hill Station of Rajasthan',
    image: 'images/destinations/mount-abu.webp',
    description: 'Refreshing pine-covered mountain sanctuary sitting at 1,220 meters in the southern Aravallis, home to the breathtaking Dilwara marble temples and Nakki Lake.',
    bestTimeToVisit: 'Year Round (Pleasant retreat even during summer)',
    idealDays: '2 Days',
    connectivity: {
      airport: 'Maharana Pratap Airport Udaipur (UDR)',
      railway: 'Abu Road Station (ABR)',
      road: 'NH-27'
    },
    popularFor: ['Dilwara Marble Temples', 'Nakki Lake Boating', 'Guru Shikhar Peak', 'Pleasant Weather'],
    tourCount: 6,
    topAttractions: [
      {
        slug: 'dilwara-temples',
        name: 'Dilwara Jain Temples',
        type: 'Temple',
        image: 'images/destinations/mount-abu.webp',
        shortDescription: 'World masterpiece of marble architectural craftsmanship from the 11th to 13th centuries, featuring paper-thin marble filigree ceilings.',
        timing: '12:00 PM - 5:00 PM (for tourists)',
        entryFee: 'Free'
      },
      {
        slug: 'nakki-lake',
        name: 'Nakki Lake & Toad Rock',
        type: 'Lake',
        image: 'images/blog/best-time-rajasthan.webp',
        shortDescription: 'Scenic natural lake according to Hindu legend dug out by the gods with their fingernails (nakh), popular for pedal boating.',
        timing: '8:00 AM - 7:00 PM',
        entryFee: 'Free (Boating INR 100 - 250)'
      },
      {
        slug: 'guru-shikhar',
        name: 'Guru Shikhar Peak',
        type: 'Viewpoint',
        image: 'images/blog/paragliding.webp',
        shortDescription: 'Highest mountain summit of the Aravalli range (1,722 meters) offering cool alpine winds, Dattatreya temple, and vast valley views.',
        timing: 'Sunrise to Sunset',
        entryFee: 'Free'
      }
    ]
  },
  {
    id: 'dest-sawai-madhopur',
    slug: 'sawai-madhopur',
    name: 'Sawai Madhopur & Ranthambore',
    nickname: 'Realm of the Royal Bengal Tiger',
    tagline: 'The Realm of the Royal Bengal Tiger',
    image: 'images/destinations/ranthambore-citytour.webp',
    description: 'Former hunting grounds of the Maharajas of Jaipur, now one of India’s most celebrated national parks where tigers roam freely around ancient palace ruins.',
    bestTimeToVisit: 'October to May (Park closed July-September)',
    idealDays: '2 Days (incl. Safaris)',
    connectivity: {
      airport: 'Jaipur International Airport (JAI)',
      railway: 'Sawai Madhopur Station (SWM)',
      road: 'NH-552 Ranthambore Road'
    },
    popularFor: ['Bengal Tiger Safaris', 'UNESCO Ranthambore Fort', 'Leopards & Marsh Crocodiles', 'Jungle Resorts'],
    tourCount: 7,
    topAttractions: [
      {
        slug: 'ranthambore-national-park',
        name: 'Ranthambore National Park Jungle Safari',
        type: 'National Park',
        image: 'images/packages/ranthambore-national-park-safari.webp',
        shortDescription: 'Thrilling open-top 6-seater jeep and 20-seater canter safaris into 10 safari zones tracking tigers, sloth bears, sambar deer, and leopards.',
        timing: 'Morning 6:30 AM - 10:00 AM, Evening 2:30 PM - 6:00 PM',
        entryFee: 'Permits from INR 1,200 to 2,500'
      },
      {
        slug: 'ranthambore-fort',
        name: 'Ranthambore Fort UNESCO Site',
        type: 'Fort',
        image: 'images/packages/ranthambore-safari.jpg',
        shortDescription: 'Mighty 10th-century fortress situated right inside the tiger sanctuary on a 700-foot cliff, housing the sacred Trinetra Ganesh Temple.',
        timing: '6:00 AM - 6:00 PM',
        entryFee: 'Free'
      },
      {
        slug: 'padam-talao',
        name: 'Padam Talao & Jogi Mahal',
        type: 'Lake & Palace',
        image: 'images/packages/ranthambore-safari-960.webp',
        shortDescription: 'Largest water lake inside the park where wild animals gather to drink and near which stands the second largest Banyan tree in India.',
        timing: 'During park safari hours',
        entryFee: 'Included in safari'
      }
    ]
  }
];
