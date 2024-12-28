import { Card, CardBody, Col, Form } from 'reactstrap'
import CommonHeader from '../../../../../Common/CommonHeader'
import { CustomTemplate } from '../../../../../utils/Constant'
import { Typeahead } from 'react-bootstrap-typeahead'
import { customTemplateData, oscarWinnersMovieList } from '../../../../../Data/Forms/FormWidgets/TypeaheadData'

const CustomTemplates = () => {
  return (
    <Col sm={12} md={6}>
      <Card>
        <CommonHeader title={CustomTemplate} subTitle={customTemplateData} headClass='pb-0' />
        <CardBody>
          <div id="custom-templates">
            <Form className="theme-form">
              <div>
                <Typeahead
                  options={oscarWinnersMovieList}
                  placeholder="Oscar winners"
                  id='1'
                />
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CustomTemplates