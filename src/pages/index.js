import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import banner from '../images/banner.jpeg'


const IndexPage = () => (
  <div>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />


    <div style={{height: 260, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48, marginBottom: 48, fontFamily: "Brandon Grotesque Light", color: "rgb(255,255,255)"}}>Butterflies</div>
    
    <Link to="/famous-faces">Famous Faces</Link>
    <Link to="/food-and-drink">Food and Drink</Link>
  </div>
)

export default IndexPage
