"use client";

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    setIsVisible(window.scrollY > 100);
  }, []);

  useEffect(() => {
    // Initial check
    toggleVisibility();
    
    // Add scroll listener with passive option for better performance
    window.addEventListener('scroll', toggleVisibility, { passive: true });

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [toggleVisibility]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Handle keyboard interaction
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      scrollToTop();
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "fixed bottom-[84px] right-5 z-[100]", // Adjusted bottom spacing to 84px (40px + height of book session button)
            "print:hidden",
            "pointer-events-none"
          )}
        >
          <Button
            variant="secondary"
            size="icon"
            onClick={scrollToTop}
            onKeyDown={handleKeyDown}
            className={cn(
              "h-12 w-12 rounded-full",
              "bg-primary/80 hover:bg-primary focus:bg-primary",
              "text-primary-foreground",
              "shadow-lg backdrop-blur-sm",
              "transition-all duration-200",
              "pointer-events-auto",
              "hover:scale-110 active:scale-95",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              "dark:bg-primary/60 dark:hover:bg-primary/80"
            )}
            aria-label="Scroll back to top"
            role="button"
            tabIndex={0}
          >
            <ChevronUp 
              className={cn(
                "h-6 w-6",
                "transition-transform",
                "group-hover:transform group-hover:-translate-y-0.5"
              )} 
            />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}