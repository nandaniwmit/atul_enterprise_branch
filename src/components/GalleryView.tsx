import React, { useState, useMemo } from "react";
import { X, ZoomIn, ZoomOut, ArrowLeft, ArrowRight, Image as ImageIcon, MapPin, Check } from "lucide-react";
import { galleryItems } from "../data";

export default function GalleryView() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedImageIdx, setSelectedImageIdx] = useState<number | null>(null);
  const [zoomScale, setZoomScale] = useState<number>(1);

  const categories = ["All", "Store Front", "Shelves", "Products", "Equipment"];

  const filteredItems = useMemo(() => {
    return galleryItems.filter(item => {
      return activeCategory === "All" || item.category === activeCategory;
    });
  }, [activeCategory]);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIdx === null) return;
    setZoomScale(1);
    setSelectedImageIdx(prev => {
      if (prev === null) return null;
      return prev === 0 ? filteredItems.length - 1 : prev - 1;
    });
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIdx === null) return;
    setZoomScale(1);
    setSelectedImageIdx(prev => {
      if (prev === null) return null;
      return prev === filteredItems.length - 1 ? 0 : prev + 1;
    });
  };

  const currentImage = selectedImageIdx !== null ? filteredItems[selectedImageIdx] : null;

  return (
    <div className="space-y-16 py-10 pb-16">
      
      {/* 1. HERO HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4 px-4">
        <span className="text-brand-accent text-xs font-bold uppercase tracking-widest block font-mono">Store Tour</span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4.5xl text-slate-900 dark:text-white tracking-tight">
          Our Pharmacy Gallery
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
          Take a digital walk-through of Atul Enterprise Branch on Tekari Road. Explore our pristine shelves, cold storage facilities, and genuine health hardware.
        </p>
      </section>

      {/* 2. CATEGORY FILTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center overflow-x-auto pb-2 scrollbar-none gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`gallery-filter-${cat.toLowerCase().replace(/\s/g, "-")}`}
              onClick={() => {
                setActiveCategory(cat);
                setSelectedImageIdx(null);
              }}
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

      {/* 3. MASONRY GALLERY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, idx) => {
            // Find global index in filtered list
            return (
              <button
                key={item.id}
                id={`gallery-thumb-${item.id}`}
                onClick={() => {
                  setSelectedImageIdx(idx);
                  setZoomScale(1);
                }}
                className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 text-left hover:shadow-lg transition-all duration-350 flex flex-col cursor-pointer"
              >
                {/* Image Wrap */}
                <div className="aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-950 relative">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category overlay */}
                  <span className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-sm text-white text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full z-10">
                    {item.category}
                  </span>
                  
                  {/* Zoom Icon Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/90 text-slate-900 p-3 rounded-full shadow-md transform translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                      <ZoomIn className="w-5 h-5 text-brand-accent" />
                    </div>
                  </div>
                </div>

                {/* Text Wrap */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-1 group-hover:text-brand-accent transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-accent mt-4">
                    <Check className="w-3.5 h-3.5" /> Verified Authenticity
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 4. LIGHTBOX OVERLAY */}
      {selectedImageIdx !== null && currentImage && (
        <div 
          className="fixed inset-0 z-55 bg-slate-950/95 flex flex-col justify-between p-4 animate-fadeIn"
          onClick={() => setSelectedImageIdx(null)}
        >
          {/* Top Controls Bar */}
          <div className="flex justify-between items-center text-white py-2 px-4 relative z-20">
            <div className="text-left">
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold">
                {currentImage.category}
              </span>
              <h4 className="font-display font-extrabold text-sm sm:text-lg max-w-sm sm:max-w-md truncate">
                {currentImage.title}
              </h4>
            </div>

            <div className="flex items-center gap-3">
              {/* Zoom Controls */}
              <button
                type="button"
                id="lightbox-zoom-in"
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomScale(prev => Math.min(prev + 0.25, 2));
                }}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Zoom In"
              >
                <ZoomIn className="w-4.5 h-4.5" />
              </button>
              <button
                type="button"
                id="lightbox-zoom-out"
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomScale(prev => Math.max(prev - 0.25, 0.75));
                }}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Zoom Out"
              >
                <ZoomOut className="w-4.5 h-4.5" />
              </button>
              
              {/* Close Button */}
              <button
                type="button"
                id="close-lightbox-btn"
                onClick={() => setSelectedImageIdx(null)}
                className="p-2 rounded-lg bg-brand-accent hover:bg-emerald-600 transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Core Image Display Area with Navigators */}
          <div className="flex-1 flex items-center justify-center relative my-4">
            {/* Previous Arrow */}
            <button
              type="button"
              id="lightbox-prev-btn"
              onClick={handlePrevImage}
              className="absolute left-4 z-20 p-3.5 rounded-full bg-slate-900/60 hover:bg-slate-800 text-white border border-slate-800 transition-colors"
              aria-label="Previous Image"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            {/* Displayed Image */}
            <div className="max-w-[85vw] max-h-[70vh] overflow-hidden flex items-center justify-center transition-all duration-300">
              <img 
                src={currentImage.imageUrl} 
                alt={currentImage.title}
                referrerPolicy="no-referrer"
                style={{ transform: `scale(${zoomScale})` }}
                className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl transition-transform duration-200 pointer-events-none"
              />
            </div>

            {/* Next Arrow */}
            <button
              type="button"
              id="lightbox-next-btn"
              onClick={handleNextImage}
              className="absolute right-4 z-20 p-3.5 rounded-full bg-slate-900/60 hover:bg-slate-800 text-white border border-slate-800 transition-colors"
              aria-label="Next Image"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Information Panel */}
          <div className="max-w-xl mx-auto text-center text-slate-300 px-4 pb-4 space-y-2 relative z-20">
            <p className="text-xs sm:text-sm leading-relaxed">
              {currentImage.description}
            </p>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
              Image {selectedImageIdx + 1} of {filteredItems.length}
            </span>
          </div>
        </div>
      )}

      {/* 5. SEAMLESS INFRASTRUCTURE HIGHLIGHT BOX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 dark:bg-slate-950 p-8 rounded-3xl border border-slate-150 dark:border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-6 text-left">
          <div className="space-y-2.5">
            <span className="text-brand-accent text-xs font-bold uppercase tracking-widest block font-mono">Cold Chain Facility</span>
            <h4 className="font-display font-extrabold text-base sm:text-xl text-slate-900 dark:text-white">Strict Refrigerated Cabinet Systems</h4>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm max-w-3xl">
              Thermal storage is vital for vaccines, critical hormones, insulin vials, and pediatric solutions. Atul Enterprise Branch operates certified, battery-backed backup storage cabinet systems that maintain a temperature of 2°C to 8°C continuously, shielding drugs from Bihar's summer temperature surges.
            </p>
          </div>
          <div className="flex items-center gap-2 text-brand-accent text-xs font-extrabold whitespace-nowrap bg-brand-accent/10 dark:bg-brand-accent/20 px-4 py-2.5 rounded-xl shrink-0">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping"></span>
            <span>Continuous Temperature Monitored</span>
          </div>
        </div>
      </section>

    </div>
  );
}
