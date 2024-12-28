import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Gallery, GalleryGrids, IMAGEGALLERY } from "../../../../utils/Constant";
import CommonHeader from "../../../../Common/CommonHeader";
import GalleryImages from "./GalleryImages";

const GalleryGrid = () => {
  return (
    <>
      <Breadcrumbs
        mainTitle={GalleryGrids}
        parent={Gallery}
        title={GalleryGrids}
      />
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Card>
              <CommonHeader title={IMAGEGALLERY} />
              <CardBody className="gallery my-gallery">
                <Row>
                  <GalleryImages />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GalleryGrid;
