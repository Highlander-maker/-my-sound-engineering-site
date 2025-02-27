"use client";
import { useState, useEffect, useRef } from "react";
import { workData } from "./workData";
import { MapPin, Building, X } from "lucide-react";
import Modal from "react-modal";

// ✅ Define Type for Work Entries
type WorkEntry = {
  year: number;
  title: string;
  description: string;
  mainImage: string;
  video?: string;
  additionalImages?: string[];
  location: string;
  company: string;
};

// Extract unique years & sort them in descending order
const years = [...new Set(workData.map((item) => item.year))].sort((a, b) => b - a);

export default function Work() {
  const [selectedWork, setSelectedWork] = useState<WorkEntry | null>(null);
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const workSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nextRoot = document.getElementById("__next");
    if (nextRoot) {
      Modal.setAppElement(nextRoot);
    }
  }, []);

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
      {/* ✅ Sidebar (Timeline) for Year Selection */}
      <div className="w-1/5 h-full bg-charcoalGray flex flex-col items-center py-10 space-y-4 relative z-10">
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

      {/* ✅ Main Work Section (Scrollable) */}
      <div ref={workSectionRef} className="w-4/5 h-full overflow-y-auto p-10 relative">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold text-center mb-6 text-celticGreen">My Work</h1>

          {/* ✅ Projects List */}
          <div className="space-y-12">
            {years.map((year) => (
              <div key={year} id={`year-${year}`} className="mb-10">
                <h2 className="text-3xl font-bold border-b border-gray-500 pb-2">{year}</h2>
                <div className="space-y-6 mt-4">
                  {workData.filter((item) => item.year === year).map((project, index) => (
                    <div
                      key={index}
                      className="relative cursor-pointer group overflow-hidden rounded-lg shadow-lg transition hover:scale-105 bg-gray-800 p-6"
                      onClick={() => setSelectedWork(project)} // ✅ Opens only ONE modal at a time
                    >
                      <img src={project.mainImage} alt={project.title} className="rounded-lg mb-4 w-full h-64 object-cover" />
                      <h3 className="text-xl font-semibold text-celticGreen">{project.title}</h3>
                      <p className="text-ashGray">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Single Global Modal (Fix for Multiple Modals) */}
      <Modal 
        isOpen={!!selectedWork} 
        onRequestClose={() => setSelectedWork(null)} 
        appElement={document.body} // ✅ Fix for accessibility
        className="bg-gray-900 text-white rounded-lg max-w-3xl w-full p-6 shadow-xl outline-none mx-auto mt-20 relative"
        overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-4 z-40"
      >
        {selectedWork && (
          <>
            <button onClick={() => setSelectedWork(null)} className="absolute top-4 right-4 text-white">
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-3xl font-bold text-celticGreen">{selectedWork.title}</h2>
            <p className="text-gray-300 mt-2">{selectedWork.description}</p>

            <div className="flex items-center gap-6 mt-3 text-gray-400">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-accentBlue mr-2" />
                <span>{selectedWork.location}</span>
              </div>
              <div className="flex items-center">
                <Building className="w-5 h-5 text-accentBlue mr-2" />
                <span>{selectedWork.company}</span>
              </div>
            </div>

            <div className="mt-4 space-y-4">
              {selectedWork.video && (
                <video 
                  className="rounded-lg w-full h-64 object-cover" 
                  autoPlay loop muted playsInline
                  poster={selectedWork.mainImage}
                >
                  <source src={selectedWork.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}

              {selectedWork.additionalImages && selectedWork.additionalImages.length > 0 && (
                <div className="grid grid-cols-2 gap-2">
                  {selectedWork.additionalImages.map((image, index) => (
                    <img key={index} src={image} alt={`Additional ${index}`} className="rounded-lg w-full h-32 object-cover" />
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </Modal>
    </div>
  );
}