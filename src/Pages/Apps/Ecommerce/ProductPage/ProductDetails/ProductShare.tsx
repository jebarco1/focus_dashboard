import { Col, Row } from "reactstrap";
import { ShareIt } from "../../../../../utils/Constant";
import { H3, LI, UL } from "../../../../../AbstractElements";
import { productSocial } from "../../../../../Data/Apps/Ecommerce/ProductPageData";
import { Link } from "react-router-dom";

const ProductShare = () => {
  return (
    <Row>
      <Col md="4">
        <H3 className="product-title">{ShareIt}</H3>
      </Col>
      <Col md="8">
        <div className="product-icon">
          <UL className="product-social simple-list flex-row">
            {productSocial.map((data,index) => (
              <LI className="d-inline-block" key={index}>
                <Link to={data.link} target="_blank">
                  <i className={`fa fa-${data.iconName}`} />
                </Link>
              </LI>
            ))}
          </UL>
        </div>
      </Col>
    </Row>
  );
};

export default ProductShare;
