import { Button } from "reactstrap";
import { AddToCart, AddToWishList, BuyNow } from "../../../../../utils/Constant";

const ProductButtons = () => {
  return (
    <div className="m-t-15 btn-showcase">
      <Button color="primary" href={`${process.env.PUBLIC_URL}/ecommerce/cart`}>
        {" "}
        <i className="fa fa-shopping-basket me-1" />
        {AddToCart}
      </Button>
      <Button color="success" href={`${process.env.PUBLIC_URL}/ecommerce/checkout`}>
        {" "}
        <i className="fa fa-shopping-cart me-1" />
        {BuyNow}
      </Button>
      <Button color="secondary" href={`${process.env.PUBLIC_URL}/ecommerce/wishlist`}>
        {" "}
        <i className="fa fa-heart me-1" />
        {AddToWishList}
      </Button>
    </div>
  );
};

export default ProductButtons;
