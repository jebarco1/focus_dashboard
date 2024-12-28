import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import {
  FormWidgetsHeading,
  TouchSpinHeading,
} from "../../../../utils/Constant";
import DefaultTouchSpin from "./DefaultTouchSpin/DefaultTouchSpin";
import OutlinedTouchSpin from "./OutlinedTouchSpin/OutlinedTouchSpin";
import IconsWithPrefixAndPostFix from "./IconsWithPrefixAndPostFix/IconsWithPrefixAndPostFix";
import ButtonsWithPrefixAndPostFix from "./ButtonsWithPrefixAndPostFix/ButtonsWithPrefixAndPostFix";
import RoundedTouchSpin from "./RoundedTouchSpin/RoundedTouchSpin";

const Touchspin = () => {
  return (
    <>
      <Breadcrumbs
        mainTitle={TouchSpinHeading}
        parent={FormWidgetsHeading}
        title={TouchSpinHeading}
      />
      <Container fluid>
        <div className="bootstrap-touchspin">
          <Row>
            <DefaultTouchSpin />
            <OutlinedTouchSpin />
            <IconsWithPrefixAndPostFix />
            <ButtonsWithPrefixAndPostFix />
            <RoundedTouchSpin />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Touchspin;
