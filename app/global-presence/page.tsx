"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Globe, Award, Building, Users, FileCheck, Star, TrendingUp, Newspaper, AlignCenterVertical as Certificate, Handshake, Languages } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Regional operations data
const regions = [
  {
    name: "North America",
    countries: ["United States", "Canada"],
    metrics: {
      marketPenetration: 85,
      clientSatisfaction: 95,
      partnerships: 45,
      mediaPresence: 78
    },
    certifications: ["ISO 9001", "CMMI Level 5"],
    keyPartners: ["Microsoft", "Oracle", "IBM"],
    successStories: 120
  },
  {
    name: "Europe",
    countries: ["UK", "Germany", "France", "Netherlands"],
    metrics: {
      marketPenetration: 72,
      clientSatisfaction: 92,
      partnerships: 38,
      mediaPresence: 65
    },
    certifications: ["ISO 27001", "GDPR Compliant"],
    keyPartners: ["SAP", "Siemens", "Deutsche Bank"],
    successStories: 95
  },
  {
    name: "Asia Pacific",
    countries: ["Singapore", "Japan", "Australia", "India"],
    metrics: {
      marketPenetration: 68,
      clientSatisfaction: 90,
      partnerships: 42,
      mediaPresence: 70
    },
    certifications: ["ISO 20000", "APAC Excellence"],
    keyPartners: ["Toyota", "Samsung", "Tata"],
    successStories: 85
  },
  {
    name: "Middle East",
    countries: ["UAE", "Saudi Arabia", "Qatar"],
    metrics: {
      marketPenetration: 65,
      clientSatisfaction: 94,
      partnerships: 28,
      mediaPresence: 60
    },
    certifications: ["ISO 14001", "Dubai Quality Mark"],
    keyPartners: ["Emirates", "Saudi Aramco", "ADNOC"],
    successStories: 55
  }
];

// Industry recognition data
const recognition = [
  {
    year: 2024,
    awards: [
      "Global Business Excellence Award",
      "Innovation in Consulting - Gold",
      "Best Digital Transformation Partner"
    ]
  },
  {
    year: 2023,
    awards: [
      "Forbes Top Consulting Firms",
      "FT Management Consultancy Awards",
      "Digital Innovation Award"
    ]
  }
];

// Compliance and standards
const compliance = [
  "ISO 9001:2015 - Quality Management",
  "ISO 27001 - Information Security",
  "ISO 20000 - IT Service Management",
  "GDPR Compliance",
  "SOC 2 Type II Certified",
  "Industry-specific regulations in each region"
];

export default function GlobalPresence() {
  const [mapRef, mapInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2940")',
        backgroundAttachment: 'fixed'
      }}>
        <div className="absolute inset-0 bg-black/60" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative container mx-auto px-6 text-white text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Global Presence &
            <span className="text-primary block">International Credibility</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg">
            Delivering excellence across borders with proven expertise and trusted partnerships worldwide.
          </p>
        </motion.div>
      </section>

      {/* Regional Operations */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">Regional Operations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5" />
                      {region.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Key Metrics</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Market Penetration</p>
                            <div className="h-2 bg-muted rounded-full mt-1">
                              <div 
                                className="h-full bg-primary rounded-full"
                                style={{ width: `${region.metrics.marketPenetration}%` }}
                              />
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                            <div className="h-2 bg-muted rounded-full mt-1">
                              <div 
                                className="h-full bg-primary rounded-full"
                                style={{ width: `${region.metrics.clientSatisfaction}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Key Partners</h4>
                        <div className="flex flex-wrap gap-2">
                          {region.keyPartners.map((partner) => (
                            <span
                              key={partner}
                              className="px-2 py-1 bg-muted rounded-full text-sm"
                            >
                              {partner}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Certifications</h4>
                        <div className="flex flex-wrap gap-2">
                          {region.certifications.map((cert) => (
                            <span
                              key={cert}
                              className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
                            >
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition & Awards */}
      <section className="py-24 px-6 bg-muted/50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">Industry Recognition</h2>
          <div className="space-y-8">
            {recognition.map((year) => (
              <Card key={year.year}>
                <CardHeader>
                  <CardTitle>{year.year} Awards & Recognition</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {year.awards.map((award) => (
                      <div
                        key={award}
                        className="flex items-center gap-2"
                      >
                        <Award className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-sm">{award}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">Compliance & Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {compliance.map((standard, index) => (
              <motion.div
                key={standard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Certificate className="h-8 w-8 text-primary shrink-0" />
                      <p>{standard}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Success Metrics */}
      <section className="py-24 px-6 bg-muted/50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">Key Success Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <TrendingUp className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-2">85%</h3>
                  <p className="text-sm text-muted-foreground">Average Market Penetration</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Star className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-2">92%</h3>
                  <p className="text-sm text-muted-foreground">Client Satisfaction Rate</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Handshake className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-2">150+</h3>
                  <p className="text-sm text-muted-foreground">Strategic Partnerships</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Languages className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-2">25+</h3>
                  <p className="text-sm text-muted-foreground">Languages Supported</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}