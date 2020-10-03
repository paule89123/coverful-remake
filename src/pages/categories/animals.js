import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductGridAnimals from '~/components/ProductGrid/ProductGridAnimals'
// import banner from '../images/banner.jpeg'

const AnimalsPage = () => (
	<div>
		<SEO
			title="Animals"
			keywords={[`coverful`, `cushion`, `cushion covers`, `uk`, `animals`]}
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
			Animals
		</div>
		<ProductGridAnimals />
	</div>
)

export default AnimalsPage
