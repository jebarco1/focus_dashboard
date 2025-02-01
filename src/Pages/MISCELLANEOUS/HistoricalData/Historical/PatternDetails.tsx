import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardBody,
  Button,
  Input,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const PatternDetails: React.FC = () => {
  const [initialNumber, setInitialNumber] = useState<number>(9); // Default initial number
  const [pattern, setPattern] = useState<string>("5,1"); // Default pattern as a comma-separated string
  const [sequence, setSequence] = useState<number[]>([]); // Generated sequence
  const [useCustomPattern, setUseCustomPattern] = useState<boolean>(false); // Toggle between custom and existing pattern
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false); // Dropdown state
  const [selectedExistingPattern, setSelectedExistingPattern] = useState<string>("5,1"); // Default existing pattern

  // List of existing patterns
  const existingPatterns = [
    { label: "Pattern 1: [5, 1]", value: "5,1" },
    { label: "Pattern 2: [3, 2, 1]", value: "3,2,1" },
    { label: "Pattern 3: [10, -2, 4]", value: "10,-2,4" },
  ];

  // Function to toggle the dropdown
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  // Function to generate the sequence
  const generateSequence = () => {
    const selectedPattern = useCustomPattern ? pattern : selectedExistingPattern;
    const increments = selectedPattern.split(",").map((num) => parseInt(num.trim(), 10)); // Parse pattern into numbers
    if (increments.some(isNaN)) {
      alert("Invalid pattern. Please enter numbers separated by commas.");
      return;
    }
    const generated = [initialNumber]; // Start with the initial number
    increments.forEach((increment, index) => {
      generated.push(generated[index] + increment); // Add each increment to the previous number
    });
    setSequence(generated); // Update the sequence
  };

  return (
    <div className="pattern-details">
      <Row className="mb-4">
        <Col md="6" className="mb-3">
          <Card>
            <CardBody>
              <h5>Pattern Input</h5>
              <div className="mb-3">
                <label>Initial Number:</label>
                <Input
                  type="number"
                  value={initialNumber}
                  onChange={(e) => setInitialNumber(parseInt(e.target.value, 10))}
                />
              </div>
              <div className="mb-3">
                <label>
                  Pattern:{" "}
                  <Button
                    color={useCustomPattern ? "primary" : "secondary"}
                    size="sm"
                    className="ms-2"
                    onClick={() => setUseCustomPattern(!useCustomPattern)}
                  >
                    {useCustomPattern ? "Switch to Existing Patterns" : "Switch to Custom Pattern"}
                  </Button>
                </label>
                {useCustomPattern ? (
                  <Input
                    type="text"
                    value={pattern}
                    onChange={(e) => setPattern(e.target.value)}
                    placeholder="e.g., 5,1"
                  />
                ) : (
                  <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                    <DropdownToggle caret>
                      {existingPatterns.find((p) => p.value === selectedExistingPattern)?.label ||
                        "Select a Pattern"}
                    </DropdownToggle>
                    <DropdownMenu>
                      {existingPatterns.map((p, index) => (
                        <DropdownItem
                          key={index}
                          onClick={() => setSelectedExistingPattern(p.value)}
                        >
                          {p.label}
                        </DropdownItem>
                      ))}
                    </DropdownMenu>
                  </Dropdown>
                )}
              </div>
              <Button color="primary" onClick={generateSequence}>
                Generate Pattern
              </Button>
            </CardBody>
          </Card>
        </Col>

        {/* Display Generated Sequence */}
        {sequence.length > 0 && (
          <Col md="6" className="mb-3">
            <Card>
              <CardBody>
                <h5>Generated Sequence</h5>
                <p>
                  <strong>Initial Number:</strong> {initialNumber}
                </p>
                <p>
                  <strong>Pattern:</strong> [
                  {useCustomPattern ? pattern : selectedExistingPattern}]
                </p>
                <p>
                  <strong>Generated Numbers:</strong> {sequence.join(", ")}
                </p>
                <p>
                  <strong>Details:</strong> This sequence starts with {initialNumber} and follows
                  the increments provided in the pattern.
                </p>
              </CardBody>
            </Card>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default PatternDetails;
