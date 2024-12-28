import { Col, InputGroup, Label, Row } from "reactstrap";
import { TimePickerMinMaxRanges } from "../../../../../utils/Constant";
import ReactDatePicker from "react-datepicker";
import { useState } from "react";

const TimePickerMinMaxRange = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
  return (
    <Row>
      <Col xxl="3">
        <Label className="box-col-12 text-start">
          {TimePickerMinMaxRanges}
        </Label>
      </Col>
      <Col xxl={9} className="box-col-12">
        <InputGroup className="flatpicker-calender">
          <ReactDatePicker
            className="form-control"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat="yyyy-MM-dd h:mm aa"
          />
        </InputGroup>
      </Col>
    </Row>
  );
};

export default TimePickerMinMaxRange;
