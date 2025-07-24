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
import PowerBallResults from "./PowerBallResults";
import { useAppSelector, useAppDispatch } from "../../../../ReaduxToolkit/Hooks";
import classnames from "classnames";

type LotteryType = "mega" | "powerball";

interface NumberPick {
    formated_date: string;
    Jackpot: string;
    pnumber: number;
    Numbers_In_Order: string;
    MB: number;
  }

const NumberPickDetail: React.FC= () => {
  const [activeDetailIndex, setActiveDetailIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("1");
  const dispatch = useAppDispatch();


  //const numberResultGroup = useAppSelector((state) => state.numberPicks.value);

  const numberResultGroup: NumberPick[] = useAppSelector((state) => state.lotterySeaarchResults.data) || [];

 
 
  const numberPickHotCold = useAppSelector((state) => state.hotCold.value);
  const selectedLotteryRaw = useAppSelector((state) => state.lotterySelect.value).toLowerCase() as LotteryType;
  const drawDataLast = useAppSelector((state) => state.lastDrawings[selectedLotteryRaw]);
 
   const lotterySelectBall = selectedLotteryRaw === "mega" ? "Mega Ball" : "Powerball";
 
   if (!drawDataLast) return <div>Loading...</div>;
 
   const drawSets = Array.isArray(drawDataLast.numbers)
   ? drawDataLast.numbers
   : [drawDataLast.numbers];
 
 // Format each draw set into white numbers and power numbers
 const parsedDraws = drawSets.map((set: string) => {
   const nums = set.split(",").map((n) => parseInt(n.trim(), 10));
   return {
     whiteBalls: nums.slice(0, 5),
     powerBalls: nums.slice(5),
   };
 });

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
          <h3>Search Results </h3>
          <div>
            {numberResultGroup?.map((pick, index) => {
              const pickedNumbers = pick.Numbers_In_Order.split("--").map((n: string) => parseInt(n.trim(), 10));
              const matchedDraw = parsedDraws.find(draw =>
                draw.whiteBalls.some((n) => pickedNumbers.includes(n)) ||
                draw.powerBalls.includes(pick.MB)
              );
              
              const matchedWhiteBalls = matchedDraw
                ? pickedNumbers.filter((n) => matchedDraw.whiteBalls.includes(n)).length
                : 0;
              
              const matchedPowerBall = matchedDraw
                ? matchedDraw.powerBalls.includes(pick.MB)
                : false;

              return (
                <div key={index} className="random-number-box">
                  <div className="numberContainer">
                  <div><p>Drawing Date : {pick.formated_date}</p><p>JackPot : {pick.Jackpot}</p>  </div>
                    <div className="selectNumber">
                        
                      {pickedNumbers.map((num, idx) => {
                        const isMatch = parsedDraws.some(draw => draw.whiteBalls.includes(num));
                        return (
                          <button
                            key={idx}
                            className={`btn m-1 ${isMatch ? "btn-warning" : "btn-success"}`}
                          >
                            {num}{" "}
                            <span
                              className={"hotCold " + hotColdStatus(num)}
                            ></span>
                          </button>
                        );
                      })}

                      <button
                        className={`btn m-1 ${
                          matchedPowerBall ? "btn-warning" : "btn-secondary"
                        }`}
                      >
                        {pick.MB}{" "}
                        <span className={"hotCold " + hotColdStatus(pick.MB)}></span>
                      </button>

                  
                       
                      
                    </div>

                 
                  </div>

                  <PowerBallResults 
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
      </CardBody>

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
    </Card>
  );
};

export default NumberPickDetail;
