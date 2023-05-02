import React from 'react'
import Layout from '../components/Layout/Layout'
import data from '../utils/data'
import ProductItem from '../components/ProductItem/ProductItem'

const Home = () => {
  return (
    <Layout title='Home Page'>
       <h1>Home page</h1>
      <div>
        {data.products.map((product)=>(
          <ProductItem product={product} key={product.slug} />
        ) )}
      </div>
    </Layout>
  )
}

export default Home