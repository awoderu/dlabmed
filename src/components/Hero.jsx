import { useEffect, useState } from "react";
import { ArrowRight, Phone, MapPin, Calendar } from "lucide-react";
import medImage from "../assets/med.jpg";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-19 lg:pt-20 sm:pt-20 xl:pt-25 pb-8 sm:pb-12">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />
        {/* light pulse effects */}
        ``
      <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="background">
            {/* <!-- Using common classes to minimize redundancy --> */}
            <span className="ball"></span>
            <span className="ball"></span>
            <span className="ball"></span>
            <span className="ball"></span>
            <span className="ball"></span>
            <span className="ball"></span>
          </div>
      <div className="relative w-full max-w-5xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center text-center lg:text-left">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full mb-3 sm:mb-4">
              <MapPin className="w-4 h-4 text-[#4A4A4A]" />
              <span className="text-xs sm:text-sm text-lime-600">Ibadan, Oyo State</span>
            </div>

            <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-3 sm:mb-4 leading-tight">
              <span className="bg-gradient-to-b from-[#0B2E5C] to-[#0B2E5C] bg-clip-text text-transparent block mb-0.5 sm:mb-1 font-bold">LAB RESULTS</span>
              <span className="bg-gradient-to-b from-[#2E8B3D] to-[#2E8B3D] bg-clip-text text-transparent block mb-0.5 sm:mb-1">YOU CAN</span>
              <span className="bg-gradient-to-b from-[#2E8B3D] to-[#2E8B3D] bg-clip-text text-transparent block">TRUST</span>
            </h1>

            <p className="text-md sm:text-base lg:text-lg text-black max-w-2xl mx-auto lg:mx-0 mb-4 sm:mb-5 leading-relaxed">
              DLAB Medicare runs accurate, timely diagnostic testing across haematology, chemistry, microbiology and more
              <code className="bg-gray-200 text-gray-800 rounded px-1 py-0.5"> — tested by clinicians, delivered to you.</code>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#2E8B3D] text-white backdrop-blur-sm border-4 border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-white hover:text-blue-950 hover:scale-[1.02] active:bg-white active:text-blue-950 active:scale-[1.02] focus-visible:scale-[1.02] flex items-center justify-center space-x-2">
                <div className="flex items-center space-x-2">
                  <Calendar  className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Book a test</span>
                </div>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-3 group-hover:translate-x-1 group-active:translate-x-1 transition-transform duration-300" />
              </button>

              <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-950 text-white backdrop-blur-sm border-4 border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-white hover:text-black hover:scale-[1.02] active:bg-white active:text-black active:scale-[1.02] focus-visible:scale-[1.02] flex items-center justify-center space-x-2">                  <Phone className="w-4 h-4 fill-white" />
                <span>Call 08040586725</span>
              </button>
            </div>
          </div>

          <div className="relative w-full">
            <div className="flip-box-inner relative bg-[#0B2E5C]/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
              <div className="flip-box-front bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:h-[350px] lg:h-[450px] border border-white/5">
                <img 
                  src={medImage}
                  alt="Medical equipment"
                  className="h-full w-full object-cover object-center block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
