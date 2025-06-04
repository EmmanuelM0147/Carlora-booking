'use client';

import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function SiteHeader() {
  const { setTheme, theme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navigationItems = [
    { href: '/', label: 'Home' },
    { href: '/strategic-innovation', label: 'Strategic Innovation' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'FAQs' },
    { href: '/contact', label: 'Contact' },
  ] as const;

  if (!isMounted) {
    return null;
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-200 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-background'
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <svg
            viewBox="0 0 100 100"
            width="32"
            height="32"
            className="logo"
          >
            <circle cx="50" cy="50" r="45" fill="#4A5A5E" />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              fontSize="50"
              fontFamily="Arial, sans-serif"
              fontWeight="bold"
              fill="#ffffff"
              dy=".35em"
            >
              C
            </text>
            <text
              x="60%"
              y="60%"
              textAnchor="middle"
              fontSize="40"
              fontFamily="Arial, sans-serif"
              fontWeight="bold"
              fill="#ffffff"
              transform="rotate(15, 50, 50)"
              dy=".35em"
            >
              S
            </text>
            <text
              x="65%"
              y="35%"
              textAnchor="middle"
              fontSize="35"
              fontFamily="Arial, sans-serif"
              fontWeight="bold"
              fill="#ffffff"
              transform="rotate(15, 50, 50)"
              dy=".35em"
            >
              I
            </text>
          </svg>
          <span className="text-xl font-semibold">Carlora</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center justify-between ml-8">
          <div className="flex gap-6">
            {navigationItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative group py-2"
                onClick={(e) => {
                  if (pathname === item.href) {
                    e.preventDefault();
                  }
                }}
              >
                <span className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === item.href ? "text-foreground" : "text-foreground/60"
                )}>
                  {item.label}
                </span>
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-[#26C6DA] scale-x-0 transition-transform duration-200 origin-left"
                  initial={false}
                  animate={{ scaleX: pathname === item.href ? 1 : 0 }}
                />
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button
              onClick={() => router.push("/apply")}
              className="transition-all duration-300 ease-in-out transform hover:scale-105 focus:scale-105 active:scale-95"
            >
              Apply
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-0 z-50 md:hidden bg-[#1A1A1A] overflow-y-auto"
            >
              <div className="relative h-full flex flex-col">
                {/* Close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-3 bg-white rounded-full hover:opacity-80 transition-opacity"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6 text-[#1A1A1A]" />
                </button>

                <nav className="flex flex-col items-center justify-between min-h-screen p-8">
                  <div className="w-full space-y-4 mt-16">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "block w-full text-center py-3 text-[#E0E0E0] text-lg font-medium hover:text-white transition-colors",
                          pathname === item.href && "text-white"
                        )}
                        onClick={() => {
                          if (pathname !== item.href) {
                            setIsOpen(false);
                          }
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                  
                  <Button
                    onClick={() => {
                      setIsOpen(false);
                      router.push("/apply");
                    }}
                    className="w-full max-w-xs mt-auto mb-8"
                  >
                    Apply
                  </Button>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}