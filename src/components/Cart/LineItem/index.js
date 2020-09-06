import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'gatsby'

import StoreContext from '~/context/StoreContext'
import { Rapper } from './styles'

const LineItem = props => {
  const { line_item } = props
  const {
    removeLineItem,
    updateLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  const variantImage = line_item.variant.image ? (
    <img
      src={line_item.variant.image.src}
      alt={`${line_item.title} product shot`}
      height="70px"
    />
  ) : null

  const selectedOptions = line_item.variant.selectedOptions
    ? line_item.variant.selectedOptions.map(option => `${option.value} `)
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, line_item.id)
  }

  const [quantity, setQuantity] = useState(line_item.quantity)

  const handleQuantityUpdate = num => {
    setQuantity(prevState => prevState + num)
  }

  useEffect(() => {
    updateLineItem(client, checkout.id, line_item.id, quantity)
  }, [quantity])

  return (
    <Rapper>
      <div
        onClick={() => props.closeCartFromLink()}
        style={{
          display: 'inline-block',
          backgroundColor: 'rgba(0,0,0,0.0)',
          marginRight: 16,
        }}
      >
        <Link to={`/products/${line_item.variant.product.handle}/`}>
          {variantImage}
        </Link>
      </div>

      <div style={{ display: 'inline-block', flexGrow: '1' }}>
        <Link to={`/products/${line_item.variant.product.handle}/`}>
          <div
            onClick={() => props.closeCartFromLink()}
            style={{ fontSize: 16, fontFamily: 'AvenirBold', marginBottom: 4 }}
          >
            {line_item.title}
          </div>
        </Link>
        <div style={{ fontSize: 14, marginBottom: 4, opacity: '0.6' }}>
          {selectedOptions}
        </div>

        <div
          style={{
            backgroundColor: 'rgb(255,255,255)',
            display: 'inline-block',
            borderRadius: '50px',
            fontSize: 12,
            overflow: 'hidden',
            border: '1px solid rgb(228,229,230)',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              lineHeight: '24px',
              width: 20,
              display: 'inline-block',
              height: 22,
              borderRadius: '4px 0px 0px 4px',
              border: '1px solid rgb(255,255,255)',
              cursor: 'pointer',
              paddingLeft: 8,
            }}
            onClick={() => handleQuantityUpdate(-1)}
          >
            −
          </div>
          <div
            style={{
              textAlign: 'center',
              lineHeight: '24px',
              width: 20,
              display: 'inline-block',
              height: 22,
              borderRadius: '50px',
              borderTop: '0px solid rgb(255,255,255)',
              borderBottom: '1px solid rgb(255,255,255)',
            }}
          >
            {quantity}
          </div>
          <div
            style={{
              textAlign: 'center',
              lineHeight: '24px',
              width: 20,
              display: 'inline-block',
              height: 22,
              borderRadius: '0px 4px 4px 0px',
              border: '1px solid rgb(255,255,255)',
              cursor: 'pointer',
              paddingRight: 8,
            }}
            onClick={() => handleQuantityUpdate(1)}
          >
            +
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
        }}
      >
        <div className="cross" onClick={handleRemove}></div>
        <div style={{ fontSize: 16, fontFamily: 'AvenirBold' }}>
          {'£' + line_item.variant.price}
        </div>
      </div>
    </Rapper>
  )
}

export default LineItem
