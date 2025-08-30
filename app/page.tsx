"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  CheckCircle,
  Star,
  Users,
  Award,
  TrendingUp,
  Zap,
  Shield,
  Target,
  Globe,
  Rocket,
  Lightbulb,
} from "lucide-react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

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

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const stats = [
    { icon: Rocket, value: "Aug 2025", label: "Founded" },
    { icon: Target, value: "100%", label: "Precision Focus" },
    { icon: Zap, value: "24/7", label: "Innovation Drive" },
    { icon: Users, value: "Growing", label: "Partner Network" },
  ];

  const features = [
    {
      icon: Target,
      title: "Precision Engineering",
      description:
        "Advanced machinery and innovative processes designed for unmatched precision in every product.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Shield,
      title: "Quality Focus",
      description:
        "Rigorous standards and quality control measures ensuring superior product reliability from day one.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Zap,
      title: "Custom Innovation",
      description:
        "Flexible, tailored manufacturing solutions designed to meet your unique requirements and vision.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Lightbulb,
      title: "Future-Forward",
      description:
        "Continuous innovation and research to pioneer the next generation of manufacturing technologies.",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const achievements = [
    {
      icon: Globe,
      title: "Vision & Scope",
      description:
        "Building solutions designed for global markets with localized innovation.",
      metric: "Global",
      label: "Mindset",
    },
    {
      icon: Rocket,
      title: "Innovation Lab",
      description:
        "State-of-the-art facility developing next-generation manufacturing technologies.",
      metric: "1",
      label: "Advanced Facility",
    },
    {
      icon: Lightbulb,
      title: "Fresh Perspective",
      description:
        "Bringing new ideas and cutting-edge approaches to traditional manufacturing challenges.",
      metric: "New",
      label: "Innovative Approach",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-mesh">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-slate-500/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Interactive Mouse Follower */}
          <div
            className="absolute w-32 h-32 bg-slate-400/10 rounded-full blur-2xl pointer-events-none transition-all duration-300"
            style={{
              left: mousePosition.x - 64,
              top: mousePosition.y - 64,
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-slate-700/50 text-slate-300 rounded-full text-sm font-medium mb-4 animate-shimmer">
                🚀 Pioneering the Future of Manufacturing
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold font-playfair text-white mb-8 leading-tight">
              Crafting Excellence in
              <span className="block bg-gradient-to-r from-slate-300 to-slate-100 bg-clip-text text-transparent">
                Manufacturing
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Reimagining manufacturing through innovative molding solutions,
              precision engineering, and cutting-edge technology that pushes the
              boundaries of what's possible.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <Link
                href="/products"
                className="group px-10 py-5 bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-full font-semibold text-lg hover:from-slate-600 hover:to-slate-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-2 animate-pulse-glow"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="group px-10 py-5 border-2 border-slate-300 text-slate-300 rounded-full font-semibold text-lg hover:bg-slate-300 hover:text-slate-900 transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Floating Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`glass-card rounded-2xl p-6 text-center hover-lift stagger-${
                    index + 1
                  }`}
                  style={{ animationDelay: `${1 + index * 0.2}s` }}
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

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group">
          <div className="w-8 h-12 border-2 border-slate-300 rounded-full flex justify-center group-hover:border-white transition-colors">
            <div className="w-1.5 h-4 bg-slate-300 rounded-full mt-2 animate-pulse group-hover:bg-white transition-colors"></div>
          </div>
          <p className="text-slate-400 text-xs mt-2 group-hover:text-white transition-colors">
            Scroll to explore
          </p>
        </div>
      </section>

      {/* Enhanced Achievements Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-900 via-slate-600 to-slate-900"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animation="fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-slate-900 mb-6">
              Our Vision & Innovation
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're building the future of manufacturing with fresh perspectives
              and cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                data-animation="bounce-in"
                className={`text-center group hover-lift stagger-${index + 1}`}
              >
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl mb-6 group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 animate-pulse-glow">
                    <achievement.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-slate-600 rounded-3xl animate-ping opacity-20 group-hover:opacity-30"></div>
                </div>
                <div className="text-5xl font-bold font-playfair text-slate-900 mb-2">
                  {achievement.metric}
                </div>
                <div className="text-sm text-slate-500 mb-3">
                  {achievement.label}
                </div>
                <h3 className="text-xl font-semibold font-playfair text-slate-900 mb-3">
                  {achievement.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50 relative">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animation="fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-slate-900 mb-6">
              Why Choose Moldcraft
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We combine emerging technology with deep manufacturing expertise
              to deliver solutions that redefine industry standards and exceed
              expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                data-animation={
                  index % 2 === 0 ? "fade-in-left" : "fade-in-right"
                }
                className={`bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group border border-slate-200 hover:border-slate-300 hover-lift stagger-${
                  index + 1
                } relative overflow-hidden`}
              >
                {/* Gradient Overlay */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${feature.color} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity`}
                ></div>

                <div className="flex items-start space-x-6 relative z-10">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-playfair text-slate-900 mb-4 group-hover:text-slate-800 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                    <div className="mt-4">
                      <button className="text-slate-600 hover:text-slate-900 font-medium text-sm flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                        <span>Learn more</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/6 w-72 h-72 bg-slate-700/10 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-1/3 right-1/6 w-64 h-64 bg-slate-600/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animation="fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-white mb-6">
              Early Believers & Industry Recognition
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Manufacturing experts and early partners who recognize the
              potential of our innovative approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The precision and innovation in Moldcraft's approach to molding solutions represents the future of manufacturing. Exciting technology.",
                author: "Dr. Jennifer Walsh",
                position: "Manufacturing Technology Consultant",
                company: "Industry Expert",
                rating: 5,
              },
              {
                quote:
                  "Moldcraft's fresh perspective on automation and precision engineering brings much-needed innovation to traditional manufacturing.",
                author: "David Kim",
                position: "Senior Manufacturing Engineer",
                company: "Tech Industry Veteran",
                rating: 5,
              },
              {
                quote:
                  "Their approach to custom solutions and attention to detail shows real promise. A company to watch in the manufacturing space.",
                author: "Maria Rodriguez",
                position: "Engineering Consultant",
                company: "Manufacturing Advisor",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                data-animation="scale-in"
                className={`glass-card rounded-3xl p-8 hover-lift hover-glow stagger-${
                  index + 1
                }`}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-slate-200 leading-relaxed mb-6 text-lg">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-slate-700 pt-4">
                  <div className="font-semibold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-slate-400 text-sm">
                    {testimonial.position}
                  </div>
                  <div className="text-slate-500 text-sm">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-slate-600 rounded-full animate-float opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-animation="scale-in" className="relative z-10">
            <h2 className="text-4xl lg:text-6xl font-bold font-playfair text-white mb-8">
              Ready to Transform Your Manufacturing?
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ready to be part of the manufacturing revolution? Let's discuss
              how our innovative approach can bring fresh solutions to your
              production challenges and help you stay ahead of the curve.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-full font-semibold text-lg hover:from-slate-600 hover:to-slate-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl space-x-2 animate-pulse-glow"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center px-10 py-5 border-2 border-slate-300 text-slate-300 rounded-full font-semibold text-lg hover:bg-slate-300 hover:text-slate-900 transition-all duration-300 hover:scale-105 space-x-2"
              >
                <span>View All Products</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
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
