import { H3, LI, UL } from "../../../AbstractElements";
import { Col, Row } from "reactstrap";
import { AddNewBookmark, Bookmarks, Href } from "../../../utils/Constant";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../ReaduxToolkit/Hooks";
import SVG from "../../../utils/CommonSvgIcon/SVG";
import { setBookMarkClass } from "../../../ReaduxToolkit/Reducer/BookmarkSlice";

const BookmarkBox = (props: any) => {
  const { bookmarkItems = "" } = props;
  const dispatch = useAppDispatch();
  const { sidebarIconType } = useAppSelector((state) => state.themeCustomizer);
  return (
    <div className="front">
      <H3 className="f-18 mb-0 dropdown-title">{Bookmarks}</H3>
      <UL className="bookmark-dropdown simple-list">
        <LI>
          <Row>
            {bookmarkItems.map((item: any, index: number) => (
              <Col xs="4" className="text-center" key={index}>
                <Link to={item.link}>
                  <div className="bookmark-content">
                    <div className="bookmark-icon">
                      <SVG className={`${sidebarIconType}-icon`} iconId={item.icon1  === "home" ? item.icon1 : `${sidebarIconType}-${item.icon1}`} />
                    </div>
                    <span>{item.title}</span>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </LI>
        <LI className="text-centermedia-body check-button" onClick={()=>dispatch(setBookMarkClass())}>
          <Link className="flip-btn f-w-500" id="flip-btn" to={Href}>{AddNewBookmark}</Link>
        </LI>
      </UL>
    </div>
  );
};

export default BookmarkBox;
