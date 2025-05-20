import { Container } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Ecommerce, Products } from "../../../../utils/Constant";
import { useAppDispatch, useAppSelector } from "../../../../ReaduxToolkit/Hooks";
import { useEffect } from "react";
import { setProductItem } from "../../../../ReaduxToolkit/Reducer/ProductSlice";
import { productsData } from "../../../../Data/Apps/Ecommerce/ProductData";
import ProductFeatures from "./ProductFeatures/ProductFeatures";
import ProductGrid from "./ProductGrid/ProductGrid";

const Product = () => {
    const { sideBarOn } = useAppSelector((state) => state.filterData);
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(setProductItem(productsData));
    }, []);
  return (
    <>
      <Breadcrumbs mainTitle={Products} parent={Ecommerce} title={Products} />
      <Container fluid className={`product-wrapper ${sideBarOn ? "sidebaron" : ""}`}>
        <div className="product-grid">
          <ProductFeatures />
          <ProductGrid />
        </div>
      </Container>
    </>
  );
};

export default Product;
