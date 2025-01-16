import React, { useEffect, useState } from 'react';
import { Col, Card, CardHeader, CardBody, Table, Nav, NavItem, NavLink, TabContent, TabPane, Button } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

// Define the type for draw results
interface DrawResults {
  date: string;
  numbers: string;
  bonus: string;
  jackpot: string;
  numberPairs: string[][];
  oddEvenCount: {
    odd: number;
    even: number;
  };
  patternsFound: string[];
  hotColdStatus: {
    [key: string]: string;
  };
}

const PowerballResults = () => {
  const [drawResults, setDrawResults] = useState<DrawResults | null>(null);
  const [activeTab, setActiveTab] = useState<string>('2');

  useEffect(() => {
    // Using static data with additional analysis
    const staticData: DrawResults = {
      date: 'January 13, 2024',
      numbers: '10, 24, 35, 56, 65',
      bonus: '17',
      jackpot: '$550 Million',
      numberPairs: [['10', '24'], ['35', '56'], ['56', '65']],
      oddEvenCount: {
        odd: 2,
        even: 3
      },
      patternsFound: ['Increasing sequence', 'No consecutive numbers', '[5,10]'],
      hotColdStatus: {
        '10': 'hot',
        '24': 'cold',
        '35': 'hot',
        '56': 'cold',
        '65': 'hot',
        '17': 'cold'
      }
    };

    setDrawResults(staticData);
  }, []);

  if (!drawResults) {
    return <div>Loading...</div>;
  }

  const toggleTab = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Col lg={12}>
      <Card>
        <CardHeader className="faq-header pb-0">
          <h3 className="d-inline-block m-0">Latest Powerball Drawing Results</h3>
        </CardHeader>
        <CardBody className="faq-body">
          <p>Draw Date: {drawResults.date}</p>
          <p>Winning Numbers: {drawResults.numbers}</p>
          <p>Powerball: {drawResults.bonus}</p>
          <p>Jackpot: {drawResults.jackpot}</p>

          <Nav tabs>
            <NavItem>
              <NavLink className={classnames({ active: activeTab === '2' })} onClick={() => toggleTab('2')}>
                Number Analysis
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={classnames({ active: activeTab === '3' })} onClick={() => toggleTab('3')}>
                Hot/Cold Status
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="2">
              <Table bordered>
                <thead>
                  <tr>
                    <th>Number Pairs</th>
                    <th>Odd Numbers</th>
                    <th>Even Numbers</th>
                    <th>Patterns Found</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{drawResults.numberPairs.map(pair => pair.join(' & ')).join(', ')}</td>
                    <td>{drawResults.oddEvenCount.odd}</td>
                    <td>{drawResults.oddEvenCount.even}</td>
                    <td>{drawResults.patternsFound.join(', ')}</td>
                    <td>
                      <Button color="info" size="sm">
                        <Link to={`../pages/Patterns?pattern=${encodeURIComponent('[5,10]')}`} style={{ color: 'white', textDecoration: 'none' }}>
                          Details
                        </Link>
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <p><strong>Note:</strong> This section analyzes the draw numbers for patterns.</p>
            </TabPane>
            <TabPane tabId="3">
              <Table bordered>
                <thead>
                  <tr>
                    <th>Number</th>
                    <th>Status</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(drawResults.hotColdStatus).map(([number, status]) => (
                    <tr key={number}>
                      <td>{number}</td>
                      <td>{status}</td>
                      <td>
                        <Button color="info" size="sm">
                          <Link to={`../pages/HistoricalDataByNumber?number=${number}`} style={{ color: 'white', textDecoration: 'none' }}>
                            Details
                          </Link>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <p><strong>Note:</strong> This section shows hot and cold numbers based on frequency.</p>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PowerballResults;
