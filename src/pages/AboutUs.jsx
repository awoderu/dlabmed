import React from "react";
import { ShieldCheck, Activity, CheckCircle2 } from "lucide-react";
import Team from "../components/team";


export default function AboutUs() {
  return (
    
    
    <div className="min-h-[calc(100vh-80px)] pt-24 sm:pt-28 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <section className="py-6 sm:py-1">
       
        <div className="text-center lg:text-left mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ">
            <span className="bg-gradient-to-r from-[#0B2E5C] via-green-700 to-[#2E8B3D] bg-clip-text text-transparent text-align-center justify-center">
              About DLAB Medicare
            </span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl leading-relaxed">
            DLAB Medicare Services Limited is a diagnostic laboratory in Owode Apata, Ibadan, 
            built around one idea: results should be accurate, timely, and something both patients 
            and clinicians can rely on without a second thought.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10">
          {[
            {
              title: "Accurate results",
              body: "Every sample is processed with quality-controlled equipment and reviewed before release.",
              Icon: ShieldCheck,
            },
            {
              title: "Better care",
              body: "We work alongside referring clinicians to make sure results inform real treatment decisions.",
              Icon: Activity,
            },
            {
              title: "Healthier lives",
              body: "Routine screening and fast turnaround mean problems get caught while they're still manageable.",
              Icon: CheckCircle2,
            },
          ].map(({ title, body, Icon }) => (
            <div
              key={title}
              className="p-6 sm:p-8 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_0_20px_rgba(34,197,94,0.25)] hover:shadow-[0_0_30px_rgba(34,197,94,0.45)] hover:border-green-500/50 hover:bg-white/60 transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-[#2E8B3D]/10 text-[#2E8B3D] w-fit mb-4">
                <Icon className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

             


      {/* Our Team */}
          <section className="py-8 sm:py-12">
            <div className="text-center lg:text-left mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-[#0B2E5C] via-green-700 to-[#2E8B3D] bg-clip-text text-transparent">
                  Our Team
                </span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl leading-relaxed">
                Meet the dedicated professionals behind DLAB Medicare Services Limited.
              </p>
            </div>
            {/* Team members can be added here */}
           
            <Team />
          
          </section>

    </div>
    
  );
}