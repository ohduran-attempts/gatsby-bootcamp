import React from 'react';
import { Link } from 'gatsby';


const IndexPage = () => {
  return (
    <div>
      <h1>Hello!</h1>
      <h2>I'm Alvaro, living in beautiful Barcelona.</h2>
      <p>Need a developer?  <Link to="/contact">Contact me!</Link></p>
      <p>Need to know what is this about?  <Link to="/about">Get to know me!</Link></p>

    </div>
  )
}

export default IndexPage
