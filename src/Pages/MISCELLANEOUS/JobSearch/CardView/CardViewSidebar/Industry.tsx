import { Button, Card, Col, Collapse } from "reactstrap";
import HeaderWithIcon from "../../../../../CommonElements/HeaderWithIcon";
import { useState } from "react";
import { AllIndustries, IndustryHeading } from "../../../../../utils/Constant";
import IndustryCheckBox from "./IndustryCheckBox";

const Industry = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Col xl={12}>
      <Card>
        <HeaderWithIcon
          Heading={IndustryHeading}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <Collapse isOpen={isOpen}>
          <IndustryCheckBox />
          <Button
            className="btn-block  text-center"
            color="primary"
          >
            {AllIndustries}
          </Button>
        </Collapse>
      </Card>
    </Col>
  );
};

export default Industry;
