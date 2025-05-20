import { Button } from "reactstrap";
import {
  SaleImproved,
  Trending,
  VKEnterprise,
  JailRoadSylhet,
} from "../../../../utils/Constant";
import SVG from "../../../../utils/CommonSvgIcon/SVG";
import { H3, H4 } from "../../../../AbstractElements";
import TopSellerImages from "./TopSellerImages";

const TopSellerBody = () => {
  return (
    <>
      <div className="seller-top">
        <Button color="transperant">{Trending}</Button>
        <H4>
          <SVG iconId="location" />
          {JailRoadSylhet}
        </H4>
      </div>
      <div className="user-details customers">
        <div>
          <H3>{VKEnterprise}</H3>
          <TopSellerImages />
        </div>
        <div className="sale-improved">
          <H4>60% {SaleImproved}</H4>
        </div>
      </div>
    </>
  );
};

export default TopSellerBody;
