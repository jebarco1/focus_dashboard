import { useAppDispatch, useAppSelector } from '../../../../ReaduxToolkit/Hooks';
import { CartType } from '../../../../Type/Apps/Ecommerce/ProductType';
import { removeCartData } from '../../../../ReaduxToolkit/Reducer/CartSlice';
import { Row, Table } from 'reactstrap';
import { Image } from '../../../../AbstractElements';
import { dynamicImage } from '../../../../Service';
import { Href } from '../../../../utils/Constant';
import { XCircle } from 'react-feather';
import CartTableHead from './CartTableHead';
import CartQuantityButton from './CartQuantityButton';
import CartAction from './CartAction';
import EmptyCart from './EmptyCart';
import { Link } from 'react-router-dom';

const CartData = () => {
  const dispatch = useAppDispatch();
  const { symbol } = useAppSelector((state) => state.product);
  const { cart } = useAppSelector((state) => state.cartData);
  const removefromcart = (item: CartType) => dispatch(removeCartData(item.id));

  return (
    <>
      {cart && cart.length > 0 ? (
        <Row>
          <div className="order-history table-responsive wishlist">
            <Table bordered>
              <CartTableHead />
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td>
                        <Image className="img-fluid img-40" src={dynamicImage(item.image)} alt={Href} />
                    </td>
                    <td>
                        <div className="product-name">
                            <Link to={Href}>{item.name}</Link>
                        </div>
                    </td>
                    <td>{symbol}{item.price}</td>
                    <CartQuantityButton item={item} />
                    <td>
                        <Link to={Href} onClick={() => removefromcart(item)}><XCircle /></Link>
                    </td>
                    <td>{symbol}{item.price * item.total}</td>
                  </tr>
                ))}
                <CartAction/>
              </tbody>
            </Table>
          </div>
        </Row>
      ) : (
        <EmptyCart />
      )}
    </>
  )
}

export default CartData