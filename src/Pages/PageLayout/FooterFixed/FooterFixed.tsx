import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { FixedFooter, PageLayout, SampleCard } from '../../../utils/Constant'
import CommonHeader from '../../../Common/CommonHeader'
import { P } from '../../../AbstractElements'

const FooterFixed = () => {
  return (
    <>
      <Breadcrumbs mainTitle={FixedFooter} parent={PageLayout} title={FixedFooter} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonHeader title={SampleCard} subTitle={[{text:"lorem ipsum dolor sit amet, consectetur adipisicing elit"}]} />
              <CardBody>
                <P>"{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}"</P>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FooterFixed