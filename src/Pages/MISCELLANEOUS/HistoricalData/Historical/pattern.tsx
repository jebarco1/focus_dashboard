import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Card,
  CardBody,
  Button,
  Row,
  Col,
} from "reactstrap";
import { useAppDispatch, useAppSelector } from "../../../../ReaduxToolkit/Hooks"; // Custom hooks
import { fetchPatterns } from "../../../../ReaduxToolkit/Reducer/getPatternDetails";
import { useLocation, Link } from "react-router-dom";

const PatternCard: React.FC<{
  patternData: any;
  index: number;
  onSelect: (pattern: any) => void;
}> = ({ patternData, index, onSelect }) => (
  <Col sm="6" md="4" className="mb-4">
    <Card className="h-100">
      <CardBody>
        <h5>{patternData.pattern}</h5>
        <p>
          <strong>Method:</strong> {patternData.method}
        </p>
        <p>
          <strong>Occurrences:</strong> {patternData.occurrences}
        </p>
        <p>
          <strong>Probability:</strong> {patternData.probability.toFixed(2)}%
        </p>
        <p>
          <strong>Formula:</strong> {patternData.formula}
        </p>
        <p>
          <strong>Notes:</strong> {patternData.notes}
        </p>
        <Button
          color="primary"
          onClick={() => onSelect(patternData)}
          className="mt-2"
        >
          View Details
        </Button>
      </CardBody>
    </Card>
  </Col>
);

const LotteryPatternsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { patterns, loading, error } = useAppSelector(
    (state) => state.getPatternDetail
  );
  const location = useLocation();

  const [activeTab, setActiveTab] = useState<string>("1");
  const [selectedPattern, setSelectedPattern] = useState<any | null>(null);

  // Function to toggle the active tab
  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  // Function to extract query parameters
  const getQueryParam = (param: string): string | null => {
    const queryParams = new URLSearchParams(location.search);
    return queryParams.get(param);
  };

  useEffect(() => {
    const pattern = getQueryParam("pattern"); // Extract the pattern from the URL
    dispatch(fetchPatterns(pattern)); // Pass the pattern to the thunk

    setSelectedPattern(patterns[0]);
    toggle('3');

    
  }, [dispatch, location.search]); // Re-run when the query string changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="patterns">
      <Row className="mb-4">
        {patterns.length > 0 ? (
          patterns.map((pattern, index) => (
            <PatternCard
              key={index}
              patternData={pattern}
              index={index}
              onSelect={setSelectedPattern}
            />
          ))
        ) : (
          <div>No patterns available.</div>
        )}
      </Row>
      {selectedPattern && (
        <div className="mt-5">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={activeTab === "2" ? "active" : ""}
                onClick={() => toggle("2")}
              >
                Detailed Analysis
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={activeTab === "4" ? "active" : ""}
                onClick={() => toggle("4")}
              >
                Associated Numbers
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={activeTab === "3" ? "active" : ""}
                onClick={() => toggle("3")}
              >
                Notes
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="2">
              <Card className="mt-3">
                <CardBody>
                  <h5>Detailed Analysis for {selectedPattern.pattern}</h5>
                  <p>
                    <strong>Method Used:</strong> {selectedPattern.method}
                  </p>
                  <p>
                    <strong>Occurrences:</strong> {selectedPattern.occurrences}
                  </p>
                  <p>
                    <strong>Probability:</strong>{" "}
                    {selectedPattern.probability.toFixed(2)}%
                  </p>
                  <p>
                    <strong>Formula:</strong> {selectedPattern.formula}
                  </p>
                </CardBody>
              </Card>
            </TabPane>
            <TabPane tabId="3">
              <Card className="mt-3">
                <CardBody>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: selectedPattern.details,
                    }}
                  />
                </CardBody>
              </Card>
            </TabPane>
            <TabPane tabId="4">
              <Card className="mt-3">
                <CardBody>
                {selectedPattern.numbers?.map((num: number, i: number) => (
                  <Card key={i} className="mb-3">
                    <CardBody>
                      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                        <span><h5>Number: {num}</h5></span>
                        <span><strong>Frequency:</strong> {selectedPattern.frequency}</span>
                        <span><strong>Temperature:</strong> {selectedPattern.temperature}</span>
                        <span><strong>Number Pairs:</strong> [6, 7]</span>
                        <span>
                          <Link
                            to={`../pages/HistoricalDataByNumber?number=${num}`}
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            <Button color="secondary">More Details</Button>
                          </Link>
                        </span>
                      </div>
                      <div>
                        <span><strong>Notes:</strong> {selectedPattern.notes}</span>
                      </div>
                    </CardBody>
                  </Card>
                ))}
                                </CardBody>
              </Card>
            </TabPane>
          </TabContent>
        </div>
      )}
    </div>
  );
};

export default LotteryPatternsPage;
