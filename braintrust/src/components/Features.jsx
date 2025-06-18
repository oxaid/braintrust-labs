
import icon1 from "../assets/icons/feature1.svg"
import icon2 from "../assets/icons/feature2.svg"
import icon3 from "../assets/icons/feature3.svg"
import SectionWrapper from "../components/SectionWrapper"

export default function CapsuleFeatureSection() {
  const features = [
    {
      icon: icon1,
      text: "Save your AI-generated\nideas securely",
    },
    {
      icon: icon2,
      text: "Prove you had that insight\nfirst [on-chain timestamp]",
    },
    {
      icon: icon3,
      text: "Monetize knowledge as\ntradable digital assets",
    },
  ]

  return (
    <SectionWrapper className="px-6 md:px-0 w-full py-16 text-white font-mono">
      <div className="max-w-7xl mx-auto border border-white/20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">

          {features.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-10 py-8 md:py-20 lg:py-28 gap-y-4 sm:gap-y-6 lg:gap-y-8 border border-white/20 transition-all duration-500 ease-in-out hover:scale-105 hover:border-white/0"

            >
              <img
                src={item.icon}
                alt="feature icon"
                className="w-36 h-36 lg:w-[150px] lg:h-[180px] xl:w-[200px] xl:h-[230px] object-contain"
              />
              <p className="whitespace-pre-line text-base sm:text-sm lg:text-[18px] xl:text-[20px] 2xl:text-[24px] leading-normal md:leading-[26px] lg:leading-[30px] xl:leading-[36px] text-white/90">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>

  )
}
