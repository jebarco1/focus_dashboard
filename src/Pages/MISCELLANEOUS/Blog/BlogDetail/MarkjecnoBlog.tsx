import { Card, Col } from 'reactstrap'
import { Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import MarkjencoBlogDetails from './MarkjencoBlogDetails'

const MarkjecnoBlog = () => {
  return (
    <Col xxl={6} className="box-col-40 xl-40">
      <Card>
        <div className="blog-box blog-shadow">
          <Image className="img-fluid" src={dynamicImage("blog/blog.jpg")} alt="blog image"/>
          <MarkjencoBlogDetails />
        </div>
      </Card>
    </Col>
  )
}

export default MarkjecnoBlog