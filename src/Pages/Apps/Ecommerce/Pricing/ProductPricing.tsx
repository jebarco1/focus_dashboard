import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { BeComeMember, Ecommerce, Pricing } from '../../../../utils/Constant'
import CommonHeader from '../../../../Common/CommonHeader'
import MemberPricing from './MemberPricing'
import SimplePricingCard from './SimplePricingCard'

const ProductPricing = () => {
  return (
    <>
      <Breadcrumbs parent={Ecommerce} title={Pricing} mainTitle={Pricing} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonHeader title={BeComeMember} />
              <CardBody className='pricing-content'>
                <Row className='pricing-col'>
                  <MemberPricing />
                </Row>
              </CardBody>
            </Card>
            <SimplePricingCard />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ProductPricing