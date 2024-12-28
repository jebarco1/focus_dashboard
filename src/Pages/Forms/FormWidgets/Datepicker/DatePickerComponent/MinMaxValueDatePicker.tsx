import { Col, InputGroup, Label, Row } from "reactstrap";
import { MinMaxValue } from "../../../../../utils/Constant";
import ReactDatePicker from "react-datepicker";
import { useState } from "react";

const MinMaxValueDatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <Row>
      <Col xxl="3">
        <Label className="box-col-12 text-start">{MinMaxValue}</Label>
      </Col>
      <Col xxl={9} className="box-col-12">
        <InputGroup className="flatpicker-calender">
          <ReactDatePicker
            className="form-control flatpickr-input"
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            minDate={new Date()}
            maxDate={new Date(new Date().setDate(new Date().getDate() + 5))}
            dateFormat="dd.mm.yyyy"
          />
        </InputGroup>
      </Col>
    </Row>
  );
};

export default MinMaxValueDatePicker;
