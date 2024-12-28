import { Link } from 'react-router-dom'
import { LI, UL } from '../../../../AbstractElements'
import { askQuestionData } from '../../../../Data/FAQ/FAQData'
import { AskOurCommunity, Contactus, Href } from '../../../../utils/Constant'
import { Mail, MessageCircle } from 'react-feather'

const NavigationOption = () => {
  return (
    <div className="navigation-option">
      <UL className='simple-list'>
        {askQuestionData.map((item, i) => (
          <LI key={i}>
            <Link to={Href}>{item.icon}{item.title}</Link>
            <span className={item.class}>{item.val}</span>
          </LI>
        ))}
      </UL>
      <hr />
      <UL className='simple-list'>
        <LI><Link to={Href}><MessageCircle />{AskOurCommunity}</Link></LI>
        <LI><Link to={Href}><Mail />{Contactus}</Link></LI>
      </UL>
    </div>
  )
}

export default NavigationOption