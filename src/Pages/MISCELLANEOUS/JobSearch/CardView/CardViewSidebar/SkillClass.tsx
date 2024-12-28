import { Button, Card, Col, Collapse } from "reactstrap";
import HeaderWithIcon from "../../../../../CommonElements/HeaderWithIcon";
import { useState } from "react";
import { AllSkills, SpecificSkills } from "../../../../../utils/Constant";
import SkillCheckBox from "./SkillCheckBox";

const SkillClass = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Col xl={12}>
      <Card>
        <HeaderWithIcon
          Heading={SpecificSkills}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <Collapse isOpen={isOpen}>
          <SkillCheckBox />
          <Button
            className="btn-block text-center"
            color="primary"
          >
            {AllSkills}
          </Button>
        </Collapse>
      </Card>
    </Col>
  );
};

export default SkillClass;
