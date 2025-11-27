"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Tech Enthusiast, Mumbai",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    content: "Ordered AirPods Pro on Monday night, got them Tuesday morning! Original product with proper invoice. Plus the delivery guy waited while I checked everything. 10/10 service.",
    rating: 5
  },
  {
    name: "Rahul Verma",
    role: "Gamer, Bangalore",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
    content: "Best prices I've found online for gaming headphones. Got the Sony XM5 cheaper than Amazon sale price. Arrived in perfect condition with all accessories. Will definitely buy again.",
    rating: 5
  },
  {
    name: "Anjali Mehta",
    role: "Student, Delhi",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali",
    content: "Bought a smartwatch and had issues with pairing. Called support at 11 PM and they actually picked up! Helped me fix it in 5 minutes. Customer service is really good here.",
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
            Real Reviews From
            <span className="gradient-text"> Real Customers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our customers are saying about their shopping experience.
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
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
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
            <p className="text-4xl font-bold text-purple-600 mb-2">50,000+</p>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-purple-600 mb-2">24 Hrs</p>
            <p className="text-gray-600">Fast Delivery</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-purple-600 mb-2">5000+</p>
            <p className="text-gray-600">Products</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-purple-600 mb-2">4.8/5</p>
            <p className="text-gray-600">Customer Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}

