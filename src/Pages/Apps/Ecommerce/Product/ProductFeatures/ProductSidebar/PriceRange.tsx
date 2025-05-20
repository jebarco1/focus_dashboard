import { PRODUCT_SLIDE_1, PRODUCT_SLIDE_2 } from '../../../../../../Data/Apps/Ecommerce/ProductData';
import Slider from "react-slick";
import CommonProductSlide from '../Common/CommonProductSlide';
const PriceRange = () => {
    const settings = {
        slidesToShow: 1,
        swipeToSlide: false,
        arrows: true,
        dots: false,
    };
  return (
    <div className="product-filter pb-0 new-products">
      <div className="owl-carousel owl-theme" id="testimonial">
        <Slider {...settings}>
          <div className="item">
            {PRODUCT_SLIDE_1.map((item, index) => (
              <CommonProductSlide data={item} key={index} />
            ))}
          </div>
          <div className="item">
            {PRODUCT_SLIDE_2.map((item, index) => (
              <CommonProductSlide data={item} key={index} />
            ))}
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default PriceRange