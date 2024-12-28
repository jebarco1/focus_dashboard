import { Card, CardBody, Col, Progress, Row } from 'reactstrap'
import { ticketData } from '../../../Data/SupportTicket/SupportTicketData'
import { H3 } from '../../../AbstractElements'
import CountUp from 'react-countup';
import ProfitAndLoss from './ProfitAndLoss';

const TicketList = () => {
  return (
    <Row>
      {ticketData.map((item, index) => (
        <Col xl={4} md={6} key={index}>
          <Card className="ecommerce-widget">
            <CardBody className="support-ticket-font">
              <Row>
                <Col xs={5}>
                  <span>{item.title}</span>
                  <H3 className="total-num counter">
                    <CountUp end={item.num} className="text-dark" />
                  </H3>
                </Col>
                <ProfitAndLoss />
              </Row>
              <Progress className='sm-progress-bar mt-4' color={item.class} value={70}/>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default TicketList