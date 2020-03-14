import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer';
import Header from '../components/header';

const ContactPage = () => {
  return(
    <div>
    <Header />
    <h1>Contact</h1>
    <p>Call me, or go back to the <Link to="/">home page</Link></p>
    <Footer />
    </div>
  )
}

export default ContactPage
