"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { workData } from "./workData";

// Extract unique years & sort them in descending order
const years = [...new Set(workData.map((item) => item.year))].sort((a, b) => b - a);

export default function Work() {
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const workSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!workSectionRef.current) return;
      const scrollTop = workSectionRef.current.scrollTop;
      let currentYear = selectedYear;

      years.forEach((year) => {
        const section = document.getElementById(`year-${year}`);
        if (section) {
          const offsetTop = section.offsetTop;
          if (scrollTop >= offsetTop - 100) {
            currentYear = year;
          }
        }
      });

      setSelectedYear(currentYear);
    };

    const workElement = workSectionRef.current;
    if (workElement) {
      workElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (workElement) {
        workElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [selectedYear]);

  return (
    <div className="relative flex h-screen text-white">
      {/* Sidebar for Year Selection */}
      <div className="w-1/5 h-full bg-charcoalGray flex flex-col items-center py-10 space-y-4">
        <h2 className="text-2xl font-bold text-celticGreen">Years</h2>
        <div className="sticky top-20 flex flex-col space-y-4">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => {
                const section = document.getElementById(`year-${year}`);
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className={`text-lg px-4 py-2 rounded-lg transition ${
                selectedYear === year ? "bg-celticGreen text-white" : "hover:bg-gray-700"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Main Work Section (Scrollable) */}
      <div ref={workSectionRef} className="w-4/5 h-full overflow-y-auto p-10 relative">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold text-center mb-6 text-celticGreen">My Work</h1>

          {/* Projects List */}
          <div className="space-y-12">
            {years.map((year) => (
              <div key={year} id={`year-${year}`} className="mb-10">
                <h2 className="text-3xl font-bold border-b border-gray-500 pb-2">{year}</h2>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-6 mt-4">
                  {workData.filter((item) => item.year === year).map((project, index) => (
                    <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                      <img src={project.image} alt={project.title} className="rounded-lg mb-4 w-full h-64 object-cover" />
                      <h3 className="text-xl font-semibold text-celticGreen">{project.title}</h3>
                      <p className="text-ashGray">{project.description}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}