import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { FormLayouts, TwoFactors } from "../../../../utils/Constant";
import TwoFactorAuthentication from "./TwoFactorAuthentication/TwoFactorAuthentication";
import EmailVerification from "./EmailVerification/EmailVerification";

const TwoFactor = () => {
  return (
    <>
      <Breadcrumbs
        mainTitle={TwoFactors}
        parent={FormLayouts}
        title={TwoFactors}
      />
      <Container fluid>
        <Row>
          <TwoFactorAuthentication />
          <EmailVerification/>
        </Row>
      </Container>
    </>
  );
};

export default TwoFactor;
