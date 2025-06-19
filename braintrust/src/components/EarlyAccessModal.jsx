// src/components/EarlyAccessModal.jsx
import { X } from "lucide-react";
import closeButton from "../assets/icons/closeButton.svg"


export default function EarlyAccessModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative bg-white text-[#071952] max-w-4xl w-full mx-6 md:mx-auto my-24 md:my-40 px-8 md:px-16 py-10 rounded-md space-y-6">
        <button
          className="absolute top-4 right-4 text-[#071952] hover:text-red-600"
          onClick={onClose}
        >
          <img src={closeButton} alt="Arrow" className="w-11 md:w-14 lg:w-16" />
        </button>

        <h2 className="text-3xl md:text-4xl font-mono font-bold">
          [Get early Access]
        </h2>

        <p className="text-[#071952] leading-relaxed text-sm">
          Be the first to explore new features, exclusive updates, and insider info before anyone else.
          <br />
          Drop your email below – we’ll notify you as soon as we go live.
          <br />
          No spam, just good stuff.
        </p>

        <div>
          <label className="block font-mono uppercase text-sm  font-bold">Email</label>
          <input
            type="email"
            className="w-full bg-transparent border-b border-[#071952] focus:outline-none py-2 placeholder-[#071952]"
            placeholder="you@example.com"
          />
        </div>

        {/* <div className="pt-4">
          <button className="flex items-center gap-2  pt-4 text-sm font-mono uppercase hover:text-[#088395] transition">
            <span>Submit</span>
            <span>↗️</span>
          </button>
        </div> */}
      </div>
    </div>
  );
}
