import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { CustomCheckBoxHeading } from "../../../../../utils/Constant";
import BorderedCheckBox from "./BorderedCheckBox/BorderedCheckBox";
import IconCheckBox from "./IconCheckBox/IconCheckBox";
import FilledCheckBox from "./FilledCheckBox/FilledCheckBox";

const CustomCheckBox = () => {
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
      text: "for checkbox. And filled checkbox used",
      code: ".checkbox-solid-*",
    },
    { text: "and bordered checkbox used", code: ".checkbox-*." },
  ];
  return (
    <Col xs={12}>
      <Card>
        <CommonHeader title={CustomCheckBoxHeading} subTitle={subTitle} headClass="pb-0" />
        <CardBody>
          <Row className="g-3">
            <BorderedCheckBox />
            <IconCheckBox />
            <FilledCheckBox />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomCheckBox;
