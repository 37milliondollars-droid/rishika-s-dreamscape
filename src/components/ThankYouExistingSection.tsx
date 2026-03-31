import { motion } from "framer-motion";
import FloatingParticles from "./FloatingParticles";

const ThankYouExistingSection = () => {
  return (
    <section className="section-transition bg-gradient-dark flex items-center justify-center py-20">
      <FloatingParticles count={35} />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-pastel-lavender/5 blur-[180px]" />

      <div className="relative z-10 max-w-xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          <motion.p
            className="text-pastel-lavender/40 text-xs tracking-[0.5em] uppercase font-body mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            from my heart to yours 🌸
          </motion.p>

          <motion.h2
            className="font-display text-5xl md:text-7xl text-glow-purple text-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1.2 }}
          >
            Thank you
          </motion.h2>

          <motion.p
            className="font-display text-3xl md:text-5xl text-soft-pink text-glow-pink mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 1.2 }}
          >
            for existing, Rishika…
          </motion.p>

          <motion.div
            className="space-y-4 text-muted-foreground font-body text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.6, duration: 1.5 }}
          >
            <p>In a world full of noise,</p>
            <p>you are the softest whisper</p>
            <p>that somehow says the most. 🌙</p>
          </motion.div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2.2, duration: 0.8, type: "spring" }}
          >
            <span className="text-6xl">🫂</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThankYouExistingSection;
