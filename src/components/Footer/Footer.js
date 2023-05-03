import React from 'react'
import Socials from '../Socials/Socials'
import process from 'next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss'

export const getStaticProps = async() => {
  const response = await fetch(`${process.env.API_HOST}/socials/`);
  const data = await response.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {socials: data},
  }
}

const Footer = ({socials}) => {

  const actualYear = new Date().getFullYear();

  return (
    <div>
      <hr/>
      <Socials socials={socials} />

      <p>Copyright © {actualYear} oLd kiDs grouP</p>
    </div>
  )
}

export default Footer