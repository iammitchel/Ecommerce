import React from 'react'
import product from '../../sanity_ecommerce/schemas/product'
import { Product, Layout, Navbar, Cart, Footer, FooterBanner, HeroBanner } from '/components'
import { client } from '../../lib/client'

const Home = ({products, bannerData}) => (
    <>
     <HeroBanner/>
     {console.log(bannerData)}
    <div className='products-heading'>
      <h2>Best selling Product</h2>
      <p>Speakers of many variations </p>
    </div>

    <div className='products-container'>
      {products?.map((product) => product.name)}
    </div>  

    <FooterBanner />

    </>
)

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
