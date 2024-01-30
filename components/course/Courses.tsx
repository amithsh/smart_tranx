import Link from "next/link";
import React from "react";

const Courses = () => {
  const courses = [
    {
      name: "PMP® Certification Training",
      url: "",
    },
    {
      name: "CAPM® Certification Training",
      url: "",
    },
    {
      name: "Project Management Techniques",
      url: "",
    },
    {
      name: "CPMI-ACP® Certification",
      url: "",
    },
    {
      name: "CSM® Certification Training",
      url: "",
    },
    {
      name: "ITIL® V4 Foundation Training",
      url: "",
    },
    {
      name: "Lean Six Sigma Green Belt",
      url: "",
    },
    {
      name: "Change Management Certification Training",
      url: "",
    },
  ];
  return (
    <div className="w-[40rem] h-auto flex flex-col">
      <h1 className="font-semibold underline py-2">ALL COURSES</h1>
      <div className=" grid grid-cols-2 gap-5 py-4">
        {courses.map((course) => (
          <Link href={course.url}>
            <h3 className="text-sky-800 hover:text-black">{course.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Courses;
