// src/components/HeroSection.jsx
import arrowRight from "../assets/icons/arrow-right.svg"
import { useEffect, useRef, useState } from "react"
import EarlyAccessModal from "./EarlyAccessModal";

export default function HeroSection() {
  const heroRef = useRef(null)
  const [text, setText] = useState("")
  const fullText = "The first decentralized AI memory vault on Solana"
  const highlightWord = "memory vault"
  const [showModal, setShowModal] = useState(false); // ⬅️ STATE MODAL

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setText(fullText.slice(0, i))
        i++
      } else {
        clearInterval(interval)
      }
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const renderWithHighlight = (rawText) => {
    const index = rawText.indexOf(highlightWord)
    if (index === -1) return rawText

    const before = rawText.slice(0, index)
    const highlight = rawText.slice(index, index + highlightWord.length)
    const after = rawText.slice(index + highlightWord.length)

    return (
      <>
        {before}
        <span className="text-[#37B7C3]">{highlight}</span>
        {after}
      </>
    )
  }

  return (
    <section className="relative min-h-screen w-full flex items-center justify-end px-12 lg:px-20 overflow-hidden">

      {/* 🔥 VIDEO BACKGROUND */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] rotate-180"
        src="/videos/hero.mp4" // bisa juga pakai URL dari CDN
        autoPlay
        muted
        loop
        playsInline
      />
      <div ref={heroRef} className="w-full lg:w-3/5 xl:w-2/3 text-left lg:pt-20 transition-all">
        <h1 className="text-white font-mono text-3xl sm:text-4xl lg:text-[48px] 2xl:text-[64px] md:leading-tight font-semibold tracking-tighter">
          {renderWithHighlight(text)}
        </h1>

        <p className="text-white mt-4 text-xs sm:text-sm md:text-md 2xl:text-lg font-mono font-normal">
          Mint, trade, and archive ideas — before the world catches up.
        </p>

        <div className="mt-6 flex justify-start gap-5 flex-wrap text-xs lg:text-[16px] 2xl:text-[20px] font-mono">
          <button className="flex items-center gap-2 text-white py-2 hover:scale-110 transition duration-500"
            onClick={() => setShowModal(true)} // ⬅️ Trigger Modal
          >
            <img src={arrowRight} alt="arrow" className="w-7 h-7" />
            GET EARLY ACCESS
          </button>
          <button
          onClick={() => window.open("https://github.com/TuRuSkT11/braintrust", "_blank")}
          className="flex items-center gap-2 text-white py-2 hover:scale-110 transition duration-500">
            <img src={arrowRight} alt="arrow" className="w-7 h-7" />
            LEARN MORE
          </button>
        </div>
      </div>
      {/* ⬇️ Modal dipanggil di bawah */}
      <EarlyAccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  )
}
