import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import FloatingParticles from "./FloatingParticles";
import FloatingHearts from "./FloatingHearts";

interface FinalQuestionSectionProps {
  onReplay: () => void;
}

const FinalQuestionSection = ({ onReplay }: FinalQuestionSectionProps) => {
  const [answered, setAnswered] = useState(false);

  const handleAnswer = () => {
    setAnswered(true);

    // Confetti burst
    const duration = 4000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: ["#c084fc", "#f472b6", "#38bdf8", "#fbbf24", "#fb7185"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: ["#c084fc", "#f472b6", "#38bdf8", "#fbbf24", "#fb7185"],
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();

    // Hearts burst
    setTimeout(() => {
      confetti({
        particleCount: 60,
        spread: 100,
        origin: { y: 0.6 },
        shapes: ["circle"],
        colors: ["#f472b6", "#c084fc", "#fb7185"],
        scalar: 1.5,
      });
    }, 500);
  };

  return (
    <section className="section-transition bg-gradient-dark flex items-center justify-center py-20">
      <FloatingParticles count={40} />
      {answered && <FloatingHearts count={25} />}

      <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-neon-purple/8 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-soft-pink/8 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 max-w-lg mx-auto px-6 text-center">
        <AnimatePresence mode="wait">
          {!answered ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-5xl md:text-7xl text-glow-purple text-foreground mb-4">
                Rishika…
              </h2>
              <p className="font-display text-3xl md:text-4xl text-soft-pink text-glow-pink mb-16">
                will you be my friend forever? 💖
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button
                  onClick={handleAnswer}
                  className="px-12 py-4 rounded-full bg-primary/20 border border-primary/40 text-foreground font-body text-xl tracking-wide hover:bg-primary/30 hover:border-primary/60 hover:shadow-[0_0_30px_hsl(280_80%_65%/0.3)] transition-all duration-500"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Yes 💖
                </motion.button>
                <motion.button
                  onClick={handleAnswer}
                  className="px-12 py-4 rounded-full bg-soft-pink/10 border border-soft-pink/30 text-foreground font-body text-xl tracking-wide hover:bg-soft-pink/20 hover:border-soft-pink/50 hover:shadow-[0_0_30px_hsl(340_60%_70%/0.3)] transition-all duration-500"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Always 🥺
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="answer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="space-y-8"
            >
              <motion.div
                className="text-7xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                💖
              </motion.div>
              <h2 className="font-display text-5xl md:text-7xl text-glow-pink text-foreground">
                Yay!!!
              </h2>
              <p className="font-body text-xl text-muted-foreground">
                I knew you'd say that 🥹✨
              </p>
              <p className="font-body text-lg text-soft-pink/70">
                Forever and always, Rishika 💕
              </p>

              <motion.button
                onClick={onReplay}
                className="mt-8 px-10 py-3 rounded-full bg-primary/15 border border-primary/30 text-foreground/70 font-body text-base hover:bg-primary/25 hover:text-foreground transition-all duration-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                whileHover={{ scale: 1.05 }}
              >
                Replay the Surprise 💖
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FinalQuestionSection;
