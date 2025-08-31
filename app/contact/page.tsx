"use client";

import { useEffect, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in-up").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Facility",
      details: [
        "123 Industrial Avenue",
        "Manufacturing District",
        "City, State 12345",
      ],
      action: "Get Directions",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "+1 (555) 123-4567",
        "+1 (555) 123-4568",
        "Mon-Fri: 8AM-6PM EST",
      ],
      action: "Call Now",
      color: "from-emerald-600 to-emerald-700",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "info@moldcraft.com",
        "sales@moldcraft.com",
        "support@moldcraft.com",
      ],
      action: "Send Email",
      color: "from-purple-600 to-purple-700",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed",
      ],
      action: "Schedule Meeting",
      color: "from-orange-600 to-orange-700",
    },
  ];

  return (
    <>
      {/* Enhanced Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-700/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 rounded-full px-6 py-3 mb-6 backdrop-blur-sm">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-slate-300 font-medium">
                Available 24/7 for Emergency Support
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold font-playfair text-white mb-6">
              Let's Build Something
              <span className="block bg-gradient-to-r from-slate-300 to-slate-100 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your manufacturing needs? Our team of experts is
              here to help you find the perfect solution for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl font-bold font-playfair text-slate-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-slate-600">
              Choose your preferred way to connect with our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="fade-in-up group relative bg-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-slate-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="relative mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${info.color} rounded-2xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500`}
                    >
                      <info.icon className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    {/* Animated Ring */}
                    <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-slate-300 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
                  </div>

                  <h3 className="text-xl font-semibold font-playfair text-slate-900 mb-4 group-hover:text-slate-800 transition-colors">
                    {info.title}
                  </h3>

                  <ul className="space-y-2 mb-6">
                    {info.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="text-slate-600 text-sm group-hover:text-slate-700 transition-colors"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <button className="inline-flex items-center space-x-2 text-slate-600 hover:text-slate-900 font-medium text-sm transition-all duration-300 group-hover:translate-x-1">
                    <span>{info.action}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-slate-200 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 delay-200"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form */}
      <section className="py-20 bg-slate-50 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-slate-900 mb-6">
              Start Your Project
            </h2>
            <p className="text-xl text-slate-600">
              Send us a message and we'll get back to you within 24 hours.
            </p>
          </div>

          {isSubmitted ? (
            <div className="fade-in-up bg-white rounded-3xl p-12 text-center shadow-2xl border border-slate-200">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold font-playfair text-slate-900 mb-4">
                Message Sent Successfully!
              </h3>
              <p className="text-slate-600 mb-8 text-lg">
                Thank you for reaching out. We'll review your message and get
                back to you within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="group px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-xl font-medium hover:from-slate-700 hover:to-slate-600 transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Send Another Message</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ) : (
            <div className="fade-in-up bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-slate-200">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-slate-700 mb-3"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all duration-300 text-lg"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-slate-700 mb-3"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all duration-300 text-lg"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold text-slate-700 mb-3"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all duration-300 text-lg"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-slate-700 mb-3"
                    >
                      Project Type *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all duration-300 text-lg"
                    >
                      <option value="">Select project type</option>
                      <option value="molding">Precision Molding</option>
                      <option value="automation">Automation Systems</option>
                      <option value="custom">Custom Solutions</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-700 mb-3"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all duration-300 resize-none text-lg"
                    placeholder="Tell us about your project requirements, timeline, budget range, and any specific needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group w-full px-8 py-6 bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-xl font-semibold text-lg hover:from-slate-700 hover:to-slate-600 transition-all duration-300 flex items-center justify-center space-x-3 hover:shadow-2xl hover:-translate-y-1"
                >
                  <Send className="w-6 h-6" />
                  <span>Send Message</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-slate-900 mb-6">
              Visit Our Facility
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Located in the heart of the manufacturing district, our
              state-of-the-art facility is easily accessible from major highways
              and equipped with the latest technology.
            </p>
          </div>

          <div className="fade-in-up bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl h-96 flex items-center justify-center border border-slate-300 hover:shadow-2xl transition-all duration-500 group">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-playfair text-slate-900 mb-2">
                Interactive Map
              </h3>
              <p className="text-slate-600 font-medium mb-2">
                123 Industrial Avenue, Manufacturing District
              </p>
              <p className="text-sm text-slate-500">
                Google Maps integration would be implemented here
              </p>
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

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </>
  );
}
