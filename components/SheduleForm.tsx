import React from 'react'

interface scheduleformProps{
  title:string,
  duration:string
}

const SheduleForm:React.FC<scheduleformProps> = ({
  title,
  duration
}) => {
  return (
    <div className='w-auto h-auto rounded px-4 py-2 bg-gray-100 min-h-96 min-w-72'>
      
    </div>
  )
}

export default SheduleForm