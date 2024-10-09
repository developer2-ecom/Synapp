import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'

import CustomCardThird from './Components/Home/Second/CustomCardThird'
import ImpactAtAGlance from './Components/Home/Third/ImpactAtAGlance'
import Testimonials from './Components/Home/Third/Testimonials'
import PartnersFAQ from './Components/Home/Third/PartnersFAQ'

function App() {
  

  return (
    <>
     {/* <Home></Home> */}
     {/* <CustomCard></CustomCard> */}
     {/* <CustomCardSecond></CustomCardSecond> */}
     {/* <CustomCardThird></CustomCardThird> */}
     {/* <ImpactAtAGlance></ImpactAtAGlance> */}
     {/* <Testimonials></Testimonials> */}

     <PartnersFAQ></PartnersFAQ>
    </>
  )
}

export default App

