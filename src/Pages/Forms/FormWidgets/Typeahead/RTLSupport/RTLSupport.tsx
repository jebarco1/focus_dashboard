import { Card, CardBody, Col, Form } from 'reactstrap'
import CommonHeader from '../../../../../Common/CommonHeader'
import { Typeahead } from 'react-bootstrap-typeahead'
import { RTLSupports } from '../../../../../utils/Constant'
import { countryList, rtlSupport } from '../../../../../Data/Forms/FormWidgets/TypeaheadData'

const RTLSupport = () => {
  return (
    <Col sm={12} md={6}>
      <Card>
        <CommonHeader title={RTLSupports} subTitle={rtlSupport} headClass='pb-0'/>
        <CardBody>
          <div id="scrollable-dropdown-menu">
            <Form className="theme-form">
              <div>
                <Typeahead align="right" options={countryList} placeholder="Countries" id='1'/>
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default RTLSupport