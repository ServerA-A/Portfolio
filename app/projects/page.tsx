import Image from 'next/image'
import React from 'react'

const imgs = [{name: "VoxBridge", im:"/img1.png"},
{name: "BlockFace", im:"/img2.png"},
{name: "TrackDQN", im:"/img3.png"},
{name: "SnakeDQN", im:"/img4.png"},
{name: "LinkScraper", im:"/img5.png"}

];

const Projects = () => {
  return (
    <div className='max-w-2xl mx-auto'>
      <div className='mx-52'>
      <div className='text-white font-extrabold md:text-4xl text-2xl'>Projects</div>
      <div className='text-g font-bold md:text-2xl text-md mt-2'>Check out my projects</div>
      </div>
      <div className='grid md:grid-cols-2 pt-4 gap-4 overflow-hidden'>
        {imgs.map((img,i)=> ( <div key={i} className='rounded-xl shadow-lg overflow-hidden border-1 border-solid border-[#575757] flex items-center flex-col hover:scale-104 duration-1000'>
          <Image src={img.im} alt={img.name} width={300} height={200}/>
          <div className='text-white font-medium'>{img.name}</div>
        </div>))}
       
      </div>
    </div>
  )
}

export default Projects