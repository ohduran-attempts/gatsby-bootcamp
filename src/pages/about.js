import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';


const AboutPage = () => {

  return (
      <Layout>
        <h1>About</h1>
        <p>This is  me, but you can go back to the <Link to="/">home page</Link></p>
      </Layout>
  )
}

export default AboutPage
