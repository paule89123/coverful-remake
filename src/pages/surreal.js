import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductGridSurreal from '~/components/ProductGrid/ProductGridSurreal'
import banner from '../images/banner.jpeg'


const SurrealPage = () => (
  <div>
    <SEO title="Surreal • Coverful" keywords={[`gatsby`, `application`, `react`]} />


    <div style={{height: 260, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48, marginBottom: 48, fontFamily: "Brandon Grotesque Light", color: "rgb(255,255,255)"}}>Butterflies</div>
    <ProductGridSurreal />

  </div>
)

export default SurrealPage




    