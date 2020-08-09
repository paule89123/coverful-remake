import React, { useState } from 'react'
import { graphql } from 'gatsby'

import SEO from '~/components/seo'
import ProductForm from '~/components/ProductForm'
import {
  Img,
  Container,
  TwoColumnGrid,
  GridLeft,
  GridRight,
} from '~/utils/styles'
import {
  ProductTitle,
  ProductDescription
} from './styles'

const ProductPage = ({ data }) => {
  const activeThumbnailStyle = {
    cursor: "pointer", 
    margin: "0px 6px", 
    border: "1px solid rgba(0,0,0,0.65)", 
    display: "inline-block", 
    borderRadius: "50%"
  }
  const inactiveThumbnailStyle = {
    cursor: "pointer", 
    margin: "0px 6px", 
    border: "1px solid rgba(0,0,0,0)", 
    display: "inline-block", 
    borderRadius: "50%"
  }
  const [ activeImage, setActiveImage ] = useState()
  const [ imageIndex, setImageIndex ] = useState(0)
  const product = data.shopifyProduct

  const images = product.images.map((image, i) => (
    i === 0 ? 
    <div style={{boxSizing: "border-box", padding: "54px 37px 38px 29px", background: "linear-gradient(140deg, rgba(220,225,255), rgba(10,10,30, 0.07))"}}>
      <Img
        fluid={image.localFile.childImageSharp.fluid}
        key={image.id}
        alt={product.title}
      />
    </div>
    :
    <div style={{height: 461.375}}>
    <Img
        fluid={image.localFile.childImageSharp.fluid}
        key={image.id}
        alt={product.title}
        style={{height: 461.375}}
    />
</div>

  ))

  const imageThumbnails = product.images.map((image, i) => (
        i === 0 ? 
        <div style={imageIndex === i ? activeThumbnailStyle : inactiveThumbnailStyle}>
    <div onClick={() => handleClick(i)} style={{margin: 2, borderRadius: "50%", width: 36, height: 36, overflow: "hidden", boxSizing: "border-box", padding: "4px 0px 0px 0px", background: "linear-gradient(140deg, rgba(220,225,255), rgba(10,10,30, 0.1))"}}>

      <Img
        fluid={image.localFile.childImageSharp.fluid}
        key={image.id}
        alt={product.title}
      />

    </div>
    </div>
    :
    <div style={imageIndex === i ? activeThumbnailStyle : inactiveThumbnailStyle}>
    <div style={{margin: 2, borderRadius: "50%", width: 36, height: 36, overflow: "hidden", boxSizing: "border-box"}} onClick={() => handleClick(i)}>
      <div style={{width: 68}}>
        <Img
            fluid={image.localFile.childImageSharp.fluid}
            key={image.id}
            alt={product.title}
        />
      </div>
    </div>
    </div>

    ))


  function handleClick(i) {
    setActiveImage(images[i])
    setImageIndex(i)
    // console.log(e.target);
  }
  return (
    <>
      <SEO title={product.title} description={product.description} />
      <Container>
        <TwoColumnGrid>
          <GridLeft>
            
            <div style={{width: "100%", padding: "0px 72px 0px 0px"}}>
              {activeImage ? activeImage : images[0]}
            </div>
            {images[1] && 
            <div style={{margin: "28px auto", paddingRight: 72}}>
              {imageThumbnails}
            </div>}
          </GridLeft>
          <GridRight style={{opacity: "1"}}>
            <ProductTitle style={{}}>{product.title}</ProductTitle>
            <ProductForm product={product} />
            <br /><br />
            <div style={{fontSize: 14, lineHeight: "1.4"}}>
              <span style={{fontFamily: "Avenir-Medium", fontSize: 16}}>Our Happiness Promise</span>
              <br />We stand behind our products. If you don’t love it, <br />exchanges and returns are free for 30 days. 
            </div>
          </GridRight>
        </TwoColumnGrid>
        <ProductDescription
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
      </Container>
    </>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default ProductPage
