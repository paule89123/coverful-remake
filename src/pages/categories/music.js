import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductGridMusic from '~/components/ProductGrid/ProductGridMusic'
// import banner from '../images/banner.jpeg'

const MusicPage = () => (
	<div>
		<SEO
			title="Music"
			keywords={[`coverful`, `cushion`, `cushion covers`, `uk`, `music`]}
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
			Music
		</div>
		<ProductGridMusic />
	</div>
)

export default MusicPage
