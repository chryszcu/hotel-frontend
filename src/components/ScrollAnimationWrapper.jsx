// src/components/ScrollAnimationWrapper.jsx
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ScrollAnimationWrapper({ 
  children, 
  delay = 0, 
  yOffset = 50,
  duration = 0.5,
  className = "" 
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, // Animacja uruchamia się tylko raz
    margin: "-100px", // Kiedy element wchodzi w widok (możesz dostosować)
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
}