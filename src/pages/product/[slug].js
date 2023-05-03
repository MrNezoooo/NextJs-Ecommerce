import React from 'react'
import Layout from '../../components/Layout/Layout'
import { useRouter } from 'next/router'
import data from '../../utils/data'
import Link from 'next/link'
import Image from 'next/image'

const ProductScreen = () => {
  const {query} = useRouter()
  const {slug} = query
  const product = data.products.find((x) => x.slug === slug)
  if(!product){
    return <div>Product not found!</div>
  }

  return (
    <Layout title={product.name}>

      <div>
        <Link href="/">back to products</Link>
      </div>
      <div>
        <Image
          src={product.image}
          alt={product.name}
          width={540}
          height={540}
        />
        <div>
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>Category: {product.category}</li>
            <li>Manufacturer: {product.manufacturer}</li>
            <li>{product.rating} of {product.numReviews} rewiews</li>
            <li>Description: {product.description}</li>
          </ul>
        </div>
        <div>
          Price: {product.price} ГРН.
        </div>
        <div>
          Status: {product.countInStock > 0 ? 'In stock' : 'Unavailable'}
        </div>
        <button>Add to cart</button>

      </div>

    </Layout>
  )
};

  export default ProductScreen;