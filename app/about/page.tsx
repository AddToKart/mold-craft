"use client";

import { useEffect } from "react";
import {
  Target,
  Eye,
  Award,
  Users,
  TrendingUp,
  Shield,
  Rocket,
  Globe,
  Lightbulb,
  Zap,
} from "lucide-react";

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const animationType = element.dataset.animation || "fade-in-up";
            element.classList.add(`animate-${animationType}`);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animation]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Shield,
      title: "Quality First",
      description:
        "Uncompromising commitment to quality in every product and process.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Continuous innovation to stay ahead of industry trends and technologies.",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description:
        "Building lasting relationships through exceptional service and support.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Pursuing excellence in manufacturing, service, and client satisfaction.",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const timeline = [
    {
      year: "Aug 2025",
      title: "Company Founded",
      description:
        "Launched with a vision to revolutionize manufacturing processes through innovative molding solutions and cutting-edge technology.",
      icon: Rocket,
      milestone: "Journey begins",
    },
    {
      year: "Q4 2025",
      title: "First Clients",
      description:
        "Targeting our first partnerships with forward-thinking companies seeking manufacturing innovation.",
      icon: TrendingUp,
      milestone: "Building partnerships",
    },
    {
      year: "2026",
      title: "Technology Advancement",
      description:
        "Expanding our automation capabilities and implementing AI-powered quality systems.",
      icon: Zap,
      milestone: "Tech integration roadmap",
    },
    {
      year: "2027",
      title: "Market Expansion",
      description:
        "Planning strategic growth to serve regional markets with specialized manufacturing solutions.",
      icon: Globe,
      milestone: "Growth phase",
    },
    {
      year: "2028+",
      title: "Industry Innovation",
      description:
        "Establishing ourselves as a key innovator in precision manufacturing and sustainable practices.",
      icon: Award,
      milestone: "Future leadership",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-mesh relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-700/10 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10" data-animation="scale-in">
            <h1 className="text-5xl lg:text-7xl font-bold font-playfair text-white mb-8">
              About Moldcraft
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Founded in August 2025, we're pioneering the future of
              manufacturing with fresh ideas, innovative solutions, and a
              commitment to redefining industry standards through cutting-edge
              technology and exceptional vision.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div data-animation="fade-in-left">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold font-playfair text-slate-900">
                  Our Mission
                </h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                To revolutionize manufacturing with innovative solutions that
                combine precision engineering, emerging technology, and
                exceptional craftsmanship. We're committed to building lasting
                partnerships while pushing the boundaries of what's possible.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Every project we pursue reflects our commitment to innovation,
                quality, and customer collaboration, ensuring that breakthrough
                ideas become reality through our fresh perspective and
                dedication to excellence.
              </p>
            </div>
            <div data-animation="fade-in-right">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold font-playfair text-slate-900">
                  Our Vision
                </h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                To become a leading force in advanced manufacturing solutions,
                recognized for our innovation, fresh approaches, and commitment
                to sustainable practices. We envision a future where
                manufacturing drives positive change across industries.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Through continuous improvement and technological advancement, we
                aim to shape the future of manufacturing while creating value
                for our clients, employees, and communities worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animation="fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-slate-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and
              every solution we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                data-animation="bounce-in"
                className={`bg-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 group border border-slate-200 hover:border-slate-300 hover-lift stagger-${
                  index + 1
                } relative overflow-hidden`}
              >
                {/* Gradient Overlay */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${value.color} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity`}
                ></div>

                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl mb-6 group-hover:shadow-lg transition-all duration-300 group-hover:scale-110 relative z-10`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold font-playfair text-slate-900 mb-4 relative z-10">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed relative z-10">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animation="fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-slate-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From humble beginnings to industry leadership, our story is one of
              continuous growth, innovation, and unwavering commitment to
              excellence.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-slate-300 via-slate-600 to-slate-900 hidden lg:block"></div>

            <div className="space-y-12 lg:space-y-16">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  data-animation={
                    index % 2 === 0 ? "fade-in-left" : "fade-in-right"
                  }
                  className={`flex items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } stagger-${index + 1}`}
                >
                  <div className="lg:w-5/12 lg:px-8">
                    <div
                      className={`${
                        index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                      }`}
                    >
                      <div className="inline-block px-6 py-3 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-full font-bold mb-4 shadow-lg">
                        {item.year}
                      </div>
                      <h3 className="text-3xl font-bold font-playfair text-slate-900 mb-4">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-lg mb-3">
                        {item.description}
                      </p>
                      <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">
                        {item.milestone}
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Timeline Node */}
                  <div className="hidden lg:flex lg:w-2/12 justify-center">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-700 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-110">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute inset-0 bg-slate-600 rounded-full animate-ping opacity-20"></div>
                    </div>
                  </div>

                  <div className="lg:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* New Certifications Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animation="fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-slate-900 mb-6">
              Certifications & Standards
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our commitment to excellence is validated by industry-leading
              certifications and quality standards.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "ISO 9001:2015", description: "Quality Management" },
              { name: "ISO 14001", description: "Environmental Management" },
              { name: "AS9100", description: "Aerospace Quality" },
              { name: "IATF 16949", description: "Automotive Quality" },
              {
                name: "FDA Registered",
                description: "Medical Device Manufacturing",
              },
              { name: "OSHA Compliant", description: "Workplace Safety" },
            ].map((cert, index) => (
              <div
                key={index}
                data-animation="bounce-in"
                className={`text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover-lift stagger-${
                  index + 1
                }`}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-sm">
                  {cert.name}
                </h3>
                <p className="text-slate-600 text-xs">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-slate-700/10 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-slate-600/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-animation="scale-in" className="relative z-10">
            <h2 className="text-4xl lg:text-6xl font-bold font-playfair text-white mb-8">
              Partner With Us
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience the difference that 15+ years of manufacturing
              excellence can make for your next project. Let's build something
              extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="/contact"
                className="px-10 py-5 bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-full font-semibold text-lg hover:from-slate-600 hover:to-slate-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-pulse-glow"
              >
                Get in Touch
              </a>
              <a
                href="/products"
                className="px-10 py-5 border-2 border-slate-300 text-slate-300 rounded-full font-semibold text-lg hover:bg-slate-300 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.6s ease-out forwards;
        }

        .animate-bounce-in {
          animation: bounce-in 0.8s ease-out forwards;
        }
      `}</style>
    </>
  );
}
