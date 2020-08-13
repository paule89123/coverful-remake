import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
// import banner from '../images/banner.jpeg'


const IndexPage = () => (
  <div>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />


    <div style={{height: 260, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48, marginBottom: 48, fontFamily: "Brandon Grotesque Light", color: "rgb(255,255,255)"}}>Butterflies</div>
    
    <Link to="/animals">Animals</Link>
    <br />
    <Link to="/famous-faces">Famous Faces</Link>
    <br />
    <Link to="/food-and-drink">Food and Drink</Link>
    <br />
    <Link to="/japanese">Japanese</Link>
    <br />
    <Link to="/nature">Nature</Link>
    <br />
    <Link to="/patterns">Patterns</Link>
    <br />
    <Link to="/surreal">Surreal</Link>
    <br />
  </div>
)

export default IndexPage
