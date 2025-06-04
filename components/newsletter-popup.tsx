'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Check if user has already interacted with the popup
    const hasSeenPopup = localStorage.getItem('hasSeenNewsletterPopup');
    if (hasSeenPopup) return;

    // Show popup after 10 seconds
    const timeoutId = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    // Cleanup timeout
    return () => clearTimeout(timeoutId);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setHasInteracted(true);
    localStorage.setItem('hasSeenNewsletterPopup', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the newsletter subscription
    console.log('Newsletter subscription:', email);
    handleClose();
  };

  if (hasInteracted) return null;

  // Base styles
  const cardStyle = {
    position: 'fixed' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#1a1a1a',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    zIndex: 1000,
    width: '100%',
    maxWidth: '28rem', // 448px, equivalent to max-w-md
    textAlign: 'center' as const,
  };

  const titleStyle = {
    fontSize: '1.5rem', // 24px
    margin: '0 0 10px 0',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#26C6DA',
    color: 'black',
    fontSize: '1rem',
  };

  const buttonStyle = {
    backgroundColor: '#26C6DA',
    border: 'none',
    color: 'white',
    fontSize: '1rem',
    cursor: 'pointer',
    padding: '10px',
    width: '100%',
  };

  const dismissStyle = {
    display: 'block',
    marginTop: '10px',
    color: '#26C6DA',
    textDecoration: 'none',
    fontSize: '0.875rem',
  };

  const closeButtonStyle = {
    position: 'absolute' as const,
    right: '1rem',
    top: '1rem',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div
            style={{
              position: 'fixed' as const,
              inset: '0',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 50,
            }}
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            style={{
              position: 'fixed' as const,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 50,
              width: '100%',
              padding: '1rem',
            }}
          >
            <div style={cardStyle}>
              <div style={closeButtonStyle}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleClose}
                  style={{ background: 'none', border: 'none' }}
                >
                  <X style={{ height: '1rem', width: '1rem' }} />
                </Button>
              </div>
              <div style={titleStyle}>Get Exclusive Business Tips Monthly</div>
              <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={inputStyle}
                />
                <div style={{ marginTop: '1rem' }}>
                  <Button
                    type="submit"
                    style={buttonStyle}
                    className="hover:bg-[#1FA5B8]"
                  >
                    Subscribe
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={handleClose}
                    style={dismissStyle}
                  >
                    No thanks
                  </Button>
                </div>
              </form>
            </div>
            {/* Inline media queries for mobile responsiveness */}
            <style>
              {`
                @media (max-width: 768px) {
                  div[style*="#1a1a1a"] {
                    max-width: 90% !important;
                    padding: 15px !important;
                  }
                  div[style*="1.5rem"] {
                    font-size: 1.25rem !important;
                  }
                  input[style*="#26C6DA"] {
                    font-size: 0.875rem !important;
                    padding: 8px !important;
                  }
                  button[style*="#26C6DA"] {
                    font-size: 0.875rem !important;
                    padding: 8px !important;
                  }
                  a[style*="0.875rem"] {
                    font-size: 0.75rem !important;
                  }
                }
              `}
            </style>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}