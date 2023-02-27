import React from 'react'



const ExperienceItem = ({obj}) => {
    
  return (
    
    <div className='bg-[#121212] text-gray-300 flex max-w-lg p-3 text-sm mx-auto md:max-w-2xl justify-center md:rounded-2xl md:shadow-purple-700 md:shadow-sm'>
        <div className='p-1 grow'>
        <img src={obj.img} alt="" className='rounded-2xl max-w-[4rem] md:max-w-[5rem] mx-auto  ' />
        </div>
        <div className='mx-2 grow'>
            <span className='my-1 md:text-md'>{`${obj.startDate} - ${obj.endDate}`}</span>
            <h1 className='font-bold my-1 md:text-md'>{obj.role}</h1>
            <p className='max-w-xs md:text-sm'>{obj.desc}</p>
        </div>

    </div>
  ) 
}

export default ExperienceItem
//md:border-2 md:border-gray-400 md:rounded-3xl 