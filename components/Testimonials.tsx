"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Founder @ GrowthLabs",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    content: "Honestly didn't expect it to be this good. We went from spending 15 hours a week on manual tasks to like... 2 hours. My team actually has time to think now.",
    rating: 5
  },
  {
    name: "Jordan Kim",
    role: "Engineering Lead @ Pixel Studios",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan",
    content: "I've tried a bunch of AI tools and most are meh. This one actually works. Setup took 10 minutes and we were already saving time on day one. No joke.",
    rating: 5
  },
  {
    name: "Sam Patel",
    role: "Operations @ CloudScale",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sam",
    content: "The support team replies in minutes, not days. And the product itself? It just works. No complicated setup, no 50-page manual. Install, configure, done.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Don't Just Take
            <span className="gradient-text"> Our Word</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real feedback from real people who use this every single day.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full bg-gray-200"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-purple-600 mb-2">10,000+</p>
            <p className="text-gray-600">Active Users</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-purple-600 mb-2">99.9%</p>
            <p className="text-gray-600">Uptime</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-purple-600 mb-2">50M+</p>
            <p className="text-gray-600">Tasks Automated</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-purple-600 mb-2">4.9/5</p>
            <p className="text-gray-600">Customer Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}

