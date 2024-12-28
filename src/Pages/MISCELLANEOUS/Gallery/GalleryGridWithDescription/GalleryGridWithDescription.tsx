import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Gallery, GalleryGridWithDescriptions, IMAGEGALLERYWITHDESCRIPTION } from '../../../../utils/Constant'
import CommonHeader from '../../../../Common/CommonHeader'
import GalleryImageDescription from './GalleryImageDescription'

const GalleryGridWithDescription = () => {
  return (
    <>
        <Breadcrumbs mainTitle={GalleryGridWithDescriptions} parent={Gallery} title={GalleryGridWithDescriptions} />
        <Container fluid>
            <Row>
                <Col sm={12}>
                    <Card>
                        <CommonHeader title={IMAGEGALLERYWITHDESCRIPTION} headClass='pb-0'/>
                        <CardBody className="my-gallery gallery-with-description">
                            <Row>
                                <GalleryImageDescription />
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default GalleryGridWithDescription