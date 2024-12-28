import { H6, LI } from "../../../AbstractElements";
import SVG from "../../../utils/CommonSvgIcon/SVG";
import { Carts } from "../../../utils/Constant";
import CartBox from "./CartBox";

const Cart = () => {
  return (
    <LI className="cart-nav onhover-dropdown">
      <div className="cart-box">
        <SVG iconId='Buy'/>
      </div>
      <div className="cart-dropdown onhover-show-div">
        <H6 className="f-18 mb-0 dropdown-title">{Carts}</H6>
        <CartBox />
      </div>
    </LI>
  );
};

export default Cart;
