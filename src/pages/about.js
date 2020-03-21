import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => {

  return (
      <Layout>
        <Head title="About" />
        <h1>About</h1>
        <p>This is  me, but you can go back to the <Link to="/">home page</Link></p>
      </Layout>
  )
}

export default AboutPage
