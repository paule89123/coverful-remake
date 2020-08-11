import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid/ProductGridFamousFaces'
import banner from '../images/banner.jpeg'


const FamousFacesPage = () => (
  <div>
    <SEO title="Famous Faces • Coverful" keywords={[`gatsby`, `application`, `react`]} />


    <div style={{height: 260, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48, marginBottom: 48, fontFamily: "Brandon Grotesque Light", color: "rgb(255,255,255)"}}>Butterflies</div>
    <ProductGrid category="famous faces" />

  </div>
)

export default FamousFacesPage




    