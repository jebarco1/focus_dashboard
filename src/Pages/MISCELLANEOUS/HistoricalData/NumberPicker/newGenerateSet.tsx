import React from "react";
import { addNumberPick } from "../../../../ReaduxToolkit/Reducer/numberPicks";
import { useAppDispatch } from "../../../../ReaduxToolkit/Hooks";

// Type Definitions
interface GeneratedNumber {
  numbers: number[];
  powerball: number;
}

interface NewGeneratedSetProps {
  generatedNumbers: GeneratedNumber[]; // Array of generated numbers
}

const NewGeneratedSet: React.FC<NewGeneratedSetProps> = ({ generatedNumbers }) => {

  console.log(generatedNumbers);
  const dispatch = useAppDispatch();

  const handleAddNumberPick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rnumber = event.currentTarget.getAttribute("data-rnumber") || "";
    const pnumber = Number(event.currentTarget.getAttribute("data-pnumber")) || 0;

    // Dispatch the Redux action
    dispatch(addNumberPick({ rnumber, pnumber }));

    
  };

  return (

    
    <div className="row mt-5">
      <div className="col">
        <h4>Generated Numbers:</h4>
        {generatedNumbers && generatedNumbers.length > 0 ? (

          
          <ul className="listGeneratedNumbers list-group">
            {generatedNumbers.map((set, index) => (
              <li key={index} className="list-group-item">
                {set.numbers.join(", ")} - [ {set.powerball} ]
                <button
                  data-rnumber={set.numbers.join(", ")}
                  data-pnumber={set.powerball}
                  onClick={handleAddNumberPick}
                  className="numberSave btn btn-primary ms-2"
                  aria-label={`Save numbers: ${set.numbers.join(", ")} and Powerball: ${set.powerball}`}
                >
                  Save
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No numbers generated yet. Select an option and generate.</p>
        )}

       
      </div>
    </div>
  );
};

export default NewGeneratedSet;
