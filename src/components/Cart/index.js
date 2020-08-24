import React, { useContext } from 'react'
import { Link } from 'gatsby'
import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'

const Cart = (props) => {
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
    <div style={{marginTop: "-60.72px", color: "rgb(38,38,38)"}}>
    <div style={{fontSize: 16, fontFamily: "AvenirBold", textAlign: "center", height: 66, lineHeight: "66px"}}>My Bag</div>
    <div style={{fontSize: 13, letterSpacing: 1, height: 41, textAlign: "center", boxSizing: "border-box", width: props.mobile ? "100vw" : "448px", marginLeft: "-42.32px", lineHeight: "41px", backgroundColor: "rgba(197, 155, 141,0.1)", fontFamily: "AvenirBold", color: "rgba(197, 155, 141,1)"}}>
        BUY ANY 3 CUSHION COVERS, SAVE £10
      </div>
    {line_items}
      {!numberOfItems ? 
        <div style={{height: "calc(100vh - 107px)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <div style={{marginBottom: 41, textAlign: "center", fontSize: 24, fontFamily: "AvenirBold"}}>Your bag is empty</div> 
        <div style={{marginBottom: 41, textAlign: "center", fontSize: 16, fontFamily: "AvenirBold"}}>Questions about buying? <Link style={{color: "dodgerblue"}} to='/contact'>Contact us</Link></div> 
        <div style={{display: "inline-block", fontSize: 14, fontFamily: "AvenirBold", padding: "16px 40px", border: "1px solid rgba(38,38,38,0.9)"}}>Continue Shopping</div> 
        </div>
        :
        <>
      <h2>Subtotal</h2>
      <p>£{checkout.subtotalPrice}</p>
      <p>{numberOfItems > 2 && "Discount applied (Promotion: Buy 3+ items, save £10)"}</p>
      <br />
      <br />
      <h2>Total</h2>
      <p>£{checkout.totalPrice}</p>
      <br />
      <button onClick={handleCheckout} disabled={checkout.lineItems.length === 0}>Check out</button>
      </>
    }
    </div>
  )
}

export default Cart
