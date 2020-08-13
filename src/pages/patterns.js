import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductGridPatterns from '~/components/ProductGrid/ProductGridPatterns'
import banner from '../images/banner.jpeg'


const PatternsPage = () => (
  <div>
    <SEO title="Patterns • Coverful" keywords={[`gatsby`, `application`, `react`]} />


    <div style={{height: 260, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48, marginBottom: 48, fontFamily: "Brandon Grotesque Light", color: "rgb(255,255,255)"}}>Butterflies</div>
    <ProductGridPatterns />

  </div>
)

export default PatternsPage




    