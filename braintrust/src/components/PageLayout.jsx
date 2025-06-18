// src/components/layout/PageLayout.jsx
import Navbar from "./Navbar"
import Footer from "./Footer"
import HeroSection from "../components/HeroSection"

export default function PageLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen text-gray-900">
      <Navbar />

      <main className="flex-grow w-full">
        {children}
      </main>

      <Footer />
    </div>
  )
}
