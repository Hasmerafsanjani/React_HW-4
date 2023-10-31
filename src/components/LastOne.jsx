import { faUserNinja } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const LastOne = () => {
  return (
    <> <div className='flex mx-7 flex justify-evenly'>
        <p className='text-9xl m-3 p-4 text-amber-950'> <FontAwesomeIcon icon={faUserNinja}/></p>
        <p className='text-9xl m-3 p-4 text-amber-950'> <FontAwesomeIcon icon={faUserNinja}/></p>
        <p className='text-9xl m-3 p-4 text-amber-950'> <FontAwesomeIcon icon={faUserNinja}/></p>
        <p className='text-9xl m-3 p-4 text-amber-950'> <FontAwesomeIcon icon={faUserNinja}/></p>
   </div>
   </>
  )
}

export default LastOne