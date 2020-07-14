import React from "react"
import { Link } from 'gatsby'
const Header = ({ linkList }) => (
  <header>
    <ul> 
      {linkList.map((link, _) => (
        <li>
          <Link to={link.route} cl>{link.label}</Link>
        </li>
      ))}
    </ul>
  </header>
)

export default Header
