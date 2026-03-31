import { useState, useRef } from "react";
import LandingSection from "@/components/LandingSection";
import ComplimentsSection from "@/components/ComplimentsSection";
import ChaseAtlanticSection from "@/components/ChaseAtlanticSection";
import ThankYouSection from "@/components/ThankYouSection";
import ThankYouExistingSection from "@/components/ThankYouExistingSection";
import FinalQuestionSection from "@/components/FinalQuestionSection";

const Index = () => {
  const [started, setStarted] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleStart = () => {
    setStarted(true);
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setStarted(false), 800);
  };

  return (
    <div className="bg-background">
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
