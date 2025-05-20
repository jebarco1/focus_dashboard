import { Card, CardBody, Container, Row } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import {
  BillingDetails,
  Checkouts,
  Ecommerce,
} from "../../../../utils/Constant";
import CommonHeader from "../../../../Common/CommonHeader";
import CheckoutForm from "./CheckoutForm";
import ProductCheckout from "./ProductCheckout";

const Checkout = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Checkouts} parent={Ecommerce} title={Checkouts} />
      <Container fluid>
        <Card>
          <CommonHeader title={BillingDetails} />
          <CardBody>
            <Row>
              <CheckoutForm />
              <ProductCheckout />
            </Row>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default Checkout;
