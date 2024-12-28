import { Button, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { JobDetailHeading, JobFilterData, JobSearch } from "../../../../utils/Constant";
import CardViewSidebar from "../CardView/CardViewSidebar/CardViewSidebar";
import JobDetailDescription from "./JobDetailDescription";
import { useState } from "react";

const JobDetails = () => {
  const [filterToggle, setFilterToggle] = useState(false);
  const toggle = () => setFilterToggle(!filterToggle);
  return (
    <>
      <Breadcrumbs mainTitle={JobDetailHeading} parent={JobSearch} title={JobDetailHeading}/>
      <Container fluid>
        <Row>
          <Col xxl={3} xl={4} className="box-col-4e">
            <div className="md-sidebar">
              <Button color="primary" className="email-aside-toggle md-sidebar-toggle" onClick={toggle}>{JobFilterData}</Button>
              <div className={`md-sidebar-aside job-sidebar ${filterToggle ? "open" : ""}`}>
                <div className="default-according style-1 faq-accordion job-accordion">
                  <CardViewSidebar />
                </div>
              </div>
            </div>
          </Col>
          <Col xxl={9} xl={8} className="box-col-8">
            <JobDetailDescription />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default JobDetails;
