"use client";

import { useEffect, useState } from "react";
import {
  Settings,
  Wrench,
  Headphones,
  Truck,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Target,
  Zap,
} from "lucide-react";

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);

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

  const services = [
    {
      id: 1,
      icon: Settings,
      title: "Design & Engineering",
      description:
        "Complete product design and engineering services from concept to production-ready specifications.",
      features: [
        "CAD/CAM Design",
        "3D Modeling",
        "Finite Element Analysis",
        "Design Optimization",
        "Prototype Development",
      ],
      process: [
        "Initial Consultation",
        "Concept Development",
        "Design Validation",
        "Engineering Review",
        "Final Approval",
      ],
      timeline: "2-4 weeks",
      image:
        "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      icon: Wrench,
      title: "Manufacturing Services",
      description:
        "Full-scale manufacturing services with precision molding, machining, and assembly capabilities.",
      features: [
        "Injection Molding",
        "CNC Machining",
        "Assembly Services",
        "Surface Finishing",
        "Packaging Solutions",
      ],
      process: [
        "Material Selection",
        "Production Setup",
        "Quality Testing",
        "Manufacturing",
        "Final Inspection",
      ],
      timeline: "3-6 weeks",
      image:
        "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Comprehensive quality control and testing services ensuring product excellence and compliance.",
      features: [
        "Dimensional Inspection",
        "Material Testing",
        "Performance Validation",
        "Compliance Certification",
        "Statistical Analysis",
      ],
      process: [
        "Test Planning",
        "Sample Testing",
        "Data Analysis",
        "Report Generation",
        "Certification",
      ],
      timeline: "1-2 weeks",
      image:
        "https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 4,
      icon: Headphones,
      title: "Technical Support",
      description:
        "24/7 technical support and maintenance services to keep your operations running smoothly.",
      features: [
        "Remote Diagnostics",
        "On-site Support",
        "Preventive Maintenance",
        "Training Programs",
        "Emergency Response",
      ],
      process: [
        "Issue Assessment",
        "Solution Development",
        "Implementation",
        "Testing & Validation",
        "Follow-up",
      ],
      timeline: "24-48 hours",
      image:
        "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 5,
      icon: Truck,
      title: "Logistics & Delivery",
      description:
        "Comprehensive logistics solutions ensuring secure and timely delivery of your products worldwide.",
      features: [
        "Global Shipping",
        "Secure Packaging",
        "Real-time Tracking",
        "Insurance Coverage",
        "White Glove Service",
      ],
      process: [
        "Packaging Preparation",
        "Shipping Coordination",
        "Transit Monitoring",
        "Delivery Confirmation",
        "Post-Delivery Support",
      ],
      timeline: "3-7 days",
      image:
        "https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 6,
      icon: Target,
      title: "Consulting Services",
      description:
        "Strategic manufacturing consulting to optimize processes, reduce costs, and improve efficiency.",
      features: [
        "Process Analysis",
        "Cost Optimization",
        "Efficiency Improvement",
        "Technology Assessment",
        "Strategic Planning",
      ],
      process: [
        "Current State Analysis",
        "Opportunity Identification",
        "Solution Design",
        "Implementation Planning",
        "Results Monitoring",
      ],
      timeline: "4-8 weeks",
      image:
        "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const serviceStats = [
    { icon: Clock, value: "100%", label: "Commitment Level" },
    { icon: Star, value: "Growing", label: "Client Network" },
    { icon: Target, value: "Precision", label: "Our Standard" },
    { icon: Zap, value: "24/7", label: "Innovation Drive" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-mesh relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-700/10 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-animation="scale-in">
            <h1 className="text-5xl lg:text-7xl font-bold font-playfair text-white mb-8">
              Comprehensive
              <span className="block bg-gradient-to-r from-slate-300 to-slate-100 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
              From initial design to final delivery, we provide end-to-end
              manufacturing services that ensure your project's success at every
              stage of development.
            </p>

            {/* Service Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {serviceStats.map((stat, index) => (
                <div
                  key={index}
                  className={`glass-card rounded-2xl p-6 text-center hover-lift stagger-${
                    index + 1
                  }`}
                >
                  <stat.icon className="w-8 h-8 text-slate-300 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animation="fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-slate-900 mb-6">
              Our Service Portfolio
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive manufacturing services designed to support your
              entire product lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                data-animation="scale-in"
                className={`bg-slate-50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-slate-200 hover:border-slate-300 hover-lift stagger-${
                  index + 1
                } cursor-pointer`}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>

                  {/* Service Icon Overlay */}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <service.icon className="w-6 h-6 text-slate-800" />
                    </div>
                  </div>

                  {/* Timeline Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-slate-900/80 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                      {service.timeline}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold font-playfair text-slate-900 mb-4 group-hover:text-slate-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {service.features
                        .slice(0, 3)
                        .map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center space-x-3 text-sm"
                          >
                            <CheckCircle className="w-4 h-4 text-slate-600 flex-shrink-0" />
                            <span className="text-slate-600">{feature}</span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Expandable Process */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      activeService === service.id
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="border-t border-slate-200 pt-4 mb-6">
                      <h4 className="font-semibold text-slate-800 mb-3">
                        Our Process:
                      </h4>
                      <div className="space-y-2">
                        {service.process.map((step, stepIndex) => (
                          <div
                            key={stepIndex}
                            className="flex items-center space-x-3 text-sm"
                          >
                            <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-xs font-bold text-slate-600">
                              {stepIndex + 1}
                            </div>
                            <span className="text-slate-600">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button className="group w-full px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-xl font-medium hover:from-slate-700 hover:to-slate-600 transition-all duration-200 flex items-center justify-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process Timeline */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animation="fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-slate-900 mb-6">
              How We Work
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our proven methodology ensures successful project delivery from
              initial consultation to ongoing support.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-slate-300 to-slate-600 hidden lg:block"></div>

            <div className="space-y-16">
              {[
                {
                  step: "01",
                  title: "Discovery & Planning",
                  description:
                    "Comprehensive project analysis, requirement gathering, and strategic planning with stakeholder alignment.",
                  icon: Target,
                  deliverables: [
                    "Project scope document",
                    "Technical specifications",
                    "Timeline & milestones",
                  ],
                },
                {
                  step: "02",
                  title: "Design & Development",
                  description:
                    "Creative design development, prototyping, and iterative refinement based on feedback and testing.",
                  icon: Settings,
                  deliverables: [
                    "Design concepts",
                    "Working prototypes",
                    "Technical drawings",
                  ],
                },
                {
                  step: "03",
                  title: "Production & Quality",
                  description:
                    "Full-scale production with continuous quality monitoring and process optimization.",
                  icon: Shield,
                  deliverables: [
                    "Production samples",
                    "Quality reports",
                    "Process documentation",
                  ],
                },
                {
                  step: "04",
                  title: "Delivery & Support",
                  description:
                    "Secure delivery, installation support, and ongoing technical assistance for optimal performance.",
                  icon: Truck,
                  deliverables: [
                    "Final products",
                    "Installation guide",
                    "Support documentation",
                  ],
                },
              ].map((phase, index) => (
                <div
                  key={index}
                  data-animation={
                    index % 2 === 0 ? "fade-in-left" : "fade-in-right"
                  }
                  className={`flex items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } stagger-${index + 1}`}
                >
                  <div className="lg:w-5/12">
                    <div
                      className={`${
                        index % 2 === 0
                          ? "lg:text-right lg:pr-12"
                          : "lg:text-left lg:pl-12"
                      }`}
                    >
                      <div className="inline-block px-4 py-2 bg-slate-900 text-white rounded-full font-bold mb-4 text-sm">
                        Phase {phase.step}
                      </div>
                      <h3 className="text-3xl font-bold font-playfair text-slate-900 mb-4">
                        {phase.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                        {phase.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-slate-800 mb-3">
                          Key Deliverables:
                        </h4>
                        {phase.deliverables.map((deliverable, delIndex) => (
                          <div
                            key={delIndex}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="w-4 h-4 text-slate-600" />
                            <span className="text-slate-600 text-sm">
                              {deliverable}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Timeline Node */}
                  <div className="hidden lg:flex lg:w-2/12 justify-center">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-slate-800 to-slate-700 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-110">
                        <phase.icon className="w-10 h-10 text-white" />
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-slate-700/10 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-slate-600/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-animation="scale-in">
            <h2 className="text-4xl lg:text-6xl font-bold font-playfair text-white mb-8">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ready to experience the Moldcraft difference? Our team of experts
              is standing by to discuss your project and develop the perfect
              solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="/contact"
                className="group px-10 py-5 bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-full font-semibold text-lg hover:from-slate-600 hover:to-slate-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-2 animate-pulse-glow"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/products"
                className="px-10 py-5 border-2 border-slate-300 text-slate-300 rounded-full font-semibold text-lg hover:bg-slate-300 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                View Products
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
      `}</style>
    </>
  );
}
