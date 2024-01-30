import Image from 'next/image'
import React, { ReactElement } from 'react'
import { Separator } from '../ui/separator'


interface BlogCards{
    title:string,
    description:string
    image:string
}
const Blogcard:React.FC<BlogCards> = ({
    title,
    description,
    image
}) => {
  return (
    <div className='min-w-40 max-w-64 items-center w-64  h-80 rounded-sm overflow-hidden shadow-xl'>
        {image ? (<Image src={image}alt='cardlogo' width={256} height={100} />) :(<Image src={"/dummy.jpeg"}alt='dummy' width={256} height={100} />) }
        <div className='p-3 overflow-hidden'>
            <h1 className='text-left font-bold  text-slate-900'>{title}</h1>
        <Separator className='w-60 ' />
        <h2 className=' mt-3 text-xs text-slate-600'>{description}</h2>
        </div>
        
    </div>
  )
}

export default Blogcard