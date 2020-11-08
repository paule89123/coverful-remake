import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import animals from './animals1.jpeg'
import patterns from './patterns.jpg'
import famousfaces from './famousfaces1.jpg'
import art from './art1.jpeg'
import { Img } from '~/utils/styles'

const Column = styled.div`
	width: 207px;
`

const MenuLink = styled.div``

const menuStyle = {
	display: 'block',
	width: '100vw',
	zIndex: '1',
	position: 'absolute',
	marginLeft: '-50vw',
	left: '50%',
	top: 65,
	boxShadow: 'inset 0 4px 5px -4px rgba(0,40,70,0.3)',
	backgroundColor: 'white',
	paddingTop: 39,
}

const categoriesVariables = [animals, famousfaces, patterns]
export const categoriesStrings = [
	'Animals',
	'Famous Faces',
	'Food and Drink',
	'Patterns',
	'Japanese',
	'Music',
	'Nature',
	'Nautical',
	'Retro',
	'Surreal',
]
export const collectionsStrings = ['New In', 'Most Loved', 'Final Few']

const Menu = ({ menuActive, handleLinkClick }) => {
	const [activeCategory, setActiveCategory] = useState(animals)

	function handleMouseOver(category) {
		setActiveCategory(category)
	}

	const categories = categoriesStrings
		.concat(collectionsStrings)
		.map((item, i) => {
			const slug = item.replace(/\s+/g, '-').toLowerCase()
			const lowercaseName = item.replace(/\s+/g, '').toLowerCase()
			let menuLinkStyle = {}
			if (i < categoriesStrings.length) {
				menuLinkStyle = { marginBottom: 13, opacity: '0.85' }
			} else {
				menuLinkStyle = { marginBottom: 23, fontFamily: 'AvenirBold' }
			}
			return (
				<Link to={`categories/${slug}`}>
					<MenuLink
						style={menuLinkStyle}
						onMouseOver={() => handleMouseOver(categoriesVariables[i])}
						onClick={handleLinkClick}
					>
						{item}
					</MenuLink>
				</Link>
			)
		})

	return (
		<div style={menuActive ? menuStyle : { display: 'none' }}>
			<div style={{ display: 'flex', fontSize: 14, alignItems: 'flex-start' }}>
				<img
					style={{ width: 220, margin: '0px 79px 39px 79px' }}
					alt={`./${activeCategory}.jpeg`}
					src={activeCategory}
				/>
				<Column>
					<div style={{ fontFamily: 'AvenirBold', paddingBottom: 13 }}>
						Categories
					</div>
					{categories.slice(0, categoriesStrings.length / 2)}
				</Column>
				<Column>
					{categories.slice(
						categoriesStrings.length / 2,
						categoriesStrings.length
					)}
				</Column>
				<Column>
					{categories.slice(categoriesStrings.length, categories.length)}
				</Column>
			</div>
			<div
				style={{
					boxShadow: 'inset 0 4px 4px -4px rgba(0,40,70,0.2)',
					height: 6,
					zIndex: 2,
					position: 'relative',
					top: 6,
				}}
			></div>
		</div>
	)
}

export default Menu
