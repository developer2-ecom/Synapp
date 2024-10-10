import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import CustomCardFirst from './Components/Home/Second/CustomCardFirst'
import CustomCardSecond from './Components/Home/Second/CustomCardSecond'
import CustomCardThird from './Components/Home/Second/CustomCardThird'
import ImpactAtAGlance from './Components/Home/Third/ImpactAtAGlance'
import Testimonials from './Components/Home/Third/Testimonials'
import PartnersFAQ from './Components/Home/Third/PartnersFAQ'
import MessageForm from './Components/Home/Third/MessageForm'
import Footer from './Components/Home/Third/Footer'
import ServiceSection from './Components/ServiceSection/ServiceSection'
import AIIntegration from './Components/ServiceSection/AIIntegration'
import AnalysisDataOfWeb from './Components/ServiceSection/AnalysisDataOfWeb'
import About from './Pages/About'

function App() {
  

  return (
    <>
     {/* <Home></Home> */}
     {/* <CustomCard></CustomCard> */}
     {/* <CustomCardFirst></CustomCardFirst>
     <CustomCardSecond></CustomCardSecond> */}
  
     {/* <CustomCardThird></CustomCardThird>
     <ImpactAtAGlance></ImpactAtAGlance>
     <Testimonials></Testimonials>
     <PartnersFAQ></PartnersFAQ>
     <MessageForm></MessageForm>
     <Footer></Footer> */}

    {/*________________________ Service Section_______________________ */}

    {/* <ServiceSection></ServiceSection> */}
    {/* <AIIntegration></AIIntegration> */}
    {/* <AnalysisDataOfWeb></AnalysisDataOfWeb> */}

    {/* _____________________ABOUT____________________________________ */}

    <About></About>
    </>
  )
}

export default App

