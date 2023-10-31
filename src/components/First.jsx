import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBridge, faBriefcase, faHippo, faLightbulb, faTicketSimple, faUser} from '@fortawesome/free-solid-svg-icons'

const First = () => {
  return (
    <>
    <div className=' inline-block m-7'>
        <div className='flex flex-col justify-evenly h-full '>
            <picture className='h-28 w-28  m-4'>
            <h1 className='text-8xl m-4 text-slate-700'><FontAwesomeIcon icon={faUser}/> <p className='text-2xl text-center font-bold'>reader </p></h1>
            </picture>
            <picture className='h-28 w-28  m-4'>
            <h1 className='text-8xl m-4  text-slate-700'><FontAwesomeIcon icon={faBriefcase}/> <p className='text-2xl text-center font-bold'>reader </p></h1>
            </picture>
            <picture className='h-28 w-28  m-4'>
            <h1 className='text-8xl m-4  text-slate-700'><FontAwesomeIcon icon={faTicketSimple}/> <p className='text-2xl text-center font-bold'>reader </p></h1>
            </picture>
            <picture className='h-28 w-28  m-4'>
            <h1 className='text-8xl m-4  text-slate-700'><FontAwesomeIcon icon={faLightbulb}/> <p className='text-2xl text-center font-bold'>reader </p></h1>
            </picture>
          
        </div>
    </div>
    </>
  )
}

export default First