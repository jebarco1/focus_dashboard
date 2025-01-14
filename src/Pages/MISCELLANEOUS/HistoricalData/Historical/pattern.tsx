import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavItem, NavLink, TabContent, TabPane, Card, CardBody, Button, Row, Col, Collapse, Badge, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import HoverableRowsClass from "../Tables/HistoricalPatterns";

interface PatternProps {
  pattern: string;
  method: string;
  occurrences: number;
  probability: number;
  formula: string;
  notes: string;
  details: string;
  moreDetails: string;
  numbers?: number[];
  frequency?: number;
  temperature?: string;
}

const PatternCard: React.FC<{ patternData: PatternProps; index: number; onSelect: (pattern: PatternProps) => void }> = ({ patternData, index, onSelect }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <Col sm="6" md="4" className="mb-4">
      <Card className="h-100">
        <CardBody>
          <h5>{patternData.pattern}</h5>
          <p><strong>Method:</strong> {patternData.method}</p>
          <p><strong>Occurrences:</strong> {patternData.occurrences}</p>
          <p><strong>Probability:</strong> {patternData.probability.toFixed(2)}%</p>
          <p><strong>Formula:</strong> {patternData.formula}</p>
          <p><strong>Notes:</strong> {patternData.notes}</p>

          <Button color="primary" onClick={() => onSelect(patternData)} className="mt-2">
            View Details
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

const LotteryPatternsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('1');
  const [selectedPattern, setSelectedPattern] = useState<PatternProps | null>(null);

  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

  const [isOpen, setIsOpen] = useState(false);

const toggleCollapse = () => {
      setIsOpen(!isOpen);
    };

  useEffect(() => {
    setSelectedPattern(patterns[0]);
    toggle('3');
  }, []);


  const patterns: PatternProps[] = [
    {
      pattern: 'Consecutive Numbers: 12-13-14',
      method: 'Frequency Analysis',
      occurrences: 5,
      probability: 15.75,
      details: '<p>The <strong>Consecutive Numbers</strong> pattern in lottery analysis focuses on sequences where drawn numbers appear in direct numerical order, such as <strong>12-13-14</strong> or <strong>25-26</strong>. This pattern is intriguing because it challenges the widely held belief that lottery draws are entirely random, suggesting that consecutive numbers might appear more frequently than assumed.</p><p>Consecutive numbers occur when two or more numbers in a draw are sequential. This pattern is common in lottery games due to the nature of random number generation. For example, in a lottery where numbers range from 1 to 70, drawing a sequence like <strong>33-34-35</strong> is as statistically possible as drawing <strong>7-19-42</strong>.</p><p>Many players avoid picking consecutive numbers, assuming they are less likely to appear. However, historical data from lotteries like Powerball and Mega Millions often show occurrences of consecutive pairs or even triplets. Understanding this pattern can give players a different perspective on number selection, potentially challenging traditional strategies.</p>',
      notes: 'Common in sequences where draws are influenced by previous outcomes.',
      formula: 'P = (Occurrences / Total Draws) * 100',
      moreDetails: 'Detailed formula explanation...',
      numbers: [12, 13, 14],
      frequency: 5,
      temperature: 'Hot'
    },
    {
      pattern: 'Odd/Even Split: 3 Odd, 2 Even',
      method: 'Statistical Distribution',
      occurrences: 8,
      probability: 22.43,
      details: '<p>The <strong>Odd/Even Split</strong> pattern divides the selected numbers into odd and even categories, revealing balance or imbalance. For example, a set like <strong>3, 5, 7, 2, 4</strong> contains <strong>3 odd</strong> and <strong>2 even</strong> numbers. Historically, balanced splits like <strong>3 odd</strong> and <strong>2 even</strong> tend to appear more often in lottery draws.</p><p>This pattern helps players understand distribution trends and can be used to form more strategic selections. Including both odd and even numbers, rather than favoring one, could improve odds.</p><p>Example: <strong>7, 9, 11, 14, 16</strong> shows an <strong>Odd/Even Split</strong> of <strong>3 Odd</strong> and <strong>2 Even</strong>, aligning with common lottery outcomes.</p>',
      notes: 'Balanced distributions are statistically more common over time.',
      formula: 'P = (Occurrences / Total Draws) * 100',
      moreDetails: 'Detailed formula explanation...',
      numbers: [3, 5, 7, 2, 4],
      frequency: 8,
      temperature: 'Hot'
    },
    {
      pattern: 'High/Low Split: High 3, Low 2',
      method: 'Range Analysis',
      occurrences: 6,
      probability: 18.92,
      details: '<p>The <strong>High/Low Split</strong> pattern divides numbers into high and low halves. For example, in a draw like <strong>6, 12, 35, 67, 1</strong>, the split is <strong>High 3</strong> and <strong>Low 2</strong>. High numbers are <strong>35, 67, 12</strong>, while low numbers are <strong>6</strong> and <strong>1</strong>.</p><p>Historically, balanced high/low splits occur frequently, reflecting a natural distribution. Tracking this pattern can guide number selection strategies for better balance.</p><p>Example: <strong>15, 28, 33, 45, 50</strong> results in a <strong>High 3, Low 2</strong> split, aligning with frequent lottery trends.</p>',
      notes: 'Split patterns align with historical number distributions.',
      formula: 'P = (Occurrences / Total Draws) * 100',
      moreDetails: 'Detailed formula explanation...',
      numbers: [35, 67, 12, 6, 1],
      frequency: 6,
      temperature: 'Warm'
    }
  ];
  


  const patternOptions = [
    { label: '[5, 10, 15]', value: [5, 10, 15] },
    { label: '[3, 7, 9]', value: [3, 7, 9] },
    { label: '[20, 45, 60]', value: [20, 45, 60] }
  ];


  return (
    <div className="patterns">
      <button
         className="btn btn-primary mb-3"
         onClick={toggleCollapse}
         aria-expanded={isOpen}
         aria-controls="animatedDiv"
      >
        Select a Pattern [ Current : 12-13-14 ] 
      </button>

      <div className={`animated-collapse ${isOpen ? 'open' : ''} lotteryPatternSelectTable` } id="animatedDiv">
        <div className="card card-body">
        <HoverableRowsClass />
        </div>
      </div>





      <Row className="mb-4">
        {patterns.map((pattern, index) => (
          <PatternCard key={index} patternData={pattern} index={index} onSelect={setSelectedPattern} />
        ))}
      </Row>
      {selectedPattern && (
        <div className="mt-5">
          <Nav tabs>
            <NavItem>
              <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => toggle('2')}>
                Detailed Analysis
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={activeTab === '4' ? 'active' : ''} onClick={() => toggle('4')}>
                Associated Numbers
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => toggle('3')}>
                Notes
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>

            <TabPane tabId="2">
                <Card className="mt-3">
                    <CardBody>
                    <h5>Detailed Analysis for {selectedPattern.pattern}</h5>
                    <p><strong>Method Used:</strong> {selectedPattern.method}</p>
                    <p><strong>Occurrences:</strong> {selectedPattern.occurrences}</p>
                    <p><strong>Probability:</strong> {selectedPattern.probability.toFixed(2)}%</p>
                    <p><strong>Formula:</strong> {selectedPattern.formula}</p>
                    </CardBody>
                </Card>
           </TabPane>

           <TabPane tabId="3">
            <Card className="mt-3">
                <CardBody>
               <div dangerouslySetInnerHTML={{ __html: selectedPattern.details }} />
          
                </CardBody>
            </Card>
            </TabPane>


            <TabPane tabId="4">
  <Card className="mt-3">
    <CardBody>
      {selectedPattern.numbers?.map((num, i) => (
        <Card key={i} className="mb-3">
          <CardBody>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <span><h5>Number: {num}</h5></span>
              <span><strong>Frequency:</strong> {selectedPattern.frequency}</span>
              <span><strong>Temperature:</strong> {selectedPattern.temperature}</span>
              <span><strong>Number Pairs:</strong> [6, 7]</span>
              <span> <Link to={`../pages/HistoricalDataByNumber?number=${num}`} style={{ color: 'white', textDecoration: 'none' }}>
                    <Button color="secondary">More Details</Button></Link>
            </span>
            </div>
            <div>              <span><strong>Notes:</strong> {selectedPattern.notes}</span></div>
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
