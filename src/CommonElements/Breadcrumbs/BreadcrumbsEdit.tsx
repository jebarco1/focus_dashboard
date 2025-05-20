import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Col,
  Row,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import SVG from "../../utils/CommonSvgIcon/SVG";
import H3 from "../Headings/H3Element";
import SelectLottery from "./SelectLottery";
import { useAppSelector } from "../../ReaduxToolkit/Hooks";

export interface propsTypes {
  mainTitle: string;
  parent: string;
  title: string;
}

const Breadcrumbs = ({ mainTitle, parent, title }: propsTypes) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 720);

  const selectedLotteryRaw = useAppSelector((state) => state.lotterySelect.value);
  const lotterySelect =
    selectedLotteryRaw === "mega" ? "Mega Millions" : selectedLotteryRaw || "Select Lottery";

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 720);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Col xs="12">
      <div className="page-title">
        <Row className="align-items-center">
          <Col sm="6" className="ps-0">
            <H3>
              {mainTitle}
            </H3>
          </Col>

          <Col sm="6" className="pe-0 d-flex justify-content-end align-items-center">
          <Breadcrumb className="breadcrumb-desktop">
            <BreadcrumbItem>
              <Link to={`${process.env.PUBLIC_URL}/dashboards/shoppingplace`}>
                <SVG iconId="stroke-home" className="stroke-icon" />
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem className="active">{title}</BreadcrumbItem>
          </Breadcrumb>

          

            <Button
              color="warning"
              className="lottery-button ms-3"
              onClick={() => setIsModalOpen(true)}
            >
              {lotterySelect}
            </Button>
          </Col>
        </Row>
      </div>

      <div className="mobile-Breadcrumb"> 
        <div className="container">
          <span className="mobile-breadcrumb-title">Select Lottery:</span>
          <Button
            color="warning"
            className="lottery-button mobile-lottery-button"
            onClick={() => setIsModalOpen(true)}
          >
            {lotterySelect}
          </Button>
        </div>
      </div>


      {/* Modal */}
      <Modal isOpen={isModalOpen} toggle={() => setIsModalOpen(!isModalOpen)} className="lottery-modal">
        <ModalHeader toggle={() => setIsModalOpen(false)}>Select Lottery</ModalHeader>
        <ModalBody>
          <SelectLottery />
        </ModalBody>
      </Modal>
    </Col>
  );
};

export default Breadcrumbs;
