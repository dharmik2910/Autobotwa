"use client";

import { Bot, Zap, Shield, BarChart3, Cloud, Users } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Smart Automation",
    description: "Train AI to handle your repetitive tasks. It learns from what you do and takes over the boring parts in minutes, not weeks.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Zap,
    title: "Ridiculously Fast",
    description: "We're talking milliseconds. Process thousands of tasks while you grab coffee. Our servers don't sleep (even if you do).",
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    icon: Shield,
    title: "Fort Knox Security",
    description: "Your data is encrypted, backed up, and protected. We take security seriously—SOC 2, GDPR, and all that jazz.",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: BarChart3,
    title: "Insights That Matter",
    description: "No fluff, just actionable data. See what's working, what's not, and where to focus your energy next.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Cloud,
    title: "Scales With You",
    description: "Start small, grow big. Our infrastructure handles everything from 10 to 10 million users without breaking a sweat.",
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    icon: Users,
    title: "Built for Teams",
    description: "Everyone stays in sync. Share workflows, collaborate in real-time, and never ask 'wait, what version are we on?' again.",
    color: "bg-pink-100 text-pink-600"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need,
            <span className="gradient-text"> Nothing You Don't</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We built the features teams actually use, not a bloated mess of stuff you'll never touch.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 hover:shadow-lg transition-all duration-300">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
}

