/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProductItem = ({product}) => {
  return (
    <div>
      <Link href={`/product/${product.slug}`}>

          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
          />

      </Link>

      <div>
        <Link href={`/product/${product.slug}`}>
            <h2>{product.name}</h2>
        </Link>
        <p>{product.price} грн.</p>

        <button type="button">
          Add to cart
        </button>

      </div>
    </div>
  )
}

export default ProductItem