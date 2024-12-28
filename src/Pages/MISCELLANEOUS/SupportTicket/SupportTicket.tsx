import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { SupportTickets } from "../../../utils/Constant";
import CommonHeader from "../../../Common/CommonHeader";
import TicketList from "./TicketList";
import TicketTable from "./TicketTable";

const SupportTicket = () => {
  return (
    <>
      <Breadcrumbs
        mainTitle={SupportTickets}
        parent={SupportTickets}
        title={SupportTickets}
      />
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Card>
              <CommonHeader
                title={SupportTickets}
                subTitle={[{text:"List of ticket opend by customers"}]}
              />
              <CardBody>
                <TicketList />
                <TicketTable />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SupportTicket;
