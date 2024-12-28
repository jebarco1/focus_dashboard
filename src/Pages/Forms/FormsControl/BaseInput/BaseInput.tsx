import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { BaseInputs, FormsControls } from "../../../../utils/Constant";
import BasicForm from "./BasicForm/BasicForm";
import FloatingForm from "./FloatingForm/FloatingForm";
import SelectSizing from "./SelectSizing/SelectSizing";
import FormControlSizing from "./FormControlSizing/FormControlSizing";
import FileInput from "./FileInput/FileInput";
import FlatInputStyle from "./FlatInputStyle/FlatInputStyle";
import BasicHTMLInputControl from "./BasicHTMLInputControl/BasicHTMLInputControl";
import BasicFloatingInputControl from "./BasicFloatingInputControl/BasicFloatingInputControl";
import EdgesInputStyle from "./EdgesInputStyle/EdgesInputStyle";
import RaiseInputStyle from "./RaiseInputStyle/RaiseInputStyle";

const BaseInput = () => {
  return (
    <>
      <Breadcrumbs mainTitle={BaseInputs} parent={FormsControls} title={BaseInputs}/>
      <Container fluid={true}>
        <Row>
          <BasicForm />
          <FloatingForm />
          <SelectSizing />
          <FormControlSizing />
          <FileInput />
          <FlatInputStyle />
          <BasicHTMLInputControl />
          <BasicFloatingInputControl />
          <EdgesInputStyle />
          <RaiseInputStyle />
        </Row>
      </Container>
    </>
  );
};

export default BaseInput;
