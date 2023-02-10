import React from 'react'
import Booking from './Booking'
import Enjoy from './Enjoy'
import Extra from './Extra'
import Facility from './Facility'
import OurNews from './OurNews'
import Promotional from './Promotional'
import Review from './Review'
import Rooms from './Rooms'
import Search from './Search'
import Section1 from './Section1'
import Service from './Service'

function Home() {
  return (
    <>
      <Section1/>
      <Enjoy/>
      <Rooms/>
      <Extra/>
      <Promotional/>
      <Facility/>
      <Search/>
      <Review/>
      <Service/>
      <OurNews/>
      <Booking/>
    </>
  )
}

export default Home
