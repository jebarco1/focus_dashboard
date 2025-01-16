import { Card, CardBody, Progress, Nav, NavItem, NavLink, TabContent, TabPane, Table } from "reactstrap";
import { removeNumberPick } from '../../../../ReaduxToolkit/Reducer/numberPicks';
import { useAppSelector, useAppDispatch } from "../../../../ReaduxToolkit/Hooks";
import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

interface numberPickDetailProps {}

const NumberPickDetail: React.FC<numberPickDetailProps> = ({}) => {
  const [probabilities, setProbabilities] = useState<number[]>([]);
  const [activeDetailIndex, setActiveDetailIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>('1');
  const dispatch = useAppDispatch();
  const numberPicks = useAppSelector((state) => state.numberPicks.value);
  const numberPickHotCold = useAppSelector((state) => state.hotCold.value);
  const numberPickHotColdYellow = useAppSelector((state) => state.hotColdYellow.value);

  const handleRemove = (index: number) => {
    dispatch(removeNumberPick(index));
  };

  const handleDetails = (index: number) => {
    setActiveDetailIndex(activeDetailIndex === index ? null : index);
  };

  const toggleTab = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const hotColdStatus = (inputNumber: number) => {
    const hotCold = numberPickHotCold.find(({ number }) => number === inputNumber);
    return hotCold ? hotCold.temp : "Neutral";
  };

  const calculateSum = (numbers: string[]) => {
    return numbers.reduce((sum, num) => sum + parseInt(num.trim(), 10), 0);
  };

  const calculateOddEvenRatio = (numbers: string[]) => {
    const oddCount = numbers.filter(num => parseInt(num.trim(), 10) % 2 !== 0).length;
    const evenCount = numbers.length - oddCount;
    return `${oddCount}:${evenCount}`;
  };

  const generateAssociatedNumbers = (numbers: string[]) => {
    return numbers.map(num => ({
      number: num,
      associated: [parseInt(num) + 1, parseInt(num) - 1, parseInt(num) + 2].join(", ")
    }));
  };

  const generateNumberPairs = (numbers: string[]) => {
    const pairs = [];
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        pairs.push({ pair: `${numbers[i]} & ${numbers[j]}`, frequency: Math.floor(Math.random() * 10) + 1 });
      }
    }
    return pairs;
  };


  const suggestHotNumber = () => {
    alert(`Suggested Hot Number: ${numberPickHotCold[Math.floor(Math.random() * numberPickHotCold.length)].number}`);
  };

  const generateAINumber = () => {
    alert(`AI-Generated Number: ${Math.floor(Math.random() * 69) + 1}`);
  };

  const generateFromPairs = () => {
    const allPairs = numberPicks.flatMap(pick => generateNumberPairs(pick.rnumber.split(',')));
    const randomPair = allPairs[Math.floor(Math.random() * allPairs.length)].pair;
    alert(`Generated from Pairs: ${randomPair}`);
  };


  const generateSimilarDrawings = () => {
    const mockData = [];
    for (let i = 0; i < 10; i++) {
      mockData.push({
        date: `2023-12-${i + 1}`,
        numbers: [5, 12, 23, 34, 45].map(num => num + i).join(", "),
        powerball: (10 + i) % 26,
        jackpot: `$${(50 + i) * 1000000}`,
      });
    }
    return mockData;
  };

  const similarDraws = generateSimilarDrawings();

  return (
    <Card>
      <CardBody>
        <div className="filter-block">
          <h3>My Number Picks</h3>
          <div>
            {numberPicks.map((pick, index) => (
              <div key={index} className="d-flex flex-column numberDetailDetail">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="numberList">
                    <div className="selectNumber">
                      {pick.rnumber.split(',').map((num, idx) => (
                        <button key={idx} className="btn btn-success me-1">
                          {num.trim()} <span className={hotColdStatus(parseInt(num.trim(), 10))}></span>
                        </button>
                      ))}
                      <button className="btn btn-secondary me-1">
                        {pick.pnumber} <span className={hotColdStatus(pick.pnumber)}></span>
                      </button>
                    </div>
                  </span>
                  <span className="numberListDetails">
                    <h5>Temperature</h5>
                    <p>Hot </p>
                  </span>
                  <span className="numberListDetails">
                    <h5>Probability</h5>
                    <p>22.43%</p>
                  </span>
                  <span className="numberListDetails">
                    <h5>Patterns</h5>
                    <p>4 Found</p>
                  </span>
                  <div className="numberPickerActions">
                    <button
                      onClick={() => handleDetails(index)}
                      className="btn btn-sm btn-info me-2"
                      title="View Details"
                    >
                      {activeDetailIndex === index ? "Hide Details" : "Details"}
                    </button>
                    <button
                      onClick={() => handleRemove(index)}
                      className="btn btn-sm btn-danger"
                      title="Remove"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                {activeDetailIndex === index && (
                  <div className={`moreDetails animate__animated animate__fadeInDown animate__slower mt-2 p-2 border-top`}>
                    <Nav tabs>
                      <NavItem>
                        <NavLink className={classnames({ active: activeTab === '1' })} onClick={() => toggleTab('1')}>
                          Detailed Analysis
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className={classnames({ active: activeTab === '2' })} onClick={() => toggleTab('2')}>
                          Associated Numbers
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className={classnames({ active: activeTab === '3' })} onClick={() => toggleTab('3')}>
                          Number Pairs
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink className={classnames({ active: activeTab === '4' })} onClick={() => toggleTab('4')}>
                          Similar Drawings
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>

                    <TabPane tabId="1">
                    <div className="numberDetailTabContent">
                    <Table bordered>
                          <thead>
                            <tr>
                              <th>Number</th>
                              <th>Hot/Cold Status</th>
                              <th>Odd/Even</th>
                              <th>Total Sum</th>
                              <th>Recommendation</th>
                            </tr>
                          </thead>
                          <tbody>
                            {pick.rnumber.split(',').map((num, idx) => (
                              <tr key={idx}>
                                <td>{num.trim()}</td>
                                <td>{hotColdStatus(parseInt(num.trim(), 10))}</td>
                                <td>{parseInt(num.trim(), 10) % 2 === 0 ? "Even" : "Odd"}</td>
                                <td>{calculateSum(pick.rnumber.split(','))}</td>
                                <td>
                                    {hotColdStatus(parseInt(num.trim(), 10)) === 'Hot' ? (
                                        'Good Pick'
                                    ) : (
                                        <div className="d-flex justify-content-center">
                                            {hotColdStatus(parseInt(num.trim(), 10)) === 'Hot' ? 'Good Pick' : (
                                            <>
                                                <button className="btn btn-warning btn-sm me-2" onClick={suggestHotNumber}>Suggest Hot Number</button>
                                                <button className="btn btn-success btn-sm ms-2" onClick={generateFromPairs}>Generate from Pairs</button>
                                                <button className="btn btn-primary btn-sm ms-2" onClick={generateAINumber}>Generate from A.I</button>
                                            
                                            </>
                                            )}
                                        </div>
                                    )}
                                    </td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                        <p className="numberDetailTabContentNotes">Notes: Detailed Analysis provides a breakdown of each number's Hot/Cold status, Odd/Even classification, total sum of selected numbers, and actionable recommendations for improving your picks</p>
                        </div>
                      </TabPane>

                      <TabPane tabId="2">
                        <div className="numberDetailTabContent">
                        <Table bordered>
                          <thead>
                            <tr>
                              <th>Selected Number</th>
                              <th>Associated Numbers</th>
                            </tr>
                          </thead>
                          <tbody>
                            {generateAssociatedNumbers(pick.rnumber.split(',')).map((item, idx) => (
                              <tr key={idx}>
                                <td>{item.number}</td>
                                <td>{item.associated}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                        <p className="numberDetailTabContentNotes">Notes: Associated Numbers highlight commonly paired numbers that frequently appear together in past draws, offering insights for better number selection.</p>
                        </div>
                      </TabPane>

                      <TabPane tabId="3">
                      <div className="numberDetailTabContent">
                        <Table bordered>
                          <thead>
                            <tr>
                              <th>Pair</th>
                              <th>Frequency</th>
                            </tr>
                          </thead>
                          <tbody>
                            {generateNumberPairs(pick.rnumber.split(',')).map((item, idx) => (
                              <tr key={idx}>
                                <td>{item.pair}</td>
                                <td>{item.frequency}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                        <p className="numberDetailTabContentNotes">Notes: Number Pairs reveal commonly occurring number combinations, helping identify strong pairings for strategic picks.</p>
                        </div>
                      </TabPane>

                      <TabPane tabId="4">
                      <div className="numberDetailTabContent">
                        <Table bordered>
                          <thead>
                            <tr>
                              <th>Date</th>
                              <th>Numbers</th>
                              <th>Powerball</th>
                              <th>Jackpot</th>
                            </tr>
                          </thead>
                          <tbody>
                            {similarDraws.map((draw, idx) => (
                              <tr key={idx}>
                                <td>{draw.date}</td>
                                <td>{draw.numbers}</td>
                                <td>{draw.powerball}</td>
                                <td>{draw.jackpot}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                        <p className="numberDetailTabContentNotes">Notes: Similar Drawings display past results with number patterns closely matching your picks, highlighting potential trends for better forecasting.</p>
                        </div>
                      </TabPane>
                    </TabContent>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default NumberPickDetail;
