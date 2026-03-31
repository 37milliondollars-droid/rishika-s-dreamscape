import { motion } from "framer-motion";
import FloatingParticles from "./FloatingParticles";

interface LandingSectionProps {
  onStart: () => void;
}

const LandingSection = ({ onStart }: LandingSectionProps) => {
  return (
    <section className="section-transition bg-gradient-dark flex items-center justify-center">
      <FloatingParticles count={60} />
      
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-purple/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-neon-blue/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-soft-pink/5 blur-[150px]" />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.p
            className="text-soft-pink/70 font-body text-sm tracking-[0.3em] uppercase mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            a little surprise for you
          </motion.p>

          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-glow-purple mb-4 text-foreground">
            Happy Birthday
          </h1>
          
          <motion.h2
            className="font-display text-5xl md:text-7xl lg:text-8xl text-glow-pink text-soft-pink"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Rishika 💖
          </motion.h2>

          <motion.p
            className="mt-8 text-muted-foreground font-body text-lg md:text-xl max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
          >
            This little world is made just for you…
          </motion.p>

          <motion.button
            onClick={onStart}
            className="mt-12 px-10 py-4 rounded-full bg-primary/20 border border-primary/40 text-foreground font-body text-lg tracking-wide hover:bg-primary/30 hover:border-primary/60 hover:shadow-[0_0_30px_hsl(280_80%_65%/0.3)] transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Begin the Surprise ✨
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingSection;
