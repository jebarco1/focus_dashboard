import { useCallback, useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "../../../../../Common/CommonHeader";
import { ShippingFormHeading } from "../../../../../utils/Constant";
import { shippingFormHeadingData } from "../../../../../Data/Forms/FormsLayout/FormWizardData";
import NavComponent from "./NavComponent/NavComponent";
import ShippingFormTabContent from "./ShippingFormTabContent/ShippingFormTabContent";
import CurrentCart from "./CurrentCart/CurrentCart";

const ShippingForm = () => {
  const [activeTab, setActiveTab] = useState<number | undefined>(1);
  const callback = useCallback((tab: number | undefined) => {
    setActiveTab(tab);
  }, []);
  return (
    <Col md={12}>
      <Card>
        <CommonHeader title={ShippingFormHeading} subTitle={shippingFormHeadingData} headClass="pb-0"/>
        <CardBody>
          <Row className="shopping-wizard">
            <Col xs={12}>
              <Row className="shipping-form g-5">
                <Col xl={8} className="shipping-border">
                  <NavComponent callbackActive={callback} activeTab={activeTab}/>
                  <ShippingFormTabContent activeTab={activeTab} callbackActive={callback}/>
                </Col>
                <CurrentCart />
              </Row>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ShippingForm;
