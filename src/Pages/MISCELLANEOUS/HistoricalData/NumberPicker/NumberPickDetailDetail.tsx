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
import { useAppSelector, useAppDispatch } from "../../../../ReaduxToolkit/Hooks";
import classnames from "classnames";
import { Link } from "react-router-dom";

const NumberPickDetail: React.FC = () => {
  const [activeDetailIndex, setActiveDetailIndex] = useState<number | null>(
    null
  );
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
            {numberPicks.map((pick, index) => (
              <div key={index} className="random-number-box">
                {/* ✅ Left Side: Numbers */}
                <div className="numberContainer">
                  <div className="selectNumber">
                    {pick.rnumber.split(",").map((num, idx) => (
                      <button key={idx} className="btn btn-success m-1">
                        {num.trim()}{" "}
                        <span
                          className={"hotCold " + hotColdStatus(parseInt(num.trim(), 10))}
                        ></span>
                      </button>
                    ))}
                    <button className="btn btn-secondary m-1">
                      {pick.pnumber}{" "}
                      <span className={"hotCold " + hotColdStatus(pick.pnumber)}></span>
                    </button>
                  </div>
                </div>

                {/* ✅ Right Side: Details */}
                <div className="numberDetailDetail">
                  <span className="numberListDetails">
                    <h5>Temperature</h5>
                    <p>{hotColdStatus(parseInt(pick.rnumber.split(",")[0], 10))}</p>
                  </span>
                  <span className="numberListDetails">
                    <h5>Probability</h5>
                    <p>75.4%</p>
                  </span>
                  <span className="numberListDetails">
                    <h5>Patterns</h5>
                    <p>4 Found</p>
                  </span>

                  {/* ✅ Action Buttons */}
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

                {/* ✅ Details Section (Only Visible When Expanded) */}
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
                      {/* ✅ Detailed Analysis */}
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
                              {pick.rnumber.split(",").map((num, idx) => (
                                <tr key={idx}>
                                  <td>{num.trim()}</td>
                                  <td>{hotColdStatus(parseInt(num.trim(), 10))}</td>
                                  <td>{parseInt(num.trim(), 10) % 2 === 0 ? "Even" : "Odd"}</td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        </div>
                      </TabPane>

                      {/* ✅ Number Pairs */}
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
                              {pick.rnumber.split(",").map((num, idx) => (
                                <tr key={idx}>
                                  <td>{`${num.trim()} & ${pick.pnumber}`}</td>
                                  <td>{Math.floor(Math.random() * 10) + 1}</td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        </div>
                      </TabPane>

                      {/* ✅ Similar Drawings */}
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
            ))}
          </div>
        </div>
      </CardBody>

      {/* ✅ Responsive Design */}
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
          }

          .table-responsive {
            overflow-x: auto;
          }

          @media (max-width: 767px) {
            .random-number-box {
              flex-direction: column;
              align-items: center;
            }

            .table-responsive {
              max-width: 100%;
              overflow-x: scroll;
            }
          }
        `}
      </style>
    </Card>
  );
};

export default NumberPickDetail;
