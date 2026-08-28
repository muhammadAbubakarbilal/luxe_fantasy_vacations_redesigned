export interface AdvisorProfileData {
  name: string;
  role: string;
  portraitImage: string;
  personalStory: string;
  travelPhilosophy: string;
  specialties: string[];
  destinationsLoved: string[];
  credentials: string[];
  personalQuote: string;
  directEmail: string;
  phoneDisplay: string;
  phoneNumberClean: string;
}

export const ADVISOR_PROFILE: AdvisorProfileData = {
  name: 'Luxe Fantasy Travel Advisory',
  role: 'Founder & Principal Luxury Travel Advisor',
  portraitImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80',
  personalStory: 'I founded Luxe Fantasy Vacations with a singular belief: travel should be one of the most enriching and rejuvenating chapters of your year — not a source of pre-trip stress, endless browser tabs, and contradictory online reviews. Over years of exploring the Caribbean, testing cruise suite classes, and cultivating relationships with general managers at premier resorts, I’ve dedicated my work to giving travelers their time and peace of mind back.',
  travelPhilosophy: 'You bring the dream. We curate the journey. We believe in high-touch human care, deep listening, and meticulous attention to the subtle details that elevate a good vacation into an unforgettable life memory.',
  specialties: [
    'Caribbean & Mexico Luxury Resorts',
    'Curated Ocean & Suite-Class Cruises',
    'Five-Star Gourmet All-Inclusive Getaways',
    'Romantic Honeymoons & Milestone Anniversaries',
    'Multi-Traveler Group & Family Celebrations',
  ],
  destinationsLoved: ['St. Lucia', 'Riviera Maya', 'Turks & Caicos', 'Cap Cana', 'Jamaica', 'Grecian Isles'],
  credentials: [
    'Certified Luxury Travel Specialist',
    'Cruise Lines International Specialist Member',
    'Direct Relationships with Top Resort General Managers',
    'Dedicated 24/7 Itinerary Care & Emergency Support',
  ],
  personalQuote: 'The true luxury in modern travel isn’t just where you go — it’s knowing every detail has been thoughtfully anticipated so you can simply arrive, breathe, and immerse.',
  directEmail: 'inquiries@luxefantasyvacations.com',
  phoneDisplay: '(800) LUXE-VAC',
  phoneNumberClean: '18005893822',
};
