import React from 'react'
import ServiceSection from '../Components/ServiceSection/ServiceSection'
import AIIntegration from '../Components/ServiceSection/AIIntegration'
import AnalysisDataOfWeb from '../Components/ServiceSection/AnalysisDataOfWeb'
import Contact from './Contact'
import MessageForm from '../Components/Home/Third/MessageForm'
import Footer from '../Components/Home/Third/Footer'

const IndividualService = () => {
  return (
    <div>
        <ServiceSection></ServiceSection>
        <AIIntegration></AIIntegration>
        <AnalysisDataOfWeb></AnalysisDataOfWeb>
        <MessageForm></MessageForm>
        <Footer></Footer>
    </div>
  )
}

export default IndividualService