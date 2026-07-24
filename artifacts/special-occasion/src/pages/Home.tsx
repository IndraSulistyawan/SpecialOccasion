import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { EnvelopeModal } from '@/components/EnvelopeModal';
import { ImageCarousel } from '@/components/ImageCarousel';
import { Heart, Sparkles, Star, Anchor } from 'lucide-react';

const REASONS = [
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Your Radiance",
    description: "The way you light up any room you enter. Your energy is contagious, and your smile is entirely unforgettable."
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Your Warmth",
    description: "The compassion and kindness you show to everyone around you. You have a heart of gold that makes everything better."
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: "Your Spirit",
    description: "The passion and determination you bring to your dreams. Watching you grow and shine is a true privilege."
  },
  {
    icon: <Anchor className="w-5 h-5" />,
    title: "Your Presence",
    description: "The comfort of just being near you. You make the ordinary moments feel extraordinary, and the quiet moments feel profound."
  }
];

export function Home() {
  const [modalDismissed, setModalDismissed] = useState(false);
  
  // Parallax effects for the main content after scroll
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden selection:bg-primary/20">
      
      {!modalDismissed && <EnvelopeModal onOpen={() => setModalDismissed(true)} />}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: modalDismissed ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="w-full h-full relative z-10"
      >
        {/* Decorative background element */}
        <div className="fixed top-0 left-0 right-0 h-96 bg-gradient-to-b from-secondary to-transparent -z-10 pointer-events-none" />

        <header className="pt-24 pb-12 px-6 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: modalDismissed ? 1 : 0, y: modalDismissed ? 0 : 20 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h4 className="font-sans uppercase tracking-[0.2em] text-primary/80 text-sm mb-4">A Celebration</h4>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-foreground font-medium mb-6 tracking-tight">
              Happy{" "}
              <span className="relative inline-block text-primary">
                <span>girlfriends</span>
                <motion.span
                  className="absolute left-0 top-1/2 h-[3px] bg-primary rounded-full"
                  style={{ width: "100%", transformOrigin: "left", translateY: "-50%" }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: modalDismissed ? 1 : 0 }}
                  transition={{ duration: 0.7, delay: 2.2, ease: "easeInOut" }}
                />
              </span>
              <br />
              <motion.span
                className="text-primary"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: modalDismissed ? 1 : 0, y: modalDismissed ? 0 : 14 }}
                transition={{ duration: 0.8, delay: 3.2 }}
              >
                Just Friends day
              </motion.span>
            </h1>
            <p className="font-sans text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Every day with you is a beautiful adventure. Today, we pause to celebrate the incredible person you are, and the wonderful journey we share.
            </p>
          </motion.div>
        </header>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: modalDismissed ? 1 : 0, scale: modalDismissed ? 1 : 0.95 }}
          transition={{ duration: 1.2, delay: 1.5 }}
          className="w-full pb-20"
        >
          <ImageCarousel />
        </motion.div>

        <main className="max-w-3xl mx-auto px-6 pb-32">
          
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-center mb-24"
          >
            <Heart className="w-8 h-8 mx-auto text-primary/40 mb-8" />
            <p className="font-serif text-2xl sm:text-3xl text-foreground leading-relaxed font-normal mb-8">
              "To love and be loved is to feel the sun from both sides."
            </p>
            <p className="font-sans text-muted-foreground leading-loose text-lg">
              When I look back on all the memories we've created, I am overwhelmed with gratitude. 
              You bring a certain kind of magic into the world that can't be replicated. 
              This is just a small reminder of how deeply cherished you are, today and always.
            </p>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="mb-24"
          >
            <h3 className="font-serif text-3xl text-center mb-12 text-foreground">
              Things I Love About You
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {REASONS.map((reason, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="bg-card border border-border/60 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group"
                >
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    {reason.icon}
                  </div>
                  <h4 className="font-serif text-xl mb-3 text-foreground">{reason.title}</h4>
                  <p className="font-sans text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1 }}
            className="text-center pb-20 border-t border-border pt-16 relative"
          >
            <h3 className="font-serif text-3xl mb-4 text-foreground">Forever & Always</h3>
            <p className="font-sans text-muted-foreground mb-8">
              Here's to everything you are, and everything we will be.
            </p>
            <div className="flex justify-center items-center gap-4 text-primary">
              <div className="h-px w-12 bg-primary/30" />
              <Heart className="w-6 h-6 fill-primary/10" strokeWidth={1.5} />
              <div className="h-px w-12 bg-primary/30" />
            </div>
          </motion.section>
        </main>
      </motion.div>
    </div>
  );
}

export default Home;
