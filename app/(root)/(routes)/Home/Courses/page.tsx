import Adds from "@/components/blog/Adds";
import Image from "next/image";
import React from "react";
import Allcourses from "./components/Allcourses";

const page = ({}) => {
  return (
    <div className="h-auto w-full ">
      <div className="flex items-center justify-center">
          <h1 className="font-semibold text-2xl p-3">Explore our Courses</h1>
      </div>
      <Allcourses />
    </div>
  );
};

export default page;
