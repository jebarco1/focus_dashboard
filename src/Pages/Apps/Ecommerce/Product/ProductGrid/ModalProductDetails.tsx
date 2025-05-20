import { Button } from 'reactstrap'
import { H3, H4, LI, P, UL } from '../../../../../AbstractElements'
import { useAppSelector } from '../../../../../ReaduxToolkit/Hooks'
import { ModalProductDetailsProp } from '../../../../../Type/Apps/Ecommerce/ProductType'
import { productSizeArray } from '../../../../../Data/Apps/Ecommerce/ProductData'
import { ProductDetails } from '../../../../../utils/Constant'

const ModalProductDetails = ({ singleProduct }: ModalProductDetailsProp) => {
  const {symbol} = useAppSelector((state)=>state.product)
  return (
    <>
      <H4>{singleProduct.category}</H4>
      <div className="product-price fs-4 mb-1">
        {symbol}{singleProduct.price}
        <del className="f-w-700 fs-5 ms-1">{symbol}{singleProduct.discountPrice}</del>
      </div>
      <div className="product-view product-details-border">
        <H3 className="f-w-600">{ProductDetails}</H3>
        <P className="mb-0">{singleProduct.discription}</P>
      </div>
      <div className="product-size mt-3 mb-2">
        <UL className="simple-list diflex flex-row">
          {productSizeArray.map((items, i) => (
            <LI key={i} className="me-2">
              <Button outline color="light">
                {items}
              </Button>
            </LI>
          ))}
        </UL>
      </div>
    </>
  )
}

export default ModalProductDetails