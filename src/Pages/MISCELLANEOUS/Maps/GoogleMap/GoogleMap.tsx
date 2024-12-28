import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { GoogleMaps, Maps } from "../../../../utils/Constant";
import BasicMapComp from "./BasicMapComp";
import MarkerMapComp from "./MarkerMapComp";
import PolygonsComp from "./PolygonsComp";
import PolylinesMapComp from "./PolylinesMapComp";

const GoogleMap = () => {
  return (
    <>
      <Breadcrumbs mainTitle={GoogleMaps} parent={Maps} title={GoogleMaps} />
      <Container fluid>
        <Row>
          <BasicMapComp />
          <MarkerMapComp />
          <PolygonsComp />
          <PolylinesMapComp />
        </Row>
      </Container>
    </>
  );
};

export default GoogleMap;
