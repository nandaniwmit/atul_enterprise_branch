import React, { useState, useRef } from "react";
import { MessageSquare, Phone, Upload, CheckCircle2, AlertCircle, FileText, Trash2, Clock, MapPin, Search } from "lucide-react";
import { BUSINESS_INFO, MedicineInquiry } from "../types";

export default function WhatsAppOrderForm() {
  const [formData, setFormData] = useState<MedicineInquiry>({
    name: "",
    mobile: "",
    email: "",
    address: "",
    medicineName: "",
    hasPrescription: false,
    message: "",
    deliveryTime: "Anytime (08:00 AM - 08:00 PM)"
  });

  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Drag and drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      setPrescriptionFile(file);
      setFormData(prev => ({ ...prev, hasPrescription: true }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setPrescriptionFile(file);
      setFormData(prev => ({ ...prev, hasPrescription: true }));
    }
  };

  const removeFile = () => {
    setPrescriptionFile(null);
    setFormData(prev => ({ ...prev, hasPrescription: false }));
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!formData.name.trim()) {
      setFormError("Please enter your name");
      return;
    }
    if (!formData.mobile.trim() || formData.mobile.length < 10) {
      setFormError("Please enter a valid 10-digit mobile number");
      return;
    }
    if (!formData.medicineName.trim()) {
      setFormError("Please state which medicine(s) you require");
      return;
    }
    if (!formData.address.trim()) {
      setFormError("Please enter your delivery address");
      return;
    }

    // Prepare WhatsApp Message according to specifications
    const brandNameFormatted = `Hello ATUL ENTERPRISE BRANCH\n\n`;
    const customerText = `Customer Name: ${formData.name}\n`;
    const phoneText = `Phone: ${formData.mobile}\n`;
    const emailText = formData.email ? `Email: ${formData.email}\n` : "";
    const medicineText = `Medicine Required: ${formData.medicineName}\n`;
    const addressText = `Address: ${formData.address}\n`;
    const prescriptionText = `Prescription Attached: ${formData.hasPrescription ? `Yes (${prescriptionFile?.name || "Uploaded Image"})` : "No"}\n`;
    const timeText = `Preferred Delivery Time: ${formData.deliveryTime}\n`;
    const msgText = `Message: ${formData.message || "None"}\n`;

    const formattedMessage = encodeURIComponent(
      `${brandNameFormatted}${customerText}${phoneText}${emailText}${medicineText}${addressText}${prescriptionText}${timeText}${msgText}`
    );

    const whatsappUrl = `https://wa.me/919334034440?text=${formattedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
    setIsSubmitted(true);
  };

  return (
    <div id="whatsapp-form-section" className="scroll-mt-28 bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-800">
      <div className="bg-gradient-to-r from-brand-accent to-emerald-700 px-6 py-8 text-white">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-white/10 p-2.5 rounded-2xl">
            <MessageSquare className="w-6 h-6 fill-white/10" />
          </div>
          <div>
            <span className="bg-white/20 text-emerald-100 text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full">Instant Booking</span>
            <h3 className="font-display font-extrabold text-xl sm:text-2xl mt-0.5">WhatsApp Order Form</h3>
          </div>
        </div>
        <p className="text-emerald-100/90 text-xs sm:text-sm max-w-xl">
          Order 100% genuine medicines securely. Upload your prescription and our certified pharmacist will format, verify, and call you back immediately.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
        
        {formError && (
          <div className="flex items-start gap-2.5 p-4 bg-rose-50 dark:bg-rose-950/20 text-rose-700 dark:text-rose-400 rounded-2xl text-xs sm:text-sm border border-rose-100 dark:border-rose-900">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span className="font-medium">{formError}</span>
          </div>
        )}

        {isSubmitted && (
          <div className="flex items-start gap-2.5 p-4 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 rounded-2xl text-xs sm:text-sm border border-emerald-100 dark:border-emerald-900">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <div>
              <span className="font-bold block mb-0.5">Order Request Sent via WhatsApp!</span>
              <p className="text-xs">Your browser has requested WhatsApp to open with your formatted inquiry. If it didn't open, please click submit again or call us.</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Customer Name */}
          <div>
            <label htmlFor="order-name" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
              Customer Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="order-name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-all"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label htmlFor="order-mobile" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
              Mobile Number <span className="text-rose-500">*</span>
            </label>
            <input
              type="tel"
              id="order-mobile"
              name="mobile"
              required
              maxLength={10}
              value={formData.mobile}
              onChange={handleInputChange}
              placeholder="e.g. 9334034440"
              className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-all"
            />
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="order-email" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
              Email Address <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <input
              type="email"
              id="order-email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="yourname@gmail.com"
              className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-all"
            />
          </div>

          {/* Preferred Delivery Time */}
          <div>
            <label htmlFor="order-delivery-time" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
              Preferred Delivery Time
            </label>
            <select
              id="order-delivery-time"
              name="deliveryTime"
              value={formData.deliveryTime}
              onChange={handleInputChange}
              className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-all"
            >
              <option value="Anytime (08:00 AM - 08:00 PM)">Anytime (08:00 AM - 08:00 PM)</option>
              <option value="Morning (08:00 AM - 12:00 PM)">Morning (08:00 AM - 12:00 PM)</option>
              <option value="Afternoon (12:00 PM - 04:00 PM)">Afternoon (12:00 PM - 04:00 PM)</option>
              <option value="Evening (04:00 PM - 08:00 PM)">Evening (04:00 PM - 08:00 PM)</option>
            </select>
          </div>
        </div>

        {/* Medicine Name / Requirement */}
        <div>
          <label htmlFor="order-medicine" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
            Medicines Required <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="order-medicine"
            name="medicineName"
            required
            rows={3}
            value={formData.medicineName}
            onChange={handleInputChange}
            placeholder="Type your required medicine names, strengths (e.g. Paracetamol 650mg - 2 strips, Glycomet GP1 - 30 Tablets)"
            className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-all"
          ></textarea>
        </div>

        {/* Delivery Address */}
        <div>
          <label htmlFor="order-address" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
            Full Address with Landmarks <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            id="order-address"
            name="address"
            required
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Enter your street name, nearby landmark, colony, Gaya, Bihar"
            className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-all"
          />
        </div>

        {/* Drag & Drop Prescription Upload */}
        <div>
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            Upload Prescription <span className="text-slate-400 font-normal">(Optional but recommended)</span>
          </span>
          
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
              isDragging
                ? "border-brand-accent bg-emerald-50/30 dark:bg-emerald-950/10"
                : prescriptionFile
                ? "border-emerald-500 bg-emerald-50/10 dark:bg-emerald-950/5"
                : "border-slate-200 dark:border-slate-800 hover:border-brand-accent bg-slate-50/30 dark:bg-slate-950/20"
            }`}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*,.pdf"
              className="hidden"
            />
            
            {prescriptionFile ? (
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="bg-emerald-100 dark:bg-emerald-950 text-emerald-600 p-3 rounded-full">
                  <FileText className="w-7 h-7" />
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-slate-800 dark:text-slate-200 max-w-xs truncate block">
                    {prescriptionFile.name}
                  </span>
                  <span className="text-xs text-slate-400">
                    {(prescriptionFile.size / 1024 / 1024).toFixed(2)} MB
                  </span>
                </div>
                <button
                  type="button"
                  id="remove-prescription-file-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile();
                  }}
                  className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Remove File</span>
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center space-y-2.5">
                <div className="bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 p-3 rounded-full">
                  <Upload className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Drag and drop your prescription image or PDF here
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Or click to browse from your device (Max size: 5MB)
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="order-message" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
            Special Instructions <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <textarea
            id="order-message"
            name="message"
            rows={2}
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Any specific instructions? (e.g. Call before coming, deliver only generic alternative if available)"
            className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent transition-all"
          ></textarea>
        </div>

        {/* Submit Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row gap-4">
          <button
            type="submit"
            id="order-submit-whatsapp-btn"
            className="flex-1 flex items-center justify-center gap-2.5 py-4 px-6 text-sm sm:text-base font-bold text-white bg-[#0A8F6A] hover:bg-[#087758] rounded-2xl shadow-md transition-all glow-btn cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 fill-white/10" />
            <span>Send Order via WhatsApp</span>
          </button>
          
          <a
            id="order-call-now-btn"
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center justify-center gap-2 py-4 px-6 text-sm sm:text-base font-bold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700/80 rounded-2xl transition-all"
          >
            <Phone className="w-4.5 h-4.5 text-brand-accent" />
            <span>Call Now: {BUSINESS_INFO.phoneFormatted}</span>
          </a>
        </div>
      </form>
    </div>
  );
}
