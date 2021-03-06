import React, { useState, useContext, useEffect } from 'react'
import { navigate } from 'gatsby'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import downArrow from './down-chevron.svg'
import whiteBag from './white-bag.svg'
import blackBag from './black-bag.svg'
import menuIcon from './menu.svg'
import SearchResult from './searchResult'
import Menu from './menu'
import searchResultLarge from './searchResultLarge'
import styled from '@emotion/styled'
import { Grid } from '../ProductGrid/styles'
import { globalHistory } from '@reach/router'

import algoliasearch from 'algoliasearch/lite'
import {
	InstantSearch,
	SearchBox,
	Hits,
	Pagination,
	Stats,
} from 'react-instantsearch-dom'

import StoreContext from '~/context/StoreContext'
import {
	CartCounter,
	CartCounterMobile,
	Container,
	Logo,
	MenuLink,
	Wrapper,
} from './styles'

const path = globalHistory.location.pathname

const SearchResultsWrapper = styled.div`
	margin: 0 auto;
	max-width: 980px;
	padding: 0px 0rem 1.45rem;
`

const HoverLinkStyle = styled.div`
	display: inline-block;
	color: rgb(36, 44, 72);
	opacity: 1;
	transition: 0.2s opacity cubic-bezier(0.65, 0.005, 0.35, 0.995);

	:hover {
		opacity: 0.7;
		transition: 0.2s opacity cubic-bezier(0.65, 0.005, 0.35, 0.995);
	}
`

const searchClient = algoliasearch(
	'MFHEG5ET0Q',
	'135d9adeac6cd24e0cfd522e093d7301'
)

const useQuantity = () => {
	const {
		store: { checkout },
	} = useContext(StoreContext)
	const items = checkout ? checkout.lineItems : []
	const total = reduce(items, (acc, item) => acc + item.quantity, 0)
	return [total !== 0, total]
}

const Navigation = ({
	siteTitle,
	location,
	openMobileMenu,
	openMobileCart,
	openDesktopCart,
}) => {
	const [hasItems, quantity] = useQuantity()
	const [searchTerm, setSearchTerm] = useState('')
	const [searchActive, setSearchActive] = useState(false)
	const [onSearchPage, setOnSearchPage] = useState(false)
	const [menuActive, setMenuActive] = useState(false)

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
		setMenuActive(false)
	}

	function handleLinkClick() {
		setTimeout(() => setMenuActive(false), 0)
	}

	// useEffect(() => {
	// 	if (path === '/search' || path === '/search/') {
	// 		setOnSearchPage(true)
	// 	}
	// 	else {
	// 		setOnSearchPage(true)
	// 	}
	// }, [])

	// console.log(location.pathname + 'asd');

	return (
		<>
			<div
				style={{
					height: '2.535rem',
					color: 'rgb(36,44,72)',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					fontSize: 14,
					backgroundColor: 'rgba(111, 128, 186, 0.08)',
				}}
			>
				Enjoy free delivery on all UK orders! ✨
			</div>
			<div className="desktop-only desktop-only-header">
				<InstantSearch searchClient={searchClient} indexName="coverful">
					<Wrapper className="navbar-wrapper">
						<Container className="black-text">
							<div style={{ width: '100%' }}>
								<Logo to="/" style={{ paddingRight: 32, marginLeft: -2 }}>
									{siteTitle}
								</Logo>
								<div
									style={{
										fontSize: '15px',
										letterSpacing: 1,
										padding: '0px 16px 80px 10px',
										display: 'inline',
									}}
									tabIndex="0"
									onMouseOut={handleOnMouseOut}
									onMouseOver={handleMouseOver}
								>
									<div
										style={{
											width: 80,
											height: 40,
											position: 'absolute',
											marginLeft: 0,
											display: 'inline',
											cursor: 'pointer',
										}}
									></div>

									<span
										style={
											menuActive
												? {
														opacity: 0.7,
														transition:
															'0.2s opacity cubic-bezier(0.65, 0.005, 0.35, 0.995)',
														cursor: 'pointer',
												  }
												: { opacity: '1', cursor: 'pointer' }
										}
									>
										SHOP
									</span>

									{
										// the div below is a transparent wide div that ensures the dropdown menu stays open when user moves mouse diagonally from 'shop' link to the menu.
									}
									<div
										style={
											menuActive
												? {
														width: '50vw',
														height: 25,
														position: 'absolute',
														bottom: 0,
														left: '50%',
														marginLeft: '-50vw',
														display: 'inline',
												  }
												: { display: 'none' }
										}
									></div>

									{
										// caret down icon
									}
									<img
										alt=""
										style={
											menuActive
												? {
														opacity: 0.7,
														transition:
															'0.2s opacity cubic-bezier(0.65, 0.005, 0.35, 0.995)',
														height: 9,
														position: 'relative',
														top: -1,
														marginLeft: 3,
														cursor: 'pointer',
												  }
												: {
														opacity: '1',
														height: 9,
														position: 'relative',
														top: -1,
														marginLeft: 3,
														cursor: 'pointer',
												  }
										}
										src={downArrow}
									/>

									{
										// drop down menu - only visible when menuActive is true
									}
									<Menu
										menuActive={menuActive}
										handleLinkClick={handleLinkClick}
									/>
								</div>
								<HoverLinkStyle>
									<MenuLink to="/about-us">ABOUT US</MenuLink>
								</HoverLinkStyle>
							</div>

							<div style={{ display: 'flex', alignItems: 'center' }}>
								<div style={{ width: 260, backgroundColor: 'none' }}>
									<div style={{ textAlign: 'center' }}>
										<SearchBox
											onSubmit={handleSubmit}
											onChange={handleChange}
											onFocus={handleFocus}
											onBlur={handleBlur}
										/>
									</div>
									<div
										className={
											searchActive && location.pathname !== '/search/'
												? 'visible'
												: 'hidden'
										}
										style={{
											width: 260,
											maxHeight: 360,
											overflow: 'scroll',
											position: 'absolute',
											top: 60,
											backgroundColor: 'white',
											borderRadius: 2,
											boxShadow: '0px 0px 4px 0px rgba(0,40,70,0.2)',
											zIndex: '3',
										}}
									>
										<div
											style={{
												cursor: 'pointer',
												textAlign: 'center',
												padding: 14,
												fontFamily: 'AvenirBold',
												fontSize: 14,
												backgroundColor: 'rgb(247,248,250)',
												borderBottom: '1px solid rgba(36,44,72,0.1)',
											}}
											onClick={handleSubmit}
											className="hits-small"
										>
											See all results for "{searchTerm}"
										</div>
										<Hits className="hits-small" hitComponent={SearchResult} />
									</div>
								</div>

								<div
									onClick={openDesktopCart}
									style={{
										position: 'relative',
										display: 'flex',
										fontSize: 12,
										fontWeight: '400',
										justifyContent: 'center',
										height: '36px',
										alignItems: 'center',
										paddingRight: 0,
										width: 22,
										cursor: 'pointer',
									}}
								>
									<img
										alt="basket"
										style={{
											height: 24,
											width: 20,
											position: 'absolute',
											marginLeft: 2,
										}}
										src={hasItems ? blackBag : whiteBag}
									/>
									{hasItems && <CartCounter>{quantity}</CartCounter>}
								</div>
							</div>
						</Container>
					</Wrapper>

					{location.pathname === '/search/' && searchTerm.length > 0 && (
						<SearchResultsWrapper>
							<Stats
								translations={{
									stats(nbHits) {
										return (
											<h1 style={{ textAlign: 'center' }}>
												{nbHits} {nbHits === 1 ? 'result' : 'results'} for "
												{searchTerm}"
											</h1>
										)
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
								style={{ display: 'flex' }}
							/>
						</SearchResultsWrapper>
					)}
				</InstantSearch>
			</div>

			<div className="mobile-only mobile-only-header">
				<Wrapper>
					<Container className="black-text">
						<img
							className="burger"
							alt="menu"
							style={{ height: 19 }}
							src={menuIcon}
							onClick={openMobileMenu}
						/>
						<div>
							<Logo to="/">{siteTitle}</Logo>
						</div>

						<div style={{ display: 'flex' }}>
							<div
								onClick={openMobileCart}
								style={{
									position: 'relative',
									fontSize: 12,
									fontWeight: '400',
									display: 'flex',
									justifyContent: 'center',
									height: '36px',
									alignItems: 'center',
									paddingRight: 0,
									width: 22,
									cursor: 'pointer',
								}}
							>
								<img
									alt="basket"
									style={{
										position: 'absolute',
										marginLeft: 2,
									}}
									src={hasItems ? blackBag : whiteBag}
								/>
								{hasItems && <CartCounterMobile>{quantity}</CartCounterMobile>}
							</div>
						</div>
					</Container>
				</Wrapper>
			</div>
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
