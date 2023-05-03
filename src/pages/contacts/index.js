import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import Link from 'next/link'

export const getStaticProps = async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {contacts: data},
  }
}

const Contacts = ({contacts}) => {

  return (
    <Layout title='Contacts'>
      <ul>
        {contacts && contacts.map((contact)=> (
            <li key={contact.id}>
              <Link href={`/contacts/${contact}`}><strong>{contact.name}</strong></Link> ({contact.email})
            </li>
          )
        )}
      </ul>
    </Layout>
  )
}

export default Contacts