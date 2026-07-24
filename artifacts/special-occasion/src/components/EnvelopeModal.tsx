import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

interface EnvelopeModalProps {
  onOpen: () => void;
}

export function EnvelopeModal({ onOpen }: EnvelopeModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (!isDismissed) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isDismissed]);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsDismissed(true);
      onOpen();
    }, 1200); // Wait for the exit animation before fully unmounting/revealing the page
  };

  return (
    <AnimatePresence>
      {!isDismissed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4 sm:p-6"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: isOpen ? 1.05 : 1, y: isOpen ? -20 : 0, opacity: isOpen ? 0 : 1 }}
            exit={{ scale: 1.1, opacity: 0, transition: { duration: 0.6 } }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full max-w-md bg-card shadow-2xl rounded-xl border border-border p-8 sm:p-12 text-center relative overflow-hidden"
          >
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-primary/30 rounded-tl-xl m-2" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-primary/30 rounded-tr-xl m-2" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-primary/30 rounded-bl-xl m-2" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-primary/30 rounded-br-xl m-2" />
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Heart className="w-10 h-10 mx-auto text-primary mb-6" strokeWidth={1.5} />
              
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-4 leading-tight">
                For Inaaaaaa lop
              </h2>
              
              <p className="text-muted-foreground mb-10 leading-relaxed font-sans text-sm sm:text-base">
                A small kecil persembahan untuk kanjeng ratu tercinta, yang cantinaaa maha dahsyatt
              </p>
              
              <button
                onClick={handleOpen}
                disabled={isOpen}
                className="group relative inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 disabled:pointer-events-none disabled:opacity-80"
              >
                <span className="relative z-10 font-sans uppercase tracking-widest text-xs">LIAAAATTT</span>
                <div className="absolute inset-0 h-full w-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
