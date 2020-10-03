import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'

const SecondPage = () => (
	<>
		<SEO
			title="Shipping & Payment"
			keywords={[`coverful`, `cushion`, `cushion covers`, `uk`]}
		/>
		<div className="page-container">
			<h1>Shipping & Payment</h1>
			<h3>Shipping </h3>
			<p>
				We offer FREE UK tracked delivery on all orders. Tracked airmail to
				Europe is just £1.99, and £2.99 for the rest of the world.
			</p>
			<h3>What are your delivery times?</h3>
			<p>
				Coverful partners with UK and international merchants in order to
				provide you with the highest quality products at the best possible
				prices. Our estimated delivery time is 10-14 days, or up to 28 days for
				some remote worldwide locations. All orders are fully tracked, for
				secure and guaranteed delivery anywhere in the world.
			</p>
			<h3>What methods of payment do you accept?</h3>
			<p>
				We accept Credit Cards, Debit Cards, PayPal and bank transfer (through
				PayPal).
			</p>
		</div>
	</>
)

export default SecondPage
