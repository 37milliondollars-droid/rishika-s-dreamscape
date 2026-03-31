import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FloatingParticles from "./FloatingParticles";

const lyrics = [
  { text: "Rishika, you feel like a late night song…", delay: 0 },
  { text: "Like something I'd never skip.", delay: 0.3 },
  { text: "You're the kind of soul that plays on repeat…", delay: 0.6 },
  { text: "In the softest part of my mind.", delay: 0.9 },
  { text: "Like neon in the dark,", delay: 1.2 },
  { text: "you make everything glow.", delay: 1.5 },
  { text: "You're the melody I didn't know I needed.", delay: 1.8 },
];

const ChaseAtlanticSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={ref} className="section-transition bg-gradient-chase min-h-[120vh] flex items-center justify-center py-20">
      <FloatingParticles count={40} />

      {/* Neon ambient orbs */}
      <motion.div style={{ y: y1 }} className="absolute top-20 right-10 w-72 h-72 rounded-full bg-neon-blue/8 blur-[100px]" />
      <motion.div style={{ y: y2 }} className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-neon-purple/10 blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-soft-pink/3 blur-[200px]" />

      {/* Smoke-like overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="text-neon-blue/60 text-xs tracking-[0.5em] uppercase font-body mb-12">
            Chase Atlantic Vibes 🌌
          </p>

          <div className="space-y-6">
            {lyrics.map((line, i) => (
              <motion.p
                key={i}
                className={`font-body ${i === 0 ? "text-2xl md:text-4xl text-glow-blue text-foreground" : i < 4 ? "text-xl md:text-2xl text-foreground/80" : "text-lg md:text-xl text-muted-foreground"}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: line.delay }}
              >
                {line.text}
              </motion.p>
            ))}
          </div>

          <motion.div
            className="mt-20 flex justify-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2.2, duration: 1 }}
          >
            {["🌙", "💜", "🌌", "✨", "🎵"].map((emoji, i) => (
              <motion.span
                key={i}
                className="text-2xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
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

export default ChaseAtlanticSection;
