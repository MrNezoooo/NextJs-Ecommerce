import React from 'react'
// SSR (server site rendering) vs SSG (static site generation)

const ContactInfo = ({contact}) => {
  const {name, email, address} = contact || {} // contact || {}
  const {street, suite, city, zipcode} = address || {} // address || {}

  if(!contact) {
    return <p>Empty contact</p>
  }

  return (
    <>
     {/* <Heading tag='H3' text="Empty contact" />*/}
     <div>
       <strong>Email: </strong> {email}
     </div>
      <div>
        <strong>Address: </strong> {`${street}, ${city} ${zipcode}`}
      </div>
    </>
  )
}

export default ContactInfo