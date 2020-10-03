import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductGridNature from '~/components/ProductGrid/ProductGridNature'
// import banner from '../images/banner.jpeg'

const NaturePage = () => (
	<div>
		<SEO
			title="Nature"
			keywords={[`coverful`, `cushion`, `cushion covers`, `uk`, `nature`]}
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
			Nature
		</div>
		<ProductGridNature />
	</div>
)

export default NaturePage
