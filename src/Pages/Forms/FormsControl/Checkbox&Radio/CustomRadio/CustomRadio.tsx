import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { CustomRadioBoxHeading } from "../../../../../utils/Constant";
import BorderedRadio from "./BorderedRadio";
import IconRadioBox from "./IconRadioBox";
import FilledRadio from "./FilledRadio";

const CustomRadio = () => {
  const subTitle = [
    {
      code: `.form-check-input  `,
      text: `Use the`,
    },
    {
      text: `and`,
      code: `.form-check-label `,
    },
    {
      text: "for radios.",
    },
  ];
  return (
    <Col xs={12}>
      <Card>
        <CommonHeader title={CustomRadioBoxHeading} subTitle={subTitle} headClass="pb-0" />
        <CardBody>
          <Row className="g-3">
            <BorderedRadio />
            <IconRadioBox />
            <FilledRadio />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomRadio;
