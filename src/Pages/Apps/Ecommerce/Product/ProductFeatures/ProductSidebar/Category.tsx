import { H3 } from '../../../../../../AbstractElements'
import { Categorys, NewProducts, Price } from '../../../../../../utils/Constant'
import BrandFilter from './BrandFilter'
import ColorsFilter from './ColorsFilter'
import GenderFilter from './GenderFilter'
import Rangeslider from './Rangeslider'

const Category = () => {
  return (
    <>
      <div className="product-filter">
        <H3 className="f-w-600 mb-2">{Categorys}</H3>
        <GenderFilter />
      </div>
      <BrandFilter />
      <ColorsFilter />
      <div className="product-filter pb-0">
        <H3 className="f-w-600 mb-2">{Price}</H3>
        <Rangeslider />
        <H3 className="f-w-600 mb-2 mt-5">{NewProducts}</H3>
      </div>
    </>
  )
}

export default Category