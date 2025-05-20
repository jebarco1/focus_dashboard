import { Card, CardBody, Col, Row } from "reactstrap";
import { useAppSelector } from "../../../../../../ReaduxToolkit/Hooks";
import { Image } from "../../../../../../AbstractElements";
import { dynamicImage } from "../../../../../../Service";
import FilterHeader from "./FilterHeader";
import Category from "./Category";
import PriceRange from "./PriceRange";
import SearchBox from "./SearchBox";

const ProductSidebar = () => {
  const { isFilter } = useAppSelector((state) => state.filterData);
  return (
    <Row>
      <Col sm="3">
        <div className={`product-sidebar ${isFilter ? "open" : ""}`}>
          <div className="filter-section">
            <Card>
              <FilterHeader />
              <div className="left-filter filter-sidebar theme-scrollbar z-1">
                <CardBody className="filter-cards-view animate-chk">
                  <Category />
                  <PriceRange />
                  <div className="product-filter text-center">
                    <Image
                      className="img-fluid banner-product"
                      src={dynamicImage("ecommerce/banner.jpg")}
                      alt=""
                    />
                  </div>
                </CardBody>
              </div>
            </Card>
          </div>
        </div>
      </Col>
      <SearchBox />
    </Row>
  );
};

export default ProductSidebar;
