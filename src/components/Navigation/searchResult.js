import React from 'react'
import { Link } from 'gatsby'
import { Highlight } from 'react-instantsearch-dom';


const SearchResult = ({ hit }) => {
	return (
		<div className="hits-item-small">
			<Link to={"/products/" + hit.handle}>
			<div style={{display: "flex", alignItems: "center", borderBottom: "1px solid rgb(220,220,220)", padding: "15px 15px"}}>
				<div style={{width: 35, height: 35, marginRight: 11}}><img style={{height: 35}} src={hit.images[0].localFile.url} /></div><Highlight attribute="title" hit={hit} />
			</div>
			</Link>
		</div>
	)
}

export default SearchResult