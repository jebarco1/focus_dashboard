import { Card, CardBody, CardFooter, Col } from 'reactstrap'
import { featuredData } from '../../../../Data/FAQ/FAQData'
import { H6, Image, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import ProductHover from './ProductHover'
import { Rating } from 'react-simple-star-rating'

const FeaturesTutorial = () => {
  return (
    <>
      {featuredData.map((item, id) => (
        <Col xl={3} sm={6} className="box-col-3" key={id}>
          <Card className="features-faq product-box">
            <div className="faq-image product-img">
              <div className="knowledgebase-image">
                <Image alt="feature" className="img-fluid" src={dynamicImage(item.img)}/>
              </div>
              <ProductHover />
            </div>
            <CardBody className='pb-0'>
              <H6>{item.title}</H6>
              <P>{item.short_description}</P>
            </CardBody>
            <CardFooter className="d-flex align-items-center justify-content-between">
              <span>{item.date}</span>
              <Rating fillColor="#35bfbf" initialValue={Math.random() * 5} size={14}/>
            </CardFooter>
          </Card>
        </Col>
      ))}
    </>
  )
}

export default FeaturesTutorial