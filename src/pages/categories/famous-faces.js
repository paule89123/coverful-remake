import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductGridFamousFaces from '~/components/ProductGrid/ProductGridFamousFaces'
// import banner from '../images/banner.jpeg'

const FamousFacesPage = () => (
	<div>
		<SEO
			title="Famous Faces"
			keywords={[`coverful`, `cushion`, `cushion covers`, `uk`, `famous`]}
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
			Famous Faces
		</div>
		<ProductGridFamousFaces />
	</div>
)

export default FamousFacesPage
