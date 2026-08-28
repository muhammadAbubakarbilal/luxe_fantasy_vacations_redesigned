import { Destination } from '@/src/types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'st-lucia',
    slug: 'st-lucia',
    name: 'St. Lucia',
    tagline: 'Dramatic Pitons, Rainforest Sanctuaries & Secluded Luxury',
    category: 'Caribbean',
    heroImage: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
    ],
    description: 'Famed for its majestic volcanic spires rising from sapphire seas, St. Lucia offers an intimate blend of lush rainforest romance, open-air hillside sanctuaries, and authentic Caribbean soul.',
    whyVisit: [
      'Iconic open-wall architectural sanctuaries with private plunge pools facing the Pitons',
      'Sulfur Springs volcanic mud baths and botanical garden waterfall dips',
      'World-class private catamaran sails along secluded southwest coves',
      'An ideal balance of tranquil luxury and tropical island adventure',
    ],
    bestFor: ['Romantic Honeymoons', 'Anniversary Escapes', 'Nature & Spa Enthusiasts', 'Couples'],
    bestTimeToVisit: 'December to May for ideal Caribbean sunshine and calm trade winds.',
    featuredResorts: [
      {
        name: 'Jade Mountain & Anse Chastanet',
        type: 'Ultra-Luxury Open-Wall Sanctuaries',
        highlights: 'Bridges to infinity pools, no fourth wall, private butler service',
        image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Sugar Beach, A Viceroy Resort',
        type: 'Beachfront Valley Estate',
        highlights: 'Tucked directly between the Petit and Gros Piton on white sands',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
      },
    ],
    signatureExperiences: [
      {
        title: 'Sunset Piton Catamaran Cruise',
        description: 'Private charter with bespoke hors d\'oeuvres as the sun dips beneath the Caribbean horizon.',
      },
      {
        title: 'Tree-to-Bar Cacao Estate Journey',
        description: 'Private immersion crafting estate-grown artisanal Saint Lucian dark chocolate.',
      },
    ],
    travelTips: [
      'Helicopter transfers from UVF airport cut mountain driving time and provide stunning aerial views.',
      'Split your stay between a hillside sanctuary and a beachfront resort for the complete dual-experience.',
    ],
    faqs: [
      {
        question: 'Which side of St. Lucia is best for luxury couples?',
        answer: 'The southwest corridor around Soufrière is renowned for dramatic Piton views and secluded luxury retreats, while the north (Rodney Bay) offers calm marinas and nightlife.',
      },
      {
        question: 'How far in advance should we plan a St. Lucia vacation?',
        answer: 'For peak winter/spring months or top tier room categories with private plunge pools, we recommend planning 6 to 9 months ahead.',
      },
    ],
  },
  {
    id: 'riviera-maya',
    slug: 'riviera-maya',
    name: 'Riviera Maya & Cancun',
    tagline: 'Refined Coastal All-Inclusive Living & Mayan Coastline Culture',
    category: 'Mexico',
    heroImage: 'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=800&q=80',
    ],
    description: 'Spanning from the turquoise shores of Puerto Morelos through Playa del Carmen down to Tulum, this coastal paradise combines world-class culinary programs, serene adult-only sanctuaries, and Mayan heritage.',
    whyVisit: [
      'Sophisticated all-inclusive properties where dining rivals standalone Michelin restaurants',
      'Clear turquoise Caribbean water alongside ancient coastal ruins and crystalline cenotes',
      'Effortless flight connectivity from major US airports with minimal transfer friction',
      'Bespoke wellness retreats centered on traditional hydrotherapy and temazcal rituals',
    ],
    bestFor: ['Elevated All-Inclusive', 'Group Celebrations', 'Couples Escapes', 'Food & Wine Lovers'],
    bestTimeToVisit: 'November through April for crisp coastal breezes and low humidity.',
    featuredResorts: [
      {
        name: 'Grand Velas Riviera Maya',
        type: 'Culinary All-Inclusive Haven',
        highlights: 'Gourmet dining with celebrity chefs, multi-tier suites, holistic world-class spa',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Secrets Akumal Riviera Maya',
        type: 'Adults-Only Coastal Sanctuary',
        highlights: 'Snorkel with green sea turtles directly from the powder-soft shore',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80',
      },
    ],
    signatureExperiences: [
      {
        title: 'Private Underground Cenote Exploration',
        description: 'Guided after-hours exploration in illuminated limestone caverns with private swimming.',
      },
      {
        title: 'Bespoke Mayan Mezcal & Culinary Pairing',
        description: 'Curated multi-course tasting led by a sommelier on a private ocean pier.',
      },
    ],
    travelTips: [
      'Private luxury airport transport avoids the crowded shuttle bus queues and gets you to the pool faster.',
      'Selecting the right resort tier determines whether restaurant reservations require stress or are effortless.',
    ],
    faqs: [
      {
        question: 'Are all-inclusive resorts in Mexico truly all-inclusive?',
        answer: 'Top tier luxury properties include premium spirits, gourmet à la carte dining without wristbands or booking hassles, and 24-hour room service. We help match you to resorts that eliminate unexpected nickel-and-diming.',
      },
    ],
  },
  {
    id: 'eastern-caribbean-cruise',
    slug: 'eastern-caribbean-cruise',
    name: 'Eastern Caribbean Cruise Routes',
    tagline: 'Pristine Ports, Balcony Mornings & Effortless Island-Hopping',
    category: 'Caribbean',
    heroImage: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800&q=80',
    ],
    description: 'Experience the magic of waking up in a new tropical harbor each morning — from St. Thomas and St. Maarten to private island cays — with zero packing and unpacking between destinations.',
    whyVisit: [
      'Unpack once and experience multiple world-class island harbors in a single week',
      'Curated balcony suites, private club-class restaurants, and peaceful adults-only sun decks',
      'Tailored shore excursions that bypass crowded cruise-line bus tours for private island discoveries',
      'Exceptional value when cabin, entertainment, fine dining, and ocean views are unified',
    ],
    bestFor: ['Multi-Island Explorers', 'First-Time Luxury Cruisers', 'Family Celebrations', 'Cruising Enthusiasts'],
    bestTimeToVisit: 'Year-round sailing, with peak tranquil sea conditions from December to May.',
    featuredResorts: [
      {
        name: 'Celebrity Edge Series (The Retreat)',
        type: 'Modern Luxury Shipboard Haven',
        highlights: 'Private lounge, sun deck, Luminae restaurant, and personal dedicated concierge',
        image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Virgin Voyages (RockStar Quarters)',
        type: 'Adults-Only Elevated Voyage',
        highlights: 'No buffets, 20+ specialty eateries included, curated DJ pool clubs and wellness',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      },
    ],
    signatureExperiences: [
      {
        title: 'Virgin Gorda & The Baths Private Yacht Charter',
        description: 'Speedboat charter through the giant granite boulders and hidden tidal pools of British Virgin Islands.',
      },
      {
        title: 'Private Chef Table at Sea',
        description: 'Intimate multi-course degustation with executive shipboard chefs and paired vintage wines.',
      },
    ],
    travelTips: [
      'Choosing the exact cabin location (mid-ship vs aft, deck level) makes a massive difference in stability and noise.',
      'Booking 1 night pre-cruise hotel stay eliminates flight delay anxieties completely.',
    ],
    faqs: [
      {
        question: 'Why book a cruise through Luxe Fantasy instead of directly on a cruise website?',
        answer: 'We help you decipher confusing cabin decks, ensure you secure shipboard credits and perks, handle pre/post-cruise flights and private transfers, and advocate for you should itinerary changes occur.',
      },
    ],
  },
  {
    id: 'turks-and-caicos',
    slug: 'turks-and-caicos',
    name: 'Turks & Caicos',
    tagline: 'Grace Bay Powder Sands & Unrivaled Aquamarine Waters',
    category: 'Caribbean',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80',
    ],
    description: 'Renowned for having the world’s clearest ocean shallows and the softest talcum-white sand, Providenciales is the pinnacle of relaxed, upscale Caribbean beach life.',
    whyVisit: [
      'Consistently ranked the #1 beach in the world with miles of tranquil, swim-friendly turquoise water',
      'World-class barrier reef diving, paddleboarding with sea turtles, and luxury beach clubs',
      'Exclusive private villa compounds and discreet boutique resorts with direct beach frontage',
      'Short direct flights from Miami, Charlotte, Atlanta, New York, and Boston',
    ],
    bestFor: ['Beach Connoisseurs', 'Families Seeking Safety & Calm Waters', 'Couples', 'Water Sports'],
    bestTimeToVisit: 'December to July for calm seas and sunshine.',
    featuredResorts: [
      {
        name: 'The Palms Turks & Caicos',
        type: 'Grace Bay Luxury Manor',
        highlights: 'Million-dollar spa, infinity serpentine pool, and expansive residential suites',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Amanyara',
        type: 'Secluded Nature & Coastal Pavilions',
        highlights: 'Bordering Northwest Point Marine National Park, teak timber pavilions with private lap pools',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80',
      },
    ],
    signatureExperiences: [
      {
        title: 'Half-Day Private Catamaran to Little Water Cay',
        description: 'Snorkel the barrier reef followed by a secluded island beach picnic and iguana sanctuary visit.',
      },
    ],
    travelTips: [
      'Reserve beachfront dinner tables at Da Conch Shack and Coco Bistro several weeks before departure.',
    ],
    faqs: [
      {
        question: 'Is Turks & Caicos suitable for all-inclusive travel?',
        answer: 'While Beaches Turks & Caicos caters wonderfully to luxury families, most luxury properties on Grace Bay operate on European or breakfast plans to encourage exploring the vibrant island culinary scene. We help you choose the best model.',
      },
    ],
  },
  {
    id: 'punta-cana-dominican-republic',
    slug: 'punta-cana-dominican-republic',
    name: 'Punta Cana & Cap Cana',
    tagline: 'Endless Coconut Groves, Oceanfront Golf & Gated Luxury Estates',
    category: 'Caribbean',
    heroImage: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=800&q=80',
    ],
    description: 'On the eastern tip of the Dominican Republic, the prestigious enclaves of Cap Cana and Bavaro Beach offer sprawling oceanfront estates, championship Jack Nicklaus golf, and all-inclusive luxury.',
    whyVisit: [
      'Expansive multi-pool resorts with swim-up suites and dedicated club concierge',
      'Punta Espada golf course with 8 oceanfront holes played directly over the crashing waves',
      'Private marina charters for deep-sea marlin fishing and natural lagoon exploration',
      'Exceptional value for multi-bedroom swim-up suites and destination wedding groups',
    ],
    bestFor: ['All-Inclusive Luxury', 'Group Celebrations', 'Golf Vacations', 'Adults-Only Romance'],
    bestTimeToVisit: 'December through April.',
    featuredResorts: [
      {
        name: 'Hyatt Zilara Cap Cana',
        type: 'Adults-Only Oceanfront Sanctuary',
        highlights: 'Spectacular infinity beachfront pools, 12 dining venues, full access to Cap Cana amenities',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Sanctuary Cap Cana',
        type: 'Colonial Luxury Fortress',
        highlights: 'Private island suites, cliffside dining, and a tranquil castle courtyard',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80',
      },
    ],
    signatureExperiences: [
      {
        title: 'Hoyo Azul Hidden Lagoon Cenote',
        description: 'Private eco-guided trek through tropical forest to swim in an intensely turquoise natural sinkhole.',
      },
    ],
    travelTips: [
      'Upgrading to Club level provides dedicated beach butlers, private lounge access, and premium top-shelf lounges.',
    ],
    faqs: [
      {
        question: 'What is the difference between Punta Cana and Cap Cana?',
        answer: 'Cap Cana is an exclusive 30,000-acre private gated master community with its own private marina, golf course, and quieter white sand beaches, offering elevated privacy.',
      },
    ],
  },
  {
    id: 'jamaica',
    slug: 'jamaica',
    name: 'Jamaica (Montego Bay, Negril & Ocho Rios)',
    tagline: 'Warm Island Hospitality, Reggae Rhythms & Overwater Bungalows',
    category: 'Caribbean',
    heroImage: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
    ],
    description: 'Immerse yourself in authentic island culture, cliffside sunsets in Negril, private bamboo river rafting in Ocho Rios, and signature overwater Caribbean bungalows.',
    whyVisit: [
      'Overwater villas and suites featuring glass floor viewing panels and private tranquility soaking tubs',
      'Martha Brae gentle bamboo river rafting beneath leafy tropical canopies',
      'World-famous Seven Mile Beach with powdery sand and vibrant sunset cliff-diving culture',
      'Legendary Jamaican culinary staples, from wood-fired jerk chicken to Blue Mountain coffee',
    ],
    bestFor: ['Romantic Couples', 'Music & Culture Lovers', 'All-Inclusive Travelers', 'Honeymoons'],
    bestTimeToVisit: 'November to May for warm, sunny days.',
    featuredResorts: [
      {
        name: 'Sandals South Coast & Royal Caribbean',
        type: 'Signature Overwater Bungalows',
        highlights: 'Private boat transfers to over-water hammock suites with 24-hour butler service',
        image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Half Moon Montego Bay',
        type: 'Classic 400-Acre Estate',
        highlights: 'Equestrian center with ocean swimming horses, private villas, 2 miles of private beach',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
      },
    ],
    signatureExperiences: [
      {
        title: 'VIP Fast-Track Club Mobay Arrival',
        description: 'Personal greeting off the plane with expedited customs and access to a private lounge with refreshments.',
      },
    ],
    travelTips: [
      'Club Mobay VIP airport pass is a must-have for stress-free arrival and departure in Montego Bay.',
    ],
    faqs: [
      {
        question: 'Which Jamaican destination is right for my trip?',
        answer: 'Montego Bay is closest to the airport for shorter stays; Negril is famous for laid-back cliffside sunsets and 7-mile beach; Ocho Rios offers lush waterfalls and rainforest adventure.',
      },
    ],
  },
];
