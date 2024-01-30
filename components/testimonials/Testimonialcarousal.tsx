"use client";

import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper/modules";
import 'swiper/css/pagination';
import "@/components/styles.css"

const Testimonialcarousal = () => {
  const testimonies = [
    {
      id: 1,
      title: "John Doe",
      description: "Software Engineer",
      instructor: "Company XYZ",
      message: "hello world",
    },
    {
      id: 2,
      title: "Jane Smith",
      description: "Product Manager",
      instructor: "ABC Corporation",
      message: "hello world",
    },
    {
      id: 3,
      title: "Bob Johnson",
      description: "UX Designer",
      instructor: "Company ABC",
      message: "hello world",
    },

    // Add more courses as needed
  ];

  return (

    <section className="flex items-center justify-center h-auto">
    <Swiper
      spaceBetween={50}
      
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{
        clickable: true,
        
      }}
      modules={[Pagination]}
      
      
    >
      {testimonies.map((item) => (
        <SwiperSlide key={item.id}>
          <TestimonialCard
            name={item.title}
            designation={item.description}
            company={item.instructor}
            message={item.message}
          />
        </SwiperSlide>
      ))}
    </Swiper>
    
  </section>
    
      // <div className="flex flex-row relative gap-8">
      //   {testimonies.map((item, i) => (
      //     <TestimonialCard
      //       name={item.title}
      //       designation={item.description}
      //       company={item.instructor}
      //       message={item.message}
      //     />
      //   ))}
      // </div>
    
  );
};

export default Testimonialcarousal;
