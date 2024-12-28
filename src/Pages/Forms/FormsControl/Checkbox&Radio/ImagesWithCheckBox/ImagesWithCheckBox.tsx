import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { ImagesWithCheckBoxHeading } from "../../../../../utils/Constant";
import MainImageCheckBox from "./MainImageCheckBox";

const ImagesWithCheckBox = () => {
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
      text: "for image checkbox.",
    },
  ];
  return (
    <Col xs={12}>
      <Card>
        <CommonHeader title={ImagesWithCheckBoxHeading} subTitle={subTitle} headClass="pb-0" />
        <CardBody>
          <div className="main-img-checkbox">
            <MainImageCheckBox />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ImagesWithCheckBox;
