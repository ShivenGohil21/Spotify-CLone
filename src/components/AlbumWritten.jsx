import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumWritten = ({image,name,desc,id}) => {

  //hook is used to go the the page of the album
  const  navigate = useNavigate()
  return (

    <div onClick={()=>navigate(`/album/${id}`)} className='min-w-[150px] bg-[#1c1c1c] hover:bg-[#2a2a2a] transition duration-200 rounded p-2 cursor-pointer'>
  <img src={image} alt={name} className='w-full rounded mb-2' />
  <h2 className='font-semibold text-white text-sm'>{name}</h2>
  <p className='text-xs text-gray-400'>{desc}</p>
</div>

      
   
  )
}

export default AlbumWritten
