import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Ecommerce, RecentOrders } from "../../../../utils/Constant";
import NewOrders from "./NewOrders";
import DatatableOrderHistory from "./DatatableOrderHistory";

const OrderHistory = () => {
  return (
    <>
      <Breadcrumbs mainTitle={RecentOrders} parent={Ecommerce} title={RecentOrders}/>
      <Container fluid>
        <Row>
          <NewOrders />
          <DatatableOrderHistory />
        </Row>
      </Container>
    </>
  );
};

export default OrderHistory;
