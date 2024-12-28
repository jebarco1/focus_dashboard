import { Badge, Card, Col, Collapse } from "reactstrap";
import HeaderWithIcon from "../../../../../CommonElements/HeaderWithIcon";
import { Categories, Design, Href } from "../../../../../utils/Constant";
import { useState } from "react";
import { designCategoriesData } from "../../../../../Data/Learning/LearningData";
import { LI, UL } from "../../../../../AbstractElements";
import { Link } from "react-router-dom";
import DevelopmentCategories from "./DevelopmentCategories";

const CategoriesCheckBoxes = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Col xl={12}>
      <Card>
        <HeaderWithIcon
          Heading={Categories}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <Collapse isOpen={isOpen}>
          <div className="categories">
            <div className="learning-header">
              <span className="f-w-600">{Design}</span>
            </div>
            <UL className="simple-list">
              {designCategoriesData.map((data, index) => (
                <LI key={index}>
                  <Link to={Href}>{data.learningHeading}</Link>
                  <Badge color="primary" className="pull-right">
                    {data.badgeNumber}
                  </Badge>
                </LI>
              ))}
            </UL>
          </div>
          <DevelopmentCategories />
        </Collapse>
      </Card>
    </Col>
  );
};

export default CategoriesCheckBoxes;
