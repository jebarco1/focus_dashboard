import { Card, CardBody, Col, Row } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { imageHoverData } from '../../../../Data/Gallary/GallaryGridData'
import { Gallery, HoverEffect, ImageHoverEffect } from '../../../../utils/Constant'
import CommonHeader from '../../../../Common/CommonHeader'
import HoverImages from './HoverImages'

const ImageHoverEffects = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ImageHoverEffect} parent={Gallery} title={ImageHoverEffect} />
      {imageHoverData.map((data, index) => (
        <Row key={index}>
          <Col sm={12}>
            <Card>
              <CommonHeader title={`${HoverEffect} ${data}`} headClass='pb-0' />
              <CardBody>
                <Row className="my-gallery gallery">
                  <HoverImages data={data}/>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      ))}
    </>
  )
}

export default ImageHoverEffects