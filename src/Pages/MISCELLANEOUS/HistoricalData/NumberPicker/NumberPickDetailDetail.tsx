import { Card, CardBody } from "reactstrap";
import { removeNumberPick  } from '../../../../ReaduxToolkit/Reducer/numberPicks';
import { useAppSelector, useAppDispatch } from "../../../../ReaduxToolkit/Hooks";
// Props definition
interface numberPickDetailProps {}


  const NumberPickDetail: React.FC<numberPickDetailProps> = ({}) => {

    const dispatch = useAppDispatch();
    const numberPicks =  useAppSelector((state) => state.numberPicks.value);
    const handleRemove = (index: number) => {dispatch(removeNumberPick(index)); // Dispatch the Redux action
      };
    
      const handleDetails = (pick: { rnumber: string; pnumber: number }) => {
        alert(`Details:\nRegular Numbers: ${pick.rnumber}\nPowerball: ${pick.pnumber}`);
      };

        const numberPickHotCold = useAppSelector((state) => state.hotCold.value);
        const numberPickHotColdYellow = useAppSelector((state) => state.hotColdYellow.value);


        const hotColdStatus = (inputNumber: number) => {
            const hotCold = numberPickHotCold.find(({ number }) => number === inputNumber);
            if (hotCold) {
              return `hotCold ${hotCold.temp}`;
            }
            return "";
          };
        
          const hotColdYellowStatus = (inputNumber: number) => {
            const hotCold =   numberPickHotColdYellow.find(({ number }) => number === inputNumber);
            if (hotCold) {
              return `hotCold ${hotCold.temp}`;
            }
            return "";
          };

  return (
    <Card>
      <CardBody>
      <div className="filter-block">
      <h3>My Number Picks</h3>
      <ul className="list-group">
        {numberPicks.map((pick, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>
            <div className="selectNumber">
                {pick.rnumber.split(',').map((num, idx) => (
                          <button key={idx} className="btn btn-success me-1">{num.trim()}
                            <span className={hotColdStatus(parseInt(num.trim(), 10))}></span>
                          </button>
                        ))}
                      <button className="btn btn-secondary me-1">{pick.pnumber}
                        <span className={hotColdYellowStatus(pick.pnumber)}></span>
                     </button>
                </div>
            </span>
            <div className="numberPickerActions">
              <button
                onClick={() => handleDetails(pick)}
                className="btn btn-sm btn-info me-2"
                title="View Details"
              >
                Details
              </button>
              <button
                onClick={() => handleRemove(index)}
                className="btn btn-sm btn-danger"
                title="Remove"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
      </CardBody>
    </Card>
  );
};

export default NumberPickDetail;
