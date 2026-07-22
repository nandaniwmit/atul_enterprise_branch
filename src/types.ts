export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string; // Lucide icon identifier
  category: string;
}

export interface CategoryItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  count?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Store Front" | "Shelves" | "Products" | "Equipment" | "Staff";
  imageUrl: string;
  description: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface MedicineInquiry {
  name: string;
  mobile: string;
  email: string;
  address: string;
  medicineName: string;
  hasPrescription: boolean;
  message: string;
  deliveryTime: string;
}

export interface HealthTip {
  id: string;
  title: string;
  summary: string;
  category: string;
  readTime: string;
  imageUrl: string;
}

export const BUSINESS_INFO = {
  name: "ATUL ENTERPRISE BRANCH",
  tagline: "Your Trusted Medical Store for Genuine Medicines & Healthcare Needs",
  owner: "Mr. Atul Kumar",
  phone: "09334034440",
  phoneFormatted: "+91 93340 34440",
  whatsapp: "09334034440",
  whatsappFormatted: "+91 93340 34440",
  email: "atulenterprisebranch@gmail.com",
  location: "Tekari Rd, near Panchmukhi Mahadeo Mandir, Dulhingunj, Gaya, Bihar 823001",
  coordinates: {
    lat: 24.7964,
    lng: 85.0006
  },
  workingHours: [
    { days: "Monday - Saturday", hours: "08:00 AM - 10:00 PM" },
    { days: "Sunday", hours: "09:00 AM - 08:00 PM" }
  ],
  emergencyPhone: "09334034440",
  deliveryInfo: "Nearby Home Delivery available for Senior Citizens & Urgent Prescriptions in Gaya city limits (Dulhingunj, Tekari Rd, Civil Lines)."
};
