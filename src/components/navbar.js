import React from 'react'

const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#"><i class="fa fa-cart-plus fa-lg" aria-hidden="true"></i> {props.counter}</a>
    </nav>
  )
}

export default NavBar