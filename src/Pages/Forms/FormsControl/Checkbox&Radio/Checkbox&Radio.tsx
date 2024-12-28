import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import {FormsControls, RadioCheckBoxHeading} from "../../../../utils/Constant";
import DefaultCheckBox from "./DefaultCheckBox/DefaultCheckBox";
import CustomCheckBox from "./CustomCheckBox/CustomCheckBox";
import DefaultRadio from "./DefaultRadio/DefaultRadio";
import ImagesWithCheckBox from "./ImagesWithCheckBox/ImagesWithCheckBox";
import ImagesWithRadio from "./ImagesWithRadio/ImagesWithRadio";
import CustomRadio from "./CustomRadio/CustomRadio";
import DefaultSwitches from "./DefaultSwitches/DefaultSwitches";
import InlineInputTypes from "./InlineInputTypes/InlineInputTypes";
import AnimatedButtons from "./AnimatedButtons/AnimatedButtons";
import BasicRadioAndCheckbox from "./BasicRadioAndCheckbox/BasicRadioAndCheckbox";
import RadioToggleButtons from "./RadioToggleButtons/RadioToggleButtons";
import OutlinedCheckBoxStyles from "./OutlinedCheckBoxStyles/OutlinedCheckBoxStyles";

const CheckboxRadio = () => {
  return (
    <>
      <Breadcrumbs mainTitle={RadioCheckBoxHeading} parent={FormsControls} title={RadioCheckBoxHeading}/>
      <Container fluid>
        <Row>
          <DefaultCheckBox />
          <CustomCheckBox />
          <DefaultRadio />
          <ImagesWithCheckBox />
          <ImagesWithRadio />
          <CustomRadio />
          <DefaultSwitches />
          <InlineInputTypes />
          <AnimatedButtons />
          <BasicRadioAndCheckbox />
          <RadioToggleButtons />
          <OutlinedCheckBoxStyles />
        </Row>
      </Container>
    </>
  );
};

export default CheckboxRadio;
