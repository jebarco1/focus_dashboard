import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { FormsControls, InputGroupsHeading } from "../../../../utils/Constant";
import ButtonAddons from "./ButtonAddons/ButtonAddons";
import CustomForms from "./CustomForms/CustomForms";
import CustomFileInput from "./CustomFileInput/CustomFileInput";
import ButtonsWithDropDowns from "./ButtonsWithDropDowns/ButtonsWithDropDowns";
import SegmentedButtons from "./SegmentedButtons/SegmentedButtons";
import CheckBoxesAndRadios from "./CheckBoxesAndRadios/CheckBoxesAndRadios";
import Sizing from "./Sizing/Sizing";
import MultipleInputs from "./MultipleInputs/MultipleInputs";
import BasicInputGroups from "./BasicInputGroups/BasicInputGroups";
import VariationOfAddons from "./VariationOfAddons/VariationOfAddons";

const InputGroups = () => {
  return (
    <>
      <Breadcrumbs
        mainTitle={InputGroupsHeading}
        parent={FormsControls}
        title={InputGroupsHeading}
      />
      <Container fluid>
        <Row>
          <ButtonAddons />
          <CustomForms />
          <CustomFileInput />
          <ButtonsWithDropDowns />
          <SegmentedButtons />
          <CheckBoxesAndRadios />
          <Sizing />
          <MultipleInputs />
          <BasicInputGroups />
          <VariationOfAddons />
        </Row>
      </Container>
    </>
  );
};

export default InputGroups;
