import Adds from '@/components/blog/Adds'
import Image from 'next/image'
import React from 'react'
import Allcourses from './components/Allcourses'


interface coursepageProps{
    title?:string,
    url?:string
}
const page:React.FC<coursepageProps> = ({
   url,title
}) => {
  return (
    <div className='h-auto w-full '>
        <div  className=''>
             <Adds url={url} title={title} />
        </div>

        <Allcourses />
       
    </div>
  )
}

export default page