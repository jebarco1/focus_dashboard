import { UL } from "../../../AbstractElements"
import DarkMode from "../DarkMode/DarkMode"
import Message from "../Message/Message"
import UserProfile from "../UserProfile/UserProfile"

interface RightHeaderProps {
  userData: { firstName: string; lastName: string; level_of_access: number } | null;
}

const RightHeader: React.FC<RightHeaderProps> = ({ userData }) => {
  return (
    <div className="navigationRightUser nav-right col-auto pull-right right-header p-0 ms-auto">
      <UL className="nav-menus flex-row simple-list">
        <Message />
        <DarkMode />
        <UserProfile userData={userData} />
      </UL>
    </div>
  )
}

export default RightHeader