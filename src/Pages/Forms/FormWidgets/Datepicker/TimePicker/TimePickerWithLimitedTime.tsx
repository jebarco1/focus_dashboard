import { Col, InputGroup, Label, Row } from "reactstrap";
import { TimePickerRange } from "../../../../../utils/Constant";
import ReactDatePicker from "react-datepicker";
import { useState } from "react";

const TimePickerWithLimitedTime = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
  return (
    <Row>
      <Label className="col-xxl-3 box-col-12 text-start">
        {TimePickerRange}
      </Label>
      <Col xxl={9} className="box-col-12">
        <InputGroup>
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

export default TimePickerWithLimitedTime;
