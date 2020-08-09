import React, { useState, useContext, useEffect } from 'react'
import {navigate} from 'gatsby'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import downArrow from './down-arrow.png'
import whiteBag from './white-bag.svg'
import blackBag from './black-bag.svg'
import SearchResult from './searchResult'
import Menu from './menu'
import searchResultLarge from './searchResultLarge'
import styled from '@emotion/styled'
import {
  Grid
} from '../ProductGrid/styles'
import { globalHistory } from "@reach/router"

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Pagination, Stats } from 'react-instantsearch-dom';

import StoreContext from '~/context/StoreContext'
import {
	CartCounter, 
	Container,
	Logo,
	MenuLink,
	Wrapper
} from './styles'

const path = globalHistory.location.pathname


const SearchResultsWrapper = styled.div`
  margin: 0 auto;
  max-width: 980px;
  padding: 0px 0rem 1.45rem;
`

const HoverLinkStyle = styled.div`
	display: inline;
	color: rgb(0,0,0);
	opacity: 1;
	transition: 0.2s opacity cubic-bezier(0.65, 0.005, 0.35, 0.995);

	:hover {
		opacity: 0.7;
		transition: 0.2s opacity cubic-bezier(0.65, 0.005, 0.35, 0.995);
	}
`

const searchClient = algoliasearch('MFHEG5ET0Q', '135d9adeac6cd24e0cfd522e093d7301');

const useQuantity = () => {
	const { store: {checkout} } = useContext(StoreContext)
	const items = checkout ? checkout.lineItems : []
	const total = reduce(items, (acc, item) => acc + item.quantity, 0)
	return [total !== 0, total]
}

const Navigation = ({ siteTitle, location }) => {
  const [ hasItems, quantity ] = useQuantity()
  const [ searchTerm, setSearchTerm ] = useState("")
  const [ searchActive, setSearchActive ] = useState(false)
  const [ onSearchPage, setOnSearchPage ] = useState(false)
  const [ menuActive, setMenuActive ] = useState(false)

  function handleFocus(e) {
  	e.target.value.length >= 1 && setSearchActive(true)
  }

  function handleBlur() {
  	setTimeout(() => setSearchActive(false), 170)
  }

  function handleChange(e) {
  	e.target.value.length >= 1 ? setSearchActive(true) : setSearchActive(false)
  	setSearchTerm(e.target.value)
  }

  function handleSubmit(e) {
  	e.preventDefault()
  	navigate('/search/')
  }

  function handleMouseOver() {
  	setMenuActive(prevState => !prevState)
  }

  function handleOnMouseOut() {
  	setTimeout(() => setMenuActive(false), 170)
  }

  // useEffect(() => {
  // 	if (path === '/search' || path === '/search/') {
  // 		setOnSearchPage(true)
  // 	}
  // 	else {
  // 		setOnSearchPage(true)
  // 	}
  // }, [])

  console.log(location.pathname + 'asd');

	return(
		<>
			<InstantSearch searchClient={searchClient} indexName="coverful">
				<div style={{height: "2.535rem", color: "rgb(38,38,38)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: 14, backgroundColor: "#f7f7f7"}}>Enjoy free delivery on all UK orders! ✨
				</div>
				<Wrapper>
					<Container className="black-text">
						<div>
							<Logo to='/'>
								{siteTitle}
							</Logo>
							<div style={{fontSize: "15px", letterSpacing: 1, fontWeight: "bold", padding: "0px 16px 80px 10px", display: "inline"}} tabIndex="0" onBlur={handleOnMouseOut} onClick={handleMouseOver}>
							<div style={{width: 80, height: 40, position: "absolute", marginLeft: 0, display: "inline", cursor: "pointer"}}></div>

								<span style={menuActive ? {opacity: 0.7, transition: "0.2s opacity cubic-bezier(0.65, 0.005, 0.35, 0.995)", cursor: "pointer"} : {opacity: "1", cursor: "pointer"}}>SHOP</span>

								{
								// the div below is a transparent wide div that ensures the dropdown menu stays open when user moves mouse diagonally from 'shop' link to the menu.
								}
								<div style={menuActive ? {width: "50vw", height: 25, position: "absolute", bottom: 0, left: "50%", marginLeft: "-50vw", display: "inline"} : {display: "none"}}></div>

								{
								// caret down icon
								}
								<img alt="" style={menuActive ? {opacity: 0.7, transition: "0.2s opacity cubic-bezier(0.65, 0.005, 0.35, 0.995)", height: 12, marginTop: 1, marginLeft: 1, cursor: "pointer"} : {opacity: "1", height: 12, marginTop: 1, marginLeft: 1, cursor: "pointer"}} src={downArrow} />

								{
								// drop down menu - only visible when menuActive is true
								}
								<Menu menuActive={menuActive} />
							</div>
							<HoverLinkStyle>
								<MenuLink to='/cart'>
									ABOUT US
								</MenuLink>
							</HoverLinkStyle>
						</div>


						<div style={{display: "flex"}}>
						<div style={{width: 260, backgroundColor: "none"}}>
							<div style={{textAlign: "center"}}>
								<SearchBox onSubmit={handleSubmit} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
							</div>
							<div className={searchActive && location.pathname !== '/search/' ? "visible" : "hidden"} style={{width: 260, maxHeight: 360, overflow: "scroll", position: "absolute", top: 60, backgroundColor: "white", borderRadius: 2, boxShadow: "0px 0px 4px 0px rgba(0,0,0,0.2)", zIndex: "3"}}>
								<div style={{cursor: "pointer", textAlign: "center", padding: 14, fontFamily: "AvenirBold", fontSize: 14, backgroundColor: "rgb(246,246,246)", borderBottom: "1px solid rgb(220,220,220)"}} onClick={handleSubmit} className="hits-small">See all results for "{searchTerm}"</div>
								<Hits className="hits-small" hitComponent={SearchResult} />
							</div>
						</div>

						<MenuLink style={{position: "relative", display: "flex", justifyContent: "center", height: "36px", alignItems: "center", paddingRight: 0, width: 22}} to='/cart'>
							<img alt="basket" style={{height: 22, position: "absolute", marginLeft: 2}} src={hasItems ? blackBag : whiteBag} />
							{hasItems && <CartCounter>{quantity}</CartCounter>}
						</MenuLink>
						</div>

					</Container>
				</Wrapper>


				

				{location.pathname === '/search/' && searchTerm.length > 0 &&
					<SearchResultsWrapper>
						<Stats
						  translations={{
						    stats(nbHits) {
						      return <h1 style={{textAlign: "center"}}>{nbHits} {nbHits === 1 ? "result" : "results"} for "{searchTerm}"</h1>
						    },
						  }}
						/>
						<Grid className="grid">
							<Hits hitComponent={searchResultLarge} />
						</Grid>
						<Pagination
					        showFirst={false}
					        showLast={false}
					        showPrevious={true}
					        showNext={true}
					        padding={2}
					        totalPages={3}
					        style={{display: "flex"}}
					      />
					</SearchResultsWrapper>
				}
			</InstantSearch>
		</>
	)
}

Navigation.propTypes = {
	siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
	siteTitle: ``,
}

export default Navigation
