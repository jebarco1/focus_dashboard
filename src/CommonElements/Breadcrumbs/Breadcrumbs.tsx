import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Col, Row } from "reactstrap";
import SVG from "../../utils/CommonSvgIcon/SVG";
import H3 from "../Headings/H3Element";
export interface propsTypes {
  mainTitle: string;
  parent: string;
  title: string;
}
const Breadcrumbs = ({ mainTitle, parent, title }: propsTypes) => {
  return (
    <Col xs="12">
      <div className="page-title">
        <Row>
          <Col sm="6" className="ps-0">
            <H3>{mainTitle}</H3>
          </Col>
          <Col sm="6" className="pe-0">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to={`${process.env.PUBLIC_URL}/dashboards/shoppingplace`}>
                  <SVG iconId="stroke-home" className="stroke-icon" />
                </Link>
              </BreadcrumbItem>
              <BreadcrumbItem>{parent}</BreadcrumbItem>
              <BreadcrumbItem className="active">{title}</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default Breadcrumbs;
