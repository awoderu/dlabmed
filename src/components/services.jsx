import {
  TestTube,
  FlaskConical,
  Microscope,
  Activity,
  Droplet,
  Beaker,
  TestTube2,
  BeakerIcon,
} from "lucide-react";
import SyntaxHighlighter from "react-syntax-highlighter"
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism"



const features = [
    {
        title: "Haematology",
        icon: TestTube,
        description: "Complete blood count and other haematology\ntests.",
        codeSnippet: "Full blood count\\nBlood film\\nESR",
        imagePosition: "left",
    },
    {
        title: "Clinical Chemistry",
        icon: FlaskConical,
        description: "Accurate testing for blood sugar, \ncholesterol, liver and kidney function.",
        codeSnippet: "Blood glucose\\nLipid profile\\nLiver function",
        imagePosition: "right",
    },
    {
        title: "Microbiology",
        icon: Microscope,
        description: "Bacterial, fungal and other microbial\nanalyses for reliable diagnosis.",
        codeSnippet: "Culture\\nSensitivity\\nMicroscopy",
        imagePosition: "left",
    },
    {
        title: "Immunology",
        icon: Activity,
        description: "Hormone assays, immunoglobulins and other\nimmune system tests.",
        codeSnippet: "Hormone assay\\nImmunoglobulins\\nAutoimmune tests",
        imagePosition: "right",
    },
    {
        title: "Serology",
        icon: BeakerIcon,
        description: "Infectious disease screening and \nantibody testing.",
        codeSnippet: "Antibody screening\\nAntigen testing\\nInfection panels",
        imagePosition: "left",
    },
    {
        title: "Urinalysis",
        icon: Droplet,
        description: "Routine and specialist urine analysis\nfor clear clinical insight.",
        codeSnippet: "Chemical analysis\\nMicroscopy\\nUrine culture",
        imagePosition: "right",
    },
];

export default function Features(){
    return <section id ="features" 
    className ="p-16 sm:py-20 xl:py-45 px-10 sm:px-6 lg:px-8 relative" >
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                    <span className="bg-gradient-to-b from-[#2E8B3D] to-[#2E8B3D] bg-clip-text text-transparent" >Our Laboratory</span>
                    <br/>
                <span className="bg-gradient-to-b from-[#2E8B3D] to-[#2E8B3D] bg-clip-text text-transparent" >
                Services</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {features.map((feature) => (
                    <div key={feature.title} className="relative group w-full">
                        <a
                            href="#"
                            className="block cursor-pointer transition-all duration-300 group-hover:scale-[1.02] group-active:scale-[1.02] active:scale-[1.02] focus:outline-none focus-visible:scale-[1.02] shadow-green-500 group-hover:shadow-green-500 group-active:shadow-green-500"
                        >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl transition-all duration-500 group-hover:opacity-100 group-active:opacity-100" />
                        <div className="relative bg-gray-950 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden shadow-lg shadow-green-500/40 group-hover:border-blue-600/50 group-active:border-blue-600/50 group-focus-within:border-blue-600/50 group-hover:shadow-xl group-active:shadow-xl group-focus-within:shadow-xl group-hover:shadow-green-500/70 group-active:shadow-green-500/70 group-focus-within:shadow-green-500/70 transition-all duration-300">
                            <div className="bg-gray-950 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm max-w-full overflow-hidden break-words">
                                    <div className="flex items-center space-x-1 sm:space-x-2 mb-3 sm:mb-4">
                                        <feature.icon className="w-5 h-5 text-green-400" />
                                        <span className="text-gray-400 ml-2 sm:ml-4 text-xs sm:text-sm">
                                            {feature.title}
                                    </span>
                                </div>
                                <SyntaxHighlighter
                                    language="javascript"
                                    style={nightOwl}
                                    customStyle={{
                                        margin: 0,
                                        background: "transparent",
                                        fontSize: "0.75rem",
                                        lineHeight: "1.4",
                                        whiteSpace: "pre-wrap",
                                        overflowX: "hidden",
                                        wordBreak: "break-word",
                                    }}
                                    wrapLongLines={true}
                                    wrapLines={true}
                                >
                                    {feature.description}
                                </SyntaxHighlighter>
                            </div>
                        </div>
                        </a>
                    </div>
                ))}
            </div>
    </div>
          </section>      
}