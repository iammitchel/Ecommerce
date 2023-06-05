import React from 'react'
import product from '../../sanity_ecommerce/schemas/product'
import { Product, Layout, Navbar, Cart, Footer, FooterBanner, HeroBanner } from '/components'

const Home = () => {
  return (
    <>
     <HeroBanner/>
     
    <div className='products-heading'>
      <h2>Best selling Product</h2>
      <p>Speakers of many variations </p>
    </div>

    <div className='products-container'>
      {['product1', 'product2'].map((product) => product)}
    </div>  

    FooterBanner

    </>
  )
}

export default Home
