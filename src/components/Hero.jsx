import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Phone, Sparkles } from "lucide-react"
// import SyntaxHighlighter from "react-syntax-highlighter"
// import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism"
// import { codeExamples, floatingCards } from "../data/CodeExamples";


import React from 'react'

export default function Hero() {
const [mousePosition, setMousePosition] =  useState({x:0, y:0});
        const [activeTab, setactiveTab] =  useState("App.jsx");

        useEffect(()=>{
            function handleMouseMove(e){
                setMousePosition({x: e.clientX, y: e.clientY});
            }
            window.addEventListener("mousemove", handleMouseMove);

            return () => window.removeEventListener("mousemove", handleMouseMove);
        }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pb-50px pt-16 sm:pt-20 px-16">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />

      {/* Glow effects */}
      {/* <div className="absolute top-10 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-green-500/0 rounded-full blur-3xl animate-pulse" /> */}
      <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="w-full max-w-7xl mx-auto text-center relative w-full">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 text-center lg:text-left gap-6 sm:gap-8 lg:gap-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700">
              <Sparkles className="w-4 h-4 text-[#4A4A4A]"/>
                <span className="text-xs sm:text-sm text-lime-500">
                Ibadan, Oyo State
                </span>
            </div>

            <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
              <span className="bg-gradient-to-b from-[#2E8B3D] to-[#2E8B3D] bg-clip-text text-transparent block mb-1 sm:mb-2">LAB RESULTS</span>
              <span className="bg-gradient-to-b from-[#2E8B3D] to-[#2E8B3D] bg-clip-text text-transparent block mb-1 sm:mb-2   ">PEOPLE CAN</span>
              <span className="bg-gradient-to-b from-[#2E8B3D] to-[#2E8B3D] bg-clip-text text-transparent block mb-1 sm:mb-2">TRUST</span>
            </h1>

            <p className="text-md sm:text-base lg:text-lg text-black max-w-2xl mx-auto mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-200 leading-relaxed">
             DLAB Medicare runs accurate, timely diagnostic testing across haematology, chemistry, microbiology and more <code className="bg-gray-200 text-gray-800 rounded px-1 py-0.5">— read by clinicians, delivered to you.</code>
             </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom duration-700 delay-300">
              <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-black rounded-lg font-seminold text-sm sm:text-base hover:bg-green-700 transition-all duration-all duration-300 hover:scale-102 flex items-center justify-center space-x-2">
                <span>Book a test</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-black backdrop-blur-sm border border-red rounded-lg font-semibold text-sm sm:text-base transition-all duration-all duration-300 hover:bg-green-700 flex items-center justify-center space-x-2">
                <div className="bg-white/10 rounded-full group-hover:bg-red duration-300 transition-colors">
                  <Phone className="w-2 h-2 sm:w-5 sm:h-5 fill-white" />
                </div>
                <span> Call 08040586725 </span>
              </button>
            </div>
          </div>

          <div className="relative order-2 w-full">
            <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
              <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:h-[350px] lg:h-[450px] border border-white/5">
                <img
                  src="./src/assets/med.jpg"
                  alt="Medical equipment"
                  className="h-full w-full object-fit object-center block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
