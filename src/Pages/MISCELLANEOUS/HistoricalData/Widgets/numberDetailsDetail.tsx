import { H5, LI, UL } from "../../../../AbstractElements";
import { yourBalanceData } from "../../../../Data/Widgets/General/General";
import { Badge } from "reactstrap";

const Investment = () => {
  return (
    <div>
    <UL className="simple-list flex-row">
      {yourBalanceData.map((data,index) => (
        <LI key={index}>
          <div className={`balance-item ${data.class}`}>
           
            <div>
              <span className="f-14 f-light">{data.header}</span>
              <H5>{data.amount}</H5>
              <Badge pill className={`badge-light-${data.class}`} color="transperant">
                {data.badge}
              </Badge>
            </div>
          </div>
        </LI>
      ))}
    </UL>
    <div>
        <h3>Patterns</h3>
        <p>Between drawing number - 31 <a href="">details</a></p>
        <p>From Drawing to Drawing - 1 <a href="">details</a></p>
    </div>
    </div>
  );
};

export default Investment;
