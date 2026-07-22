import React, { useState } from "react";
import { 
  FileText, Pill, Activity, Heart, User, Monitor, Scissors, 
  Briefcase, TrendingUp, ShieldAlert, CheckCircle, Info, MessageSquare, Phone, X, Eye
} from "lucide-react";
import { services } from "../data";
import { BUSINESS_INFO } from "../types";

// Icon mapping dictionary
const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  FileText: FileText,
  Pill: Pill,
  Activity: Activity,
  Heart: Heart,
  User: User,
  Monitor: Monitor,
  Scissors: Scissors,
  Briefcase: Briefcase,
  TrendingUp: TrendingUp,
  ShieldAlert: ShieldAlert
};

export default function ServicesView() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Core Pharmacy", "Wellness", "Daily Care", "Surgical & Devices"];

  const filteredServices = services.filter(service => {
    return activeCategory === "All" || service.category === activeCategory;
  });

  const handleInquireWhatsApp = (serviceTitle: string) => {
    const text = encodeURIComponent(`Hello ATUL ENTERPRISE BRANCH,\nI have a requirement/inquiry regarding your service: *${serviceTitle}*.\nCould you please assist me with medicine availability? Thank you.`);
    window.open(`https://wa.me/919334034440?text=${text}`, "_blank");
  };

  return (
    <div className="space-y-16 py-10 pb-16">
      
      {/* 1. HERO HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4 px-4">
        <span className="text-brand-accent text-xs font-bold uppercase tracking-widest block font-mono">Our Specialty</span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4.5xl text-slate-900 dark:text-white tracking-tight">
          Pharmacy & Healthcare Services
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
          We combine a vast supply chain network with qualified advisory to ensure Gaya residents receive accurate treatment solutions.
        </p>
      </section>

      {/* 2. CATEGORY SELECTOR TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center overflow-x-auto pb-2 scrollbar-none gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`service-filter-${cat.toLowerCase().replace(/\s/g, "-")}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-brand-accent text-white shadow-md shadow-emerald-700/10"
                  : "bg-white hover:bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. CORE SERVICES GRID */}
      <section id="services-grid-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.iconName] || Pill;
            return (
              <div 
                key={service.id} 
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 text-left flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
              >
                {/* Visual Category Badge */}
                <div className="absolute top-4 right-4 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[9px] font-mono font-bold px-2.5 py-0.5 rounded-full">
                  {service.category}
                </div>

                <div className="space-y-4">
                  {/* Service Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 dark:bg-brand-accent/20 text-brand-accent flex items-center justify-center transition-transform group-hover:scale-110">
                    <IconComponent className="w-6 h-6 text-brand-accent" />
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-slate-900 dark:text-white text-base sm:text-lg mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between gap-4">
                  {/* Inspect Button */}
                  <button
                    type="button"
                    id={`view-service-detail-${service.id}`}
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-brand-accent hover:underline cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Details</span>
                  </button>

                  {/* Immediate Order Inquiry */}
                  <button
                    type="button"
                    id={`quick-service-whatsapp-${service.id}`}
                    onClick={() => handleInquireWhatsApp(service.title)}
                    className="p-2 rounded-xl bg-slate-50 hover:bg-emerald-50 dark:bg-slate-800 dark:hover:bg-emerald-950/20 text-[#0A8F6A] transition-colors"
                    aria-label={`Inquire about ${service.title} via WhatsApp`}
                  >
                    <MessageSquare className="w-4 h-4 fill-emerald-100/10" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. DETAIL MODAL DIALOG */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-3xl w-full max-w-2xl overflow-hidden border border-slate-200/50 dark:border-slate-800 shadow-2xl relative animate-scaleUp">
            
            {/* Header Header */}
            <div className="bg-gradient-to-r from-brand-accent to-emerald-700 p-6 text-white relative">
              <button
                id="close-service-modal-top-btn"
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-3.5 text-left">
                <div className="bg-white/10 p-2.5 rounded-2xl shrink-0">
                  {React.createElement(iconMap[selectedService.iconName] || Pill, { className: "w-7 h-7 text-white" })}
                </div>
                <div>
                  <span className="bg-white/20 text-emerald-100 text-[10px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full font-mono">
                    {selectedService.category}
                  </span>
                  <h4 className="font-display font-extrabold text-xl sm:text-2xl mt-1 tracking-tight">{selectedService.title}</h4>
                </div>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 sm:p-8 space-y-6 text-left max-h-[60vh] overflow-y-auto">
              <div className="space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Core Overview</h5>
                <p className="text-slate-800 dark:text-slate-200 text-sm leading-relaxed font-semibold">
                  {selectedService.description}
                </p>
              </div>

              <div className="space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Detailed Clinical Services</h5>
                <p className="text-slate-600 dark:text-slate-350 text-xs sm:text-sm leading-relaxed">
                  {selectedService.longDescription}
                </p>
              </div>

              {/* Service Audit Checklist */}
              <div className="bg-slate-50 dark:bg-slate-950 p-4.5 rounded-2xl border border-slate-100 dark:border-slate-850 space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-brand-accent" />
                  <span>Atul Enterprise Branch Delivery Assurances:</span>
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-400">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                    <span>Direct source verification</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                    <span>Verified batch expiry audits</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                    <span>Cold-chain refrigeration care</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                    <span>Pharmacist dose review checks</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Modal CTA footer */}
            <div className="bg-slate-50 dark:bg-slate-950 p-6 border-t border-slate-100 dark:border-slate-850 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                id="service-modal-whatsapp-btn"
                onClick={() => {
                  handleInquireWhatsApp(selectedService.title);
                  setSelectedService(null);
                }}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#0A8F6A] hover:bg-[#087758] shadow-sm transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire via WhatsApp</span>
              </button>
              
              <a
                id="service-modal-call-btn"
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-slate-700 dark:text-slate-200 bg-slate-200/60 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand-accent" />
                <span>Call Store Now</span>
              </a>

              <button
                type="button"
                id="close-service-modal-bottom-btn"
                onClick={() => setSelectedService(null)}
                className="py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-slate-500 hover:text-slate-750 dark:hover:text-slate-350 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 5. DIAGNOSTICS & HARDWARE BENEFIT BOX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-950 to-slate-900 rounded-3xl p-8 text-white relative overflow-hidden text-left border border-emerald-900/50 shadow-xl">
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-brand-accent/15 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="bg-brand-accent/20 text-brand-accent text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border border-brand-accent/30 font-mono inline-block">Diagnostic Devices</span>
            <h3 className="font-display font-extrabold text-xl sm:text-2xl lg:text-3xl tracking-tight leading-snug">
              Authentic Home Diagnostic Machines with Brand Warranties
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              We stock certified Omron BP monitors, Accu-Chek instant glucometers, nebulizers, thermal scanners, and clinical vaporizers. Every machine comes with an authentic manufacturer warranty card, stamped storefront purchase validation, and live configuration tutorials from our team.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs text-emerald-200">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-brand-accent" />
                <span>Official brand warranties</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-brand-accent" />
                <span>On-spot device demonstrations</span>
              </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
