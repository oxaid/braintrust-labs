// File: components/ContactSection.jsx
import { Mail, User, Send } from "lucide-react";
import { useState } from "react";
import arrowRight from "../assets/icons/arrow-right.svg"

export default function ContactSection() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    message: "",
  });

  const isFormValid = formData.name && formData.email && formData.category && formData.message;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    console.log("Contact Form Data:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", category: "", message: "" });
  };

  return (
    <section className="text-white py-20 px-6 md:px-20 md:py-36">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* KIRI - Informasi */}
        <div className="space-y-8 text-left">
          <h2 className="text-4xl md:text-5xl font-mono font-bold">[Contact us]</h2>
          <h3 className="text-xl font-semibold">Let’s Talk!</h3>
          <p className="text-white/80 leading-relaxed">
            Got a question or a collaboration idea?<br />
            Fill out the form below or reach out directly –<br />
            we’ll get back to you soon.
          </p>
          <p className="italic text-white/70">
            Because great things start with a simple conversation.
          </p>
          <div className="flex justify-center md:justify-start gap-x-4 pt-4 text-2xl">
            <a href="#"><i className="icon-[mdi--twitter]"></i></a>
            <a href="#"><i className="icon-[mdi--github]"></i></a>
            <a href="#"><i className="icon-[mdi--telegram]"></i></a>
          </div>
        </div>

        {/* KANAN - Form */}
        <form onSubmit={handleSubmit} className="border border-white/80 p-6 md:p-10 space-y-6">
          <div>
            <label className="block font-mono uppercase text-sm mb-2 font-bold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/70 focus:outline-none placeholder-white/50"

            />
          </div>
          <div>
            <label className="block font-mono uppercase text-sm mb-2 font-bold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/70 focus:outline-none placeholder-white/50"

            />
          </div>
          <div>
            <label className="block font-mono uppercase text-sm mb-2"></label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/70 focus:outline-none py-2 text-white/70">
              <option className="text-black">-Choose an option-</option>
              <option className="text-black">General Inquiry</option>
              <option className="text-black">Collaboration</option>
              <option className="text-black">Support</option>
            </select>
          </div>
          <div>
            <label className="block font-mono uppercase text-sm mb-2 font-bold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/70 focus:outline-none py-2 min-h-[100px] placeholder-white/50"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <div className="flex justify-start">
            <button
              type="submit"
              disabled={!isFormValid}
               className="flex items-center gap-2 text-sm font-mono uppercase hover:text-white/90 transition disabled:opacity-40 disabled:cursor-not-allowed">
              <img src={arrowRight} alt="arrow" className="w-7 h-7" />
              <span>Send Message</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
