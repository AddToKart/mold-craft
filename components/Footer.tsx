import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-2xl font-heading">
                    M
                  </span>
                </div>
                <span className="text-2xl font-bold font-heading">
                  Moldcraft
                </span>
              </Link>
              <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
                Leading manufacturer specializing in precision molding solutions
                and advanced manufacturing technologies. We deliver excellence
                through innovation and quality craftsmanship.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold font-heading mb-6">
                Quick Links
              </h3>
              <ul className="space-y-4">
                {[
                  "Home",
                  "About",
                  "Products",
                  "Services",
                  "Team",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold font-heading mb-6">
                Contact Info
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">
                    123 Industrial Avenue
                    <br />
                    Manufacturing District
                    <br />
                    City, State 12345
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">
                    +1 (555) 123-4567
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">
                    info@moldcraft.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} Moldcraft. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
