import { Card, CardBody, Col, Input } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { SelectSizingHeading } from "../../../../../utils/Constant";

const SelectSizing = () => {
  const subTitle = [
    {
      code: ".form-select",
    },
    {
      code: `[form-select-lg/form-select-sm].`,
      text: `to trigger the custom styles. You may also choose from small and large custom selects to match our similarly sized text inputs. class:-`,
    },
  ];
  return (
    <Col md={6}>
      <Card>
        <CommonHeader title={SelectSizingHeading} subTitle={subTitle} headClass="pb-0" />
        <CardBody>
          <Input id="exampleSelect" name="select" type="select" className="form-select form-select-sm" defaultValue={"What's Your Hobbies"}>
            <option>{"What's Your Hobbies"}</option>
            <option>{"Kho-Kho"}</option>
            <option>{"Reading Books"}</option>
            <option>{"Creativity"}</option>
          </Input>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SelectSizing;
