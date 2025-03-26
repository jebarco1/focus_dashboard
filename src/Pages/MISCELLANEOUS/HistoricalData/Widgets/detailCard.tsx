import React from "react";
import { Badge } from "reactstrap";

const NumberDetailsCard = ({
  title,
  number,
  type,
  temperature,
  classData,
  amountData,
  precentage,
}: {
  title: string;
  number: string;
  type: string;
  temperature: string;
  classData: string;
  amountData: string;
  precentage: string;
}) => (
  <div
    className="number-details-profile text-center"
    style={{
      flex: "0 0 31%",
      maxWidth: "31%",
      minWidth: "345px",
      margin: "10px",
      border: "1px solid #646464",
      borderRadius: "8px",
      padding: "16px",
    }}
  >
    <h4>{title}</h4>
    {type === "number" ? (
      <div className="NumberBall">
        <p>{number}</p>
      </div>
    ) : (
      <div className="Pattern">
        <p>[ {number} ]</p>
      </div>
    )}
    <span className="f-light d-block">Temperature</span>
    <h5 className="mt-1">{temperature}</h5>
    <div>
      <ul className="simple-list flex-row justify-content-center">
        <li>
          <div
            className={`number-item ${classData}`}
            style={{ textAlign: "center" }}
          >
            <div>
              <span className="f-14 f-light">Frequency</span>
              <h5>{amountData}</h5>
              <Badge
                pill
                className={`badge-light-${classData}`}
                color="transparent"
              >
                {precentage}
              </Badge>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default NumberDetailsCard;
