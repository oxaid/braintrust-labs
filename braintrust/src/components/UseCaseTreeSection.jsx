
import iconResearcher from "../assets/icons/research.svg"
import iconChart from "../assets/icons/chart.svg"
import iconWrite from "../assets/icons/write.svg"
import iconDao from "../assets/icons/dao.svg"
import SectionWrapper from "../components/SectionWrapper"


export default function UseCaseTreeSection() {
   const useCases = [
    {
      title: "[AI Researchers]",
      desc: "Publish predictions with verifiable timestamps. Make your insights permanent.",
      icon: iconResearcher,
      reverse: true,
    },
    {
      title: "[Data Traders]",
      desc: "Mint strategies and build a portfolio of successful on-chain plays.",
      icon: iconChart,
      reverse: false,
    },
    {
      title: "[Writers & Worldbuilders]",
      desc: "Tokenize stories, prompt chains, or worldbuilding ideas. Build IP on-chain.",
      icon: iconWrite,
      reverse: true,
    },
    {
      title: "[DAOs & Collectives]",
      desc: "Curate, archive, and monetize collective thought. Shape memetic history.",
      icon: iconDao,
      reverse: false,
    },
  ];

  return (
   <section className="relative bg-[#3FC4D3] px-4 sm:px-6 md:px-16 lg:px-20 py-24 text-white font-mono overflow-hidden">
      {/* Vertical Line */}
    {/* <div className="hidden md:block absolute z-0 left-1/2 transform -translate-x-1/2 bg-[#001B54] w-[4px] top-[23%] h-[calc(85%-400px)]" /> */}
      <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[4px] bg-[#001B54] z-0" />

      {/* Title */}
      <h2 className="text-white text-left font-bold text-[48px] sm:text-[60px] md:text-[72px] lg:text-[100px] leading-none font-mono mb-32">
        [Use<br />
        cases]
      </h2>

      <div className="flex flex-col gap-24 relative z-10">
        {useCases.map((item, i) => (
          <SectionWrapper>
          <div key={i} className="relative grid md:grid-cols-2 items-center">
            {/* LEFT SIDE */}
            {i % 2 === 1 ? (
              <div className="flex flex-col items-end text-right pr-16 relative">

                <div className="hidden md:block absolute h-[4px] bg-[#071952] right-0 top-[72px] md:w-[calc(50%-76px)] lg:w-[calc(30%-76px)]" />
                <div className="w-24 h-24 md:w-36 md:h-36 border-4 border-[#071952] flex items-center justify-center bg-[#3FC4D3] z-10">
                  <img src={item.icon} alt="icon" className="w-2/3 h-2/3 object-contain" />
                </div>
                <div className="mt-4 md:mt-8 leading-relaxed whitespace-pre-line text-left w-full max-w-md">
                  <p className="font-bold mb-2 text-sm sm:text-base md:text-2xl lg:text-[36px]">{item.title}</p>
                  <p className="text-white/90 lg:text-lg">{item.desc}</p>
                </div>
              </div>
            ) : (
              <div></div>
            )}

            {/* RIGHT SIDE */}
            {i % 2 === 0 ? (
              <div className="flex flex-col items-start text-left pl-16 relative">
                <div className="hidden md:block absolute h-[4px] bg-[#001B54] left-0 top-[72px] md:w-[calc(50%-72px)] lg:w-[calc(30%-72px)]" />
                <div className="w-24 h-24 md:w-36 md:h-36 border-4 border-[#001B54] flex items-center justify-center bg-[#3FC4D3] z-10">
                  <img src={item.icon} alt="icon" className="w-2/3 h-2/3 object-contain" />
                </div>
                <div className="mt-4 md:mt-8 leading-relaxed whitespace-pre-line text-right w-full max-w-md">
                  <p className="font-bold mb-2 text-sm sm:text-base md:text-2xl lg:text-[36px]">{item.title}</p>
                  <p className="text-white/90">{item.desc}</p>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          </SectionWrapper>
        ))}
      </div>
    </section>
  )
}
