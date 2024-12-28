import { Card, CardBody, Col, Form } from 'reactstrap'
import CommonHeader from '../../../../../Common/CommonHeader'
import { BloodHoundHeading } from '../../../../../utils/Constant'
import { Typeahead } from 'react-bootstrap-typeahead'
import { basicTypeAheadData, statesOfUSA } from '../../../../../Data/Forms/FormWidgets/TypeaheadData'

const BloodHound = () => {
  return (
    <Col sm={12} md={6}>
      <Card>
        <CommonHeader title={BloodHoundHeading} subTitle={basicTypeAheadData} headClass='pb-0' />
        <CardBody>
          <div id="bloodhound">
            <Form className="theme-form">
              <div>
                <Typeahead caseSensitive options={statesOfUSA} placeholder="States of USA" id='1'/>
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default BloodHound