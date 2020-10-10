import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
// import banner from '../images/banner.jpeg'

function HomepageBanner() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "homepage-banner.png" }) {
        childImageSharp {
          fluid(maxWidth: 980) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  return (
    <div style={{ marginTop: 32, position: 'relative' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          width: '100%',
          zIndex: '1',
        }}
      >
        <div
          style={{
            paddingBottom: '45.686%',
          }}
        ></div>
        <div
          style={{
            fontSize: 48,
            fontFamily: 'AvenirBold',
            color: 'white',
            position: 'relative',
            right: 132,
            // fontFamily: 'AvenirBold',
          }}
        >
          Stay original.
        </div>
      </div>
      <div>
        <Img fluid={data.file.childImageSharp.fluid} alt="banner" />
      </div>
    </div>
  )
}

export default HomepageBanner
