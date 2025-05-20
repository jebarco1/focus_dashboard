import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Ecommerce, PaymentDetailsHeading } from "../../../../utils/Constant";
import CreditCard from "./CreditCard";
import DebitCardCol from "./DebitCardCol";
import CodForm from "./CodForm";
import EMIForm from "./EMIForm";
import NetBanking from "./NetBanking";

const PaymentDetails = () => {
  return (
    <>
      <Breadcrumbs mainTitle={PaymentDetailsHeading} parent={Ecommerce} title={PaymentDetailsHeading} />
      <Container fluid className="credit-card">
        <Row>
          <CreditCard />
          <DebitCardCol />
          <CodForm />
          <EMIForm />
          <NetBanking />
        </Row>
      </Container>
    </>
  );
};

export default PaymentDetails;
