import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-[calc(100vh-80px)] pt-24 sm:pt-28 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="background">
            {/* <!-- Using common classes to minimize redundancy --> */}
            <span className="ball"></span>
            <span className="ball"></span>
            <span className="ball"></span>
            <span className="ball"></span>
            <span className="ball"></span>
            <span className="ball"></span>
          </div>
      <section className="py-8 sm:py-12">
        <div className="text-center lg:text-left mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-[#0B2E5C] via-green-700 to-[#2E8B3D] bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-xl">
            Get in touch with DLAB Medicare for inquiries, test appointments,
             or general questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-4 sm:space-y-5">
            <div className="flex items-start space-x-4 p-4 sm:p-5 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_0_20px_rgba(0,0,0,0.15)] hover:shadow-[0_0_30px_rgba(0,0,0,0.25)] hover:border-gray-400 hover:bg-white/60 transition-all duration-300">
              <div className="p-2.5 rounded-xl bg-[#2E8B3D]/10 text-[#2E8B3D] shrink-0">
                <Phone className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-base sm:text-lg">Call or WhatsApp</h3>
                <p className="text-gray-600 text-sm sm:text-base mt-1">0808 705 5229</p>
                <p className="text-gray-600 text-sm sm:text-base">0803 994 0001</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 sm:p-5 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_0_20px_rgba(0,0,0,0.15)] hover:shadow-[0_0_30px_rgba(0,0,0,0.25)] hover:border-gray-400 hover:bg-white/60 transition-all duration-300">
              <div className="p-2.5 rounded-xl bg-[#2E8B3D]/10 text-[#2E8B3D] shrink-0">
                <Mail className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-base sm:text-lg">Email</h3>
                <p className="text-gray-600 text-sm sm:text-base mt-1">info@dlabmedicare.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 sm:p-5 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_0_20px_rgba(0,0,0,0.15)] hover:shadow-[0_0_30px_rgba(0,0,0,0.25)] hover:border-gray-400 hover:bg-white/60 transition-all duration-300">
              <div className="p-2.5 rounded-xl bg-[#2E8B3D]/10 text-[#2E8B3D] shrink-0">
                <MapPin className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-base sm:text-lg">Visit us</h3>
                <p className="text-gray-600 text-sm sm:text-base mt-1 leading-relaxed">
                  SW9/4343 Alhaji Ibrahim Layout,<br />
                  Opposite New Garage, Owode Apata,<br />
                  Ibadan, Oyo State
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 sm:p-5 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_0_20px_rgba(0,0,0,0.15)] hover:shadow-[0_0_30px_rgba(0,0,0,0.25)] hover:border-gray-400 hover:bg-white/60 transition-all duration-300">
              <div className="p-2.5 rounded-xl bg-[#2E8B3D]/10 text-[#2E8B3D] shrink-0">
                <Clock className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-base sm:text-lg">Hours</h3>
                <p className="text-gray-600 text-sm sm:text-base mt-1">Mon–Sat, 8am–6pm</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_0_20px_rgba(0,0,0,0.15)]">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Send us a Message</h2>
            <p className="text-sm text-gray-600 mb-6">Fill in the details below and we will get back to you promptly.</p>

            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              <input type="hidden" name="subject" value="New Submission from Web3Forms" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first_name" className="block text-xs font-semibold text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    name="name"
                    id="first_name"
                    placeholder="John"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/80 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="last_name" className="block text-xs font-semibold text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    placeholder="Doe"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/80 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@example.com"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/80 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="0808 123 4567"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/80 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1">Your Message</label>
                <textarea
                  rows={4}
                  name="message"
                  id="message"
                  placeholder="How can we help you?"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/80 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl bg-[#2E8B3D] text-white font-semibold text-sm hover:bg-[#0B2E5C] transition-colors duration-300 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}