import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import { Href, LatestUpdates, SeeAll } from '../../../../utils/Constant'
import { H3, P } from '../../../../AbstractElements'
import { latestData } from '../../../../Data/FAQ/FAQData'
import { Link } from 'react-router-dom'

const LatestUpdate = () => {
  return (
    <Col lg={12}>
      <Card>
        <CardHeader className="faq-header pb-0">
          <H3 className="d-inline-block m-0">{LatestUpdates}</H3>
          <span className="pull-right d-inline-block">{SeeAll}</span>
        </CardHeader>
        <CardBody className="faq-body">
          {latestData.map((item, i) => (
            <div className="d-flex updates-faq-main" key={i}>
              <div className="updates-faq">{item.iconClass}</div>
              <div className="flex-grow-1 updates-bottom-time">
                <P>{item.name} <Link to={Href}>{item.val}</Link> {item.title}</P>
                <P>{item.time}</P>
              </div>
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  )
}

export default LatestUpdate