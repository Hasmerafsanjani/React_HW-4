import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBraille, faCircle, faFlag, faIdBadge, faPersonRifle} from '@fortawesome/free-solid-svg-icons'
const Forth = () => {
  return (
    <> <div className='flex mx-7 '>
  <div className='border-t-4 border-b-4 border-r-4 border-black w-1/2 h-48'>
     <div className=' border-black '>
      <p className='flex justify-between pt-5 px-9  text-xl'>
        whiter : 
        <p > 
      <span className='text-cyan-400'> <FontAwesomeIcon icon={faCircle}/></span>
      <span className='text-cyan-400'> <FontAwesomeIcon icon={faCircle}/></span>
      <span className='text-cyan-400'> <FontAwesomeIcon icon={faCircle}/></span>
      <span className='text-cyan-400'> <FontAwesomeIcon icon={faCircle}/></span>
      <span className='text-cyan-400'> <FontAwesomeIcon icon={faCircle}/></span>
        </p>
      </p>
      <p className='flex justify-between px-9 text-xl'>
        Editing : 
        <p > 
      <span className='text-cyan-400'> <FontAwesomeIcon icon={faCircle}/></span>
      <span className='text-cyan-400'> <FontAwesomeIcon icon={faCircle}/></span>
      <span className='text-cyan-400'> <FontAwesomeIcon icon={faCircle}/></span>
      <span className='text-cyan-400'> <FontAwesomeIcon icon={faCircle}/></span>
      <span className='text-cyan-400'> <FontAwesomeIcon icon={faCircle}/></span>
        </p>
      </p>
      <p className='flex justify-between px-9  text-xl'>
        socil Media : 
        <p className='flex ' > 
      <span className='text-cyan-400'> <FontAwesomeIcon icon={faCircle}/></span>
      <span className='text-cyan-400'> <FontAwesomeIcon icon={faCircle}/></span>
      <span className='text-cyan-400'> <FontAwesomeIcon icon={faCircle}/></span>
     
        </p>
      </p>
      <p className='flex justify-between px-9 text-xl'>
        recharching    : 
        <p > 
      <span className='text-cyan-400'> <FontAwesomeIcon icon={faCircle}/></span>
      <span className='text-cyan-400'> <FontAwesomeIcon icon={faCircle}/></span>
      <span className='text-cyan-400'> <FontAwesomeIcon icon={faCircle}/></span>
      <span className='text-cyan-400'> <FontAwesomeIcon icon={faCircle}/></span>
      <span className='text-cyan-400'> <FontAwesomeIcon icon={faCircle}/></span>
        </p>
      </p>
     </div>
  </div>
  <div className='border-t-4 border-b-4 border-black  w-1/2 h-48 p-3'>
<p><span className='font-bold'>zeeper :- </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, temporibus.</p>
<p><span className='font-bold'>sleeper  :- </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, temporibus.</p>
<p><span className='font-bold'>kneeper :- </span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, temporibus.</p>
  </div>
 </div>
 </>
  )
}

export default Forth