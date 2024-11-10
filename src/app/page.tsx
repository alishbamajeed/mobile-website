
import React from 'react'
import Services from './services/page'
import FeaturedCars from './featuredmobiles/page'
import NewestCar from './newmobiles/page'
import Client from './clientreviws/page'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Offers from '@/components/offers'
import Featuredmobiles from './featuredmobiles/page'

const Home = () => {
  return (
    <div>

 <Hero/>
 <Services/>
 <Offers/>
 <Featuredmobiles/>
 <NewestCar/>
 <Client/>
 <Footer/>
    </div>
  )
}

export default Home