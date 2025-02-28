"use client";
import { useState, useEffect, useRef } from "react";
import { workData } from "./workData";
import Modal from "react-modal";

// ✅ Define Type for Work Entries
type WorkEntry = {
  year: number;
  title: string;
  role: string;
  info: string;
  mainImage: string;
  video?: string;
  additionalImages?: string[];
  location: string;
  company: string;
};

// Extract unique years & sort them in descending order
const years = [...new Set(workData.map((item) => item.year))].sort(
  (a, b) => b - a
);

export default function Work() {
  const [selectedWork, setSelectedWork] = useState<WorkEntry | null>(null);
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const workSectionRef = useRef<HTMLDivElement>(null);

  // ✅ Set Modal App Element Correctly for Next.js
  useEffect(() => {
    Modal.setAppElement("body");
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
      <div className="w-1/5 h-full bg-charcoalGray flex flex-col items-center py-10 space-y-4 z-10">
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
                selectedYear === year
                  ? "bg-celticGreen text-white"
                  : "hover:bg-gray-700"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* ✅ Main Work Section (Scrollable) */}
      <div
        ref={workSectionRef}
        className={`w-4/5 h-full overflow-y-auto p-10 relative transition ${
          selectedWork ? "blur-sm pointer-events-none" : ""
        }`}
      >
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold text-center mb-6 text-celticGreen">
            My Work
          </h1>

          {/* ✅ Projects List */}
          <div className="space-y-12">
            {years.map((year) => (
              <div key={year} id={`year-${year}`} className="mb-10">
                <h2 className="text-3xl font-bold border-b border-gray-500 pb-2">
                  {year}
                </h2>
                <div className="space-y-6 mt-4">
                  {workData
                    .filter((item) => item.year === year)
                    .map((project, index) => (
                      <div
                        key={index}
                        className="relative cursor-pointer group overflow-hidden rounded-lg shadow-lg transition hover:scale-105 bg-gray-800 p-6"
                        onClick={() => setSelectedWork(project)}
                      >
                        <img
                          src={project.mainImage}
                          alt={project.title}
                          className="rounded-lg mb-4 w-full h-64 object-cover"
                        />
                        <h3 className="text-xl font-semibold text-celticGreen">
                          {project.title}
                        </h3>
                        <p className="text-gray-400">{project.role}</p>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Modal (Fixed Above Everything) */}
      <Modal
        isOpen={!!selectedWork}
        onRequestClose={() => setSelectedWork(null)}
        className="fixed inset-0 z-50 flex justify-center items-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-80"
      >
        {selectedWork && (
          <div className="relative bg-gray-900 text-white rounded-lg w-full max-w-3xl max-h-[90vh] p-6 shadow-xl overflow-y-auto">
            {/* ✅ Always Visible Close Button */}
            <button
              onClick={() => setSelectedWork(null)}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              ✖
            </button>

            {/* ✅ Work Info */}
            <h2 className="text-3xl font-bold text-celticGreen">{selectedWork.title}</h2>
            <p className="text-gray-300 mt-2">{selectedWork.role}</p>

            {/* ✅ Job Info */}
            <h3 className="text-xl font-semibold mt-4">Job Info</h3>
            <p className="text-gray-400">{selectedWork.info}</p>

            {/* ✅ Image & Video Container (Scrollable) */}
            <div className="mt-4 space-y-4 overflow-y-auto max-h-[60vh]">
              {selectedWork.video && (
                <video
                  className="rounded-lg w-full max-h-[300px] object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={selectedWork.video} type="video/mp4" />
                </video>
              )}

              {selectedWork.additionalImages?.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className="rounded-lg w-full max-h-[250px] object-cover"
                  alt={`Additional Image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}