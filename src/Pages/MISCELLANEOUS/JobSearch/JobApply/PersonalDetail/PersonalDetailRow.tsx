import { Typeahead } from 'react-bootstrap-typeahead'
import { Col, FormGroup, Row } from 'reactstrap'
import { BirthDate } from '../../../../../utils/Constant'
import { daysData, Months, yearsData } from '../../../../../Data/JobSearch/CardViewData'

const PersonalDetailRow = () => {
  return (
    <Row>
      <Col sm={4}>
        <div className="col-form-label pt-0">{BirthDate}</div>
        <FormGroup>
          <Typeahead labelKey="name" multiple={false} id="Month" options={Months} placeholder="Choose a Month..."/>
        </FormGroup>
      </Col>
      <Col sm={4}>
        <div className="col-form-label m-2 d-sm-block d-none"></div>
        <FormGroup className="select-no-label">
          <Typeahead labelKey="name" multiple={false} options={daysData} id="date" placeholder="date"/>
        </FormGroup>
      </Col>
      <Col sm={4}>
        <div className="col-form-label m-2 d-sm-block d-none"></div>
        <FormGroup className="select-no-label">
          <Typeahead labelKey="name" multiple={false} options={yearsData} id="Year" placeholder="Year"/>
        </FormGroup>
      </Col>
    </Row>
  )
}

export default PersonalDetailRow