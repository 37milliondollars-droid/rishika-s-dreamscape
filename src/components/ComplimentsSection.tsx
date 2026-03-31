import { motion } from "framer-motion";
import FloatingParticles from "./FloatingParticles";

const compliments = [
  "You light up every conversation ✨", "Your laugh is literally contagious 💕", "You're the kindest soul I know 🌸",
  "You make the world softer 🦋", "Your taste in music is *chef's kiss* 🎵", "You understand me like no one else 💖",
  "You're braver than you think 🌟", "Your voice is so calming 🌙", "You have the prettiest smile 💫",
  "You're my favorite notification 📱", "You make late nights feel magical 🌌", "You never fail to make me laugh 😂",
  "Your heart is genuinely golden 💛", "You're incredibly strong, Rishika 💪", "You deserve the entire universe 🪐",
  "Your aesthetic sense is unmatched ✨", "You make ordinary moments special 🌷", "You're so effortlessly cool 😎",
  "Your kindness heals people 🩹", "You have the warmest energy 🔥", "You're someone I truly admire 🌸",
  "You make me want to be better 🦋", "Your humor is top tier 😭", "You're a whole vibe honestly 💜",
  "You're the definition of ethereal ✨", "You have beautiful thoughts 🧠", "You're so creative it's insane 🎨",
  "You radiate pure warmth 🌻", "Your playlists hit different 🎧", "You're unforgettable, always 💕",
  "You're my 3am comfort person 🌙", "Your energy is irreplaceable 🔮", "You make distance feel small 🌍",
  "You're the sweetest human alive 🍯", "Your presence is a gift 🎁", "You're a masterpiece in progress 🖼️",
  "You make sadness feel lighter 🌈", "You're magic, pure magic ✨", "Your words carry so much love 💌",
  "You're my safe space, Rishika 🏡", "You deserve infinite happiness 🌸", "You're cooler than you realize 🧊",
  "Your eyes hold galaxies 🌌", "You inspire me constantly 💫", "You turn chaos into calm 🕊️",
  "You're a walking sunset 🌅", "Your soul is beautiful 🦢", "You make everything brighter ☀️",
  "You're rare and precious 💎", "You're the plot twist I needed 📖", "Your friendship means everything 🤍",
  "You handle things so gracefully 🩰", "You're so emotionally intelligent 🧠", "Your vibe is immaculate 💅",
  "You deserve all the flowers 🌺", "You're a dream of a person 💭", "Your mind is fascinating 🔭",
  "You make me feel seen 👁️", "You're the soundtrack to my best days 🎶", "Your honesty is refreshing 💧",
  "You are so deeply loved 💗", "You make friendships feel sacred 🙏", "You're literally an angel 😇",
  "Your patience is admirable 🌿", "You carry light wherever you go 🕯️", "You're someone I'll never forget 📌",
  "Your texts make my day 💬", "You're art in human form 🎭", "Your compassion knows no bounds 🌊",
  "You make people feel valued 🌟", "You're the calm in my storm ⛈️", "Your existence is a blessing 🙌",
  "You're more than enough 💖", "You have the best taste ever 👑", "You're my favorite chapter 📚",
  "Your thoughtfulness is unreal 🎀", "You're poetry in motion 📝", "Your spirit is unbreakable 🔥",
  "You make loneliness disappear 🫂", "Your laughter is medicine 💊", "You're a star, Rishika ⭐",
  "You deserve standing ovations 👏", "Your softness is your strength 🌸", "You're my definition of amazing 💯",
  "You feel like home, always 🏠", "Your energy is magnetic 🧲", "You're the friend everyone wishes for 🌈",
  "You make the internet a better place 💻", "Your heart is so pure 🤍", "You're everything good in this world 🌍",
  "You've made my life brighter 🌤️", "You're a whole constellation 🌠", "Your love language is perfection 💕",
  "You're the reason I believe in people 🤝", "You make 'forever' feel possible ♾️", "You're genuinely one of a kind 🦄",
  "Your name itself sounds like music 🎼", "You deserve the happiest birthday ever 🎂", "You're my person, always 💖",
  "I'm so grateful for you, Rishika 🌸", "Here's to you and your beautiful soul ✨", "100 reasons aren't enough 💕",
];

const ComplimentsSection = () => {
  return (
    <section className="section-transition bg-gradient-dark py-20 px-4 md:px-8 min-h-screen">
      <FloatingParticles count={30} />
      
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />

      <div className="relative z-20 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-5xl md:text-7xl text-glow-pink text-foreground mb-4">
            100 Reasons Why
          </h2>
          <p className="font-display text-3xl md:text-4xl text-soft-pink">
            Rishika is Amazing ✨
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {compliments.map((compliment, i) => (
            <motion.div
              key={i}
              className="break-inside-avoid glow-card rounded-xl p-4 cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
            >
              <span className="text-muted-foreground text-xs font-body mr-2">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-body text-sm text-foreground/90">
                {compliment}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplimentsSection;
