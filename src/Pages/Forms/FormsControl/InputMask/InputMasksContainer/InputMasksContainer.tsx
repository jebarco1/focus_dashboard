import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { DefaultInputMask, InputMasks } from "../../../../../utils/Constant";
import DateFormat from "./DateFormat";
import TimeFormat from "./TimeFormat";
import DefaultInputMaskForm from "./DefaultInputMaskForm";
import { H6 } from "../../../../../AbstractElements";

const InputMasksContainer = () => {
  const subTitle = [
    {
      text: "Input mask used in form-validations,forms,card-details,and etc.",
    },
  ];
  return (
    <Col xs={12}>
      <Card>
        <CommonHeader title={InputMasks} subTitle={subTitle} headClass="pb-0"/>
        <CardBody>
          <Row className=" g-3">
            <DateFormat />
            <TimeFormat />
            <Col xs={12}>
              <div className="card-wrapper border rounded-3 light-card checkbox-checked">
                <H6 className="sub-title">{DefaultInputMask}</H6>
                <DefaultInputMaskForm />
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default InputMasksContainer;
