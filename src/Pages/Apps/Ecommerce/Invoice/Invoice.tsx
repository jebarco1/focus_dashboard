import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/BreadcrumbsEdit";
import { Ecommerce, Invoices } from "../../../../utils/Constant";
import InvoiceHeader from "./InvoiceHeader";
import UserInvoice from "./UserInvoice";
import InvoiceBody from "./InvoiceBody";
import InvoiceFooter from "./InvocieFooter";
import { useRef } from "react";

const Invoice = () => {
  const componentRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Breadcrumbs mainTitle={Invoices} parent={Ecommerce} title={Invoices} />
      <Container>
        <div ref={componentRef}>
          <Row>
            <Col sm="12">
              <Card>
                <CardBody>
                  <div className="invoice">
                    <div>
                      <div>
                        <InvoiceHeader />
                      </div>
                      <hr />
                      <UserInvoice />
                      <InvoiceBody />
                      <InvoiceFooter componentRef={componentRef} />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Invoice;
