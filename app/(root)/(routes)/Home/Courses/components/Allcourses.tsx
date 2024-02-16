import Blogcard from '@/components/blog/Blogcard';
import React from 'react'



const pmpcontent = [
    {
        courseImage: "/coursespage.png",
        coursetitle: "Project Management Techniques certification training",
        courseurl: "project-management-techniques-certification-training"
    },
    {
        courseImage: "/coursespage.png",
        coursetitle: "Change Management Certification training",
        courseurl: "change-management-certification-training"
    },
    {
        courseImage: "/coursespage.png",
        coursetitle: "Certified Scrum Master",
        courseurl: "certified-scrum-master"
    },
    {
        courseImage: "/coursespage.png",
        coursetitle: "PMP training",
        courseurl: "pmp-training"
    },
    {
        courseImage: "/coursespage.png",
        coursetitle: "CAPM Certification Course",
        courseurl: "capm-certification-course"
    },
    {
        courseImage: "/coursespage.png",
        coursetitle: "Lean Six Sigma Green Belt",
        courseurl: "lean-six-sigma-green-belt"
    },
    {
        courseImage: "/coursespage.png",
        coursetitle: "PMI-ACP Certification",
        courseurl: "pmi-acp-certification"
    },
    {
        courseImage: "/coursespage.png",
        coursetitle: "ITIL certification course",
        courseurl: "itil-certification-course"
    }
];



const Allcourses = () => {
  return (
    <div className='w-full h-auto'>
         <div className="grid grid-cols-4 p-10 gap-8">
        {pmpcontent.map((item) => (
          <a
            href={`/Home/Courses/pages/${item.courseurl}`}
            className="cursor-pointer "
            key={item.coursetitle}
          >
            <Blogcard  image={item.courseImage} title={item.coursetitle} />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Allcourses