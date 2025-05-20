import { Carousel } from "react-responsive-carousel";
import { Card, CardBody } from "reactstrap";

const ImageSlider = () => {
  return (
    <Card>
      <CardBody>
        <Carousel className="owl-carousel owl-theme" showStatus={false} showIndicators={false} showArrows={false}>
          <div className="item">
            <img src="../assets/images/ecommerce/01.jpg" alt="" />
          </div>
          <div className="item">
            <img src="../assets/images/ecommerce/02.jpg" alt="" />
          </div>
          <div className="item">
            <img src="../assets/images/ecommerce/03.jpg" alt="" />
          </div>
          <div className="item">
            <img src="../assets/images/ecommerce/04.jpg" alt="" />
          </div>
          <div className="item">
            <img src="../assets/images/ecommerce/05.jpg" alt="" />
          </div>
          <div className="item">
            <img src="../assets/images/ecommerce/06.jpg" alt="" />
          </div>
          <div className="item">
            <img src="../assets/images/ecommerce/07.jpg" alt="" />
          </div>
          <div className="item">
            <img src="../assets/images/ecommerce/08.jpg" alt="" />
          </div>
        </Carousel>
      </CardBody>
    </Card>
  );
};

export default ImageSlider;
