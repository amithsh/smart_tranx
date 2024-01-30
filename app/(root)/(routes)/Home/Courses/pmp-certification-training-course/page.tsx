import { Separator } from "@/components/ui/separator";
import React from "react";
import { FaCheckCircle, FaCheckSquare } from "react-icons/fa";

const page = () => {
  return (
    <div className="w-full h-auto pl-48 pr-48 pt-20 pb-10 ">
      <div className="flex justify-between items-center ">
        <div className="h-auto max-w-[400px] space-y-4 ">
          <h1 className="text-4xl font-extrabold ">
            pmp certification training course
          </h1>
          <Separator />
          <p className="text-base font-light text-slate-950 justify-evenly ">
            Smartranx’s PMP training boot camp covers all the essential topics
            which are absolutely crucial for a project management professional.
            Our course curriculum is aligned with the latest PMBOK 7th edition
            guide book. Additionally, you will gain insight into real-life case
            studies, the exam pattern, and receive valuable tips and tricks to
            excel in your project management journey.
          </p>
          <div className="flex gap-6">
            <button className="w-52 h-10 bg-orange-500 rounded-xl text-white shadow-xl font-medium">
              Apply now
            </button>
            <button className="w-52 h-10 border border-orange-500 rounded-xl shadow-xl font-medium">
              Download syllabus
            </button>
          </div>
        </div>

        <div className="w-[550px] h-[370px] bg-slate-800 rounded-2xl">
          {/* need to add the image in this div */}
        </div>
      </div>
      <div className="w-full h-32 bg-sky-50 rounded-3xl mt-32 flex items-center justify-between p-7 border  ">
        <div className="flex flex-row  items-center justify-center">
          <div className=" flex flex-col justify-center items-center space-y-4">
            <h1 className="text-sm font-light opacity-75 ">Next cohort on</h1>
            <h2 className="text-xl font-normal ">28 Feb,2024</h2>
          </div>
        </div>
        <div className="flex flex-row  items-center justify-center">
          <div className=" flex flex-col justify-center items-center space-y-4">
            <h1 className="text-sm font-light opacity-75 ">Program Duration</h1>
            <h2 className="text-xl font-medium ">3 months</h2>
          </div>
        </div>
        <div className="flex flex-row  items-center justify-center">
          <div className=" flex flex-col justify-center items-center space-y-4">
            <h1 className="text-sm font-light opacity-75 ">Next cohort on</h1>
            <h2 className="text-xl font-normal ">28 Feb,2024</h2>
          </div>
        </div>
      </div>
      <div className="mt-20 space-y-3">
        <h1 className="font-semibold text-2xl">Why join this course</h1>
        <Separator />
        <p className="font-normal text-base">
          Our curriculum closely mirrors the content covered in the official PMP
          Certification exam. We employ an applied learning methodology to
          facilitate a deeper understanding of key concepts, and our instructors
          themselves hold PMP certification. The PMP course offers a
          comprehensive package, including access to digital resources from PMI,
          real-world case studies, industry projects, interactive quizzes, and
          simulation exams. This comprehensive approach equips you to thoroughly
          prepare for the PMP Certification exam, increasing your chances of
          passing on your first attempt.
        </p>
      </div>
      <div className=" mt-20 space-y-3">
        <h1 className="font-semibold text-2xl">Key features</h1>
        <Separator />
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-row items-center ">
            <FaCheckSquare color="#ff5d00" className="w-5 h-5" />
            35 Hrs Live Virtual Training
          </div>
          <div className="flex flex-row items-center ">
            <FaCheckSquare color="#ff5d00" className="w-5 h-5" />
            Delivered by PMI® Authorized Training Partner (PMI® - ATP)
          </div>
          <div className="flex flex-row items-center ">
            <FaCheckSquare color="#ff5d00" className="w-5 h-5" />
            35 PDUs Offered – PMI® Approved.
          </div>
          <div className="flex flex-row items-center ">
            <FaCheckSquare color="#ff5d00" className="w-5 h-5" />
            100% Money Back Guarantee
          </div>
          <div className="flex flex-row items-center ">
            <FaCheckSquare color="#ff5d00" className="w-5 h-5" />
            Application Assistance with PMP Application Template
          </div>
          <div className="flex flex-row items-center ">
            <FaCheckSquare color="#ff5d00" className="w-5 h-5" />
            End-to-end support via phone, mail, and chat.
          </div>
          <div className="flex flex-row items-center ">
            <FaCheckSquare color="#ff5d00" className="w-5 h-5" />9 Full-Length
            Simulation Test Papers (180 Questions Each)
          </div>
        </div>
      </div>
      <div className=" mt-20 space-y-5">
        <h1 className="font-semibold text-2xl">Eligibility criteria</h1>
        <Separator />
        <h2 className="font-light text-slate-600 text-sm mb-5">for admission to this course </h2>

        <div className="grid grid-cols-3 ">
          <div className="flex items-center justify-center space-x-3">
            <FaCheckCircle color="#81d02a"/>
            <h1>+2/diploma/ assosiate degree</h1>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <FaCheckCircle color="#81d02a" />
            <h1>+2/diploma/ assosiate degree</h1>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <FaCheckCircle color="#81d02a"/>
            <h1>+2/diploma/ assosiate degree</h1>
          </div>

        </div>
        
        
      </div>
    </div>
  );
};

export default page;
