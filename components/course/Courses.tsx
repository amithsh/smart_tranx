import Link from "next/link";
import React from "react";

const Courses = () => {
  const courses = [
    {
      name: "PMP® Certification Training Course",
      url: "pmp-certification-training-course ", // Slug for the actual URL
    },
    {
      name: "CAPM® Certification Training",
      url: "capm-certification-training", // Slug for the actual URL
    },
    {
      name: "Project Management Techniques Certification",
      url: "project-management-techniques-certification", // Slug for the actual URL
    },
    {
      name: "PMI-ACP® Certification",
      url: "pmi-acp-certification", // Slug for the actual URL
    },
    {
      name: "CSM® Certification Training",
      url: "csm-certification-training", // Slug for the actual URL
    },
    {
      name: "ITIL® V4 Foundation Training",
      url: "itil-v4-foundation-training", // Slug for the actual URL
    },
    {
      name: "Lean Six Sigma Green Belt Certification",
      url: "lean-six-sigma-green-belt-certification", // Slug for the actual URL
    },
    {
      name: "Management Certification Training",
      url: "management-certification-training", // Slug for the actual URL
    },
  ];

  return (
    <div className="w-[40rem] h-auto flex flex-col">
      <h1 className="font-semibold underline py-2">ALL COURSES</h1>
      <div className=" grid grid-cols-2 gap-5 py-4">
        {courses.map((course) => (
          <Link href={`/Home/Courses/${course.url}`}>
            <h3 className="text-sky-800 hover:text-black">{course.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Courses;
