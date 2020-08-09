import React, { useState, useContext, useEffect, useCallback } from 'react'
import { Link } from 'gatsby'
import find from 'lodash/find'
import isEqual from 'lodash/isEqual'
import PropTypes from 'prop-types'

import StoreContext from '~/context/StoreContext'



const ProductForm = ({ product }) => {
  const activeStyle = {
  borderBottom: "1px solid black",
  display: "inline-block",
  cursor: "pointer",
  paddingBottom: 8,
  fontFamily: "AvenirBold",
  marginBottom: -1,
  marginRight: 36,
  fontSize: 13,
  letterSpacing: 1
}

const inactiveStyle = {
  display: "inline-block",
  cursor: "pointer",
  paddingBottom: 8,
  marginBottom: -1,
  marginRight: 36,
  fontSize: 13,
  letterSpacing: 1
}

  const {
    options,
    variants,
    variants: [initialVariant],
    priceRange: { minVariantPrice },
  } = product
  const [variant, setVariant] = useState({ ...initialVariant })
  const [quantity, setQuantity] = useState(1)
  const [detailsActive, setDetailsActive] = useState(true)
  const [shippingActive, setShippingActive] = useState(false)

  const {
    addVariantToCart,
    store: { client, adding },
  } = useContext(StoreContext)

  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant
  const [available, setAvailable] = useState(productVariant.availableForSale)

  const checkAvailability = useCallback(
    productId => {
      client.product.fetch(productId).then(fetchedProduct => {
        // this checks the currently selected variant for availability
        const result = fetchedProduct.variants.filter(
          variant => variant.id === productVariant.shopifyId
        )
        if (result.length > 0) {
          setAvailable(result[0].available)
        }
      })
    },
    [client.product, productVariant.shopifyId, variants]
  )

  useEffect(() => {
    checkAvailability(product.shopifyId)
  }, [productVariant, checkAvailability, product.shopifyId])

  const handleQuantityChange = ({ target }) => {
    setQuantity(target.value)
  }

  const handleOptionChange = (optionIndex, { target }) => {
    const { value } = target
    const currentOptions = [...variant.selectedOptions]

    currentOptions[optionIndex] = {
      ...currentOptions[optionIndex],
      value,
    }

    const selectedVariant = find(variants, ({ selectedOptions }) =>
      isEqual(currentOptions, selectedOptions)
    )

    setVariant({ ...selectedVariant })
  }

  const handleAddToCart = () => {
    addVariantToCart(productVariant.shopifyId, quantity)
  }

  /* 
  Using this in conjunction with a select input for variants 
  can cause a bug where the buy button is disabled, this 
  happens when only one variant is available and it's not the
  first one in the dropdown list. I didn't feel like putting 
  in time to fix this since its an edge case and most people
  wouldn't want to use dropdown styled selector anyways - 
  at least if the have a sense for good design lol.
  */
  const checkDisabled = (name, value) => {
    const match = find(variants, {
      selectedOptions: [
        {
          name: name,
          value: value,
        },
      ],
    })
    if (match === undefined) return true
    if (match.availableForSale === true) return false
    return true
  }

  const price = Intl.NumberFormat(undefined, {
    currency: minVariantPrice.currencyCode,
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(variant.price)

  function handleClick(arg) {
    if (arg === "increase") {
      setQuantity(prevState => prevState + 1)
    }
    if (arg === "decrease" && quantity > 0) {
      setQuantity(prevState => prevState - 1)
    }
  }

  function handleDetailsClick() {
    setDetailsActive(true)
    setShippingActive(false)
  }

  function handleShippingClick() {
    setDetailsActive(false)
    setShippingActive(true)
  }

  return (
    <>
      <div
        style={{
          fontSize: 18,
          width: 70,
          opacity: "0.65"
        }}
      >{price}</div>

      <br />

      <div className="pastel" style={{display: "inline-block", padding: "12px 24px", lineHeight: "1.4", backgroundColor: "rgba(197, 155, 141,0.1)", fontFamily: "AvenirBold", color: "rgba(197, 155, 141,1)", fontSize: 16}}>
        Buy any 3 cushion covers, save £10
      </div>

      <br /><br /><br />

      <div>
        <div style={{borderBottom: "1px solid rgba(0,0,0,0.2)", marginBottom: 16}}>
          <div onClick={handleDetailsClick} style={detailsActive ? activeStyle : inactiveStyle}>DETAILS</div>
          <div onClick={handleShippingClick} style={shippingActive ? activeStyle : inactiveStyle}>SHIPPING, RETURNS & REFUNDS</div>
        </div>
        {detailsActive && 
          <ul style={{lineHeight: "1.4", listStyleType: "disc", listStylePosition: "inside"}}>
            <li>Cotton-linen blend cushion cover</li>
            <li>45cm x 45cm</li>
            <li>Inner cushion not included</li>
          </ul>
        }
        {shippingActive && <div style={{fontSize: 16, lineHeight: "1.4"}}>
We offer FREE UK tracked delivery on all orders. Tracked airmail to the rest of the world is just £1.99. See <Link style={{color: "#7e7e7e", borderBottom: "1px dashed #7e7e7e"}} to="/shipping-and-payment">Shipping & Payment</Link> for more info.
<br /><br />
We want you to be completely happy with your Coverful purchase. If you don’t love it, exchanges and returns are free for 30 days. See <Link style={{color: "#7e7e7e", borderBottom: "1px dashed #7e7e7e"}} to="/returns-and-refunds">Returns & Refunds</Link> for more info.</div>}
      </div>

      

      <br /><br />


      {options.map(({ id, name, values }, index) => (
        <React.Fragment key={id}>
          <label htmlFor={name} style={{lineHeight: "1.4", fontSize: 13, letterSpacing: 1, fontFamily: "AvenirBold", marginBottom: 8, display: "inline-block"}}>DESIGN</label>
          <form
            style={{display: "flex", width: "100%", flexWrap: "nowrap"}}
            name={name}
            key={id}
            onChange={event => handleOptionChange(index, event)}
          >
            {values.map((value, i) => (
              <>
              <label style={variant.selectedOptions[0].value === value ? {cursor: "pointer", lineHeight: "1.4", textAlign: "center", border: "2px solid #66afed", padding: "12px 24px", display: "inline-block", borderRadius: 4, flexGrow: "1", width: "50%"} : {lineHeight: "1.4", textAlign: "center", border: "1px solid rgba(0,0,0,0.2)", marginLeft: 1, marginRight: 1, padding: "13px 24px", display: "inline-block", borderRadius: 4, flexGrow: "1", width: "50%", cursor: "pointer"}}>
              <input
                type="radio"
                name={name}
                value={value}
                key={`${name}-${value}`}
                disabled={checkDisabled(name, value)}
                style={{display: "none"}}
              />
              <span style={{fontFamily: "AvenirBold"}}>{value}</span>
              <br />
              <span style={{fontSize: 14}}>£{variants[i].price}</span>
              </label>
              {i === 0 && <div style={{width: 12}}></div>}
              </>
            ))}
          </form>
          <br />
        </React.Fragment>
      ))}

      

        <br />

        <button
            className="pastel2"
            type="submit"
            disabled={!available || adding}
            onClick={handleAddToCart}
            style={{
              background: "linear-gradient(145deg,HSL(127,72%,85%),HSL(213,93%,64%)",
              borderRadius: 30,
              color: "white",
              border: "none",
              padding: 2,
              cursor: "pointer",
              fontSize: 15,
              fontWeight: "500",
              letterSpacing: 0.5
            }}
          >
            <div style={{
              padding: "9px 20px 10px",
              borderRadius: 30,
              color: "black",
              background: "white"
            }}>Add to Bag</div>
          </button>

          <br />

      {!available && <p>This Product is out of Stock!</p>}
    </>
  )
}

ProductForm.propTypes = {
  product: PropTypes.shape({
    descriptionHtml: PropTypes.string,
    handle: PropTypes.string,
    id: PropTypes.string,
    shopifyId: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        originalSrc: PropTypes.string,
      })
    ),
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        values: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    productType: PropTypes.string,
    title: PropTypes.string,
    variants: PropTypes.arrayOf(
      PropTypes.shape({
        availableForSale: PropTypes.bool,
        id: PropTypes.string,
        price: PropTypes.string,
        title: PropTypes.string,
        shopifyId: PropTypes.string,
        selectedOptions: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.string,
          })
        ),
      })
    ),
  }),
  addVariantToCart: PropTypes.func,
}

export default ProductForm
