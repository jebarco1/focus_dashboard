import { Card, CardBody, Col, Form } from 'reactstrap'
import CommonHeader from '../../../../../Common/CommonHeader'
import { RemotetypeAheadHeading } from '../../../../../utils/Constant'
import { Typeahead } from 'react-bootstrap-typeahead'
import { movieList, remoteTypeHeadData } from '../../../../../Data/Forms/FormWidgets/TypeaheadData'

const RemoteTypeAhead = () => {
  return (
    <Col sm={12} md={6}>
      <Card>
        <CommonHeader title={RemotetypeAheadHeading} subTitle={remoteTypeHeadData} headClass='pb-0'/>
        <CardBody>
          <div id="remote">
            <Form className="theme-form">
              <div>
                <Typeahead options={movieList} placeholder="Choose Option" id='1'/>
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default RemoteTypeAhead