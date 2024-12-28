import { Card, Col, Row } from 'reactstrap'
import { blogData } from '../../../../Data/Blog/BlogData'
import { H4, Image, LI, P, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'

const BlogWithDetails = () => {
  return (
    <Col xxl={6} className="box-col-60 xl-60">
      {blogData.map((data, index) => (
        <Card key={index}>
          <Row className="blog-box blog-list">
            <Col sm={5}>
              <Image className="img-fluid sm-100-w" src={dynamicImage(`blog/blog-${data.image}.jpg`)} alt="images"/>
            </Col>
            <Col sm={7}>
              <div className="blog-details">
                <div className="blog-date">
                  <span>{data.date}</span> January 2023
                </div>
                <H4>{'Encounter every day.'}</H4>
                <div className="blog-bottom-content">
                  <UL className="blog-social flex-row simple-list blog-sub-content">
                    <LI>{'By'} : {'Admin'}</LI>
                    <LI className="digits">{data.hits} : {'Hits'}</LI>
                  </UL>
                  <hr />
                  <P className="mt-0 f-w-500">{'A huge part of it is the incomparable beauty you can encounter every day.'}</P>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      ))}
    </Col>
  )
}

export default BlogWithDetails