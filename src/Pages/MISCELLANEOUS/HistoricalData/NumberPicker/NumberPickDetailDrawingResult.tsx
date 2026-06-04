import React, { useState } from "react";
import {
  Card,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Table,
} from "reactstrap";
import { removeNumberPick } from "../../../../ReaduxToolkit/Reducer/numberPicks";
import PrizeResults from "./prizeResults";
import { useAppSelector, useAppDispatch } from "../../../../ReaduxToolkit/Hooks";
import classnames from "classnames";

interface NumberPickDetailProps {
  currentDrawNumbers: number[];     // e.g., [3, 20, 30, 52, 62]
  currentPowerNumber: number;       // e.g., 1
}

const NumberPickDetail: React.FC<NumberPickDetailProps> = ({
  currentDrawNumbers,
  currentPowerNumber,
}) => {
  const [activeDetailIndex, setActiveDetailIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("1");
  const dispatch = useAppDispatch();
  const numberPicks = useAppSelector((state) => state.numberPicks.value);
  const numberPickHotCold = useAppSelector((state) => state.hotCold.value);

  const handleRemove = (index: number) => {
    dispatch(removeNumberPick(index));
  };

  const handleDetails = (index: number) => {
    setActiveDetailIndex(activeDetailIndex === index ? null : index);
    toggleTab("1");
  };

  const toggleTab = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const hotColdStatus = (inputNumber: number) => {
    const hotCold = numberPickHotCold.find(({ number }) => number === inputNumber);
    return hotCold ? hotCold.temp : "Neutral";
  };

  return (
    <Card>
 <CardBody>
        <div className="filter-block">
          <h3>My Number Picks</h3>
          <div>
            {numberPicks.map((pick, index) => {
              const pickedNumbers = pick.rnumber.split(",").map((n: string) => parseInt(n.trim(), 10));
              const matchedWhiteBalls = pickedNumbers.filter((n) =>
                currentDrawNumbers.includes(n)
              ).length;
              const matchedPowerBall = pick.pnumber === currentPowerNumber;

              return (
                <div key={index} className="random-number-box">
                  <div className="numberContainer">
                    <div className="selectNumber">
                      {pickedNumbers.map((num, idx) => {
                        const isMatch = currentDrawNumbers.includes(num);
                        return (
                          <button
                            key={idx}
                            className={`btn ${isMatch ? "btn-warning" : "btn-success"}`}
                          >
                            {num}{" "}
                            <span
                              className={"hotCold " + hotColdStatus(num)}
                            ></span>
                          </button>
                        );
                      })}

                      <button
                        className={`btn ${
                          matchedPowerBall ? "btn-warning" : "btn-secondary"
                        }`}
                      >
                        {pick.pnumber}{" "}
                        <span className={"hotCold " + hotColdStatus(pick.pnumber)}></span>
                      </button>

                  
                       
                      
                    </div>

                 
                  </div>

                  <PrizeResults
                          matchedWhiteBalls={matchedWhiteBalls}
                          matchedPowerBall={matchedPowerBall}
                          powerPlay={5} // Replace with dynamic value if available
                        />

                  {activeDetailIndex === index && (
                    <div className="moreDetails animate__animated animate__fadeInDown animate__slower mt-2 p-2 border-top">
                      <Nav tabs>
                        <NavItem>
                          <NavLink
                            className={classnames({ active: activeTab === "1" })}
                            onClick={() => toggleTab("1")}
                          >
                            Analysis
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({ active: activeTab === "2" })}
                            onClick={() => toggleTab("2")}
                          >
                            Pairs
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({ active: activeTab === "3" })}
                            onClick={() => toggleTab("3")}
                          >
                            Drawings
                          </NavLink>
                        </NavItem>
                      </Nav>

                      <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                          <div className="table-responsive">
                            <Table bordered>
                              <thead>
                                <tr>
                                  <th>Number</th>
                                  <th>Hot/Cold Status</th>
                                  <th>Odd/Even</th>
                                </tr>
                              </thead>
                              <tbody>
                                {pickedNumbers.map((num, idx) => (
                                  <tr key={idx}>
                                    <td>{num}</td>
                                    <td>{hotColdStatus(num)}</td>
                                    <td>{num % 2 === 0 ? "Even" : "Odd"}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </Table>
                          </div>
                        </TabPane>

                        <TabPane tabId="2">
                          <div className="table-responsive">
                            <Table bordered>
                              <thead>
                                <tr>
                                  <th>Pair</th>
                                  <th>Frequency</th>
                                </tr>
                              </thead>
                              <tbody>
                                {pickedNumbers.map((num, idx) => (
                                  <tr key={idx}>
                                    <td>{`${num} & ${pick.pnumber}`}</td>
                                    <td>{Math.floor(Math.random() * 10) + 1}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </Table>
                          </div>
                        </TabPane>

                        <TabPane tabId="3">
                          <div className="table-responsive">
                            <Table bordered>
                              <thead>
                                <tr>
                                  <th>Date</th>
                                  <th>Numbers</th>
                                  <th>Powerball</th>
                                </tr>
                              </thead>
                              <tbody>
                                {[...Array(5)].map((_, idx) => (
                                  <tr key={idx}>
                                    <td>{`2023-12-${idx + 1}`}</td>
                                    <td>{pick.rnumber}</td>
                                    <td>{pick.pnumber}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </Table>
                          </div>
                        </TabPane>
                      </TabContent>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
 

      <style>
        {`
          .random-number-box {
            border: 1px solid #374558;
            padding: 15px;
            border-radius: 13px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            margin-bottom: 10px;
            position:relative;
          }

          
        @media (max-width: 480px) {
        .filter-block h3 {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

    }


          .actions {
            display: flex;
            flex-direction: column;
            gap: 6px;
          }

          @media (max-width: 767px) {
            .random-number-box {
              flex-direction: column;
              align-items: center;
            }

            .actions {
              flex-direction: row;
              justify-content: center;
              margin-top: 10px;
            }
          }
        `}
      </style>
      </CardBody>
    </Card>
  );
};

export default NumberPickDetail;
