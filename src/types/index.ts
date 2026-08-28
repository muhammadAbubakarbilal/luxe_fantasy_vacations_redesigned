export interface Destination {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: 'Caribbean' | 'Mexico' | 'Central America' | 'Europe' | 'Exotic Island';
  heroImage: string;
  galleryImages: string[];
  description: string;
  whyVisit: string[];
  bestFor: string[];
  bestTimeToVisit: string;
  featuredResorts: {
    name: string;
    type: string;
    highlights: string;
    image: string;
  }[];
  signatureExperiences: {
    title: string;
    description: string;
  }[];
  travelTips: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface Getaway {
  id: string;
  slug: string;
  title: string;
  destination: string;
  region: string;
  tripType: 'All-Inclusive' | 'Luxury Cruise' | 'Romantic Escape' | 'Group Celebration' | 'Boutique Resort' | 'Featured' | 'Luxury Escapes';
  duration: string;
  image: string;
  gallery: string[];
  tagline: string;
  overview: string;
  whyThisTrip: string[];
  highlights: string[];
  itineraryRhythm: {
    day: string;
    title: string;
    description: string;
  }[];
  accommodations: {
    name: string;
    style: string;
    description: string;
  };
  whatsIncluded: string[];
  idealFor: string[];
  suggestedPace: string;
  verifiedPricingNote?: string;
}

export type VacationPackage = Getaway;
export type Package = Getaway;

export interface ServiceCategory {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  problemSolved: string;
  valueProposition: string;
  whatWeHandle: string[];
  whoItsFor: string[];
  processHighlights: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  tripType: string;
  destination: string;
  year?: string;
  image?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Process' | 'Cruises' | 'All-Inclusive' | 'Fees & Pricing';
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedDate: string;
  heroImage: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  contentParagraphs: string[];
  keyTakeaways: string[];
}

export interface InquiryFormData {
  // Step 1: Destination & Dates
  destination: string;
  flexibleDates: boolean;
  travelMonthOrDates: string;
  tripDurationDays: string;

  // Step 2: Travelers
  adultsCount: number;
  childrenCount: number;
  roomsCount: number;
  travelerType: 'Couple' | 'Family' | 'Friends/Group' | 'Solo' | 'Multi-Generational';
  celebrationOccasion?: string;

  // Step 3: Travel Style
  travelStyles: string[]; // Cruise, All-Inclusive, Luxury Boutique, Romance, Adventure

  // Step 4: Priorities
  priorities: string[]; // Beach, Fine Dining, Spa, Excursions, Seclusion, Nightlife

  // Step 5: Budget & Expectations
  budgetRange: string;
  flightAssistanceNeeded: boolean;
  departureCity?: string;

  // Step 6: Contact & Notes
  fullName: string;
  email: string;
  phone: string;
  preferredContactMethod: 'Email' | 'Phone' | 'Text';
  specialRequests: string;
}
