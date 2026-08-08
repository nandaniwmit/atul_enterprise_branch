import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageSquare, ArrowUp, ShieldAlert, HeartPulse, Sparkles, CheckCircle2 } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import ServicesView from "./components/ServicesView";
import GalleryView from "./components/GalleryView";
import ContactView from "./components/ContactView";
import { BUSINESS_INFO } from "./types";

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>("home");
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  // Sync dark mode class with root element
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  // Monitor scroll for Back-to-Top visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Global Tracker Integration
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://crm.webmakerit.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid')!);
    }
    
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      // Return capitalized currentTab (or fallback to pathname segment)
      if (currentTab) {
        return currentTab.charAt(0).toUpperCase() + currentTab.slice(1);
      }
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid, visitor_id: visitorId, session_id: sessionId,
        page_name: getPageName(), referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent, action: 'init'
      };
      fetch(TRACKING_ENDPOINT, { 
        method: 'POST', 
        mode: 'cors', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(payload) 
      }).catch(err => {});
    };

    const sendExitPayload = () => {
      const payload = { 
        cid: cid, 
        session_id: sessionId, 
        page_name: getPageName(), 
        action: 'page_change' 
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, { 
          method: 'POST', 
          mode: 'cors', 
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify(payload), 
          keepalive: true 
        }).catch(err => {});
      }
    };

    sendInitPayload();

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('pagehide', sendExitPayload);
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') { 
        sendExitPayload(); 
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      sendExitPayload();
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pagehide', sendExitPayload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [currentTab]);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Render proper view based on current active tab
  const renderView = () => {
    switch (currentTab) {
      case "home":
        return <HomeView setCurrentTab={setCurrentTab} />;
      case "about":
        return <AboutView />;
      case "services":
        return <ServicesView />;
      case "gallery":
        return <GalleryView />;
      case "contact":
        return <ContactView />;
      default:
        return <HomeView setCurrentTab={setCurrentTab} />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col justify-between transition-colors duration-300 ${darkMode ? "bg-slate-950 text-slate-100" : "bg-[#F8FAFC] text-slate-800"}`}>
      
      {/* Sticky Header */}
      <Header 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />

      {/* Main Content Area with Page Transitions */}
      <main className="flex-grow w-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="w-full"
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer component */}
      <Footer 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab} 
      />

      {/* ========================================== */}
      {/*        FLOATING WIDGETS & CTAS             */}
      {/* ========================================== */}

      {/* 1. Left Floating Call Button */}
      <a
        id="floating-call-btn"
        href={`tel:${BUSINESS_INFO.phone}`}
        className="fixed bottom-6 left-6 z-40 flex items-center justify-center p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-115 border border-blue-500/40"
        aria-label="Call Store"
        title="Call Pharmacy"
      >
        <Phone className="w-5.5 h-5.5" />
      </a>

      {/* 2. Right Floating WhatsApp Button */}
      <button
        id="floating-whatsapp-btn"
        onClick={() => {
          // Scroll straight to the booking form if in Home, otherwise redirect to Home first
          const element = window.document.getElementById("whatsapp-form-section");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          } else {
            setCurrentTab("home");
            setTimeout(() => {
              window.document.getElementById("whatsapp-form-section")?.scrollIntoView({ behavior: "smooth" });
            }, 150);
          }
        }}
        className="fixed bottom-6 right-6 z-40 flex items-center justify-center p-4 bg-[#0A8F6A] hover:bg-[#087758] text-white rounded-full shadow-lg hover:shadow-emerald-600/30 transition-all duration-300 hover:scale-115 border border-emerald-500/40 glow-btn cursor-pointer"
        aria-label="Order via WhatsApp"
        title="WhatsApp Order Form"
      >
        <MessageSquare className="w-5.5 h-5.5 fill-white/10" />
      </button>

      {/* 3. Center Right Floating Back-to-Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            key="back-to-top"
            id="back-to-top-btn"
            onClick={handleBackToTop}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="fixed bottom-22 right-6 z-40 flex items-center justify-center p-3 bg-slate-900/80 hover:bg-slate-900 dark:bg-slate-800 dark:hover:bg-slate-700 text-white rounded-full shadow-md transition-all duration-200 cursor-pointer border border-slate-700/50"
            aria-label="Back to Top"
            title="Back to Top"
          >
            <ArrowUp className="w-4.5 h-4.5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
