import { motion } from "framer-motion";

const FloatingHearts = ({ count = 15 }: { count?: number }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-soft-pink/40"
          initial={{
            x: `${Math.random() * 100}%`,
            y: "110%",
            scale: Math.random() * 0.5 + 0.5,
            rotate: Math.random() * 30 - 15,
          }}
          animate={{
            y: "-10%",
            rotate: Math.random() * 60 - 30,
          }}
          transition={{
            duration: Math.random() * 8 + 10,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear",
          }}
          style={{ fontSize: `${Math.random() * 20 + 14}px` }}
        >
          💖
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
