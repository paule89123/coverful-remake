import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductGridJapanese from '~/components/ProductGrid/ProductGridJapanese'
// import banner from '../images/banner.jpeg'

const JapanesePage = () => (
	<div>
		<SEO
			title="Japanese • Coverful"
			keywords={[`gatsby`, `application`, `react`]}
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
			Japanese
		</div>
		<ProductGridJapanese />
	</div>
)

export default JapanesePage
