import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { TimePickerHeading } from "../../../../../utils/Constant";
import TimePickerForm from "./TimePickerForm";

const TimePicker = () => {
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader title={TimePickerHeading} headClass="pb-0"/>
        <CardBody className="main-flatpickr">
          <div className="card-wrapper border rounded-3">
            <TimePickerForm />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TimePicker;
