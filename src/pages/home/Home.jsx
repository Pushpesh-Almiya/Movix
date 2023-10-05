import React from 'react'
import "./style.scss"
import HeroBanner from "./heroBanner/HeroBanner"
import Tranding from './trending/Tranding'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'
function Home() {
  return (
    <>
      <HeroBanner/>
      <Tranding/>
      <Popular/>
      <TopRated/>
    </>
  )
}

export default Home
