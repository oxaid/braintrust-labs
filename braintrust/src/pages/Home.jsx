import { useState } from "react"
import SectionWrapper from "../components/SectionWrapper"
import HeroSection from "../components/HeroSection"
import FeaturesSection from "../components/Features"
import UseCaseTreeSection from '../components/UseCaseTreeSection'
import IntroSection from '../components/IntroSection'
import brain from "../assets/icons/brain.svg"
import CoomingSoom from '../components/CoomingSoon'
import EarlyAccessModal from "../components/EarlyAccessModal";


export default function Home() {

  const [showModal, setShowModal] = useState(false); // ⬅️ STATE MODAL

  return (
     <main className="w-full">
      {/* HERO SECTION */}
      <HeroSection />

       {/* INTRO SECTION */}
      {/* <section className="bg-[#001B54] w-full px-6 md:px-16 py-20 text-white font-mono">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-8 items-start">

          <div className="lg:col-span-7  text-xl md:text-[22px] lg:text-[32px] xl:text-[36px] leading-normal md:leading-[30px] lg:leading-[38px] xl:leading-[50px] 2xl:leading-[56px] space-y-2">
            <p>
              <strong>Braintrust</strong> lets you create and own<br />
              [Thought Capsules] <br />
              Each capsule is stored on-chain and <br />
              can be traded like intellectual NFTs.
            </p>
          </div>

          <div className="lg:col-span-3 relative w-full">
            <div className="absolute right-0 w-2 h-2 bg-white z-10" />
            <div className="relative border border-white/20 w-full h-[160px] flex items-center justify-center px-4 py-3 text-white/80 text-base md:text-[16px] leading-normal md:leading-[26px] lg:leading-[30px] xl:leading-[34px]">

              <p className="text-center font-mono">
                Great ideas shouldn’t <br />
                vanish. Now they become <br />
                verifiable assets.
              </p>
            </div>
          </div>

        </div>
      </section> */}
      <IntroSection/>

      {/* FEATURES SECTION */}
      <div id="howitworks">
        <FeaturesSection />
      </div>
      {/* <FeaturesSection/> */}

       {/* FEATURES SECTION */}
       <div id="usecase">
        <UseCaseTreeSection />
      </div>

      {/* SLIDER SECTION */}
      <section className=" text-white font-mono py-20 lg:py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 items-center">

          {/* Kiri: Teks */}
          <div className="md:col-span-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4 ">
              Build the Future of <br /> Collective Intelligence
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              <strong>Braintrust</strong> is more than storage. It’s an ecosystem for <br />
              the intelligence economy. <br />
              A place where ideas have value, and foresight becomes <br />
              currency.
            </p>
          </div>

          {/* Kanan: Icon bunga gembok */}
          <div className="flex justify-center md:col-span-1">
            <img src={brain} alt="lock" className="w-40 sm:w-48 md:w-56 animate-spin-infinite" />
          </div>
        </div>

        {/* Box COMING SOON */}
        <CoomingSoom/>
        {/* <div className="mt-20 border border-[#37B7C3] px-6 py-10 relative overflow-hidden">
          <p className="text-xs text-white/60 absolute top-4 left-4 z-10">Public Marketplace</p>
          <div className="absolute inset-0 z-0 opacity-20 blur-sm pointer-events-none">
            <iframe
              src="https://s.tradingview.com/widgetembed/?frameElementId=tvcoinbaseusdt&symbol=COINBASE:USDTUSD&interval=1D&theme=dark&style=3&locale=en&toolbar_bg=rgba(0,0,0,0)"
              className="w-full h-full"
              frameBorder="0"
              allowTransparency="true"
              scrolling="no"
            ></iframe>
          </div>

          <div className="flex justify-center items-center mt-6 md:mt-10 gap-3 py-16 md:py-20 lg:py-28 z-10 relative">
            <img
              src={lockIcon}
              alt="lock"
              className="w-[20px] h-[26px] sm:w-[24px] sm:h-[30px] md:w-[28px] md:h-[36px] lg:w-[32px] lg:h-[42px] text-[#3FC4D3]"
            />
            <span className="text-xl sm:text-2xl lg:text-4xl font-bold">COMING SOON</span>
          </div>

        </div> */}



      </section>

      {/* CTA SECTION */}
      <SectionWrapper className="bg-[#3FC4D3] w-full px-6 md:px-16 py-16 lg:py-24 text-white font-mono">
        <div className="lg:max-w-5xl mx-auto grid lg:grid-cols-5 items-center gap-6">

          {/* Left Side (Text) */}
          <div className="lg:col-span-4 lg:flex justify-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Ready to mint your <br />
              <span className="text-[#001B54]">[First Thought]</span>?
            </h2>
          </div>

          {/* Right Side (CTA) */}
          <div className="lg:col-span-1 text-sm text-right lg:text-left flex flex-col gap-4">
            <p className="text-white/80 text-xs lg:text-md leading-relaxed font-semibold">
              Join the waitlist. Be <br />
              the first to claim your <br />
              mindspace on-chain.
            </p>

            <div className="flex items-center justify-end lg:justify-center gap-1">
              <button className="text-[#001B54] text-lg lg:text-[32px] font-bold text-left  hover:underline transition"
              onClick={() => setShowModal(true)}
              >
                Get early access
                <span className="text-3xl leading-none">↗</span>
              </button>
            </div>

          </div>
        </div>
      </SectionWrapper>

      {/* ⬇️ Modal dipanggil di bawah */}
      <EarlyAccessModal isOpen={showModal} onClose={() => setShowModal(false)} />

    </main>
  )
}
