import React from "react";
import {
  Briefcase,
  Shield,
  Target,
  Code,
  GraduationCap,
  Lightbulb,
} from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Added

export default function AboutSection() {
  const features = [
    {
      icon: Shield,
      title: "Verified Companies Only",
      description:
        "We partner exclusively with legitimate companies offering real job opportunities. No fake listings, no spam.",
    },
    {
      icon: Target,
      title: "Company-Specific Sections",
      description:
        "Each company gets a dedicated section, making it easy to explore opportunities by employer.",
    },
    {
      icon: Briefcase,
      title: "Quality Over Quantity",
      description:
        "Curated job listings that matter, cutting through the noise of saturated job markets.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About Us</h1>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="w-8 h-8 text-indigo-600" />
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            In today's oversaturated job market, finding genuine opportunities
            has become increasingly difficult. We created this platform to cut
            through the noise and connect talented professionals with real
            employers offering legitimate positions.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Unlike traditional job portals cluttered with fake advertisers and
            spam, we maintain strict verification standards. Each company
            featured on our platform is thoroughly vetted to ensure they offer
            authentic job opportunities. Our unique approach organizes listings
            by company, giving you a clear, transparent view of who's hiring and
            what they offer.
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            What Makes Us Different
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* About Developer */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl shadow-xl p-8 md:p-12 text-white">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-8 h-8" />
            <h2 className="text-3xl font-bold">About the Developer</h2>
          </div>
          <p className="text-lg leading-relaxed mb-4">
            Hi! I'm a BCA graduate currently pursuing my MCA degree with a
            passion for building practical, user-focused web applications. This
            job portal is one of my key projects, designed to showcase my
            growing expertise in modern web development.
          </p>

          <div className="bg-white/10 rounded-xl p-6 mb-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-3">
              <Code className="w-6 h-6" />
              <h3 className="text-xl font-semibold">Technical Highlights</h3>
            </div>
            <ul className="space-y-2 text-white/90">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  <strong>Frontend Development:</strong> Built with React.js,
                  leveraging modern concepts like component props for reusable
                  UI elements
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  <strong>Styling:</strong> Tailwind CSS for responsive,
                  utility-first design that looks great on all devices
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  <strong>Architecture:</strong> Multi-page routing system using
                  React Router for seamless navigation
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  <strong>JavaScript:</strong> Deep dive into modern ES6+
                  features and best practices
                </span>
              </li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed">
            This project represents my commitment to continuous learning and
            building solutions that address real-world problems. I'm constantly
            expanding my skill set and creating projects that demonstrate both
            technical proficiency and practical thinking.
          </p>
        </div>

        {/* ✅ Fixed CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Ready to Find Your Next Opportunity?
            </h3>
            <p className="text-gray-600 mb-6">
              Explore verified job listings from trusted companies
            </p>

            <Link
              to="/jobs"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-block"
            >
              Browse Jobs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
