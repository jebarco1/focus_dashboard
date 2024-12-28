import { Col, InputGroup, Label, Row } from "reactstrap";
import { Range } from "../../../../../utils/Constant";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { useState } from "react";

const DateRange = () => {
  const [value, setValue] = useState<DateObject[]>([new DateObject()]);
  return (
    <Row>
      <Col xxl="3">
        <Label className="box-col-12 text-start">{Range}</Label>
      </Col>
      <Col xxl={9} className="box-col-12">
        <InputGroup className="flatpicker-calender">
          <DatePicker
            inputClass="form-control"
            range
            value={value}
            onChange={(dates) => setValue(dates as DateObject[])}
          />
        </InputGroup>
      </Col>
    </Row>
  );
};

export default DateRange;
