import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../../ReaduxToolkit/Hooks';
import { ModalButtonsProp, ProductItemInterface } from '../../../../../Type/Apps/Ecommerce/ProductType'
import { addToCartData } from '../../../../../ReaduxToolkit/Reducer/CartSlice';
import { AddToCartity, ViewDetails } from '../../../../../utils/Constant';

const ModalButtons = ({ singleProduct, quantity }: ModalButtonsProp) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const AddToCarts = (item: ProductItemInterface) => {
    dispatch(addToCartData({ item, quantity }));
    navigate(`${process.env.PUBLIC_URL}/ECommerce/Cart`);
  };
  return (
    <div className="addcart-btn">
      <Link to={`${process.env.PUBLIC_URL}/ecommerce/cart`} className="btn btn-primary text-white me-3" onClick={() => AddToCarts(singleProduct)}>
        {AddToCartity}
      </Link>
      <Link to={`${process.env.PUBLIC_URL}/ecommerce/product-page/${singleProduct.id}`} className="btn btn-primary text-white">
        {ViewDetails}
      </Link>
    </div>
  )
}

export default ModalButtons