import { Button, Card, CardBody, Col, Row } from 'reactstrap'
import CommonHeader from '../../../../Common/CommonHeader'
import { Href, SimplePricingCards } from '../../../../utils/Constant'
import { simpleCardData } from '../../../../Data/Apps/Ecommerce/PricingData'
import { H1, H3 } from '../../../../AbstractElements'

const SimplePricingCard = () => {
  return (
    <Card >
        <CommonHeader title={SimplePricingCards} />
        <CardBody className='pricing-content'>
            <Row className="g-sm-4 g-3">
                {simpleCardData.map((data,index)=>(
                    <Col xl="3" sm="6" className="xl-50 box-col-6" key={index}>
                        <Card className="text-center pricing-simple">
                            <CardBody>
                                <H3>{data.header}</H3>
                                <H1>{data.amount}</H1>
                                <H3 className="mb-0">{data.title}</H3>
                            </CardBody>
                            <Button color="primary" size="lg" block href={Href}>{data.btnname}</Button>
                        </Card>
                    </Col>
                ))}
            </Row>
        </CardBody>
    </Card>
  )
}

export default SimplePricingCard