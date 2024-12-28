import { Form } from "reactstrap";
import DatePickerComponent2 from "./DatePickerComponent2";
import HumanFriendlyDatePicker from "./HumanFriendlyDatePicker";
import MinMaxValueDatePicker from "./MinMaxValueDatePicker";
import DisabledDatePickerComponent from "./DisabledDatePickerComponent";
import MultiplesDates from "./MultiplesDates";
import DateRange from "./DateRange";
import PreloadingDates from "./PreloadingDates";
import CustomizingConjunction from "./CustomizingConjunction";

const DatePickerBody = () => {
  return (
    <Form className="timepicker-wrapper">
      <DatePickerComponent2 />
      <HumanFriendlyDatePicker />
      <MinMaxValueDatePicker />
      <DisabledDatePickerComponent />
      <MultiplesDates />
      <CustomizingConjunction />
      <DateRange />
      <PreloadingDates />
    </Form>
  );
};

export default DatePickerBody;
