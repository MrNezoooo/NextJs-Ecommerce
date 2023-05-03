import React from 'react'
import Layout from '../../components/Layout/Layout'
import ContactInfo from '../../components/ContactInfo/ContactInfo'


export const getServerSideProps = async(context) => {
  //console.log(context)
  const {id} = context.params
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await response.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {contact: data},
  }
}

const Contact = ({contact}) => {
  return (
    <Layout>
      <ContactInfo contact={contact}/>
    </Layout>
  )
}

export default Contact