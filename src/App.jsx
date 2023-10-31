import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBraille, faFlag} from '@fortawesome/free-solid-svg-icons'
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'
import Forth from './components/Forth'
import LastOne from './components/LastOne'

// import NavbarSection from './components/NavbarSection'
// import Navbar from './components/navbar'
{/* <FontAwesomeIcon icon={faHippo}/> */}

function App() {
  return (
    <>
    <div className='flex w-full '>
  <First/>
  <div className='w-3/4 '>
 <Second/>
  <Third/>
  <Forth/>
  <LastOne/>
 </div>
  </div>
    </>
  )
}

export default App
