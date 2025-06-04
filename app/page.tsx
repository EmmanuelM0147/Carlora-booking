"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Calendar, BarChart3, Users2, Brain, Target, Globe, MessageCircle } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { ServiceShowcase } from "@/components/service-showcase";
import { MethodologySection } from "@/components/home/methodology-section";

// Stats for animated counters
const stats = [
  { value: 50, label: "SMEs Supported", icon: Target },
  { value: 30, label: "Startup Projects", icon: Users2 },
  { value: 300, label: "Global Placements", icon: Globe },
  { value: 95, label: "Client Satisfaction", icon: Brain, suffix: "%" },
];

// Success story data
const successStory = {
  image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920",
  title: "Tech Startup Achieves 300% Growth in 6 Months",
  description: "Through strategic innovation and market positioning, we helped a promising tech startup transform their business model and achieve exceptional growth in a competitive market.",
  link: "/case-studies/tech-startup-growth",
};

export default function Home() {
  const { scrollY } = useScroll();
  const [availableSlots, setAvailableSlots] = useState(5);
  const [secondsUntilReset, setSecondsUntilReset] = useState(0);
  const calendlyUrl = "https://calendly.com/carlorastrategicinnovation";
  const resetDate = new Date("2025-06-08T06:43:00Z"); // 07:43 AM WAT = 06:43 UTC

  // Parallax effect
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.2]);

  // Intersection observer for animations
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Countdown timer for available slots
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diffSeconds = Math.max(0, Math.floor((resetDate.getTime() - now.getTime()) / 1000));
      setSecondsUntilReset(diffSeconds);

      const totalSecondsInWeek = 7 * 24 * 60 * 60;
      const secondsSinceStart = totalSecondsInWeek - diffSeconds;
      const slots = Math.max(0, Math.floor((totalSecondsInWeek - secondsSinceStart) / (totalSecondsInWeek / 5)));
      setAvailableSlots(slots || 0);
    }, 1000);

    return () => clearInterval(interval);
  }, [resetDate]);

  // Format remaining time
  const formatTimeUntilReset = () => {
    const days = Math.floor(secondsUntilReset / (24 * 60 * 60));
    const hours = Math.floor((secondsUntilReset % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((secondsUntilReset % (60 * 60)) / 60);
    const seconds = secondsUntilReset % 60;
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  // Animated counter component
  const Counter = ({ value, duration = 3 }: { value: number; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (statsInView) {
        let start = 0;
        const increment = value / (duration * 60);
        const timer = setInterval(() => {
          start += increment;
          if (start >= value) {
            setCount(value);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 1000 / 60);

        return () => clearInterval(timer);
      }
    }, [value, duration, statsInView]);

    return <span>{count}</span>;
  };

  return (
    <main className="flex min-h-screen flex-col font-sans antialiased">
      {/* Hero Section with Animated Gradient Background */}
      <motion.section
        className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920")',
          y,
        }}
      >
        <style>
          {`
            @keyframes gradient {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            .gradient-overlay {
              background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899, #facc15);
              background-size: 400%;
              animation: gradient 12s ease infinite;
            }
          `}
        </style>
        <motion.div
          className="absolute inset-0 gradient-overlay opacity-70"
          style={{ opacity }}
        />
        <motion.div
          className="relative container mx-auto px-6 sm:px-10 py-32 text-white text-center z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
            Strategic Innovation
            <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">
              for Business Growth
            </span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            Empowering individuals, startups, and businesses with strategic, creative, and actionable solutions for growth and transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full px-8 py-6 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                Book a Free Strategy Call
                <Calendar className="ml-2 h-5 w-5 transition-transform group-hover:scale-125" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-2 border-white rounded-full px-8 py-6 hover:bg-white/20 hover:border-white/80 transition-all duration-300 group"
              onClick={() => window.location.href = "/services"}
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-3" />
            </Button>
          </div>
        </motion.div>
      </motion.section>

      {/* Methodology Section */}
      <section className="py-24 px-6 sm:px-10 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <MethodologySection />
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-24 px-6 sm:px-10 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-gray-900 tracking-tight">
            Our Services
          </h2>
          <ServiceShowcase />
        </div>
      </section>

      {/* Recent Success Story */}
      <section className="py-24 px-6 sm:px-10 bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-gray-900 tracking-tight">
            Recent Success Story
          </h2>
          <motion.div
            className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl"
            whileHover={{ scale: 1.04, boxShadow: "0 15px 40px rgba(0,0,0,0.15)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="relative h-64 sm:h-80 lg:h-96">
              <img
                src={successStory.image}
                alt={successStory.title}
                className="w-full h-full object-cover rounded-t-3xl"
              />
            </div>
            <div className="p-8 sm:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">{successStory.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">{successStory.description}</p>
              <Button
                onClick={() => window.location.href = successStory.link}
                className="bg-blue-600 text-white font-semibold rounded-full px-6 py-3 hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg group"
              >
                Read Full Story
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-3" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-24 px-6 sm:px-10 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.3, duration: 0.8, ease: "easeOut" }}
                className="text-center bg-gradient-to-b from-white to-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <stat.icon className="h-12 w-12 mb-4 mx-auto text-blue-600" />
                <p className="text-4xl sm:text-5xl font-extrabold mb-2 text-gray-900">
                  <Counter value={stat.value} />
                  {stat.suffix}
                </p>
                <p className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 sm:px-10 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-gray-900 tracking-tight">
            Client Success Stories
          </h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 sm:px-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl mb-4 font-light">
              Only <span className="font-bold text-yellow-200">{availableSlots || "No"}</span> consultation slots remaining this week
            </p>
            <p className="text-lg sm:text-xl mb-4 font-light">
              Slots reset in <span className="font-bold text-yellow-200">{formatTimeUntilReset()}</span>
            </p>
            <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto font-light leading-relaxed">
              Schedule a consultation today and let's discuss how we can help you achieve your business goals.
            </p>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-white text-blue-600 font-semibold rounded-full px-8 py-6 hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                Book Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-3" />
              </a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => window.open('https://wa.me/250796157413', '_blank')}
                  className="bg-[#25D366] text-white border-[#25D366] hover:bg-[#25D366]/90 hover:text-white group"
                >
                  Chat on WhatsApp
                  <MessageCircle className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                </Button>
              </motion.div>
        </div>
      </section>
    </main>
  );
}