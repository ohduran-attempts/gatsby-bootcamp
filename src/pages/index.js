import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = () => {

  return (
      <Layout>
        <h1>Hello!</h1>
        <h2>I'm Alvaro, living in beautiful Barcelona.</h2>
        <p>Need a developer?  <Link to="/contact">Contact me!</Link></p>
        <p>Need to know what is this about?  <Link to="/about">Get to know me!</Link></p>
      </Layout>
  )
}

export default IndexPage
