import { Col, Row } from 'reactstrap';
import { CommonProductSlideProp } from '../../../../../../Type/Apps/Ecommerce/ProductType';
import { Image, P } from '../../../../../../AbstractElements';
import { dynamicImage } from '../../../../../../Service';

const CommonProductSlide = ({ data }: CommonProductSlideProp) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <Row className={`product-box ${data.rowClass ? data.rowClass : ""}`}>
      <Col md="5" className="product-img">
        <Image className="img-fluid img-100" src={dynamicImage(`ecommerce/${data.image}`)} alt="" />
      </Col>
      <Col md="7" className="product-details text-start">
        <span>
          {stars.map((item, index) => (
            <i className="fa fa-star font-warning me-1" key={index}></i>
          ))}
        </span>
        <P className="mb-0">{data.title}</P>
        <div className="product-price">{data.text}</div>
      </Col>
    </Row>
  )
}

export default CommonProductSlide