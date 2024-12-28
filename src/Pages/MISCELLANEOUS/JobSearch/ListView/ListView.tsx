import { Button, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { JobFilterData, JobListHeading, JobSearch } from "../../../../utils/Constant";
import CardViewSidebar from "../CardView/CardViewSidebar/CardViewSidebar";
import CardsPagination from "../CardView/CardsPagination/CardsPagination";
import ListViewCard from "./ListViewCard/ListViewCard";
import { useState } from "react";

const ListView = () => {
  const [filterToggle, setFilterToggle] = useState(false);
  const toggle = () => setFilterToggle(!filterToggle);
  return (
    <>
      <Breadcrumbs mainTitle={JobListHeading} parent={JobSearch} title={JobListHeading}/>
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
            <Row>
              <ListViewCard />
              <CardsPagination />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ListView;
