import { Testimonial, FAQItem, ServiceItem, CategoryItem, GalleryItem, TimelineEvent, HealthTip } from "./types";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Dr. Alok Prasad",
    role: "Senior Consultant, Gaya Medical College",
    rating: 5,
    comment: "I always recommend Atul Enterprise Branch to my patients. They have an excellent stock of specialty prescription drugs and surgical instruments. Their commitment to 100% genuine medicines is highly commendable in Gaya.",
    avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=150",
    date: "2 months ago"
  },
  {
    id: "2",
    name: "Ramesh Kumar Singh",
    role: "Local Business Owner, Dulhingunj",
    rating: 5,
    comment: "Excellent service! I ordered my elder father's diabetes medicines through their WhatsApp order form. They verified the prescription and prepared the package within 30 minutes. Extremely reliable and polite staff.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    date: "1 month ago"
  },
  {
    id: "3",
    name: "Priya Sharma",
    role: "Homemaker",
    rating: 5,
    comment: "Their selection of baby care and personal hygiene products is outstanding. Getting authentic infant formula and diapers in Dulhingunj at reasonable prices used to be a task, but Atul Enterprise has everything.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    date: "3 weeks ago"
  },
  {
    id: "4",
    name: "Vikram Raj Sen",
    role: "Retired Central Govt Employee",
    rating: 5,
    comment: "I have been purchasing my monthly medicines from them since they opened. Their pricing is very reasonable, and they give genuine discounts on chronic care drugs. The staff behaves like family.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    date: "1 week ago"
  },
  {
    id: "5",
    name: "Sunita Devi",
    role: "School Teacher, Tekari Rd",
    rating: 5,
    comment: "Atul Enterprise Branch near Panchmukhi Mandir is our go-to shop for first aid and supplements. Even during peak rush hours, their service is fast and they guide you nicely on the dosage.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
    date: "2 days ago"
  },
  {
    id: "6",
    name: "Amit Yadav",
    role: "Fitness Enthusiast & Trainer",
    rating: 5,
    comment: "Finding genuine protein supplements and multivitamin tablets in Gaya is tough because of duplicates. Atul Enterprise has genuine, barcode-verifiable health supplements. Highly satisfied!",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=150",
    date: "Just now"
  }
];

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "Do you require a doctor's prescription for all medicines?",
    answer: "No, prescription is only mandatory for scheduled drugs (such as antibiotics, psychotropics, and hormone therapies). General Over-The-Counter (OTC) medicines, baby care products, health supplements, and standard medical devices do not require a prescription.",
    category: "Prescriptions"
  },
  {
    id: "faq-2",
    question: "How can I order medicines using the WhatsApp Order Form?",
    answer: "It is very simple! Go to our WhatsApp Order Form on the website, fill in your name, contact details, address, list of required medicines, and click the 'Send via WhatsApp' button. This automatically formats a message with your details and triggers WhatsApp on your device to send it directly to our verified business number (+91 93340 34440).",
    category: "Ordering"
  },
  {
    id: "faq-3",
    question: "Do you sell genuine surgical equipment and instruments?",
    answer: "Yes, we stock a wide array of premium surgical products, including sterile bandages, sutures, surgical gloves, syringes, catheters, and professional diagnostic equipment like BP monitors, thermometers, and glucometers.",
    category: "Products"
  },
  {
    id: "faq-4",
    question: "Where is Atul Enterprise Branch located in Gaya?",
    answer: "We are prominently located at Tekari Road, right near the famous Panchmukhi Mahadeo Mandir in Dulhingunj, Gaya, Bihar (Pin Code: 823001). We have a large visible storefront with easy road access.",
    category: "Store Details"
  },
  {
    id: "faq-5",
    question: "Are your medicines and wellness products 100% authentic?",
    answer: "Yes. Authenticity is our core promise. Every batch of tablets, capsules, syrups, and medical equipment is sourced directly from certified national pharmaceutical companies and licensed regional distributors. We maintain cold-chain storage for sensitive products like insulin and vaccines.",
    category: "Products"
  },
  {
    id: "faq-6",
    question: "What are your business timings?",
    answer: "We are open Monday through Saturday from 08:00 AM to 10:00 PM, and on Sundays from 09:00 AM to 08:00 PM to serve your vital healthcare needs.",
    category: "Store Details"
  },
  {
    id: "faq-7",
    question: "Do you provide discounts on monthly diabetic and blood pressure medicines?",
    answer: "Yes, we understand the financial burden of chronic illnesses. We provide attractive, genuine discounts on monthly long-term medications for diabetes, cardiac health, thyroid, and asthma.",
    category: "Offers"
  },
  {
    id: "faq-8",
    question: "Can I inquire about a medicine's availability before visiting?",
    answer: "Absolutely! You can use our real-time 'Medicine Availability Inquiry' widget on the homepage, type in the drug name, and press WhatsApp Inquiry. Alternatively, you can directly call us at 09334034440.",
    category: "Availability"
  },
  {
    id: "faq-9",
    question: "What payment methods are accepted at the physical store?",
    answer: "We accept all leading payment methods including UPI (Google Pay, PhonePe, Paytm, BHIM), major Credit & Debit cards, mobile wallets, and cash.",
    category: "Payment"
  },
  {
    id: "faq-10",
    question: "Is home delivery available in Gaya?",
    answer: "Yes, we provide same-day doorstep medicine delivery for elderly citizens, regular chronic care patients, and urgent orders within Dulhingunj, Tekari Road, and nearby areas of Gaya town for a nominal charge or free based on order size.",
    category: "Delivery"
  }
];

export const services: ServiceItem[] = [
  {
    id: "s-1",
    title: "Prescription Medicines",
    description: "Dispensing genuine Rx medications under the close supervision of certified, experienced pharmacists.",
    longDescription: "We stock a complete inventory of brand-name and generic prescription medications covering specialty treatments like oncology, cardiology, neurology, and endocrinology. Our pharmacists execute meticulous quality and double-check checks before dispensing, ensuring correct dosage guidance and potential interaction warning analysis.",
    iconName: "FileText",
    category: "Core Pharmacy"
  },
  {
    id: "s-2",
    title: "General Medicines",
    description: "Quality OTC medications for cough, cold, fever, pain relief, and seasonal healthcare issues.",
    longDescription: "Our over-the-counter medicine section features widely trusted brands for pain relief, gastrointestinal health, anti-allergics, throat lozenges, and seasonal common cold. Our friendly staff can assist you in finding appropriate, safe, non-prescription remedies.",
    iconName: "Pill",
    category: "Core Pharmacy"
  },
  {
    id: "s-3",
    title: "Health Supplements",
    description: "Multivitamins, mineral formulas, protein supplements, and targeted immunity boosters.",
    longDescription: "Maintain your active vitality with our comprehensive stock of premium multivitamin tablets, Omega-3 capsules, calcium, zinc, botanical extracts, whey protein powders, and diabetic supplements. We source only authentic, lab-certified wellness formulas.",
    iconName: "Activity",
    category: "Wellness"
  },
  {
    id: "s-4",
    title: "Baby Care Products",
    description: "Baby food formulas, skin creams, diapers, sanitizers, and certified pediatric hygiene items.",
    longDescription: "We understand that your little ones deserve the softest, safest care. We stock verified premium baby foods, pediatric vitamins, hypoallergenic baby soaps, powders, rash creams, wet wipes, and standard diapers from brands like Himalaya, Johnson's, and Pampers.",
    iconName: "Heart",
    category: "Daily Care"
  },
  {
    id: "s-5",
    title: "Personal Care Products",
    description: "Dermatological skincare products, hair care, oral hygiene, and general sanitary essentials.",
    longDescription: "Browse high-quality skincare lines, medicated face washes, non-comedogenic sunscreens, therapeutic shampoos, herbal soaps, toothpaste, antiseptic liquids, and sanitary pads. High clinical standards for your hygiene.",
    iconName: "User",
    category: "Daily Care"
  },
  {
    id: "s-6",
    title: "Medical Equipment",
    description: "Digital BP monitors, blood glucose meters, nebulizers, pulse oximeters, and heating pads.",
    longDescription: "Equip your home with easy-to-use clinical diagnostic machines. We offer premium, brand-warranty backed digital blood pressure machines, instant glucometers, inhaler nebulizers, digital thermometers, and therapeutic heating belts for pain relief.",
    iconName: "Monitor",
    category: "Surgical & Devices"
  },
  {
    id: "s-7",
    title: "Surgical Supplies",
    description: "Syringes, sterile bandages, medical tapes, surgical gloves, sutures, and wound dressing packs.",
    longDescription: "We serve local clinics, nursing homes, and post-surgery homecare patients with sterile surgical consumables. This includes disposable face masks, medical gloves, sterile gauge pads, micro-pore tapes, IV sets, and medical antiseptic solutions.",
    iconName: "Scissors",
    category: "Surgical & Devices"
  },
  {
    id: "s-8",
    title: "First Aid Products",
    description: "Antiseptic creams, band-aids, burn gels, cotton rolls, and pre-packaged first aid kits.",
    longDescription: "Prepare for minor household emergencies with our ready first aid items. We have adhesive strips, crepe bandages, cotton rolls, hydrogen peroxide, Savlon, Betadine ointment, and fully customized emergency medical kits for home or vehicle travel.",
    iconName: "Briefcase",
    category: "Wellness"
  },
  {
    id: "s-9",
    title: "Diabetic Care",
    description: "Insulin syringes, cold storage insulin, specialized sugar-free food, and diagnostic test strips.",
    longDescription: "Living with diabetes requires meticulous support. We house a dedicated refrigeration unit for premium insulin formulations. We also keep a heavy stock of blood sugar diagnostic strips (Accu-Chek, OneTouch), sugar-free health beverages, and diabetic footwear.",
    iconName: "TrendingUp",
    category: "Core Pharmacy"
  },
  {
    id: "s-10",
    title: "Healthcare Essentials",
    description: "Vaporizers, face masks, sanitizers, thermal scanners, and protective medical face shields.",
    longDescription: "General sanitization and personal protection accessories. Stay protected from urban pollution, viruses, and environmental dust with high-filtration N95 masks, continuous steam inhalers, hand washes, and protective disinfectant sprays.",
    iconName: "ShieldAlert",
    category: "Daily Care"
  }
];

export const categories: CategoryItem[] = [
  { id: "cat-1", title: "Tablets", description: "Prescription & daily OTC pills", iconName: "Pill", count: "1200+ Items" },
  { id: "cat-2", title: "Capsules", description: "Softgels, antibiotic capsules & vitamins", iconName: "Database", count: "800+ Items" },
  { id: "cat-3", title: "Syrups", description: "Pediatric syrups, cough, and digestive tonics", iconName: "Droplet", count: "450+ Items" },
  { id: "cat-4", title: "Injection", description: "Vials, ampoules & sterile vaccines", iconName: "Syringe", count: "300+ Items" },
  { id: "cat-5", title: "Medical Equipment", description: "BP monitors, oximeters & glucometers", iconName: "HeartPulse", count: "120+ Items" },
  { id: "cat-6", title: "Protein Supplements", description: "Whey proteins, energy shakes & nutritional bars", iconName: "Flame", count: "85+ Items" },
  { id: "cat-7", title: "Vitamins", description: "Immunity supplements, Calcium & Vitamin D3", iconName: "Shield", count: "210+ Items" },
  { id: "cat-8", title: "Skin Care", description: "Medicated lotions, sunscreen & acne therapy", iconName: "Sparkles", count: "350+ Items" },
  { id: "cat-9", title: "Baby Products", description: "Infant milk, baby wipes, shampoos & lotions", iconName: "Baby", count: "180+ Items" },
  { id: "cat-10", title: "Personal Hygiene", description: "Hand sanitizers, dental items & organic washes", iconName: "User", count: "250+ Items" },
  { id: "cat-11", title: "Orthopedic Support", description: "Knee braces, lumbar belts & ankle supports", iconName: "Activity", count: "95+ Items" },
  { id: "cat-12", title: "Diabetic Care", description: "Insulins, glucometers & sugar-free items", iconName: "Activity", count: "140+ Items" }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "g-1",
    title: "Atul Enterprise Branch Store Front",
    category: "Store Front",
    imageUrl: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800",
    description: "Our modern, well-lit medical store front located on Tekari Road, Dulhingunj, Gaya."
  },
  {
    id: "g-2",
    title: "Fully Stocked Medicine Shelves",
    category: "Shelves",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    description: "Categorized layout of authentic tablets, capsules, and syrups for instant retrieval."
  },
  {
    id: "g-3",
    title: "Authentic Clinical Equipment",
    category: "Equipment",
    imageUrl: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80&w=800",
    description: "Premium digital blood pressure monitors, infrared thermometers, and blood glucose testing kits."
  },
  {
    id: "g-4",
    title: "Healthcare Wellness Supplements",
    category: "Products",
    imageUrl: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=800",
    description: "Certified protein shakes, multi-vitamins, and high-quality health supplements."
  },
  {
    id: "g-5",
    title: "Pediatric & Baby Care Care Area",
    category: "Products",
    imageUrl: "https://images.unsplash.com/photo-1515488042361-404e9250afef?auto=format&fit=crop&q=80&w=800",
    description: "Safe, dermatologist-tested baby food, powder, baby oils, and diapers section."
  },
  {
    id: "g-6",
    title: "Patient Care Orthopedic Supports",
    category: "Equipment",
    imageUrl: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
    description: "Ergonomic knee sleeves, cervical collars, back posture correctors, and wrist braces."
  }
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: "t-1",
    year: "2012",
    title: "Inception of Atul Enterprise",
    description: "Started as a small local pharmaceutical provider in Gaya, determined to deliver verified authentic medicines with friendly customer counseling."
  },
  {
    id: "t-2",
    year: "2016",
    title: "Surgical Division Addition",
    description: "In response to local medical requests, we incorporated a comprehensive surgical products and diagnostic devices division, serving multiple local clinics."
  },
  {
    id: "t-3",
    year: "2019",
    title: "Launch of 'Atul Enterprise Branch' in Dulhingunj",
    description: "Established our modern flagship store branch right near the sacred Panchmukhi Mahadeo Mandir on Tekari Road to serve Dulhingunj residents directly."
  },
  {
    id: "t-4",
    year: "2022",
    title: "Smart Pharmacy Integration",
    description: "Adopted cloud-enabled inventory tracking to prevent critical stockouts of chronic life-saving drugs like insulins, cardiac drugs, and cancer medication."
  },
  {
    id: "t-5",
    year: "2024",
    title: "WhatsApp Ordering Service",
    description: "Rolled out direct prescription uploads and WhatsApp fast-checkout, allowing Gaya seniors to order easily from home without stepping out."
  }
];

export const healthTips: HealthTip[] = [
  {
    id: "tip-1",
    title: "Understanding Your Medicine Expiry & Storage Guidelines",
    summary: "Storing medicines incorrectly can reduce their potency. Read our expert tips on protecting your critical tablets and insulin from extreme Gaya heat.",
    category: "Medicine Safety",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "tip-2",
    title: "Essential Supplements for Joint Health Over Age 50",
    summary: "As we age, joint lubrication decreases. Learn how the proper pairing of Calcium, Vitamin D3, and Glucosamine helps keep you active and mobile.",
    category: "Wellness Guidance",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "tip-3",
    title: "First Aid Kit Checklist for Indian Homes",
    summary: "Accidents can occur at any time. Here are 8 vital components (ointments, medical tapes, solutions) that you must keep inside your domestic first aid box.",
    category: "Emergency Care",
    readTime: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=300"
  }
];
