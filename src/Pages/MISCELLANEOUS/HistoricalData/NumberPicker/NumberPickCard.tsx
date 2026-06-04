import React from "react";
import {
  Button,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Table,
} from "reactstrap";
import classnames from "classnames";
import NumberDetailBlock from "./NumberDetailBlock";

type Props = {
  pick: {
    rnumber: string;
    pnumber: number;
  };
  index: number;
  isActive: boolean;
  activeTab: string;
  onRemove: (index: number) => void;
  onDetails: (index: number) => void;
  onTabToggle: (tab: string) => void;
  hotColdStatus: (inputNumber: number) => string;
  calculateHotColdProbability: (numbers: number[], powerball: number) => string;
  determineOverallHotColdStatus: (numbers: number[], powerball: number) => string;
  mapToTempCategory: (status: string) => "Hot" | "Moderate" | "Cool";

  // Optional for Save mode
  allowSave?: boolean;
  onSave?: () => void;

  // Optional override for powerball temp logic
  hotColdYellowStatus?: (inputNumber: number) => string;
};

const NumberPickCard: React.FC<Props> = ({
  pick,
  index,
  isActive,
  activeTab,
  onRemove,
  onDetails,
  onTabToggle,
  hotColdStatus,
  calculateHotColdProbability,
  determineOverallHotColdStatus,
  mapToTempCategory,
  allowSave = false,
  onSave,
  hotColdYellowStatus,
}) => {
  const whiteBalls = pick.rnumber.split(",").map((n) => parseInt(n.trim(), 10));
  const powerball = pick.pnumber;

  const confidence = `${calculateHotColdProbability(whiteBalls, powerball)}%`;
  const probability = `${(Math.random() * 100).toFixed(0)}%`;
  const score = `${(Math.random() * 100).toFixed(0)}%`;
  const temperature = mapToTempCategory(
    determineOverallHotColdStatus(whiteBalls, powerball)
  );

  return (
    <div className="random-number-box">
      <div className="numberContainer">
        <div className="selectNumber">
          {whiteBalls.map((num, idx) => (
            <button key={idx} className="btn btn-success">
              {num}
              <span className={"hotCold " + hotColdStatus(num)}></span>
            </button>
          ))}
          <button className="btn btn-danger">
            {powerball}
            <span className={"hotCold " + (hotColdYellowStatus?.(powerball) || hotColdStatus(powerball))}></span>
          </button>
        </div>
      </div>

      <div className="numberDetailDetail">
        <NumberDetailBlock
          confidence={confidence}
          probability={probability}
          score={score}
          temperature={temperature}
        />
      </div>

      <div className="numberPickerActions mt-2 text-center">
        {allowSave && onSave ? (
          <Button color="primary" className="numberSave save-button" onClick={onSave}>
            Save
          </Button>
        ) : (
          <Button color="danger" className="btn btn-sm" onClick={() => onRemove(index)}>
            Delete
          </Button>
        )}
      </div>

      {isActive && (
        <div className="moreDetails animate__animated animate__fadeInDown animate__slower mt-2 p-2 border-top">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => onTabToggle("1")}
              >
                Analysis
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => onTabToggle("2")}
              >
                Pairs
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "3" })}
                onClick={() => onTabToggle("3")}
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
                    {whiteBalls.map((num, idx) => (
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
                    {whiteBalls.map((num, idx) => (
                      <tr key={idx}>
                        <td>{`${num} & ${powerball}`}</td>
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
};

export default NumberPickCard;
