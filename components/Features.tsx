"use client";

import { Truck, Shield, Headphones, Package, CreditCard, RotateCcw } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "24-Hour Delivery",
    description: "Order today, use tomorrow. Free express shipping on orders above ₹999. Track your package in real-time.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Shield,
    title: "100% Authentic",
    description: "Every product comes with original warranty and invoice. Zero tolerance for fakes—we guarantee it or your money back.",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Need help choosing? Our tech experts are available 24/7 via chat or call. Real people who actually know their stuff.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Package,
    title: "Secure Packaging",
    description: "Triple-layer protection with tamper-proof seals. Your gadgets arrive exactly as they left our warehouse—perfect.",
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    icon: CreditCard,
    title: "Flexible Payments",
    description: "Pay however you want—UPI, cards, EMI, or cash on delivery. No cost EMI available on all products above ₹5,000.",
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "Changed your mind? No drama. 7-day return policy with instant refunds. Pickup from your doorstep, completely free.",
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
            Why Shop
            <span className="gradient-text"> With Us?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We&apos;re not just another electronics store. Here&apos;s what makes us different.
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
            Browse All Products
          </button>
        </div>
      </div>
    </section>
  );
}

