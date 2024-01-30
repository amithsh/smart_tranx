"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CourseCard from "./CourseCard";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "@/components/styles.css";
import Link from "next/link";

const Carousel = () => {
  const courses = [
    {
      category: "PMP",
      description:
        "Become a certified Project Management Professional with our PMP® Certification Training Course.",
      instructor: "Instructor Name",
      rating: "4.5",
      title: "PMP® Certification Training Course",
      id: "1",
      link: "https://example.com/pmp-course-page", // Replace with the actual URL
    },
    {
      category: "CSM",
      description:
        "Enhance your skills with our Certified ScrumMaster (CSM) Certification Course.",
      instructor: "Instructor Name",
      rating: "4.2",
      title: "CSM Certification Course",
      id: "2",
      link: "https://example.com/csm-course-page", // Replace with the actual URL
    },
    {
      category: "ITIL",
      description:
        "Get certified in ITIL 4 Foundation with our comprehensive training course.",
      instructor: "Instructor Name",
      rating: "4.7",
      title: "ITIL 4 Foundation Certification Training Course",
      id: "3",
      link: "https://example.com/itil-course-page", // Replace with the actual URL
    },
    {
      category: "LeanSixSigma",
      description:
        "Master Lean Six Sigma methodologies with our Green Belt Certification Course.",
      instructor: "Instructor Name",
      rating: "4.0",
      title: "Lean Six Sigma Green Belt Certification Course",
      id: "4",
      link: "https://example.com/leansixsigma-course-page", // Replace with the actual URL
    },
    {
      category: "CISSP",
      description:
        "Prepare for the Certified Information Systems Security Professional (CISSP) exam.",
      instructor: "Instructor Name",
      rating: "4.5",
      title: "CISSP Certification Training",
      id: "5",
      link: "https://example.com/cissp-course-page", // Replace with the actual URL
    },
    {
      category: "CISA",
      description:
        "Gain expertise in Information Systems Auditing with our CISA Certification Training.",
      instructor: "Instructor Name",
      rating: "4.3",
      title: "CISA Certification Training",
      id: "6",
      link: "https://example.com/cisa-course-page", // Replace with the actual URL
    },
    {
      category: "CISM",
      description:
        "Become a Certified Information Security Manager (CISM) with our training program.",
      instructor: "Instructor Name",
      rating: "4.8",
      title: "CISM Certification Training",
      id: "7",
      link: "https://example.com/cism-course-page", // Replace with the actual URL
    },
    {
      category: "CAPM",
      description:
        "Prepare for the Certified Associate in Project Management (CAPM) exam with our training.",
      instructor: "Instructor Name",
      rating: "4.1",
      title: "CAPM Certification Training",
      id: "8",
      link: "https://example.com/capm-course-page", // Replace with the actual URL
    },
    {
      category: "ChangeManagement",
      description:
        "Learn effective Change Management strategies with our certification training.",
      instructor: "Instructor Name",
      rating: "4.5",
      title: "Change Management Certification Training",
      id: "9",
      link: "https://example.com/changemanagement-course-page", // Replace with the actual URL
    },
    {
      category: "ProjectManagementTechniques",
      description:
        "Master essential Project Management techniques with our specialized training.",
      instructor: "Instructor Name",
      rating: "4.6",
      title: "Project Management Techniques Certification",
      id: "10",
      link: "https://example.com/projectmanagementtechniques-course-page", // Replace with the actual URL
    },
    {
      category: "PMI-ACP",
      description:
        "Become a certified Agile practitioner with our PMI Agile Certified Practitioner (PMI-ACP) training.",
      instructor: "Instructor Name",
      rating: "4.4",
      title: "PMI-ACP® Certification",
      id: "11",
      link: "https://example.com/pmiacp-course-page", // Replace with the actual URL
    },
    {
      category: "ConflictManagement",
      description:
        "Develop skills in Conflict Management with our specialized certification training.",
      instructor: "Instructor Name",
      rating: "4.2",
      title: "Conflict Management Certification",
      id: "12",
      link: "https://example.com/conflictmanagement-course-page", // Replace with the actual URL
    },
    {
      category: "ManagementSkills",
      description:
        "Enhance your Management Skills with our comprehensive certification training.",
      instructor: "Instructor Name",
      rating: "4.7",
      title: "Management Skills Certification",
      id: "13",
      link: "https://example.com/managementskills-course-page", // Replace with the actual URL
    },
    // Add more courses as needed
  ];

  return (
    <section className="flex items-center justify-center">
      <Swiper
        spaceBetween={-200}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-80"
      >
        {courses.map((course) => (
          <SwiperSlide className="">
            <Link
              href={course.link}
              key={course.id}
              className="course-card-link cursor-pointer"
            >
              
              <CourseCard
                title={course.title}
                description={course.description}
                instructor={course.instructor}
                rating={course.rating}
                category={course.category}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carousel;
