// src/components/IntroSection.jsx
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function IntroSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [20, -20])

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
    }),
  }

  return (
    <section
      ref={sectionRef}
      className=" w-full px-6 md:px-16 py-20 text-white font-mono"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-8 items-start">

        {/* Left Text Block (70%) */}
        <div className="lg:col-span-7 text-xl md:text-[22px] lg:text-[32px] xl:text-[36px] tracking-tighter leading-tight md:leading-[28px] lg:leading-[35px] xl:leading-[40px] space-y-2">
          {[
            "Braintrust lets you create and own",
            "[Thought Capsules]",
            "Each capsule is stored on-chain and",
            "can be traded like intellectual NFTs.",
          ].map((line, i) => (
            <motion.p
              key={i}
              custom={i}
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              {line.includes("Braintrust") ? (
      <>
        <strong>Braintrust </strong>
        {line.replace("Braintrust", "").trimStart()}
      </>
    ) : (
      line
    )}
            </motion.p>
          ))}
        </div>

        {/* Right Box (30%) */}
        <motion.div style={{ y }} className="lg:col-span-3 relative w-full">
          <div className="absolute right-0 w-2 h-2 bg-white z-10" />
          <motion.div
            whileHover={{
              scale: 1.03,
              backgroundColor: "rgba(255,255,255,0.05)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative border border-white/20 w-full h-[160px] flex items-center justify-center px-4 py-3 text-white/80 text-base md:text-[16px] tracking-tight leading-normal md:leading-[26px]"
          >
            <p className="text-left font-mono">
              Great ideas shouldn’t <br />
              vanish. Now they become <br />
              verifiable assets.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
