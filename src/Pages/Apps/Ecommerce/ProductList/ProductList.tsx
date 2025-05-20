import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Ecommerce, ProductListHeading, ProductLists } from "../../../../utils/Constant";
import CommonHeader from "../../../../Common/CommonHeader";
import { productListHeadingSpan, productTableColumns, productTableData } from "../../../../Data/Apps/Ecommerce/ProductListData";
import DataTable from "react-data-table-component";

const ProductList = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ProductLists} parent={Ecommerce} title={ProductLists}/>
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonHeader title={ProductListHeading} subTitle={productListHeadingSpan}/>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    data={productTableData}
                    columns={productTableColumns}
                    className="display dataTable no-footer"
                    dense={true}
                    noHeader
                    pagination
                    paginationServer
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductList;
