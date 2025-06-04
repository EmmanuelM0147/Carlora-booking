"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart,
  Brain,
  Users,
  Target,
  LineChart,
  Workflow,
  Award,
  Building2,
  Code,
  Rocket,
  Users2,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    icon: Building2,
    title: "Business Strategy",
    description: "Develop comprehensive business strategies aligned with your goals and market opportunities.",
    details: [
      "Market penetration strategies",
      "Competitive positioning",
      "Growth roadmap development",
      "ROI optimization"
    ]
  },
  {
    icon: BarChart,
    title: "Performance Optimization",
    description: "Enhance operational efficiency and maximize business performance through data-driven insights.",
    details: [
      "Process optimization",
      "Resource allocation",
      "Cost reduction strategies",
      "Performance metrics"
    ]
  },
  {
    icon: Workflow,
    title: "Strategic Change Management",
    description: "Guide organizations through transformational change with proven methodologies and expert support.",
    details: [
      "Change readiness assessment",
      "Stakeholder management",
      "Implementation planning",
      "Training and support"
    ]
  },
  {
    icon: LineChart,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights for informed decision-making and competitive advantage.",
    details: [
      "Data strategy development",
      "Analytics implementation",
      "Predictive modeling",
      "Performance tracking"
    ]
  },
  {
    icon: Brain,
    title: "Business Process Transformation",
    description: "Redesign and optimize core business processes to improve efficiency and drive growth.",
    details: [
      "Process mapping",
      "Digital transformation",
      "Automation solutions",
      "Quality management"
    ]
  },
  {
    icon: Award,
    title: "Sustainable Growth Strategy",
    description: "Develop long-term strategies that balance growth with sustainability and social responsibility.",
    details: [
      "Sustainability assessment",
      "ESG integration",
      "Long-term planning",
      "Impact measurement"
    ]
  },
  {
    icon: Code,
    title: "Interface Design",
    description: "Design websites and apps with stunning visuals, intuitive usability, and seamless functionality.",
    details: [
      "User-centered design",
      "Prototyping",
      "Usability testing",
      "Responsive design"
    ]
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Create seamless digital experiences with expert development in front-end, back-end, CMS, and eCommerce.",
    details: [
      "Custom web solutions",
      "CMS integration",
      "eCommerce platforms",
      "Scalable architecture"
    ]
  },
  {
    icon: Code,
    title: "Mobile App Development",
    description: "Develop innovative and user-friendly mobile applications to enhance accessibility and engagement.",
    details: [
      "iOS and Android development",
      "Cross-platform solutions",
      "App store optimization",
      "Maintenance and updates"
    ]
  },
  {
    icon: Brain,
    title: "Product Validation",
    description: "Validate your products through rigorous testing and research to ensure market fit.",
    details: [
      "Market research",
      "User testing",
      "Feasibility analysis",
      "Product refinement"
    ]
  },
  {
    icon: Users,
    title: "User Experience",
    description: "Enhance user satisfaction by improving the usability and accessibility of your digital products.",
    details: [
      "UX audits",
      "User journey mapping",
      "Accessibility compliance",
      "Feedback integration"
    ]
  },
  {
    icon: Brain,
    title: "UI Design",
    description: "Craft visually appealing and functional user interfaces that align with your brand.",
    details: [
      "Visual design",
      "Interaction design",
      "Style guides",
      "Brand consistency"
    ]
  },
  {
    icon: Code,
    title: "Firmware & Embedded Systems",
    description: "Design and develop firmware and embedded systems solutions to power hardware innovations.",
    details: [
      "Embedded software development",
      "Hardware integration",
      "Firmware optimization",
      "Testing and debugging"
    ]
  },
  {
    icon: Users2,
    title: "Ongoing Support",
    description: "Offer ongoing website and app support, including updates, new features, and security enhancements.",
    details: [
      "Maintenance services",
      "Security updates",
      "Feature enhancements",
      "Technical support"
    ]
  },
  {
    icon: Building2,
    title: "Business Analysis Report",
    description: "Analyze your operations, market trends, and financial data to uncover growth opportunities.",
    details: [
      "Operational analysis",
      "Market trend evaluation",
      "Financial insights",
      "Growth recommendations"
    ]
  },
  {
    icon: Building2,
    title: "Business Management Consultancy",
    description: "Streamline operations, improve productivity, and navigate change with tailored consultancy.",
    details: [
      "Operational streamlining",
      "Productivity enhancement",
      "Change navigation",
      "Strategic advice"
    ]
  },
  {
    icon: Brain,
    title: "Business Presentation Service",
    description: "Design engaging and visually striking presentations to communicate with impact.",
    details: [
      "Investor pitch design",
      "Boardroom presentations",
      "Visual storytelling",
      "Audience engagement"
    ]
  },
  {
    icon: Building2,
    title: "Formulation of Business Plan/Proposal",
    description: "Craft data-driven business plans and proposals to inspire confidence and drive results.",
    details: [
      "Strategic planning",
      "Financial projections",
      "Proposal development",
      "Actionable roadmaps"
    ]
  },
  {
    icon: Rocket,
    title: "Business Start-Ups Development",
    description: "Support startups from concept to execution with guidance in planning and branding.",
    details: [
      "Concept development",
      "Branding strategy",
      "Marketing planning",
      "Operational setup"
    ]
  },
  {
    icon: Users,
    title: "Change Management and Leadership Support",
    description: "Help organizations adapt to change while strengthening leadership capabilities.",
    details: [
      "Change adaptation",
      "Leadership training",
      "Team empowerment",
      "Disruption minimization"
    ]
  },
  {
    icon: Users2,
    title: "Online Business Coaching and Career Guidance",
    description: "Provide personalized guidance for entrepreneurs and professionals to achieve goals.",
    details: [
      "Business coaching",
      "Career planning",
      "Goal setting",
      "Challenge resolution"
    ]
  },
  {
    icon: Brain,
    title: "Education Consultation/Recruitment Service",
    description: "Guide students and institutions through educational planning and recruitment.",
    details: [
      "School selection",
      "International placements",
      "Recruitment support",
      "Educational planning"
    ]
  },
  {
    icon: Brain,
    title: "Graphic Design and Branding",
    description: "Create stunning visuals that reflect your brand identity and engage your audience.",
    details: [
      "Logo design",
      "Marketing materials",
      "Digital content",
      "Brand identity"
    ]
  },
  {
    icon: Target,
    title: "Digital Marketing Management",
    description: "Build a strong digital presence with strategies for SEO, advertising, and engagement.",
    details: [
      "SEO optimization",
      "Social media strategy",
      "Online advertising",
      "Performance tracking"
    ]
  },
];

const stats = [
  { value: "50+", label: "SMEs Strategized" },
  { value: "30+", label: "Startups Branded" },
  { value: "Global", label: "Student Placements" },
  { value: "3x", label: "Digital ROI Achieved" }
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="flex min-h-screen flex-col" role="main">
      <section 
        className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2940")',
          backgroundAttachment: 'fixed'
        }}
        role="banner"
        aria-labelledby="hero-title"
      >
        <div className="absolute inset-0 bg-black/50" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative container mx-auto px-6 text-white text-center"
        >
          <h1 
            id="hero-title"
            className="text-4xl font-bold tracking-tight sm:text-6xl mb-6"
          >
            Carlora Strategic Innovation
            <span className="block">Unlocking Business Potential</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg">
            A dynamic consulting firm committed to helping individuals, start-ups, and established businesses thrive in a rapidly changing world through strategic insight, creativity, and practical solutions.
          </p>
        </motion.div>
      </section>

      <section 
        className="py-12 px-6 bg-muted/50"
        role="region"
        aria-label="Company Statistics"
      >
        <div className="mx-auto max-w-7xl">
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            ref={ref}
          >
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`text-center transform transition-all duration-500 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section 
        className="py-24 px-6"
        role="region"
        aria-labelledby="services-title"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 
              id="services-title"
              className="text-3xl font-bold tracking-tight mb-4"
            >
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Comprehensive solutions tailored to your business needs
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={index}
                  className="transform transition-all duration-300 hover:scale-105"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {<service.icon className="h-5 w-5\" aria-hidden="true" />}
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="details" className="border-none">
                        <AccordionTrigger className="text-sm py-2 px-3 hover:no-underline bg-muted rounded-md">
                          View Details
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            {service.details.map((detail, idx) => (
                              <li key={idx}>{detail}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section 
        className="py-24 px-6 bg-primary text-primary-foreground"
        role="region"
        aria-label="Call to Action"
      >
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let Carlora Strategic Innovation be your trusted partner in progress.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            onClick={() => {
              try {
                window.open("https://calendly.com/carlorastrategicinnovation", "_blank");
                console.log("Redirected to Calendly successfully at", new Date().toLocaleString());
              } catch (error) {
                console.error("Failed to open Calendly:", error);
                window.location.href = "https://calendly.com/carlorastrategicinnovation"; // Fallback
              }
            }}
            aria-label="Schedule a consultation"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </section>
    </main>
  );
}