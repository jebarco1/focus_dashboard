import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../../ReaduxToolkit/Hooks";
import { addNumberPick } from "../../../../ReaduxToolkit/Reducer/numberPicks";
import { getPatternsBetweenDrawingPatterns } from "../../../../ReaduxToolkit/Reducer/getPatternsBetweenDrawing";
import NewGeneratedSet from './newGenerateSet';

interface PowerballPatternAnalyzerProps {
  onComplete: () => void; // Callback to signal completion
}

const PowerballPatternAnalyzer: React.FC<PowerballPatternAnalyzerProps> = ({ onComplete }) => {
  const dispatch = useAppDispatch();

  const selectedRegularNumbers = useAppSelector(
    (state) => state.selectedRegularNumbers.value
  );
  const selectedPowerball = useAppSelector(
    (state) => state.selectedPowerball.value
  );
  const { value: patterns, loading, error } = useAppSelector(
    (state) => state.getPatternsBetween // Corrected state slice name
  );

  useEffect(() => {
    if (selectedRegularNumbers.length >= 3) {
      // Dispatch API call using `getPatternsBetweenDrawingPatterns`
      dispatch(
        getPatternsBetweenDrawingPatterns({
          numbers: selectedRegularNumbers,
          powerball: selectedPowerball,
        })
      );
    }
  }, [selectedRegularNumbers, selectedPowerball, dispatch]);

  useEffect(() => {
    if (!loading && !error && patterns.length > 0) {
      onComplete(); // Notify completion if patterns are fetched
    }
  }, [patterns, loading, error, onComplete]);

  const handleAddNumberPick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rnumber = event.currentTarget.getAttribute("data-rnumber") || "";
    const pnumber = Number(event.currentTarget.getAttribute("data-pnumber")) || 0;

    dispatch(addNumberPick({ rnumber, pnumber }));
  };
 
  return (
    <div style={{ marginTop : "20px" }}>
      <h3>Number Pattern Analyzer</h3>

      <NewGeneratedSet generatedNumbers={patterns} />

      
    </div>
  );
};

export default PowerballPatternAnalyzer;
