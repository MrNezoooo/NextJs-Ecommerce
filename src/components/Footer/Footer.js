import React from 'react'

const Footer = () => {
  const actualYear = new Date().getFullYear();

  return (
    <div>
      <hr/>
      <p>Copyright © {actualYear} oLd kiDs grouP</p>
    </div>
  )
}

export default Footer