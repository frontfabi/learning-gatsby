import React from "react"
import PropTypes from "prop-types"
import Header from './Header'
import Profile from './Profile'

const Layout = ({ children }) => {

  return (
    <>
      <Header linkList={[
        {route: '/', label: 'Home'},
        {route: '/about', label: 'About'}
      ]} />
      <Profile />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
