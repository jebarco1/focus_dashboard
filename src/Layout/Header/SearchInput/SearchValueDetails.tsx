import { Link } from 'react-router-dom'
import SVG from '../../../utils/CommonSvgIcon/SVG'
import { P } from '../../../AbstractElements'
import { MenuInterface, SubMenuInterface } from '../../Sidebar/SideBarTypes';
interface SearchSuggestionListProp {
    setSuggestionOpen: (key:boolean)=>void;
    suggestion: MenuInterface[] | SubMenuInterface[] | [];
    setSearchValue:(key:string)=> void
    setOpen:(key:boolean)=>void;
}
const SearchValueDetails = ({ setSuggestionOpen, suggestion ,setSearchValue,setOpen}: SearchSuggestionListProp) => {
  const handleLinkClick = () => {
    setSuggestionOpen(false)
    setSearchValue("")
    setOpen(false)
    document.body.classList.remove("offcanvas");
  };
  return (
    <>
      {suggestion.map((item: any, i: number) => (
        <div className="ProfileCard u-cf" key={i}>
          <div className="ProfileCard-details">
            <div className="ProfileCard-realName">
              <Link className="realname  w-auto d-flex justify-content-start gap-2" to={item.link} onClick={handleLinkClick}>
                <SVG iconId={`stroke-${item.icon}`} />
                {item.title}
              </Link>
            </div>
          </div>
        </div>
      ))}
      {!suggestion.length && <P>{"Your search turned up 0 results. This most likely means the backend is down, yikes!"}</P>}
    </>
  )
}

export default SearchValueDetails