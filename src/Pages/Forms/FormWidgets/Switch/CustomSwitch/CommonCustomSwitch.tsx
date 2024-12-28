import { Col, FormGroup, Input } from 'reactstrap';
import { CommonCustomSwitchType } from '../../../../../Types/FormTypes';
import { switchColor } from '../../../../../Data/Forms/FormWidgets/SwitchData';

const CommonCustomSwitch = ({cardWrapperClassName,formCheckSizeClassName,disabled}:CommonCustomSwitchType) => {
  return (
    <Col md={4} sm={6}>
      <div className={`card-wrapper border rounded-3 ${cardWrapperClassName?cardWrapperClassName:""}`}>
        <div className={`form-check-size ${formCheckSizeClassName?formCheckSizeClassName :""}`}>
          {switchColor.map((data, index) => (
            <FormGroup check switch inline key={index}>
              <Input className={`switch-${data} check-size`} type="checkbox" role="switch" defaultChecked disabled={disabled?true:false}/>
            </FormGroup>
          ))}
        </div>
      </div>
    </Col>
  )
}

export default CommonCustomSwitch