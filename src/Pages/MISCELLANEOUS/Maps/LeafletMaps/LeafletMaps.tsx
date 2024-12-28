import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { LeafletMap, Maps } from "../../../../utils/Constant";
import WorldMap from "./WorldMap";
import USAMap from "./USAMap";
import IndiaMap from "./IndiaMap";
import AustraliaMap from "./AustraliaMap";

const LeafletMaps = () => {
  return (
    <>
      <Breadcrumbs mainTitle={LeafletMap} parent={Maps} title={LeafletMap} />
      <Container fluid>
        <Row>
          <WorldMap />
          <USAMap />
          <IndiaMap />
          <AustraliaMap />
        </Row>
      </Container>
    </>
  );
};

export default LeafletMaps;
