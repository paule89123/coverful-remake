import React from 'react'
import { Link } from 'gatsby'
import {
  Product,
  Title,
  PriceTag
} from '../ProductGrid/styles'
import { Img } from '~/utils/styles'
import { Highlight } from 'react-instantsearch-dom';



const SearchResultLarge = ({ hit }) => {

	return (


	          <Product className="product">
	            <Link to={`/products/${hit.handle}/`}>
					<div style={{display: "flex", justifyContent: "center"}}>
						<img
						style={{width: 330, marginBottom: "1rem"}}
		                  src={hit.images[0].localFile.url}
		                  alt={hit.handle}
		                />
	                </div>
	            </Link>
	            <Title><Highlight attribute="title" hit={hit} /></Title>
	            <PriceTag>£{hit.variants[0].price}</PriceTag>
	          </Product>


	)
}

export default SearchResultLarge