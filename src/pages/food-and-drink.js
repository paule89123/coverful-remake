import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductGridFoodAndDrink from '~/components/ProductGrid/ProductGridFoodAndDrink'
import banner from '../images/banner.jpeg'


const FoodAndDrinkPage = () => (
  <div>
    <SEO title="Food and Drink • Coverful" keywords={[`gatsby`, `application`, `react`]} />


    <div style={{height: 260, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48, marginBottom: 48, fontFamily: "Brandon Grotesque Light", color: "rgb(255,255,255)"}}>Butterflies</div>
    <ProductGridFoodAndDrink />

  </div>
)

export default FoodAndDrinkPage




