import { cartTableHeader } from '../../../../Data/Apps/Ecommerce/ProductCartData'

const CartTableHead = () => {
  return (
    <thead>
      <tr>
        {cartTableHeader.map((items, i) => (
          <th key={i}>{items}</th>
        ))}
      </tr>
    </thead>
  )
}

export default CartTableHead