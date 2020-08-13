import React, { useContext } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import StoreContext from '~/context/StoreContext'
import {
  Grid,
  Product,
  Title,
  PriceTag
} from './styles'
import { Img } from '~/utils/styles'

const ProductGrid = () => {
  const { store: {checkout} } = useContext(StoreContext)
  const { allShopifyProduct } = useStaticQuery(
    graphql`
      query {
        allShopifyProduct(filter: {tags: {eq: "japanese"}}) {
          edges {
            node {
              id
              title
              handle
              createdAt
              images {
                id
                originalSrc
                localFile {
                  childImageSharp {
                    fixed(
                    width: 345
                    ) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
              variants {
                price
              }
            }
          }
        }
      }
    `
  )

  const getPrice = price => Intl.NumberFormat(undefined, {
    currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(parseFloat(price ? price : 0))

  return (
    <Grid>
      {allShopifyProduct.edges
        ? allShopifyProduct.edges.map(({ node: { id, handle, title, images: [firstImage], variants: [firstVariant] } }) => (
          <Product key={id} >
            <Link to={`/products/${handle}/`}>
              {firstImage && firstImage.localFile &&
                (<div style={{display: "flex", justifyContent: "center"}}><Img
                  fixed={firstImage.localFile.childImageSharp.fixed}
                  alt={handle}
                /></div>)}
            </Link>
            <Title>{title}</Title>
            <PriceTag>{getPrice(firstVariant.price)}</PriceTag>
          </Product>
        ))
        : <p>No Products found!</p>}
    </Grid>
  )
}

export default ProductGrid
