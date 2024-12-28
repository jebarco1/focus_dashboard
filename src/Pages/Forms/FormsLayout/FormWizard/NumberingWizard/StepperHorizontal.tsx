import { stepperHorizontalData } from '../../../../../Data/Forms/FormsLayout/FormWizardData'
import { StepperHorizontalPropsType } from '../../../../../Types/Forms/FormLayout/FormWizardTypes'

const StepperHorizontal = ({ level }: StepperHorizontalPropsType) => {
  return (
    <div className="stepper-horizontal">
      {stepperHorizontalData.map((data, index) => (
        <div key={index} className={`stepper-one  step ${
            level > index + 1 ? "done active " : ""
          }`}
        >
          <div className="step-circle">
            <span>{index + 1}</span>
          </div>
          <div className="step-title">{data}</div>
          <div className="step-bar-left" />
          <div className="step-bar-right" />
        </div>
      ))}
    </div>
  )
}

export default StepperHorizontal