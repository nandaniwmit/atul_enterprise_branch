import React from "react";
import { Award, Eye, Target, Heart, ShieldAlert, Sparkles, Clock, Users, ArrowRight, MapPin } from "lucide-react";
import { timelineEvents, galleryItems } from "../data";
import { BUSINESS_INFO } from "../types";

export default function AboutView() {
  const values = [
    { title: "100% Drug Authenticity", desc: "No generic substitutes unless explicitly requested. Every medicine is barcode-tracked and certified genuine.", icon: Award, color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/20" },
    { title: "Patient Safety First", desc: "Our certified pharmacists cross-examine high-risk medications against potential drug allergies and physician directions.", icon: ShieldAlert, color: "text-rose-600 bg-rose-50 dark:bg-rose-950/20" },
    { title: "Fair Pricing", desc: "Healthcare shouldn't break the bank. We offer maximum honest discounts on continuous chronic care medication.", icon: Heart, color: "text-amber-600 bg-amber-50 dark:bg-amber-950/20" },
    { title: "Continuous Support", desc: "Whether it is finding a rare injection or answering dosage concerns, our team supports you with a smiling face.", icon: Sparkles, color: "text-indigo-600 bg-indigo-50 dark:bg-indigo-950/20" }
  ];

  return (
    <div className="space-y-16 py-10 pb-16">
      
      {/* 1. HERO HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4 px-4">
        <span className="text-brand-accent text-xs font-bold uppercase tracking-widest block font-mono">Our Heritage</span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4.5xl text-slate-900 dark:text-white tracking-tight">
          About Atul Enterprise Branch
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
          A pillars of trust, authenticity, and compassionate customer care in the heart of Dulhingunj, Gaya.
        </p>
      </section>

      {/* 2. STORY & OWNER MESSAGE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Store Image Card */}
          <div className="space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200/50 dark:border-slate-850 aspect-[4/3] bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800" 
                alt="Atul Enterprise Pharmacy Branch Storefront" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-sm text-white text-xs px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-accent" />
                <span>Tekari Road Branch, Gaya</span>
              </div>
            </div>

            {/* Accented Quote from Owner */}
            <div className="bg-emerald-50/50 dark:bg-emerald-950/10 border-l-4 border-brand-accent p-5 rounded-r-2xl text-left">
              <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm italic leading-relaxed">
                "Our pharmacy is not just a commercial counter. It is a vital neighborhood sanctuary where we ensure that no grandmother goes without her insulin, and no parent has to doubt the authenticity of their child's vitamins."
              </p>
              <div className="mt-3.5">
                <span className="block font-bold text-slate-900 dark:text-white text-xs sm:text-sm">{BUSINESS_INFO.owner}</span>
                <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-mono">Founder & Licensed Pharmacist</span>
              </div>
            </div>
          </div>

          {/* Business Story Narrative */}
          <div className="space-y-6 text-left">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">Our Business Story</h3>
            
            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
              <p>
                Founded in 2012 in Gaya, <strong>Atul Enterprise</strong> emerged from a simple observation: local patients deserved reliable, immediate access to critical specialty medicines without having to travel to major state capitals. What started as a single pharmaceutical counter grew into an essential wellness partner.
              </p>
              <p>
                To serve the central Dulhingunj neighborhood with greater agility, we launched our <strong>Atul Enterprise Branch</strong> right on Tekari Road, adjacent to the historic Panchmukhi Mahadeo Mandir. This branch brings together advanced refrigeration facilities, experienced pharmacists, and the region's largest inventory of surgical accessories under one roof.
              </p>
              <p>
                Through decades of seasonal challenges, health emergencies, and industrial shifts, we have maintained a strict, uncompromised audit checklist: <strong>Zero tolerance for duplicate drugs, precise batch tracking, and smiling local assistance.</strong>
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-brand-accent/10 dark:bg-brand-accent/20 text-brand-accent flex items-center justify-center font-bold text-sm shrink-0">12+</div>
                <div>
                  <span className="block font-bold text-slate-900 dark:text-white text-xs">Years Service</span>
                  <span className="block text-[10px] text-slate-400">Authentic Care</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-brand-accent/10 dark:bg-brand-accent/20 text-brand-accent flex items-center justify-center font-bold text-sm shrink-0">50K+</div>
                <div>
                  <span className="block font-bold text-slate-900 dark:text-white text-xs">Satisfied Buyers</span>
                  <span className="block text-[10px] text-slate-400">Gaya & Nearby</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. MISSION, VISION, VALUES */}
      <section className="bg-slate-50 dark:bg-slate-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Mission & Vision cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-left">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 dark:bg-brand-accent/20 text-brand-accent flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="font-display font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white">Our Mission</h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                To safeguard Gaya's family health by supplying 100% genuine pharmaceutical drugs, clinical equipment, and health supplements. We combine high-tech inventory checks with direct empathetic advisory and easy digital accessibility.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h4 className="font-display font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white">Our Vision</h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                To be recognized as Bihar's most trusted, consumer-friendly local drugstore network, leading the transition towards hybrid healthcare fulfillment where seniors and remote families can order comfortably from WhatsApp.
              </p>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="space-y-10">
            <div className="space-y-2 text-center">
              <h4 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white">Our Shared Values</h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs max-w-xl mx-auto">
                These principles guide every drug purchase we source, every prescription we dispense, and every customer we serve.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {values.map((val, idx) => {
                const IconComponent = val.icon;
                return (
                  <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-850">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${val.color}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h5 className="font-display font-bold text-slate-900 dark:text-white text-xs sm:text-sm mb-1.5">{val.title}</h5>
                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{val.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 4. BUSINESS HISTORY TIMELINE */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-left">
        <div className="space-y-2 text-center mb-12">
          <span className="text-brand-accent text-xs font-bold uppercase tracking-widest block font-mono">Evolution</span>
          <h4 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white">Our History Timeline</h4>
          <p className="text-slate-500 dark:text-slate-400 text-xs">
            How we grew from a small neighborhood cabinet store into Dulhingunj's landmark modern branch.
          </p>
        </div>

        <div className="relative border-l border-slate-200 dark:border-slate-800 pl-6 sm:pl-8 space-y-10 ml-4 sm:ml-6">
          {timelineEvents.map((event) => (
            <div key={event.id} className="relative">
              {/* Timeline Indicator Node */}
              <span className="absolute -left-10 sm:-left-12 top-1.5 bg-brand-accent border-4 border-white dark:border-slate-950 w-5 h-5 rounded-full flex items-center justify-center shadow-sm"></span>
              
              <div className="space-y-1.5">
                <span className="inline-block bg-brand-accent/15 text-brand-accent text-xs font-mono font-bold px-2.5 py-0.5 rounded-full">
                  {event.year}
                </span>
                <h5 className="font-display font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                  {event.title}
                </h5>
                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
