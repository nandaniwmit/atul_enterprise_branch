import React, { useState, useMemo } from "react";
import { 
  ShieldCheck, Award, DollarSign, Zap, FileText, Heart, MapPin, 
  Search, Star, CheckCircle2, ChevronDown, ChevronUp, ArrowRight,
  MessageSquare, Phone, Calendar, Shield, Activity, Plus, Sparkles, Check, Info
} from "lucide-react";
import { testimonials, faqItems, services, categories, healthTips } from "../data";
import { BUSINESS_INFO } from "../types";
import WhatsAppOrderForm from "./WhatsAppOrderForm";

interface HomeViewProps {
  setCurrentTab: (tab: string) => void;
}

export default function HomeView({ setCurrentTab }: HomeViewProps) {
  // Medicine Availability Search State
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState<{status: string, message: string} | null>(null);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<string | null>("faq-1");
  const [faqSearch, setFaqSearch] = useState("");
  const [faqCategory, setFaqCategory] = useState("All");

  // Why Choose Us list
  const choices = [
    { title: "100% Genuine Medicines", desc: "Sourced directly from licensed national distributors & top-tier manufacturers.", icon: ShieldCheck, color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/20" },
    { title: "Experienced Staff", desc: "Our certified pharmacists verify every single drug dosage and instruction.", icon: Award, color: "text-blue-600 bg-blue-50 dark:bg-blue-950/20" },
    { title: "Affordable Prices", desc: "Genuine savings on regular chronic-care tablets with maximum legal discount.", icon: DollarSign, color: "text-amber-600 bg-amber-50 dark:bg-amber-950/20" },
    { title: "Fast Service", desc: "Zero long waiting queues. Prescription dispatch completed under 15 minutes.", icon: Zap, color: "text-rose-600 bg-rose-50 dark:bg-rose-950/20" },
    { title: "Prescription Medicines", desc: "Heavy stock of specialty drugs for cardio, diabetes, and clinical care.", icon: FileText, color: "text-teal-600 bg-teal-50 dark:bg-teal-950/20" },
    { title: "Healthcare Products", desc: "Wide collection of clinical devices, surgical accessories, and hygiene items.", icon: Heart, color: "text-pink-600 bg-pink-50 dark:bg-pink-950/20" },
    { title: "Trusted Local Pharmacy", desc: "Serving Dulhingunj & Tekari Rd families with continuous healthcare care.", icon: CheckCircle2, color: "text-purple-600 bg-purple-50 dark:bg-purple-950/20" },
    { title: "Easy WhatsApp Support", desc: "Instantly upload prescription snapshots from home and fetch availability confirmation.", icon: MessageSquare, color: "text-indigo-600 bg-indigo-50 dark:bg-indigo-950/20" }
  ];

  // Working Process Steps
  const processSteps = [
    { step: "01", title: "Visit Store", desc: "Walk in to our modern Tekari Road storefront or upload details via our digital form.", icon: MapPin },
    { step: "02", title: "Share Prescription", desc: "Handover or snap your physician prescription. Our licensed pharmacist reviews it.", icon: FileText },
    { step: "03", title: "Get Medicines", desc: "We pull fresh stocks from cold chain/dry storage and double check batch authenticity.", icon: ShieldCheck },
    { step: "04", title: "Easy Payment", desc: "Pay seamlessly with any UPI apps, Debit/Credit Card, or convenient cash.", icon: DollarSign }
  ];

  // Search Availability Inquiry Simulation
  const handleAvailabilitySearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const query = searchQuery.toLowerCase().trim();
    
    // Simulate stock check
    if (query.includes("crocin") || query.includes("paracetamol") || query.includes("metformin") || query.includes("insulin") || query.includes("pantocid") || query.includes("vitamin") || query.includes("calcium") || query.includes("combiflam")) {
      setSearchResult({
        status: "available",
        message: `✅ "${searchQuery}" is fully IN STOCK at our branch! Click below to order immediately.`
      });
    } else {
      setSearchResult({
        status: "inquire",
        message: `ℹ️ Stock status for "${searchQuery}" requires active manual verification. Our team responds instantly.`
      });
    }
  };

  const handleInquiryWhatsApp = () => {
    const text = encodeURIComponent(`Hello ATUL ENTERPRISE BRANCH,\nI would like to inquire about the availability of the following medicine:\n- Medicine Name: ${searchQuery}\n\nPlease confirm if it is in stock at your Gaya branch. Thank you!`);
    window.open(`https://wa.me/919334034440?text=${text}`, "_blank");
  };

  // Filtered FAQs
  const filteredFaqs = useMemo(() => {
    return faqItems.filter(item => {
      const matchSearch = item.question.toLowerCase().includes(faqSearch.toLowerCase()) || 
                          item.answer.toLowerCase().includes(faqSearch.toLowerCase());
      const matchCategory = faqCategory === "All" || item.category === faqCategory;
      return matchSearch && matchCategory;
    });
  }, [faqSearch, faqCategory]);

  const faqCategories = ["All", "Prescriptions", "Ordering", "Products", "Store Details", "Delivery"];

  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. HERO SECTION WITH IMAGE & INTEGRATED DRUG INQUIRY */}
      <section className="relative overflow-hidden bg-slate-900 text-white pt-20 pb-24 lg:pt-28 lg:pb-32">
        {/* Background Decorative Graphic */}
        <div className="absolute inset-0 z-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1600" 
            alt="Pharmacy Healthcare Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900 to-transparent"></div>
        </div>

        {/* Floating Glowing Accents */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Text Context */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-brand-accent/20 text-brand-accent border border-brand-accent/30">
                <Check className="w-3.5 h-3.5" /> Established local drugstore
              </span>
              
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
                ATUL ENTERPRISE <br/>
                <span className="text-brand-accent">BRANCH</span>
              </h2>
              
              <h3 className="font-display font-semibold text-xl sm:text-2xl text-slate-300">
                Your Trusted Pharmacy in Tekari Road, Gaya
              </h3>
              
              <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
                Providing 100% genuine medicines, healthcare products, sterile surgical supplies, child care, and wellness essentials at highly affordable prices. Backed by licensed experienced pharmacists who value your family's safety.
              </p>

              {/* Main Call to Actions */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  id="hero-call-btn"
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-white text-slate-900 hover:bg-slate-100 transition-all shadow-md cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-brand-accent" />
                  <span>Call Store Now</span>
                </a>
                
                <button
                  id="hero-whatsapp-btn"
                  onClick={() => document.getElementById("whatsapp-form-section")?.scrollIntoView({ behavior: "smooth" })}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#0A8F6A] hover:bg-[#087758] text-white transition-all shadow-md glow-btn cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Order</span>
                </button>

                <a
                  id="hero-directions-btn"
                  href="https://maps.google.com/?q=Tekari+Rd,+near+Panchmukhi+Mahadeo+Mandir,+Dulhingunj,+Gaya,+Bihar+823001"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-slate-800 text-slate-300 hover:bg-slate-700 transition-all border border-slate-700/80"
                >
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Trust highlights */}
              <div className="pt-6 border-t border-slate-800 grid grid-cols-3 gap-4">
                <div>
                  <p className="font-display font-extrabold text-2xl text-white">100%</p>
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider">Genuine Stock</p>
                </div>
                <div>
                  <p className="font-display font-extrabold text-2xl text-white">12+</p>
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider">Years Trust</p>
                </div>
                <div>
                  <p className="font-display font-extrabold text-2xl text-white">Quick</p>
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider">WhatsApp Dispatch</p>
                </div>
              </div>
            </div>

            {/* Hero Availability Search Box Card */}
            <div className="lg:col-span-5 bg-slate-800/80 border border-slate-700/60 p-6 sm:p-8 rounded-3xl shadow-2xl glass-dark-effect">
              <h4 className="font-display font-bold text-lg text-white mb-2 flex items-center gap-2">
                <Search className="w-5 h-5 text-brand-accent" />
                <span>Medicine Availability Inquiry</span>
              </h4>
              <p className="text-slate-400 text-xs mb-6 leading-relaxed">
                Save a trip to Dulhingunj! Enter the medicine or brand name below to instantly check stock availability or message us.
              </p>

              <form onSubmit={handleAvailabilitySearch} className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      if (searchResult) setSearchResult(null);
                    }}
                    placeholder="Enter medicine name (e.g. Paracetamol, Metformin)"
                    className="w-full pl-4 pr-12 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-brand-accent placeholder-slate-500"
                  />
                  <button
                    type="submit"
                    id="hero-inquiry-search-submit"
                    className="absolute right-2 top-2 p-2 rounded-lg bg-brand-accent hover:bg-emerald-600 text-white transition-colors"
                    aria-label="Search medicine availability"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                </div>

                {searchResult ? (
                  <div className={`p-4 rounded-xl text-xs space-y-3 ${
                    searchResult.status === "available"
                      ? "bg-emerald-950/40 text-emerald-300 border border-emerald-800/50"
                      : "bg-amber-950/40 text-amber-300 border border-amber-800/50"
                  }`}>
                    <p className="font-medium leading-relaxed">{searchResult.message}</p>
                    <button
                      type="button"
                      id="hero-search-whatsapp-trigger"
                      onClick={handleInquiryWhatsApp}
                      className="w-full flex items-center justify-center gap-1.5 py-2 rounded-lg font-bold text-slate-900 bg-white hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-brand-accent fill-brand-accent/10" />
                      <span>Confirm Order via WhatsApp</span>
                    </button>
                  </div>
                ) : (
                  <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-700/30">
                    <p className="text-[11px] text-slate-400 leading-relaxed flex gap-2">
                      <Info className="w-4 h-4 shrink-0 text-slate-500" />
                      <span>Type a brand/salt and submit to test mock stock search. For unlisted medicines, the widget lets you directly send a formatted WhatsApp prompt!</span>
                    </p>
                  </div>
                )}

                <div className="pt-2">
                  <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2">Commonly Searched:</span>
                  <div className="flex flex-wrap gap-2">
                    {["Paracetamol", "Metformin 500", "Pantocid D", "Insulin Lantus"].map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        id={`tag-search-${tag.toLowerCase().replace(/\s/g, "-")}`}
                        onClick={() => {
                          setSearchQuery(tag);
                          setSearchResult({
                            status: "available",
                            message: `✅ "${tag}" is fully IN STOCK at our Gaya branch! Click below to place order.`
                          });
                        }}
                        className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-750 text-[11px] text-slate-400 hover:text-white transition-colors"
                      >
                        +{tag}
                      </button>
                    ))}
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 2. EMERGENCY BANNER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="bg-gradient-to-r from-emerald-600 via-brand-accent to-blue-700 p-6 sm:p-8 rounded-3xl shadow-xl text-white">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="space-y-2 text-left">
              <span className="bg-amber-400 text-slate-900 text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full">Emergency Contact</span>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl tracking-tight">Need Urgent or Life-Saving Medicines?</h3>
              <p className="text-emerald-50 text-xs sm:text-sm max-w-2xl leading-relaxed">
                We prioritize urgent care prescriptions. Call our priority store number for oxygen meters, specialized inhalers, surgical dressings, or cardiac care drugs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <a
                id="emergency-call-btn"
                href={`tel:${BUSINESS_INFO.emergencyPhone}`}
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-extrabold text-sm shadow-md transition-transform hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-rose-600" />
                <span>Call Emergency Line</span>
              </a>
              <button
                id="emergency-whatsapp-btn"
                onClick={() => {
                  const url = `https://wa.me/919334034440?text=Urgently%20required%20medicines.%20Please%20verify%20availability%20ASAP.`;
                  window.open(url, "_blank");
                }}
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-800 text-white hover:bg-emerald-900 rounded-xl font-bold text-sm shadow-md border border-emerald-700/60 transition-transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Priority WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-3 max-w-2xl mx-auto mb-12">
          <span className="text-brand-accent text-xs font-bold uppercase tracking-widest block">Core Strengths</span>
          <h3 className="font-display font-extrabold text-2xl sm:text-3.5xl text-slate-900 dark:text-white tracking-tight">
            Why Atul Enterprise Branch is Gaya's Choice
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
            Serving Gaya communities with licensed healthcare professionals, strict cold-chain infrastructure, and a robust inventory checklist.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {choices.map((choice, i) => {
            const IconComponent = choice.icon;
            return (
              <div 
                key={i} 
                className="bg-white dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 text-left hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${choice.color}`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-slate-900 dark:text-white text-base mb-2">{choice.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{choice.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. FEATURED CATEGORIES */}
      <section className="bg-slate-50 dark:bg-slate-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-3 max-w-2xl mx-auto mb-12">
            <span className="text-brand-accent text-xs font-bold uppercase tracking-widest block font-mono">Store Inventory</span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3.5xl text-slate-900 dark:text-white tracking-tight">
              Featured Healthcare Categories
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
              We stock an extensive variety of therapeutic products to ensure you never leave empty handed.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`cat-card-${cat.id}`}
                onClick={() => {
                  setCurrentTab("services");
                  setTimeout(() => {
                    const el = document.getElementById("services-grid-section");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
                className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-850 hover:border-brand-accent/50 text-center hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-brand-accent/10 dark:bg-brand-accent/20 text-brand-accent flex items-center justify-center mx-auto mb-3.5 group-hover:scale-110 transition-transform">
                  <Activity className="w-5 h-5 text-brand-accent" />
                </div>
                <h4 className="font-display font-bold text-slate-800 dark:text-slate-200 text-xs sm:text-sm truncate">{cat.title}</h4>
                <p className="text-[11px] text-slate-400 mt-1 dark:text-slate-500">{cat.description}</p>
                {cat.count && (
                  <span className="inline-block mt-3 text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-brand-accent/10 group-hover:text-brand-accent transition-colors">
                    {cat.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="mt-8">
            <button
              id="view-all-services-btn"
              onClick={() => setCurrentTab("services")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs bg-slate-900 text-white dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
            >
              <span>Explore All 10 Services</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-accent" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. WORKING PROCESS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-3 max-w-2xl mx-auto mb-14">
          <span className="text-brand-accent text-xs font-bold uppercase tracking-widest block font-mono">Process Flow</span>
          <h3 className="font-display font-extrabold text-2xl sm:text-3.5xl text-slate-900 dark:text-white tracking-tight">
            How It Works
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
            Getting your correct prescription medicines from Atul Enterprise Branch is quick, simple, and transparent.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-8 z-0"></div>

          {processSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-50 dark:border-slate-950 flex items-center justify-center shadow-md relative group hover:scale-105 transition-transform mb-4">
                  <Icon className="w-6 h-6 text-brand-accent" />
                  <span className="absolute -top-1.5 -right-1.5 bg-brand-accent text-white text-[10px] font-mono font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {step.step}
                  </span>
                </div>
                <h4 className="font-display font-bold text-slate-800 dark:text-slate-200 text-sm mb-1.5">{step.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs max-w-xs leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. WHATSAPP FORM SECION IN THE CENTER */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        <div className="absolute top-20 right-10 w-44 h-44 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute bottom-20 left-10 w-44 h-44 bg-brand-blue/10 rounded-full blur-2xl pointer-events-none"></div>
        <WhatsAppOrderForm />
      </section>

      {/* 7. CUSTOMER TRUST REVIEWS */}
      <section className="bg-slate-50 dark:bg-slate-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-3 max-w-2xl mx-auto mb-12">
            <span className="text-brand-accent text-xs font-bold uppercase tracking-widest block font-mono">Testimonials</span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3.5xl text-slate-900 dark:text-white tracking-tight">
              Why Customers Trust Us
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
              We focus on building long-term health partnerships. Read reviews from verified local patients and consulting doctors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((test) => (
              <div 
                key={test.id} 
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 text-left flex flex-col justify-between hover:shadow-md transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(test.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4.5 h-4.5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed italic">
                    "{test.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
                  <img 
                    src={test.avatar} 
                    alt={test.name} 
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border border-slate-100 dark:border-slate-700"
                  />
                  <div>
                    <h5 className="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{test.name}</h5>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">{test.role}</p>
                  </div>
                  <span className="text-[10px] text-slate-400 ml-auto font-mono whitespace-nowrap">{test.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Google Reviews rating badge */}
          <div className="mt-10 inline-flex items-center gap-3 bg-white dark:bg-slate-900 px-5 py-3 rounded-2xl border border-slate-200/60 dark:border-slate-800">
            <div className="bg-amber-100 dark:bg-amber-950 text-amber-500 p-2 rounded-xl">
              <Star className="w-5 h-5 fill-amber-500" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-slate-900 dark:text-white">Rated 4.9/5 stars on Google</p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">Based on 140+ verified buyer ratings in Gaya</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="space-y-3 text-center mb-10">
          <span className="text-brand-accent text-xs font-bold uppercase tracking-widest block font-mono">FAQ Section</span>
          <h3 className="font-display font-extrabold text-2xl sm:text-3.5xl text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
            Find answers to standard inquiries regarding medicine stock, prescription guidelines, home delivery, and payments.
          </p>
        </div>

        {/* Filters and search block */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              id="faq-search-input"
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              placeholder="Search FAQs (e.g. insulin, discount, address)"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-brand-accent"
            />
          </div>
          <div className="flex gap-1 overflow-x-auto pb-1 sm:pb-0 shrink-0 scrollbar-none">
            {faqCategories.slice(0, 4).map((cat) => (
              <button
                key={cat}
                id={`faq-cat-${cat.toLowerCase().replace(/\s/g, "-")}`}
                onClick={() => setFaqCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  faqCategory === cat
                    ? "bg-brand-accent text-white"
                    : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className="bg-white dark:bg-slate-900/60 rounded-2xl border border-slate-150 dark:border-slate-800/80 overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    id={`faq-btn-${faq.id}`}
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full flex justify-between items-center px-5 py-4 text-left font-display font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200 hover:text-brand-accent dark:hover:text-brand-accent transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-brand-accent shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                  </button>
                  
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-slate-100 dark:border-slate-800/40 text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 text-slate-400 bg-white dark:bg-slate-900/40 rounded-2xl border border-dashed border-slate-200">
              <p>No matches found. Try searching another keyword or call our help desk.</p>
            </div>
          )}
        </div>
      </section>

      {/* 9. HEALTH BLOG / tips */}
      <section className="bg-slate-50 dark:bg-slate-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
            <div className="space-y-2 text-left">
              <span className="text-brand-accent text-xs font-bold uppercase tracking-widest block font-mono">Wellness Hub</span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3.5xl text-slate-900 dark:text-white tracking-tight">
                Latest Health Awareness Tips
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm max-w-xl">
                Stay updated with verified pharmaceutical storage, daily wellness guidelines, and seasonal prevention insights.
              </p>
            </div>
            
            <button
              id="view-all-tips-btn"
              onClick={() => {
                alert("Our continuous full-length blog section is coming soon! Meanwhile, please browse our detailed tips here.");
              }}
              className="text-xs font-bold text-brand-accent hover:underline flex items-center gap-1 shrink-0"
            >
              <span>View All Health Tips</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {healthTips.map((tip) => (
              <article 
                key={tip.id} 
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-850 overflow-hidden hover:shadow-md transition-all flex flex-col group text-left"
              >
                <div className="h-44 relative overflow-hidden bg-slate-100">
                  <img 
                    src={tip.imageUrl} 
                    alt={tip.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-slate-900/90 text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-full">
                    {tip.category}
                  </span>
                </div>
                
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] text-slate-400 font-mono">{tip.readTime}</span>
                    <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm sm:text-base group-hover:text-brand-accent transition-colors leading-snug">
                      {tip.title}
                    </h4>
                    <p className="text-slate-500 dark:text-slate-400 text-xs line-clamp-3 leading-relaxed">
                      {tip.summary}
                    </p>
                  </div>
                  
                  <button
                    type="button"
                    id={`read-tip-btn-${tip.id}`}
                    onClick={() => {
                      alert(`"${tip.title}"\n\nFull blog post is in review pipeline. Stay tuned for expert healthcare publications!`);
                    }}
                    className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-left text-xs font-bold text-brand-accent flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
                  >
                    <span>Read Full Post</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. OFFERS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/40 p-6 sm:p-8 rounded-3xl text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-1.5">
            <span className="bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300 text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full">Monthly Offer</span>
            <h4 className="font-display font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white">Senior Citizens Medicine Benefit Scheme</h4>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm max-w-2xl">
              Get an extra discount on all recurring monthly chronic medicines (diabetic, heart care, BP) for senior citizens above 60. WhatsApp your prescription and verification today.
            </p>
          </div>
          <button
            id="offer-inquire-btn"
            onClick={() => {
              const url = `https://wa.me/919334034440?text=Please%20provide%20details%20on%20Senior%20Citizen%20Medicine%20discounts.`;
              window.open(url, "_blank");
            }}
            className="w-full md:w-auto shrink-0 bg-slate-900 hover:bg-slate-800 dark:bg-amber-500 dark:hover:bg-amber-600 text-white dark:text-slate-950 font-bold text-xs sm:text-sm py-3 px-5 rounded-xl transition-colors cursor-pointer"
          >
            Inquire Offer via WhatsApp
          </button>
        </div>
      </section>

    </div>
  );
}
