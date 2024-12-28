import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { FormsControls, InputMasks } from "../../../../utils/Constant";
import InputMasksContainer from "./InputMasksContainer/InputMasksContainer";

const InputMask = () => {
  return (
    <>
      <Breadcrumbs
        mainTitle={InputMasks}
        parent={FormsControls}
        title={InputMasks}
      />
      <Container fluid>
        <Row>
          <InputMasksContainer />
        </Row>
      </Container>
    </>
  );
};

export default InputMask;
