import { Col, Row } from 'reactstrap'
import { H3 } from '../../../../AbstractElements'
import { FeaturedTutorials } from '../../../../utils/Constant'
import FeaturesTutorial from './FeaturesTutorial'

const FAQFeaturesTutorial = () => {
  return (
    <Col lg={12} className="featured-tutorial">
      <div className="header-faq">
        <H3 className="mb-0">{FeaturedTutorials}</H3>
      </div>
      <Row>
        <FeaturesTutorial />
      </Row>
    </Col>
  )
}

export default FAQFeaturesTutorial