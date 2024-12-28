import { Button, Card, CardBody, Col, Collapse } from "reactstrap";
import HeaderWithIcon from "../../../../../CommonElements/HeaderWithIcon";
import { AllLocations, LocationHeading } from "../../../../../utils/Constant";
import { useState } from "react";
import LocationCheckBox from "./LocationCheckBox";

const Location = () => {
    const [isOpen, setIsOpen] = useState(true);
  return (
    <Col xl={12}>
      <Card>
        <HeaderWithIcon
          Heading={LocationHeading}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <Collapse isOpen={isOpen}>
          <CardBody className="animate-chk">
            <LocationCheckBox />
          </CardBody>
          <Button
            className="btn-block text-center"
            color="primary"
          >
            {AllLocations}
          </Button>
        </Collapse>
      </Card>
    </Col>
  );
};

export default Location;
