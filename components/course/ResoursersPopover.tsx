import Link from 'next/link'
import React from 'react'

const ResoursersPopover = () => {

  const contents = [
    {
      title:"Blog",
      url:"/Home/Blog"
    },
    {
      title:"Tutorials",
      url:"/Home/Tutorials"
    },
    {
      title:"Practice test",
      url:"/Home/Practice_test"
    },
    {
      title:"Interview Questions",
      url:"/Home/Interview_Questions"
    },
    
  ]
  return (
    <div className="w-auto gap-y-3 h-auto flex flex-col">
      <h1 className="font-semibold underline py-2">Resourses</h1>
      {contents.map((course) => (
          <Link href={course.url}>
            <h3 className="text-sky-800 hover:text-black">{course.title}</h3>
          </Link>
        ))}
    </div>
  )
}

export default ResoursersPopover