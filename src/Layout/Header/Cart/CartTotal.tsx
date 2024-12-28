import { Link } from "react-router-dom"
import { H6, LI } from "../../../AbstractElements"
import { Checkout, GoToYourCart, OrderTotal } from "../../../utils/Constant"


const CartTotal = () => {
  return (
    <>
        <LI className="total">
            <H6 className="mb-0">
                {OrderTotal} : <span className="f-right">$1000.00</span>
            </H6>
        </LI>
        <LI className="text-center">
            <Link className="d-block mb-3 view-cart f-w-700" to={`${process.env.PUBLIC_URL}/ecommerce/cart`}>
                {GoToYourCart}
            </Link>
            <Link className="btn btn-primary view-checkout" to={`${process.env.PUBLIC_URL}/ecommerce/checkout`}>
                {Checkout}
            </Link>
        </LI>
    </>
  )
}

export default CartTotal