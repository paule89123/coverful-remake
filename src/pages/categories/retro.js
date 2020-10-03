import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductGridRetro from '~/components/ProductGrid/ProductGridRetro'
// import banner from '../images/banner.jpeg'

const RetroPage = () => (
	<div>
		<SEO
			title="Retro"
			keywords={[`coverful`, `cushion`, `cushion covers`, `uk`, `retro`]}
		/>

		<div
			style={{
				height: 260,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				fontSize: 48,
				marginBottom: 48,
				fontFamily: 'AvenirBold',
			}}
		>
			Retro
		</div>
		<ProductGridRetro />
	</div>
)

export default RetroPage
