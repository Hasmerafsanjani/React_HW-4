import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBraille, faFlag, faIdBadge, faPersonRifle} from '@fortawesome/free-solid-svg-icons'

const Second = () => {
  return (
 <> <div className='flex mx-7 mt-7 border-b-4 border-black'>
  <div className=' w-1/2 h-48 flex justify-between flex-col'>
    <h1 className='text-4xl  box-border font-bold p-3 uppercase' > Hasme Rafsanjani</h1>
    <p className='p-5 text-xl uppercase'>Lorem ipsum dolor sit amet consectetur.</p>
  </div>
  <div className='border-l-4 border-black w-1/2 h-48 p-5 font-bold flex flex-col justify-between'>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, tempora!</p>
  <p><span className='italic'>email : </span>hasmerafsanjani@gmail.com</p>
  <p><span>website : </span>www.google.com</p>
  </div>
 </div>
 </>
  )
}

export default Second