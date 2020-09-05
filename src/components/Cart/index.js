import React, { useContext } from 'react'
import { Link } from 'gatsby'
import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'
import lock from './lock-solid.svg'
import arrow from './left-arrow.svg'

const Cart = (props) => {
  const {
    store: { checkout },
    
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const line_items = checkout.lineItems.map(line_item => {
    return <LineItem closeCartFromLink={props.closeCartFromLink} key={line_item.id.toString()} line_item={line_item} />
  })

  let quantityArr = checkout.lineItems.map(line_item => line_item.quantity)

  let numberOfItems = 0

  if (quantityArr[0]) {
    numberOfItems = quantityArr.reduce((acc, item) => acc + item)
  } 

  return (
    <div style={{color: "rgb(38,38,38)", overflow: "hidden", height: "100vh", position: props.mobile ? "fixed" : "relative", right: 0, left: 0}}>

<div style={{position: "fixed", right: 0, left: props.mobile ? 0 : "initial", top: 0, zIndex: "2"}}>

<img alt="" style={{padding: "3px 7px", cursor: "pointer", height: 27, marginLeft: 19, position: "absolute", marginTop: 15}} onClick={() => props.mobile ? props.closeMobileCart() : props.closeDesktopCart()} src={arrow} />

    <div style={{fontSize: 16, fontFamily: "AvenirBold", textAlign: "center", height: 66, lineHeight: "66px", backgroundColor: "white"}}>My Bag</div>
    <div style={{fontSize: 13, letterSpacing: 1, height: 41, textAlign: "center", boxSizing: "border-box", width: props.mobile ? "100vw" : "448px", marginBottom: "8px", lineHeight: "41px", backgroundColor: "#f9f5f4", fontFamily: "AvenirBold", color: "rgba(197, 155, 141,1)"}}>
        BUY ANY 3 CUSHION COVERS, SAVE £10
      </div>
</div>
<div style={{height: 107}}></div>


      {!numberOfItems ? 
        <div style={{height: "calc(100vh - 222px)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <div style={{marginBottom: 41, textAlign: "center", fontSize: 24, fontFamily: "AvenirBold"}}>Your bag is empty</div> 
        <div style={{marginBottom: 41, textAlign: "center", fontSize: 16, fontFamily: "AvenirBold"}}>Questions about buying? <Link style={{color: "dodgerblue"}} to='/contact'>Contact us</Link></div> 
        <div style={{cursor: "pointer", display: "inline-block", fontSize: 14, fontFamily: "AvenirBold", padding: "16px 40px", border: "1px solid rgba(38,38,38,0.9)"}} onClick={() => props.mobile ? props.closeMobileCart() : props.closeDesktopCart()}>Continue Shopping</div> 
        </div>
        :
        <div style={{width: "100%", boxSizing: "border-box", maxWidth: props.mobile ? "100vw" : "448px"}}>
            <div style={{overflow: "auto", height: "calc(100vh - 277px)", padding: "8px 19px 0px 19px"}}>
              {line_items}
            </div>
            <div style={{position: "fixed", right: 0, bottom: 0, backgroundColor: "white", padding: "0px 19px 0px 19px", boxSizing: "border-box", width: "inherit", maxWidth: "inherit"}}>
                  <div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10}}>
                      <div style={{fontSize: 14}}>
                          Order Subtotal:
                      </div>
                      <div style={{fontFamily: "AvenirBold", fontSize: 20}}>
                          £{checkout.subtotalPrice}
                      </div>
                  </div>
                  {numberOfItems > 2 && 
                  <div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 18}}>
                      <div style={{fontSize: 14}}>
                          Your Savings:
                      </div>
                      <div style={{fontFamily: "AvenirBold", fontSize: 14}}>
                          £10
                      </div>
                  </div>
                  }
                  <div style={{letterSpacing: "1px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", lineHeight: "48px", background: "black", height: 48, color: "white", marginBottom: 16, fontSize: 14}} onClick={handleCheckout} disabled={checkout.lineItems.length === 0}>
                      Checkout
                      <img alt="" style={{height: 15, marginLeft: 8, marginTop: -3}} src={lock} />
                  </div>
            </div>
      </div>
    }
    </div>
  )
}

export default Cart
