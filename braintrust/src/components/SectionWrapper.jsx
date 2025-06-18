import useInViewFade from "../hooks/useInViewFade"

export default function SectionWrapper({ children, className = "" }) {
  const [ref, style] = useInViewFade()

  return (
    <section
      ref={ref}
      style={style}
      className={` ${className}`}
    >
      {children}
    </section>
  )
}
