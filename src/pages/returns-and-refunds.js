import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'

const SecondPage = () => (
	<>
		<SEO
			title="Refunds & Returns"
			keywords={[`coverful`, `cushion`, `cushion covers`, `uk`]}
		/>
		<div className="page-container">
			<h1>Refunds & Returns</h1>
			<h3>Do you accept returns?</h3>
			<p>
				Yes - we want you to be 100% satisfied with your purchase. If anything
				is wrong with your order, please get in touch with us as soon as
				possible so we can rectify the issue. You can send us a message via the
				'Contact Us' page, or drop us an email at hello@coverful.co.uk
			</p>
			<h3>What about international/worldwide orders?</h3>
			<p>
				We stand behind the quality of our products, wherever in the world you
				are! Just let us know what the problem is so we can put things right.
			</p>
			<h3>What if there is a problem with my order?</h3>
			<p>
				If there is anything wrong with any item(s) in your order, we will
				arrange for a replacement to be sent out as soon as we are made aware of
				the issue. Alternatively, you can return the faulty item(s) for a full
				refund, using a returns label provided by ourselves.
			</p>
			<h3>What if I change my mind, or my purchase is no longer required?</h3>
			<p>
				No problem - you are welcome to return items back to us for a full
				refund, minus any original shipping costs. We recommend that you use a
				tracked or recorded method of posting, as we are unable to issue refunds
				for items lost in the post.
			</p>
			<h3>How long will it take to receive my refund?</h3>
			<p>
				We will issue the refund back to your original payment method within 24
				hours of receiving your return. It will then take around 3-5 working
				days for the money to appear back in your account, depending on your
				original payment method used.
			</p>
		</div>
	</>
)

export default SecondPage
