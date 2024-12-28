import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import {
  FormWidgetsHeading,
  TypeAheadHeading,
} from "../../../../utils/Constant";
import BasicTypeAhead from "./BasicTypeAhead/BasicTypeAhead";
import PreFetch from "./PreFetch/PreFetch";
import BloodHound from "./BloodHound/BloodHound";
import RemoteTypeAhead from "./RemoteTypeAhead/RemoteTypeAhead";
import CustomTemplates from "./CustomTemplates/CustomTemplates";
import MultipleSectionsWithHeaders from "./MultipleSectionsWithHeaders/MultipleSectionsWithHeaders";
import ScrollableDropdownMenu from "./ScrollableDropdownMenu/ScrollableDropdownMenu";
import RTLSupport from "./RTLSupport/RTLSupport";

const Typeahead = () => {
  return (
    <>
      <Breadcrumbs
        mainTitle={TypeAheadHeading}
        parent={FormWidgetsHeading}
        title={TypeAheadHeading}
      />
      <Container fluid>
        <div className="typeahead typeahead-wrapper">
          <Row>
            <BasicTypeAhead />
            <PreFetch />
            <BloodHound />
            <RemoteTypeAhead />
            <CustomTemplates />
            <MultipleSectionsWithHeaders />
            <ScrollableDropdownMenu />
            <RTLSupport />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Typeahead;
