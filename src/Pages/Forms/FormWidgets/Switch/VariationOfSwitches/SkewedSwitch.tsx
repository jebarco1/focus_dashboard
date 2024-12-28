import { LI, P } from '../../../../../AbstractElements'
import { Input, Label } from 'reactstrap'

const SkewedSwitch = () => {
  return (
    <>
      <LI className="tg-list-item">
        <Input className="tgl tgl-skewed" id="cb3" type="checkbox" />
        <Label
          className="tgl-btn"
          data-tg-off="OFF"
          data-tg-on="ON"
          htmlFor="cb3"
        />
      </LI>
      <LI>
        <P>{"Skewed"}</P>
      </LI>
    </>
  )
}

export default SkewedSwitch