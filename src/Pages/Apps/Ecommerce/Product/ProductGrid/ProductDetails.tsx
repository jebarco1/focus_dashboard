import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../../../ReaduxToolkit/Hooks'
import { STAR_DATA } from '../../../../../Data/Apps/Ecommerce/ProductData'
import { H4, P } from '../../../../../AbstractElements'
import { ProductDetailsProp } from '../../../../../Type/Apps/Ecommerce/ProductType'

const ProductDetails = ({ item }: ProductDetailsProp) => {
  const {symbol}=useAppSelector((state)=>state.product)
  return (
    <div className="product-details">
      {STAR_DATA}
      <Link to={`${process.env.PUBLIC_URL}/ecommerce/product-page`}>
        <H4>{item.name}</H4>
      </Link>
      <P>{item.note}</P>
      <div className="product-price">
        {symbol}{item.price} <del className="f-w-700">{symbol}{item.discountPrice}</del>
      </div>
    </div>
  )
}

export default ProductDetails