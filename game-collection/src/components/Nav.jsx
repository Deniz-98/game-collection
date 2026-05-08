import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <NavLink to="/">Hem</NavLink>
      <NavLink to="/search">Sök</NavLink>
      <NavLink to="/collection">Min samling</NavLink>
    </nav>
  )
}

export default Nav