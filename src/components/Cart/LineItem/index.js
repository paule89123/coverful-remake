import React, { useContext } from 'react'
import { Link } from 'gatsby'

import StoreContext from '~/context/StoreContext'
import { Wrapper } from './styles'

const LineItem = props => {
  const { line_item } = props
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  const variantImage = line_item.variant.image ? (
    <img
      src={line_item.variant.image.src}
      alt={`${line_item.title} product shot`}
      height="60px"
    />
  ) : null

  const selectedOptions = line_item.variant.selectedOptions
    ? line_item.variant.selectedOptions.map(
        option => `${option.value} `
      )
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, line_item.id)
  }

  return (
    <Wrapper>
      {console.log(line_item)}
      <Link to={`/products/${line_item.variant.product.handle}/`}>
        {variantImage}
      </Link>
      <p>
        {line_item.title}
      </p>
      <p>
      {selectedOptions}
      </p>
      <p>
      {line_item.quantity}
      </p>
      <p>
      {"£" + line_item.variant.price * line_item.quantity + ".00"}
      </p>
      <button onClick={handleRemove}>Remove</button>
    </Wrapper>
  )
}

export default LineItem
