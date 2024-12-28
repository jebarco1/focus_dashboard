import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { ImagesWithRadioBoxHeading } from "../../../../../utils/Constant";
import MainImageRadioBox from "./MainImageRadioBox";

const ImagesWithRadio = () => {
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
      text: "for image radio.",
    },
  ];
  return (
    <Col xs={12}>
      <Card>
        <CommonHeader title={ImagesWithRadioBoxHeading} subTitle={subTitle} headClass="pb-0"/>
        <CardBody>
          <div className="main-img-checkbox">
            <MainImageRadioBox />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ImagesWithRadio;
