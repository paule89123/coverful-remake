import React from 'react'
import SEO from '~/components/seo'
import HomepageBanner from '~/components/ProductGrid/HomepageBanner'
import ProductGridHomepage from '~/components/ProductGrid/ProductGridHomepage'
import arrow from '../components/Navigation/down-chevron.svg'

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
    <div
      style={{
        fontSize: 40,
        marginTop: 96,
        marginBottom: 48,
        fontFamily: 'AvenirBold',
      }}
    >
      New In
    </div>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div style={{ width: '80%' }}>
        <ProductGridHomepage />
      </div>
      <div
        style={{
          position: 'relative',
          bottom: 28,
          padding: '8px 29px 5px 16px',
          border: '1px solid rgb(36,44,72)',
          borderRadius: '50px',
          color: 'rgb(36,44,72)',
        }}
      >
        See more
        <img
          alt=""
          style={{
            transform: 'rotate(-90deg)',
            height: 9,
            marginLeft: 6,
            marginTop: 4,
            position: 'absolute',
          }}
          src={arrow}
        />
      </div>
    </div>
  </div>
)

export default IndexPage
