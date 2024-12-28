import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import CommonCardFooter from "../../../../../CommonElements/Footer/CommonCardFooter";
import { VariationOfAddonsHeading } from "../../../../../utils/Constant";
import VariationOfAddonsForms from "./VariationOfAddonsForms";

const VariationOfAddons = () => {
  const subTitle = [
    {
      text: "Place one add-on or button on either side of an input. You may also place one on both sides of an input. Remember to place",
      code: `<label>`,
    },
    {
      text: "s outside the input group.",
    },
  ];
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader
          title={VariationOfAddonsHeading}
          subTitle={subTitle}
          headClass="pb-0"
        />
        <CardBody className="card-wrapper input-radius">
          <Row>
            <Col>
              <VariationOfAddonsForms />
            </Col>
          </Row>
        </CardBody>
        <CommonCardFooter />
      </Card>
    </Col>
  );
};

export default VariationOfAddons;
