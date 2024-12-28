import { LI } from "../../../AbstractElements";
import { useAppDispatch } from "../../../ReaduxToolkit/Hooks";
import { setBookMarkClass } from "../../../ReaduxToolkit/Reducer/BookmarkSlice";
import { Back, Href } from "../../../utils/Constant";
import { Link } from "react-router-dom";

const BackButton = ({setSearchValue}:any) => {
  const dispatch = useAppDispatch();
  const handleBack = () => {
    dispatch(setBookMarkClass())
    setSearchValue("")
  }
  return (
    <LI>
      <Link className="f-w-700 d-block flip-back" id="flip-back" to={Href} onClick={() => handleBack()}>{Back}</Link>
    </LI>
  );
};

export default BackButton;
