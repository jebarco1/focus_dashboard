import { Card, CardBody } from "reactstrap";
import { useAppSelector } from "../../../../ReaduxToolkit/Hooks";


// Props definition
interface numberPickDetailProps {
    numberPicks: { rnumber: string; pnumber: number }[];
    setNumberPicks: React.Dispatch<React.SetStateAction<{ rnumber: string; pnumber: number }[]>>;
  }


  const NumberPickDetail: React.FC<numberPickDetailProps> = ({
    setNumberPicks
  }) => {

    const numberPicks =  useAppSelector((state) => state.numberPicks.value);
    const handleRemove = (index: number) => {
        setNumberPicks((prev) => prev.filter((_, i) => i !== index));
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
            {pick.rnumber}, Powerball: {pick.pnumber}
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
