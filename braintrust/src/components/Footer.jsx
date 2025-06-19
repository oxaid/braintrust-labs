import logo from "../assets/icons/logo.svg"
import iconX from "../assets/icons/x.svg"
import iconGithub from "../assets/icons/github.svg"
import iconTelegram from "../assets/icons/telegram.svg"
import arrowRightTop from "../assets/icons/arrow-right-top.svg"

export default function Footer() {
  return (
    <footer className=" text-white font-mono px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-start">

        {/* LEFT SECTION */}
        <div className="md:col-span-4 flex flex-col gap-5">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-[225px] h-[41px]" />
          </div>

          {/* Email Subscription */}
          <div className="lg:w-4/5">
            <p className="text-xs lg:text-[16px] font-bold mb-2">STAY UP TO DATE WITH BRAINTRUST</p>
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="bg-transparent border-b border-[#37B7C3] text-sm text-[#37B7C3] placeholder:text-[#37B7C3] focus:outline-none w-full py-1"
            />
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="">
              <img src={iconX} alt="X" className="w-4 h-4" />
            </a>
            <a href="">
              <img src={iconGithub} alt="GitHub" className="w-4 h-4" />
            </a>
            <a href="">
              <img src={iconTelegram} alt="Telegram" className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* CENTER SECTION */}
       <div className="md:col-span-5 grid grid-cols-2 gap-y-3 gap-x-8 text-xs text-white/80">
          <a href="#" className="hover:underline transition">START BUILDING</a>
          <a href="#" className="hover:underline transition">CAREERS</a>
          <a href="#" className="hover:underline transition">HOW IT WORKS</a>
          <a href="#" className="hover:underline transition">CONTACT</a>
          <a href="#" className="hover:underline transition">USE CASES</a>
          <a href="#" className="hover:underline transition">SUPPORT</a>
          <a href="/privacy-policy" className="hover:underline transition">PRIVACY POLICY</a>
          <a href="/terms-of-services" className="hover:underline transition">TERMS OF SERVICES</a>
        </div>

        {/* RIGHT SECTION */}
        <div className="md:col-span-3 flex flex-col items-end justify-between h-full gap-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="focus:outline-none"
          >
            <img src={arrowRightTop} alt="Arrow" className="w-12 md:w-20 lg:w-28" />
          </button>
          <p className="text-[10px] text-white/50">©2025 BRAINTRUST. ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>

  )
}
