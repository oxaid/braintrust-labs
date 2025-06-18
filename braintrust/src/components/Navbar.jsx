import { useEffect, useState } from "react"
// import { Link } from "react-router-dom"
import { Link } from "react-scroll";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import logo from "../assets/icons/logo.svg"
import iconX from "../assets/icons/x.svg"
import iconGithub from "../assets/icons/github.svg"
import iconTelegram from "../assets/icons/telegram.svg"

export default function NavbarBraintrust() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "HOW IT WORKS", to: "howitworks" },
    { name: "USE CASES", to: "usecase" },
    { name: "CONTACT", to: "#" },
    { name: "DOCS", to: "#" },
  ]

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled ? "backdrop-blur-md" : ""}`}>

      <nav className="max-w-7xl x-auto px-4 py-4 flex items-center justify-between md:justify-around  mx-auto">
        {/* Logo */}
        <a href="/">
          <img src={logo} alt="Braintrust Logo" className="h-6 md:h-8 object-contain" />
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12 text-xs font-mono text-white cursor-pointer">
          {navItems.map((item, i) => (
            <Link
              key={i}
              to={item.to}
              className="text-[14px] relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1.5px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
          {/* Image icons */}
          <div className="flex items-center gap-4 ml-4">
            <a href="..." target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:scale-110">
              <img src={iconX} alt="X" className="w-4 h-4" />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"  className="transition-transform duration-200 hover:scale-110">
              <img src={iconGithub} alt="GitHub" className="w-4 h-4" />
            </a>
            <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer"  className="transition-transform duration-200 hover:scale-110">
              <img src={iconTelegram} alt="Telegram" className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#071952]/80 backdrop-blur-md px-4 py-6 space-y-4 text-white font-mono text-sm transition-all duration-300">
          {navItems.map((item, i) => (
            <Link key={i} to={item.to} onClick={() => setIsOpen(false)} className="block">
              {item.name}
            </Link>
          ))}
          <div className="flex gap-4 pt-4 border-t border-white/30">
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:scale-110">
              <img src={iconX} alt="X" className="w-4 h-4" />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:scale-110">
              <img src={iconGithub} alt="GitHub" className="w-4 h-4" />
            </a>
            <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="transition-transform duration-200 hover:scale-110">
              <img src={iconTelegram} alt="Telegram" className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
