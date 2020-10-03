import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductGridNautical from '~/components/ProductGrid/ProductGridNautical'
// import banner from '../images/banner.jpeg'

const NauticalPage = () => (
	<div>
		<SEO
			title="Nautical"
			keywords={[`coverful`, `cushion`, `cushion covers`, `uk`, `nautical`]}
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
			Nautical
		</div>
		<ProductGridNautical />
	</div>
)

export default NauticalPage
