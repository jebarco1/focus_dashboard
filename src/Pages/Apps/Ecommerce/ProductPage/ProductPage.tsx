import { Card, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Ecommerce, ProductPages } from "../../../../utils/Constant";
import ClothsDetails from "./ClothsDetails/ClothsDetails";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductBrand from "./ProductBrand/ProductBrand";
import ImageSlider from "./ImageSlider/ImageSlider";

const ProductPage = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ProductPages} parent={Ecommerce} title={ProductPages}/>
      <Container fluid>
        <div>
          <Row className="product-page-main p-0">
            <Col xxl="4" md="6" className="box-col-12">
              <ImageSlider />
            </Col>
            <Col xxl="5" className="box-col-6 order-xxl-0 order-1">
              <ProductDetails />
            </Col>
            <Col xxl="3" md="6" className="box-col-6">
                <ProductBrand />
     
            </Col>
          </Row>
        </div>
        <Card>
          <Row className="product-page-main">
            <Col sm="12">
              <ClothsDetails />
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default ProductPage;
