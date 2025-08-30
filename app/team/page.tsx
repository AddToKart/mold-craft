"use client";

import { useEffect } from "react";
import {
  Linkedin,
  Twitter,
  Mail,
  Award,
  Users,
  TrendingUp,
  Zap,
} from "lucide-react";

export default function Team() {
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

  const leadership = [
    {
      name: "Sarah Chen",
      position: "Chief Executive Officer & Founder",
      experience: "Manufacturing Innovation Expert",
      bio: "Visionary entrepreneur with deep expertise in manufacturing technologies and strategic business development.",
      image:
        "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=400",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah.chen@moldcraft.com",
      },
    },
    {
      name: "Michael Rodriguez",
      position: "Chief Technology Officer & Co-Founder",
      experience: "Advanced Manufacturing Specialist",
      bio: "Technology innovator specializing in automation systems and next-generation manufacturing processes.",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael.rodriguez@moldcraft.com",
      },
    },
    {
      name: "Emily Thompson",
      position: "Director of Operations",
      experience: "Process Optimization Expert",
      bio: "Operations strategist focused on building scalable processes, quality systems, and exceptional customer experiences.",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily.thompson@moldcraft.com",
      },
    },
  ];

  const departments = [
    {
      icon: Award,
      name: "Engineering Team",
      description:
        "Skilled engineers specializing in product design, innovative processes, and technical development.",
      teamSize: "Core Team",
      expertise: [
        "CAD/CAM Design",
        "Process Innovation",
        "Quality Systems",
        "R&D Planning",
      ],
    },
    {
      icon: Users,
      name: "Production Team",
      description:
        "Experienced specialists focused on precision manufacturing and quality excellence.",
      teamSize: "Growing Team",
      expertise: [
        "Precision Manufacturing",
        "Quality Focus",
        "Equipment Setup",
        "Safety Standards",
      ],
    },
    {
      icon: TrendingUp,
      name: "Sales & Support",
      description:
        "Dedicated professionals providing exceptional customer service and technical support.",
      teamSize: "8 Professionals",
      expertise: [
        "Customer Relations",
        "Technical Support",
        "Project Management",
        "Market Analysis",
      ],
    },
    {
      icon: Zap,
      name: "Innovation Lab",
      description:
        "Research and development team focused on next-generation manufacturing technologies.",
      teamSize: "6 Researchers",
      expertise: [
        "Technology Research",
        "Prototype Development",
        "Testing & Validation",
        "Future Planning",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold font-playfair text-white mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              The visionary team behind Moldcraft's innovation, bringing
              together deep manufacturing expertise and fresh thinking to
              revolutionize the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-slate-900 mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Founding leaders driving Moldcraft toward breakthrough innovation
              and excellence in manufacturing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <div
                key={index}
                className="fade-in-up bg-slate-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 group border border-slate-200 hover:border-slate-300"
              >
                <div className="relative inline-block mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-full"></div>
                </div>

                <h3 className="text-2xl font-semibold font-playfair text-slate-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-slate-600 font-medium mb-2">
                  {member.position}
                </p>
                <p className="text-sm text-slate-500 mb-4">
                  {member.experience}
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {member.bio}
                </p>

                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.linkedin}
                    className="p-2 bg-slate-200 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="p-2 bg-slate-200 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="p-2 bg-slate-200 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-slate-900 mb-6">
              Our Departments
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized teams working together to deliver exceptional
              manufacturing solutions and customer experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="fade-in-up bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group border border-slate-200 hover:border-slate-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-shadow">
                      <dept.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-semibold font-playfair text-slate-900">
                        {dept.name}
                      </h3>
                      <span className="text-sm text-slate-500 font-medium">
                        {dept.teamSize}
                      </span>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {dept.description}
                    </p>
                    <div className="space-y-2">
                      {dept.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="inline-block mr-2 mb-2 px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-slate-900 mb-6">
              Our Culture
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
              At Moldcraft, we foster an environment of innovation,
              collaboration, and continuous learning that empowers every team
              member to excel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation First",
                description:
                  "We encourage creative thinking and provide resources for professional development and skill advancement.",
                icon: "🚀",
              },
              {
                title: "Collaborative Spirit",
                description:
                  "Cross-functional teamwork drives our success, with open communication and shared knowledge.",
                icon: "🤝",
              },
              {
                title: "Work-Life Balance",
                description:
                  "We support flexible schedules, wellness programs, and family-friendly policies for all team members.",
                icon: "⚖️",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="fade-in-up text-center p-8 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-semibold font-playfair text-slate-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Ready to be part of a dynamic team that's shaping the future of
              manufacturing? Explore career opportunities at Moldcraft.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-full font-semibold text-lg hover:from-slate-600 hover:to-slate-500 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                View Openings
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border-2 border-slate-300 text-slate-300 rounded-full font-semibold text-lg hover:bg-slate-300 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Contact HR
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

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </>
  );
}
