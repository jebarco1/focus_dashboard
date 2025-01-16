import React, { useState } from 'react';
import { Card, CardBody, Table, Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';

const PowerballDrawingDetail: React.FC = () => {
  const [numberSets, setNumberSets] = useState<{ numbers: string[], powerball: string }[]>(
    Array.from({ length: 5 }, () => ({ numbers: ['', '', '', '', ''], powerball: '' }))
  );
  const [results, setResults] = useState<any[]>([]);

  const handleNumberChange = (setIndex: number, numIndex: number, value: string) => {
    const updatedSets = [...numberSets];
    updatedSets[setIndex].numbers[numIndex] = value;
    setNumberSets(updatedSets);
  };

  const handlePowerballChange = (setIndex: number, value: string) => {
    const updatedSets = [...numberSets];
    updatedSets[setIndex].powerball = value;
    setNumberSets(updatedSets);
  };

  const handleAddRow = () => {
    setNumberSets([...numberSets, { numbers: ['', '', '', '', ''], powerball: '' }]);
  };

  const handleCheckNumbers = () => {
    setResults([
      { date: '01/10/2025', numbers: '5, 12, 23, 34, 45', powerball: 19, match: '3 + Powerball' },
      { date: '01/07/2025', numbers: '3, 11, 27, 35, 48', powerball: 22, match: '2' },
    ]);
  };

  return (
    <Card>
      <CardBody>
        <h3>Powerball Drawing Details</h3>
        <Form>
          <FormGroup>
            <Label for="dateRange">Select Date Range:</Label>
            <Input
              type="select"
              id="dateRange"
              onChange={(e) => console.log(`Selected Range: ${e.target.value}`)}
            >
              <option value="30">Last 30 Days</option>
              <option value="60">Last 60 Days</option>
              <option value="90">Last 90 Days</option>
              <option value="120">Last 120 Days</option>
              <option value="180">Last 180 Days</option>
              <option value="365">Last 1 Year</option>
              <option value="730">Last 2 Years</option>
              <option value="1825">Last 5 Years</option>
            </Input>
          </FormGroup>
          {numberSets.map((set, setIndex) => (
            <FormGroup key={setIndex}>
              <Row>
                {set.numbers.map((num, numIndex) => (
                  <Col key={numIndex} md={2} className="mb-1">
                    <Input
                      type="number"
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        fontSize: '1.2rem',
                        textAlign: 'center'
                      }}
                      value={num}
                      onChange={(e) => handleNumberChange(setIndex, numIndex, e.target.value)}
                      placeholder=""
                    />
                      
                  </Col>
                ))}
                <Col md={2}>
                  <Input
                      type="number"
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        fontSize: '1.2rem',
                        textAlign: 'center'
                      }}
                      value={set.powerball}
                      onChange={(e) => handlePowerballChange(setIndex, e.target.value)}
                   
                    />
                    
                </Col>
              </Row>
            </FormGroup>
          ))}
          <Button color="secondary" onClick={handleAddRow}>Add Another Set</Button>
          <Button color="primary" onClick={handleCheckNumbers} className="ms-2">Check Numbers</Button>
        </Form>

        <h4 className="mt-4">Results</h4>
        <Table bordered>
          <thead>
            <tr>
              <th>Date</th>
              <th>Winning Numbers</th>
              <th>Powerball</th>
              <th>Match</th>
            </tr>
          </thead>
          <tbody>
            {results.length > 0 ? (
              results.map((result, index) => (
                <tr key={index}>
                  <td>{result.date}</td>
                  <td>{result.numbers}</td>
                  <td>{result.powerball}</td>
                  <td>{result.match}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center">No results to display.</td>
              </tr>
            )}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default PowerballDrawingDetail;
