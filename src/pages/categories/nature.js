import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductGridNature from '~/components/ProductGrid/ProductGridNature'
// import banner from '../images/banner.jpeg'


const NaturePage = () => (
  <div>
    <SEO title="Nature • Coverful" keywords={[`gatsby`, `application`, `react`]} />


    <div style={{height: 260, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48, marginBottom: 48, fontFamily: "Brandon Grotesque Light", color: "rgb(255,255,255)"}}>Butterflies</div>
    <ProductGridNature />

  </div>
)

export default NaturePage




    