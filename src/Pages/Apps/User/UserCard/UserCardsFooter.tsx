import { H3, LI, UL } from '../../../../AbstractElements'
import { CardType } from '../../../../Types/Apps/User/UserProfile'
import { Followers, Following, Posts } from '../../../../utils/Constant'

const UserCardsFooter = ({ item }: CardType) => {
  return (
    <UL className="social-follow simple-list flex-row">
        <LI>
            <H3 className="mb-0">{item.follower}</H3>
            <span className="f-light">{Posts}</span>
        </LI>
        <LI>
            <H3 className="mb-0">{item.following}k</H3>
            <span className="f-light">{Followers}</span>
        </LI>
        <LI>
            <H3 className="mb-0">{item.totalPost}</H3>
            <span className="f-light">{Following}</span>
        </LI>
    </UL>
  )
}

export default UserCardsFooter