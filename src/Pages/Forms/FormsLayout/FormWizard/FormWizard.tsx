import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { FormLayouts, FormWizards } from "../../../../utils/Constant";
import NumberingWizard from "./NumberingWizard/NumberingWizard";
import StudentValidationForm from "./StudentValidationForm/StudentValidationForm";
import VerticalValidationWizard from "./VerticalValidationWizard/VerticalValidationWizard";
import ShippingForm from "./ShippingForm/ShippingForm";

const FormWizard = () => {
  return (
    <>
      <Breadcrumbs mainTitle={FormWizards} parent={FormLayouts} title={FormWizards}/>
      <Container fluid>
        <Row>
          <NumberingWizard />
          <StudentValidationForm />
          <VerticalValidationWizard />
          <ShippingForm />
        </Row>
      </Container>
    </>
  );
};

export default FormWizard;
