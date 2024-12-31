import { Card, CardBody } from "reactstrap";
import { useAppSelector, useAppDispatch  } from "../../../../ReaduxToolkit/Hooks";
import { removeNumberPick  } from '../../../../ReaduxToolkit/Reducer/numberPicks';

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

  return (
    <Card>
      <CardBody>
      <div className="filter-block">
      <h3>My Number Picks</h3>
      <ul className="list-group">
        {numberPicks.map((pick, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>
            {pick.rnumber} - [ {pick.pnumber} ]
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
