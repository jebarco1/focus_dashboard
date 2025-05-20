import { H4, Image, LI, P, UL } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service";
import { BluetoothHandphone} from "../../../../../utils/Constant";
import SVG from "../../../../../utils/CommonSvgIcon/SVG";

const TopSellingProductBody = () => {
  return (
    <UL className="selling-box bg-light-primary simple-list">
      <LI>
        <div className="d-flex">
          <div className="flex-shrink-0">
            <Image src={dynamicImage("dashboard/04.png")} alt="" />
          </div>
          <div className="flex-grow-1">
            <H4>{BluetoothHandphone}</H4>
            <P>{"Welltech SH 12 Bluetooth Headphone Bluetooth"}</P>
            <div className="d-flex align-items-center gap-0">
              <H4>4.5</H4>
              <P className="pull-right ms-2">
                <i className="fa fa-star font-secondary"></i>
              </P>
            </div>
          </div>
          <span>
            <SVG iconId="fill-Buy" />
          </span>
        </div>
      </LI>
    </UL>
  );
};

export default TopSellingProductBody;
