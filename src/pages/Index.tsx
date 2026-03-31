import { useState, useRef, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";
import LandingSection from "@/components/LandingSection";
import ComplimentsSection from "@/components/ComplimentsSection";
import ChaseAtlanticSection from "@/components/ChaseAtlanticSection";
import ThankYouSection from "@/components/ThankYouSection";
import ThankYouExistingSection from "@/components/ThankYouExistingSection";
import FinalQuestionSection from "@/components/FinalQuestionSection";

const Index = () => {
  const [started, setStarted] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleStart = () => {
    setStarted(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().then(() => setMusicPlaying(true)).catch(() => {});
    }
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const toggleMusic = useCallback(() => {
    if (!audioRef.current) return;
    if (musicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setMusicPlaying(!musicPlaying);
  }, [musicPlaying]);

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setStarted(false), 800);
  };

  return (
    <div className="bg-background">
      <audio ref={audioRef} src="/music/swim.mp3" loop />

      {started && (
        <button
          onClick={toggleMusic}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary/20 border border-primary/40 text-foreground backdrop-blur-md hover:bg-primary/30 hover:border-primary/60 hover:shadow-[0_0_20px_hsl(280_80%_65%/0.3)] transition-all duration-300"
          aria-label={musicPlaying ? "Mute music" : "Play music"}
        >
          {musicPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </button>
      )}

      <LandingSection onStart={handleStart} />
      {started && (
        <div ref={contentRef}>
          <ComplimentsSection />
          <ChaseAtlanticSection />
          <ThankYouSection />
          <ThankYouExistingSection />
          <FinalQuestionSection onReplay={handleReplay} />
        </div>
      )}
    </div>
  );
};

export default Index;
