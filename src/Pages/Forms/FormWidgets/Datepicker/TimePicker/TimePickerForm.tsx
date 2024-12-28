import { Form } from "reactstrap";
import OnlyTimePicker from "./OnlyTimePicker";
import TimePicker24Hours from "./TimePicker24Hours";
import TimePickerLimits from "./TimePickerLimits";
import PreloadingTime from "./PreloadingTime";
import TimePickerWithLimitedTime from "./TimePickerWithLimitedTime";
import TimePickerMinMaxRange from "./TimePickerMinMaxRange";
import DateWithTime from "./DateWithTime";

const TimePickerForm = () => {
  return (
    <Form className="timepicker-wrapper">
        <OnlyTimePicker />
        <TimePicker24Hours />
        <TimePickerLimits />
        <PreloadingTime />
        <TimePickerWithLimitedTime />
        <TimePickerMinMaxRange />
        <DateWithTime />
    </Form>
  );
};

export default TimePickerForm;
