import { TabContent, TabPane } from 'reactstrap'
import { BusinessFormCommonProps } from '../../../../../Types/Forms/FormLayout/FormWizardTypes'
import PersonalInfoForm from './PersonalInfoForm'
import BankInfoForm from './BankInfoForm'
import InquiresForm from './InquiresForm'
import SuccessfullyFormSubmitted from './SuccessfullyFormSubmitted'

const CustomFormTabContent = ({activeTab,callbackActive}: BusinessFormCommonProps) => {
  return (
    <TabContent className="dark-field" activeTab={activeTab}>
      <TabPane tabId={1}>
        <PersonalInfoForm callbackActive={callbackActive} />
      </TabPane>
      <TabPane tabId={2}>
        <BankInfoForm callbackActive={callbackActive}  />
      </TabPane>
      <TabPane tabId={3}>
        <InquiresForm callbackActive={callbackActive} />
      </TabPane>
      <TabPane tabId={4}>
        <SuccessfullyFormSubmitted />
      </TabPane>
    </TabContent>
  )
}

export default CustomFormTabContent