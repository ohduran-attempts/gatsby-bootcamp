import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const ContactPage = () => {
  return (
      <Layout>
        <h1>Contact</h1>
        <p>Call me, or go back to the <Link to="/">home page</Link></p>
      </Layout>
  )
}

export default ContactPage
