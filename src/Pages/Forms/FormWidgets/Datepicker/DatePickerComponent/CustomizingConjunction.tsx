import { useState } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker'
import { Col, InputGroup, Label, Row } from 'reactstrap'
import { CustomizingConjunctions } from '../../../../../utils/Constant';

const CustomizingConjunction = () => {
  const [value, setValue] = useState<DateObject[]>([new DateObject()]);
  return (
    <Row>
      <Col xxl="3">
        <Label className="box-col-12 text-start">
          {CustomizingConjunctions}
        </Label>
      </Col>
      <Col xxl={9} className="box-col-12">
        <InputGroup className="flatpicker-calender">
          <DatePicker
            dateSeparator="::"
            inputClass="form-control"
            multiple
            value={value}
            onChange={(dates) => setValue(dates as DateObject[])}
            format="DD-MM-YYYY"
          />
        </InputGroup>
      </Col>
    </Row>
  )
}

export default CustomizingConjunction