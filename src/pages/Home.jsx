import React from 'react'
import Hero from '../sections/home_page_sections/Hero'
import KeyHighlights from '../sections/home_page_sections/KeyHighlights'
import HowItsWork from '../sections/home_page_sections/HowItsWork'
import OurStats from '../sections/home_page_sections/OurStats'
import PaymentMethods from '../sections/home_page_sections/PaymentMethods'
import ChooseFunded from '../sections/home_page_sections/ChooseFunded'
import CommunityFeedback from '../sections/home_page_sections/CommunityFeedback'
import TradersFeedback from '../sections/home_page_sections/TradersFeedback'
import Certificate from '../sections/home_page_sections/Certificate'
import FourSteps from '../sections/home_page_sections/FourSteps'
import ChallengeComparison from '../sections/home_page_sections/ChallengeComparison'

const Home = () => {
  return (
    <>
    <Hero/>
    <KeyHighlights/>
    <HowItsWork/>
    <OurStats/>
    <FourSteps/>
    <ChallengeComparison/>
    <PaymentMethods/>
    <ChooseFunded/>
    <CommunityFeedback/>
    <TradersFeedback/>
    <Certificate/>
    </>
    
  )
}

export default Home