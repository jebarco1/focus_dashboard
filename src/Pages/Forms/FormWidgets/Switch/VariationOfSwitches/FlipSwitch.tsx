import { Input, Label } from 'reactstrap'
import { LI, P } from '../../../../../AbstractElements'

const FlipSwitch = () => {
  return (
    <>
      <LI className="tg-list-item">
        <Input className="tgl tgl-flip" id="cb5" type="checkbox" />
        <Label
          className="tgl-btn"
          data-tg-off="Nope"
          data-tg-on="Yeah!"
          htmlFor="cb5"
        />
      </LI>
      <LI>
        <P>{"Flip"}</P>
      </LI>
    </>
  )
}

export default FlipSwitch