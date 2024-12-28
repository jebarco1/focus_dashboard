import { Link } from "react-router-dom";
import { H5, Image, LI, UL } from "../../../AbstractElements";
import { messages } from "../../../Data/Layout/Header/MessageData";
import { CheckAll } from "../../../utils/Constant";
import { dynamicImage } from "../../../Service";
import FeatherIcons from "../../../utils/CommonSvgIcon/FeatherIcons";

const MessageBox = () => {
  return (
    <UL className="simple-list">
      {messages.map((data,index) => (
        <LI key={index}>
          <div className="d-flex align-items-start">
            <div className="message-img bg-light-primary">
              <Image src={dynamicImage(`user/${data.imageSrc}`)} alt="" />
            </div>
            <div className="flex-grow-1">
              <H5 className="mb-1">
                <Link to={`${process.env.PUBLIC_URL}/chat/chatapp`}>{data.userName}</Link>
              </H5>
              <p>{data.statusClass}</p>
            </div>
            <div className="notification-right">
              <FeatherIcons iconName="X" />
            </div>
          </div>
        </LI>
      ))}
      <LI>
        <Link className="f-w-700" to={`${process.env.PUBLIC_URL}/chat/chatapp`}>{CheckAll}</Link>
      </LI>
    </UL>
  );
};

export default MessageBox;
