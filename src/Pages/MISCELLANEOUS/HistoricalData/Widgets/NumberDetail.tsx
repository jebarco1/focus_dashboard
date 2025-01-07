import React, { useState } from "react";
import { Card, CardBody, Col, Badge } from "reactstrap";
import { H5, LI, UL } from "../../../../AbstractElements";
import { useAppSelector } from "../../../../ReaduxToolkit/Hooks";

import RegularNumbers from './NumberDetailsTabRegular';
import PowerballNumbers from './NumberDetailsTabPowerBall';

// Define the Pattern and NumberDetails interfaces
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

const YourBalance: React.FC = () => {
  // Use type assertion to handle state mismatch
  const numberDetails = useAppSelector((state) =>
    (state as any).numberDetailsTable.value
  ) as Partial<NumberDetails>;

  // Extract data with fallback values
  const numberValue = numberDetails?.number?.number || " ";
  const temperature = numberDetails?.number?.temp || "No Data Available";
  const classData = numberDetails?.number?.class || "No Data Available";
  const amountData = numberDetails?.number?.amount || "No Data Available";
  const badgeData = numberDetails?.number?.badge || "No Data Available";
  const patterns = numberDetails?.patterns || {};

  // Convert patterns object to entries
  const patternEntries = Object.entries(patterns) as [string, Pattern][];
 

  return (
    <Col className="numberDetailsCol">
      <Card className="balance-box height-equal-2">
        <div className="pb-0 card-header">
          <h3 className="mb-0">Number Details</h3>
        </div>
        <CardBody className="d-flex">


    


          <div className="balance-profile">
          <h4>Main Number Details</h4>
            {/* Display the main number */}
            <div className="NumberBall">
              <p>{numberValue}</p>
            </div>
            <span className="f-light d-block">Temperature</span>
            <H5 className="mt-1">{temperature}</H5>

            {/* Display frequency and badge */}
            <div>
              <UL className="simple-list flex-row">
                <LI>
                  <div className={`balance-item ${classData}`}>
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


          <div className="balance-profile">
            {/* Display the main number */}
            <h4>Powerball Number Details</h4>
            <div className="NumberBall">
              <p>{numberValue}</p>
            </div>
            <span className="f-light d-block">Temperature</span>
            <H5 className="mt-1">{temperature}</H5>

            {/* Display frequency and badge */}
            <div>
              <UL className="simple-list flex-row">
                <LI>
                  <div className={`balance-item ${classData}`}>
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



            {/* Display patterns */}
            <div  className="balance-profile balance-pattern">
                <h3>Patterns</h3>
                {patternEntries.length > 0 ? (
                  patternEntries.map(([key, pattern], index) => (
                    <div className="patterns" key={index}>
                      <p>
                        Pattern found <strong>{pattern.count}</strong> times +<strong>{pattern.difference} [ {key} ]</strong>
                
                      <button className="btn btn-primary">Details</button>
                      </p>
                    </div>
                  ))
                ) : (
                  <p>No patterns available</p>
                )}
              </div>
              
        </CardBody>
      </Card>
      <Card>
        <RegularNumbers />
      </Card>
      <Card>
        <PowerballNumbers />
      </Card>
    </Col>
  );
};

export default YourBalance;
