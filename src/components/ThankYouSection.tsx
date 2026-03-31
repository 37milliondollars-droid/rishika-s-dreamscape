import { motion } from "framer-motion";
import FloatingHearts from "./FloatingHearts";

const ThankYouSection = () => {
  return (
    <section className="section-transition bg-gradient-pastel flex items-center justify-center py-20">
      <FloatingHearts count={20} />

      <div className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full bg-soft-pink/8 blur-[100px]" />
      <div className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-pastel-lavender/10 blur-[100px]" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-display text-5xl md:text-7xl text-glow-pink text-foreground mb-6">
            Thank You 💕
          </h2>
          <p className="font-display text-2xl md:text-3xl text-soft-pink mb-12">
            For Coming Into My Life
          </p>

          <motion.div
            className="space-y-6 text-foreground/80 font-body text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <p>
              Rishika, before you came along, I didn't know friendship could feel like this — like finding a song that plays exactly what your heart feels but couldn't say. 💕
            </p>
            <p>
              You showed me what it means to be truly understood. Every late night conversation, every shared laugh, every moment of comfortable silence — you've made all of it feel like home. 🌸
            </p>
            <p>
              You didn't just come into my life — you changed the way I see it. You taught me that the best connections aren't the ones you plan, but the ones that find you when you least expect it. ✨
            </p>
            <p>
              Thank you for being the warmest part of my world. Thank you for choosing to stay. Thank you for being <span className="text-soft-pink font-semibold">you</span>. 🤍
            </p>
          </motion.div>

          <motion.div
            className="mt-12 flex justify-center gap-4 text-3xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            {["🧸", "💕", "🌸", "🤍", "🫂"].map((emoji, i) => (
              <motion.span
                key={i}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, delay: i * 0.4, repeat: Infinity }}
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThankYouSection;
