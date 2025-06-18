import { useInView } from 'react-intersection-observer'

export default function useInViewFade(threshold = 0.2) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: false,
  });

   console.log('📍 inView:', inView); // 👈 debug log

  const style = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px) scale(1)' : 'translateY(50px) scale(0.95)',
    transition: 'all 0.8s ease-out',
  }

  return [ref, style];
}
