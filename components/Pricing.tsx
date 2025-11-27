"use client";

import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Solo",
    price: "$19",
    period: "/mo",
    description: "For freelancers and solo founders testing the waters.",
    features: [
      "Just you (1 seat)",
      "2,000 tasks/month",
      "Basic dashboards",
      "Email support (24h response)",
      "10GB storage",
      "API docs access"
    ],
    cta: "Try 14 Days Free",
    popular: false
  },
  {
    name: "Team",
    price: "$79",
    period: "/mo",
    description: "For small teams serious about getting stuff done.",
    features: [
      "Up to 15 people",
      "20,000 tasks/month",
      "Full analytics suite",
      "Priority support (2h response)",
      "100GB storage",
      "Full API access",
      "Custom workflows",
      "SSO & security tools"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Let's Talk",
    period: "",
    description: "For companies with unique needs and bigger budgets.",
    features: [
      "Unlimited everything",
      "No task limits (seriously)",
      "White-label options",
      "Dedicated account manager",
      "As much storage as you need",
      "Custom API endpoints",
      "Build your own integrations",
      "Compliance & audit logs",
      "99.99% uptime SLA",
      "Self-hosted option available"
    ],
    cta: "Book a Call",
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Pricing That Actually
            <span className="gradient-text"> Makes Sense</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No hidden fees. No surprise charges. Just straightforward pricing that grows with you.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl ${
                plan.popular
                  ? "bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-2xl scale-105"
                  : "bg-white border-2 border-gray-200 hover:border-purple-300"
              } transition-all duration-300 hover:shadow-xl`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1 bg-yellow-400 text-gray-900 font-semibold text-sm rounded-full">
                    <Zap className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan name */}
              <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className={`text-5xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                  {plan.price}
                </span>
                <span className={`text-xl ${plan.popular ? "text-purple-100" : "text-gray-500"}`}>
                  {plan.period}
                </span>
              </div>

              {/* Description */}
              <p className={`mb-6 ${plan.popular ? "text-purple-100" : "text-gray-600"}`}>
                {plan.description}
              </p>

              {/* CTA button */}
              <button
                className={`w-full py-4 rounded-full font-semibold mb-8 transition-all duration-300 ${
                  plan.popular
                    ? "bg-white text-purple-600 hover:bg-gray-100"
                    : "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:scale-105"
                }`}
              >
                {plan.cta}
              </button>

              {/* Features list */}
              <ul className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? "text-purple-200" : "text-green-500"}`} />
                    <span className={plan.popular ? "text-purple-50" : "text-gray-700"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Every plan includes SSL, daily backups, and 99.9% uptime (we'll credit you if we miss it)
          </p>
          <p className="text-sm text-gray-500">
            Questions about pricing? <a href="#" className="text-purple-600 font-semibold hover:underline">Chat with us</a> — we're humans, not bots
          </p>
        </div>
      </div>
    </section>
  );
}

