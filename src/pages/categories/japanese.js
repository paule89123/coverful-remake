import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductGridJapanese from '~/components/ProductGrid/ProductGridJapanese'
// import banner from '../images/banner.jpeg'

const JapanesePage = () => (
	<div>
		<SEO
			title="Japanese"
			keywords={[`coverful`, `cushion`, `cushion covers`, `uk`, `japanese`]}
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
			Japanese
		</div>
		<ProductGridJapanese />
	</div>
)

export default JapanesePage
