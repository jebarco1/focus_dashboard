import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../../../ReaduxToolkit/Hooks';
import { HoverButtonsProp, ProductItemInterface } from '../../../../../Type/Apps/Ecommerce/ProductType'
import { addToCartData } from '../../../../../ReaduxToolkit/Reducer/CartSlice';
import { LI, UL } from '../../../../../AbstractElements';
import { Href } from '../../../../../utils/Constant';

const HoverButtons = ({ item, setDataid, setOpenModal }: HoverButtonsProp) => {
  const dispatch = useAppDispatch();

  const AddToCarts = (item: ProductItemInterface, quantity: number) => {
    dispatch(addToCartData({ item, quantity }));
  };

  const onClickHandle = (i: ProductItemInterface) => {
    setOpenModal(true);
    setDataid(i.id);
  };
  return (
    <div className="product-hover">
      <UL className="simple-list d-flex flex-row">
        <LI>
          <Link onClick={() => AddToCarts(item, 1)} to={`${process.env.PUBLIC_URL}/ecommerce/cart`}>
            <i className="icon-shopping-cart ms-1"></i>
          </Link>
        </LI>
        <LI>
          <Link onClick={() => onClickHandle(item)} to={Href}>
            <i className="icon-eye"></i>
          </Link>
        </LI>
      </UL>
    </div>
  )
}

export default HoverButtons