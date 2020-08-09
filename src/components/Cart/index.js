import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'
import { Link } from 'gatsby'

const Cart = () => {
  const {
    store: { checkout },
    
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const line_items = checkout.lineItems.map(line_item => {
    return <LineItem key={line_item.id.toString()} line_item={line_item} />
  })

  let quantityArr = checkout.lineItems.map(line_item => line_item.quantity)

  let numberOfItems = 0

  if (quantityArr[0]) {
    numberOfItems = quantityArr.reduce((acc, item) => acc + item)
  } 

  return (
    <div>
      {line_items}
      <h2>Subtotal</h2>
      <p>£{checkout.subtotalPrice}</p>
      <p>{numberOfItems > 2 && "Discount applied (Promotion: Buy 3+ items, save £10)"}</p>
      <br />
      <br />
      <h2>Total</h2>
      <p>£{checkout.totalPrice}</p>
      <br />
      <button onClick={handleCheckout} disabled={checkout.lineItems.length === 0}>Check out</button>
    </div>
  )
}

export default Cart
