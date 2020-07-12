import React from 'react';
import { Link } from 'gatsby';

const AboutPage = () => (
  <>
  <h1>About Page</h1>
    <ul>
      <li><a href="/about">Sobre</a></li>
      <li><Link to="/about" activeStyle={{ color: 'red'}}>Sobre (na aplicação)</Link></li>
    </ul>
  </>
)

export default AboutPage;
