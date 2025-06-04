"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { Search, Lightbulb, Rocket, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "Research & Client Insights",
  },
  {
    icon: Lightbulb,
    title: "Strategy Development",
    description: "Tailored Solutions",
  },
  {
    icon: Rocket,
    title: "Implementation",
    description: "Execution & Optimization",
  },
  {
    icon: TrendingUp,
    title: "Scaling & Innovation",
    description: "Long-term Growth",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function MethodologySection() {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  const variants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
      }
    : itemVariants;

  return (
    <section
      className="w-full py-24 bg-gradient-to-b from-gray-50 to-white"
      aria-labelledby="methodology-title"
    >
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .gradient-button {
            background: linear-gradient(45deg, #4f46e5, #7c3aed);
            background-size: 200%;
            transition: background-position 0.3s ease, transform 0.3s ease;
          }
          .gradient-button:hover {
            background-position: 100% 50%;
            transform: translateX(5px);
          }
        `}
      </style>
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <motion.h2
              id="methodology-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Transforming Ideas into
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Scalable Innovation
              </span>
            </motion.h2>
            <motion.p
              className="max-w-[700px] text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
              At Carlora, we empower businesses with tailored strategies, data-driven insights, and scalable solutions to unlock their full potential. Partner with us to drive sustainable success through innovative solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <Button
                size="lg"
                onClick={() => router.push("/services")}
                className="gradient-button text-white font-semibold rounded-full px-8 py-6 shadow-lg group"
              >
                Discover Our Approach
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Animated Infographic */}
          <motion.div
            className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            aria-label="Methodology steps"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={variants}
                custom={index}
                role="article"
                aria-label={`Step ${index + 1}: ${step.title}`}
                whileHover={{ scale: 1.05 }}
              >
                <div className="mb-4 p-4 bg-indigo-50 rounded-full">
                  <step.icon className="h-8 w-8 text-indigo-600" aria-hidden="true" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}