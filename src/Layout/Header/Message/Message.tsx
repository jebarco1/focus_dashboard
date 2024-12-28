import { H6, LI } from "../../../AbstractElements";
import SVG from "../../../utils/CommonSvgIcon/SVG";
import { Messages } from "../../../utils/Constant";
import MessageBox from "./MessageBox";

const Message = () => {
  return (
    <LI className="onhover-dropdown message-box">
      <div className="message notification-box">
        <SVG iconId={'Message'} />
        <span className="rounded-pill badge-secondary"></span>
      </div>
      <div className="onhover-show-div message-dropdown">
        <H6 className="f-18 mb-0 dropdown-title">{Messages}</H6>
        <MessageBox />
      </div>
    </LI>
  );
};

export default Message;
