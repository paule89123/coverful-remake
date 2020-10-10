import React from 'react'
import SEO from '~/components/seo'
import HomepageBanner from '~/components/ProductGrid/HomepageBanner'
import ProductGridHomepage from '~/components/ProductGrid/ProductGridHomepage'

// import banner from '../images/banner.jpeg'

const IndexPage = () => (
  <div>
    <SEO
      title="Home"
      keywords={[
        `coverful`,
        `cushion`,
        `cushion covers`,
        `uk`,
        `designs`,
        `bold`,
        `unique`,
        `interesting`,
      ]}
    />
    <HomepageBanner />
    <div style={{ fontSize: 48, marginTop: 96, fontFamily: 'AvenirBold' }}>
      New In
    </div>
    <ProductGridHomepage />
  </div>
)

export default IndexPage
