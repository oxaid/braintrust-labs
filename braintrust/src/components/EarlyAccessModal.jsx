// src/components/EarlyAccessModal.jsx
import { X } from "lucide-react";
import closeButton from "../assets/icons/closeButton.svg"
import toast from "react-hot-toast";
import { useState } from "react";
import arrowRight from "../assets/icons/arrow-right.svg"

export default function EarlyAccessModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    email: "",
  });

    const isFormValid = formData.email;

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!isFormValid) {
        toast.error("Please fill all required fields");
        return;
      }
      console.log("Contact Form Data:", formData);
      toast.success("Your message has been sent!");
      setFormData({  email: ""});
    };

  return (
    <div className="fixed  inset-0 z-50 flex items-center justify-center">
      <div className="relative bg-white/70 text-[#071952] backdrop-blur-md max-w-4xl w-full mx-6 md:mx-auto my-24 md:my-40 px-8 md:px-16 py-10 md:pb-20 rounded-md space-y-6">
        <button
          className="absolute top-4 right-4 text-[#071952] hover:text-red-600"
          onClick={onClose}
        >
          <img src={closeButton} alt="Arrow" className="w-11 md:w-14 lg:w-16" />
        </button>

        <h2 className="text-3xl md:text-4xl font-mono font-bold tracking-tighter">
          [Get early Access]
        </h2>

        <p className="text-[#071952] leading-relaxed text-sm">
          Be the first to explore new features, exclusive updates, and insider info before anyone else.
          <br />
          Drop your email below – we’ll notify you as soon as we go live.
          <br />
          No spam, just good stuff.
        </p>

        <form onSubmit={handleSubmit}>
          <div>
          <label className="block font-mono uppercase text-sm  font-bold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-[#071952] focus:outline-none py-2 placeholder-[#071952]"
            placeholder="your@email.com"
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={!isFormValid}
              className="text-[#071952] flex items-center gap-2 text-sm font-mono uppercase hover:text-[#088395] transition disabled:opacity-40 disabled:cursor-not-allowed">
            <img src={arrowRight} alt="arrow" className="w-7 h-7" />
            <span>Send Message</span>
          </button>
        </div>
        </form>
      </div>
    </div>
  );
}
