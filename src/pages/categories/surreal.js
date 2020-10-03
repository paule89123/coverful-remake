import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductGridSurreal from '~/components/ProductGrid/ProductGridSurreal'
// import banner from '../images/banner.jpeg'

const SurrealPage = () => (
	<div>
		<SEO
			title="Surreal"
			keywords={[`coverful`, `cushion`, `cushion covers`, `uk`, `surreal`]}
		/>
		<div
			style={{
				height: 200,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				fontSize: 48,
				fontFamily: 'AvenirBold',
			}}
		>
			Surreal
		</div>
		<ProductGridSurreal />
	</div>
)

export default SurrealPage
