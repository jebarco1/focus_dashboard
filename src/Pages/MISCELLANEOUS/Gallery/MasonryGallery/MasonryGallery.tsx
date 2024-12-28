import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Gallery, MasonryGallerys } from "../../../../utils/Constant";
import CommonHeader from "../../../../Common/CommonHeader";
import Masonry from 'react-masonry-css';
import { masonryImageData } from "../../../../Data/Gallary/GallaryGridData";
import { Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";

const MasonryGallery = () => {
    const styles = { width: '100%' };
    const breakpointColumnsObj = {
        default: 4,
        1199: 3,
        700: 2,
        500: 1
      };
  return (
    <>
      <Breadcrumbs mainTitle={MasonryGallerys} parent={Gallery} title={MasonryGallerys}/>
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Card>
              <CommonHeader title={MasonryGallerys} headClass="pb-0"/>
              <CardBody className="photoswipe-pb-responsive">
                <Row className="my-gallery  grid gallery">
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-gallery row grid gallery"
                    columnClassName="col-md-3 col-sm-6 grid-item"
                  >
                    {masonryImageData.map((element, index) => (
                      <figure key={index}>
                        <Image
                          height={500}
                          width={500}
                          src={dynamicImage(element.src)}
                          style={styles}
                          alt="image"
                        />
                      </figure>
                    ))}
                  </Masonry>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MasonryGallery;
