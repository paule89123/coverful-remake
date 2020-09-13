import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
// import banner from '../images/banner.jpeg'

const IndexPage = () => (
  <div>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Link to="/categories/animals">Animals</Link>
    <br />
    <Link to="/categories/art">Art</Link>
    <br />
    <Link to="/categories/famous-faces">Famous Faces</Link>
    <br />
    <Link to="/categories/film-and-tv">Film and TV</Link>
    <br />
    <Link to="/categories/food-and-drink">Food and Drink</Link>
    <br />
    <Link to="/categories/japanese">Japanese</Link>
    <br />
    <Link to="/categories/nature">Nature</Link>
    <br />
    <Link to="/categories/patterns">Patterns</Link>
    <br />
    <Link to="/categories/retro">Retro</Link>
    <br />
    <Link to="/categories/surreal">Surreal</Link>
    <br />
  </div>
)

export default IndexPage
