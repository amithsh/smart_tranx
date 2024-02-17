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
      name: "PMP® Certification Training Course",
      rating: "4.5",
      description:
        "Become a certified Project Management Professional with our PMP® Certification Training Course.",
      url: "pmp-certification-training-course", // Slug for the actual URL
    },
    {
      name: "CAPM® Certification Training",
      rating: "4.1",
      description:
        "Prepare for the Certified Associate in Project Management (CAPM) exam with our training.",
      url: "capm-certification-training", // Slug for the actual URL
    },
    {
      name: "Project Management Techniques Certification",
      rating: "4.6",
      description:
        "Master essential Project Management techniques with our specialized training.",
      url: "", // Slug for the actual URL
    },
    {
      name: "PMI-ACP® Certification",
      rating: "4.4",
      description:
        "Become a certified Agile practitioner with our PMI Agile Certified Practitioner (PMI-ACP) training.",
      url: "pmi-acp-certification", // Slug for the actual URL
    },
    {
      name: "CSM® Certification Training",
      rating: "4.2",
      description:
        "Enhance your skills with our Certified ScrumMaster (CSM) Certification Course.",
      url: "csm-certification-training", // Slug for the actual URL
    },
    {
      name: "ITIL® V4 Foundation Training",
      rating: "4.7",
      description:
        "Get certified in ITIL 4 Foundation with our comprehensive training course.",
      url: "itil-v4-foundation-training", // Slug for the actual URL
    },
    {
      name: "Lean Six Sigma Green Belt Certification",
      rating: "4.0",
      description:
        "Master Lean Six Sigma methodologies with our Green Belt Certification Course.",
      url: "leansixsigma-green-belt-certification", // Slug for the actual URL
    },
    {
      name: "Management Certification Training",
      rating: "4.7",
      description:
        "Enhance your Management Skills with our comprehensive certification training.",
      url: "managementskills-certification-training", // Slug for the actual URL
    },
  ];

  return (
    <section className="flex items-center justify-center">
      <Swiper
        spaceBetween={-10}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 100,
          disableOnInteraction: false, // This ensures autoplay continues even if user interacts with slides
        }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Pagination]}
        className="h-80"
      >
        {courses.map((course) => (
          <SwiperSlide className="">
            <Link
              href={`/Home/Courses/${course.url}`}
              key={course.name}
              className="course-card-link cursor-pointer"
            >
              <CourseCard
                title={course.name}
                description={course.description}
                rating={course.rating}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carousel;
