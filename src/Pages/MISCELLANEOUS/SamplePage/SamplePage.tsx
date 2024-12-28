import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Pages, SampleCard, SamplePages } from '../../../utils/Constant'
import { H3, P } from '../../../AbstractElements'

const SamplePage = () => {
  return (
    <>
        <Breadcrumbs mainTitle={SamplePages} parent={Pages} title={SamplePages} />
        <Container fluid>
            <Row>
              <Col sm="12">
                <Card>
                  <CardHeader className="pb-0">
                    <H3>{SampleCard}</H3>
                    <span>{'lorem ipsum dolor sit amet, consectetur adipisicing elit'}</span>
                  </CardHeader>
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

export default SamplePage