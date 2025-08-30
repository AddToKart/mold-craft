"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Star,
  Shield,
  Target,
  Globe,
  Factory,
  Settings,
  BarChart3,
  Building2,
} from "lucide-react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    // Enhanced intersection observer for scroll Animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const animationType = element.dataset.animation || "fade-in-up";
            const delay = element.dataset.delay || "0";

            setTimeout(() => {
              element.classList.add(`animate-${animationType}`);
              element.style.opacity = "1";
            }, parseInt(delay));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-50px 0px -50px 0px",
      }
    );

    // Observe all elements with animation data attributes
    document.querySelectorAll("[data-animation]").forEach((el) => {
      observer.observe(el);
    });

    // Scroll progress indicator
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled);
    };

    // Parallax effect handler
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll(".parallax-element");

      parallaxElements.forEach((element) => {
        const speed = element.getAttribute("data-speed") || "0.5";
        const yPos = -(scrolled * parseFloat(speed));
        element.setAttribute("style", `transform: translateY(${yPos}px)`);
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      updateScrollProgress();
      handleParallax();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    // Initial call
    updateScrollProgress();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const stats = [
    { icon: Building2, value: "Aug 2025", label: "Founded" },
    { icon: Target, value: "100%", label: "Precision Focus" },
    { icon: BarChart3, value: "24/7", label: "Innovation Drive" },
    { icon: Factory, value: "Growing", label: "Partner Network" },
  ];

  const features = [
    {
      icon: Target,
      title: "Precision Engineering",
      description:
        "Advanced machinery and innovative processes designed for unmatched precision in every product.",
      color: "from-slate-600 to-slate-700",
    },
    {
      icon: Shield,
      title: "Quality Focus",
      description:
        "Rigorous standards and quality control measures ensuring superior product reliability from day one.",
      color: "from-slate-600 to-slate-700",
    },
    {
      icon: Settings,
      title: "Custom Innovation",
      description:
        "Flexible, tailored manufacturing solutions designed to meet your unique requirements and vision.",
      color: "from-slate-600 to-slate-700",
    },
    {
      icon: BarChart3,
      title: "Future-Forward",
      description:
        "Continuous innovation and research to pioneer the next generation of manufacturing technologies.",
      color: "from-slate-600 to-slate-700",
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
      icon: Factory,
      title: "Innovation Lab",
      description:
        "State-of-the-art facility developing next-generation manufacturing technologies.",
      metric: "1",
      label: "Advanced Facility",
    },
    {
      icon: BarChart3,
      title: "Fresh Perspective",
      description:
        "Bringing new ideas and cutting-edge approaches to traditional manufacturing challenges.",
      metric: "New",
      label: "Innovative Approach",
    },
  ];

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 parallax-container">
        {/* Enhanced Parallax Background Elements */}
        <div className="absolute inset-0">
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-700/10 rounded-full blur-3xl parallax-element"
            data-speed="0.3"
          ></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600/10 rounded-full blur-3xl parallax-element"
            data-speed="0.5"
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-slate-500/5 rounded-full blur-2xl parallax-element"
            data-speed="0.7"
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="opacity-100 translate-y-0">
            <div className="mb-8" data-animation="fade-in-up" data-delay="400">
              <span className="inline-block px-6 py-3 bg-slate-700/30 text-slate-200 rounded-lg text-sm font-medium border border-slate-600/30">
                Pioneering Manufacturing Innovation
              </span>
            </div>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold font-ibm-plex text-white mb-8 leading-tight"
              data-animation="fade-in-up"
              data-delay="600"
            >
              Crafting Excellence in
              <span className="block text-slate-200">Manufacturing</span>
            </h1>
            <p
              className="text-xl sm:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              data-animation="fade-in-up"
              data-delay="800"
            >
              Reimagining manufacturing through innovative molding solutions,
              precision engineering, and cutting-edge technology that pushes the
              boundaries of what's possible.
            </p>
            <div
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
              data-animation="fade-in-up"
              data-delay="1000"
            >
              <Link
                href="/products"
                className="group px-10 py-4 bg-slate-700 text-white rounded-lg font-semibold text-lg hover:bg-slate-600 hover-lift button-glow transition-all duration-300 flex items-center space-x-2"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="group px-10 py-4 border border-slate-400 text-slate-300 rounded-lg font-semibold text-lg hover:bg-slate-700 hover:border-slate-600 hover-scale transition-all duration-300 flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover-lift transition-smooth fade-in-up delay-${
                    index * 100 + 100
                  }`}
                >
                  <stat.icon className="w-8 h-8 text-slate-300 mx-auto mb-3" />
                  <div className="text-2xl font-semibold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-px bg-slate-200"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold font-ibm-plex text-slate-900 mb-6">
              Our Vision & Innovation
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're building the future of manufacturing with fresh perspectives
              and cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center group relative p-8 rounded-3xl transition-all duration-500 hover:bg-slate-50 hover:shadow-xl hover:-translate-y-2"
                data-animation="scale-in"
                data-delay={`${(index + 1) * 200}`}
              >
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="relative mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-800 rounded-2xl group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-2xl transition-all duration-500">
                      <achievement.icon className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    {/* Animated Ring */}
                    <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-slate-300 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
                  </div>

                  <div className="text-4xl font-bold font-ibm-plex text-slate-900 mb-2 group-hover:text-slate-800 group-hover:scale-105 transition-all duration-300">
                    {achievement.metric}
                  </div>

                  <div className="text-sm text-slate-500 mb-3 uppercase tracking-wide group-hover:text-slate-600 transition-colors duration-300">
                    {achievement.label}
                  </div>

                  <h3 className="text-xl font-semibold font-ibm-plex text-slate-900 mb-3 group-hover:text-slate-800 transition-colors duration-300">
                    {achievement.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {achievement.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-slate-200 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 delay-200"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-slate-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 delay-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animation="fade-in-up">
            <h2
              className="text-4xl lg:text-5xl font-bold font-ibm-plex text-slate-900 mb-6"
              data-animation="fade-in-up"
              data-delay="200"
            >
              Why Choose Moldcraft
            </h2>
            <p
              className="text-xl text-slate-600 max-w-3xl mx-auto"
              data-animation="fade-in-up"
              data-delay="400"
            >
              We combine emerging technology with deep manufacturing expertise
              to deliver solutions that redefine industry standards and exceed
              expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 border border-slate-200 hover:shadow-lg hover-lift transition-smooth"
                data-animation={
                  index % 2 === 0 ? "fade-in-left" : "fade-in-right"
                }
                data-delay={`${(index + 1) * 200}`}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center hover-scale transition-smooth">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold font-ibm-plex text-slate-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-900 relative">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animation="fade-in-up">
            <h2
              className="text-4xl lg:text-5xl font-bold font-ibm-plex text-white mb-6"
              data-animation="fade-in-up"
              data-delay="200"
            >
              Early Believers & Industry Recognition
            </h2>
            <p
              className="text-xl text-slate-300 max-w-3xl mx-auto"
              data-animation="fade-in-up"
              data-delay="400"
            >
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
                className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-lg p-8 hover-lift transition-smooth"
                data-animation="slide-up"
                data-delay={`${(index + 1) * 200}`}
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
      <section className="py-24 bg-slate-900 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative z-10" data-animation="fade-in-up">
            <h2
              className="text-4xl lg:text-5xl font-bold font-ibm-plex text-white mb-8"
              data-animation="fade-in-up"
              data-delay="200"
            >
              Ready to Transform Your Manufacturing?
            </h2>
            <p
              className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              data-animation="fade-in-up"
              data-delay="400"
            >
              Ready to be part of the manufacturing revolution? Let's discuss
              how our innovative approach can bring fresh solutions to your
              production challenges and help you stay ahead of the curve.
            </p>
            <div
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
              data-animation="scale-in"
              data-delay="600"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center px-10 py-4 bg-slate-700 text-white rounded-lg font-semibold text-lg hover:bg-slate-600 transition-smooth button-glow space-x-2"
                data-animation="fade-in-left"
                data-delay="800"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center px-10 py-4 border border-slate-400 text-slate-300 rounded-lg font-semibold text-lg hover:bg-slate-800 hover:border-slate-500 transition-smooth space-x-2"
                data-animation="fade-in-right"
                data-delay="800"
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
