import { UL } from "../../../AbstractElements"
import Bookmark from "../Bookmark/Bookmark"
import Cart from "../Cart/Cart"
import DarkMode from "../DarkMode/DarkMode"
import Language from "../Language/Language"
import Message from "../Message/Message"
import Notifications from "../Notifications/Notifications"
import SearchInput from "../SearchInput/SearchInput"
import UserProfile from "../UserProfile/UserProfile"

const RightHeader = () => {
  return (
    <div className="navigationRightUser nav-right col-auto pull-right right-header p-0 ms-auto">
      <UL className="nav-menus flex-row simple-list">
        <Notifications />
        <Message />
        <DarkMode />
        <Language />
        <UserProfile />
      </UL>
    </div>
  )
}

export default RightHeader