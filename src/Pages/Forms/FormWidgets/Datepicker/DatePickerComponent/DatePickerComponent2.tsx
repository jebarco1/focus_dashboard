import { Col, InputGroup, Label, Row } from "reactstrap";
import { DefaultDate } from "../../../../../utils/Constant";
import ReactDatePicker from "react-datepicker";
import { useState } from "react";

const DatePickerComponent2 = () => {
    const [startDate, setStartDate] = useState(new Date());
    const handleChange = (date: Date) => {
        setStartDate(date);
    };
  return (
    <Row>
      <Col xxl="3">
        <Label className="box-col-12 text-start">{DefaultDate}</Label>
      </Col>
      <Col xxl={9} className="box-col-12">
        <InputGroup className="flatpicker-calender">
          <ReactDatePicker
            className="form-control flatpickr-input"
            selected={startDate}
            onChange={handleChange}
            dateFormat="dd-mm-yyyy"
          />
        </InputGroup>
      </Col>
    </Row>
  );
};

export default DatePickerComponent2;
