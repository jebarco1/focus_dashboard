import React from "react";
import { Card, CardBody, Col, Badge } from "reactstrap";
import { H5, LI, UL } from "../../../../AbstractElements";
import { useAppSelector } from "../../../../ReaduxToolkit/Hooks";

import RegularNumbers from "./NumberDetailsTabRegular";
import PowerballNumbers from "./NumberDetailsTabPowerBall";

interface Pattern {
  count: number;
  difference: number;
}

interface NumberDetails {
  number: {
    number: string;
    temp: string;
    class: string;
    amount: string;
    badge: string;
  };
  patterns?: Record<string, Pattern>;
}

const PatternList = ({ patterns }: { patterns: Record<string, Pattern> }) => {
  const patternEntries = Object.entries(patterns) as [string, Pattern][];

  return (
    <div  className="number-details-profile text-center"
    style={{
      flex: "0 0 31%",
      maxWidth: "31%",
      margin: "0 auto",
      border: "1px solid #646464",
      borderRadius: "8px",
      padding: "16px",
    }}>
      <h3>Patterns</h3>
      {patternEntries.length > 0 ? (
        patternEntries.map(([key, pattern], index) => (
          <div className="patterns" key={index}>
            <p>
              Found <strong>{pattern.count}</strong> times +{" "}
              <strong>{pattern.difference}</strong> [ {key} ]
              <button
                className="btn btn-primary ms-3"
                style={{
                  width: "100px",
                  margin: "8px auto",
                  border: "1px solid darkgray",
                  borderRadius: "8px",
                  padding: "8px",
                }}
              >
                Details
              </button>
            </p>
          </div>
        ))
      ) : (
        <p>No patterns available</p>
      )}
    </div>
  );
};

const NumberDetailsCard = ({
  title,
  number,
  temperature,
  classData,
  amountData,
  badgeData,
}: {
  title: string;
  number: string;
  temperature: string;
  classData: string;
  amountData: string;
  badgeData: string;
}) => (
  <div
    className="number-details-profile text-center"
    style={{
      flex: "0 0 31%",
      maxWidth: "31%",
      margin: "0 auto",
      border: "1px solid #646464",
      borderRadius: "8px",
      padding: "16px",
    }}
  >
    <h4>{title}</h4>
    <div className="NumberBall">
      <p>{number}</p>
    </div>
    <span className="f-light d-block">Temperature</span>
    <H5 className="mt-1">{temperature}</H5>
    <div>
      <UL className="simple-list flex-row justify-content-center">
        <LI>
          <div
            className={`number-item ${classData}`}
            style={{ textAlign: "center" }}
          >
            <div>
              <span className="f-14 f-light">Frequency</span>
              <H5>{amountData}</H5>
              <Badge
                pill
                className={`badge-light-${classData}`}
                color="transparent"
              >
                {badgeData}
              </Badge>
            </div>
          </div>
        </LI>
      </UL>
    </div>
  </div>
);

const NumberDetailComponent: React.FC = () => {
  const numberDetails = useAppSelector((state) =>
    (state as any).numberDetailsTable.value
  ) as Partial<NumberDetails>;

  const numberValue = numberDetails?.number?.number || " ";
  const temperature = numberDetails?.number?.temp || "No Data Available";
  const classData = numberDetails?.number?.class || "No Data Available";
  const amountData = numberDetails?.number?.amount || "No Data Available";
  const badgeData = numberDetails?.number?.badge || "No Data Available";
  const patterns = numberDetails?.patterns || {};

  return (
    <Col className="number-details-col">
      <Card className="number-details-box height-equal-2" style={{ marginBottom: "20px" }}>
        <div className="pb-0 card-header text-center">
          <h3 className="mb-0">Number Details</h3>
        </div>
        <CardBody className="d-flex flex-wrap justify-content-center balance-profile balance-pattern" style={{width:"100%",border:"none"}}>
          <NumberDetailsCard
            title="Main Number"
            number={numberValue}
            temperature={temperature}
            classData={classData}
            amountData={amountData}
            badgeData={badgeData}
          />
          <NumberDetailsCard
            title="Powerball Number"
            number={numberValue}
            temperature={temperature}
            classData={classData}
            amountData={amountData}
            badgeData={badgeData}
          />
          <PatternList patterns={patterns} />
        </CardBody>
      </Card>
      <Card style={{ marginBottom: "20px" }}>
        <RegularNumbers />
      </Card>
      <Card style={{ marginBottom: "20px" }}>
        <PowerballNumbers />
      </Card>
    </Col>
  );
};

export default NumberDetailComponent;
