import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Product Markets Assistant</title>
        <meta property="og:title" content="Product Markets Assistant" />
      </Helmet>
    </div>
  )
}

export default Home
