import { Col, InputGroup, Label, Row } from "reactstrap";
import { PreloadingTimes } from "../../../../../utils/Constant";
import { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";

const PreloadingDates = () => {
  const [value, setValue] = useState<DateObject[]>([new DateObject()]);
  return (
    <Row>
      <Col xxl="3">
        <Label className="box-col-12 text-start">{PreloadingTimes}</Label>
      </Col>
      <Col xxl={9} className="box-col-12">
        <InputGroup className="flatpicker-calender">
        <DatePicker
            monthYearSeparator="::"
            inputClass="form-control"
            multiple
            value={value}
            onChange={(dates) => setValue(dates as DateObject[])}
          />
        </InputGroup>
      </Col>
    </Row>
  );
};

export default PreloadingDates;
