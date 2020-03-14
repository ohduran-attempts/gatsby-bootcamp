import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer';
import Header from '../components/header';


const AboutPage = () => {
  return(
    <div>
    <Header />
    <h1>About</h1>
    <p>This is  me, but you can go back to the <Link to="/">home page</Link></p>
    <Footer />
    </div>
  )
}

export default AboutPage
