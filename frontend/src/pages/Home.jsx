import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />

      {/*---------------- Dialogflow Messenger -------------*/}
      <df-messenger
        intent="WELCOME"
        chat-title="E-commerceBot"
        agent-id="e1e7d418-fb3c-407f-b13b-be8598d3bcf9"
        language-code="en"
      ></df-messenger>


    </div>
  )
}

export default Home
