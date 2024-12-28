import { Container, Row, Col,Card, CardBody } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { HistoricalHeading } from "../../../utils/Constant";


import React, { useState, useEffect } from 'react';

import ProductDetails from "./NumberPicker/NumberPickerDetails"
import NumberPickDetail from "./NumberPicker/numberPickDetail";
import PatternPredictor from "./NumberPicker/PatternPredictor";


import PowerballNumberSelector from "./NumberPicker/PowerballNumberSelector";

const NumberPicker = () => {


    let regNumbers = Array.from(Array(70).keys());
    let regMainNumbers = Array.from(Array(27).keys());
  

     const [numberPicks, setNumberPicks] = useState<{ rnumber: string , pnumber: number}[]>([]);



        
      const [numberPickHotCold, setnumberPickHotCold] = useState([
        { number : 3, temp : 'Hot'},
        { number : 5, temp : 'Cold'},
        { number : 11, temp : 'Cold'},
        { number : 14, temp : 'Cold'},
        { number : 22, temp : 'Hot'},
        { number : 44, temp : 'Hot'},
        { number : 31, temp : 'Hot'},
        { number : 24, temp : 'Hot'},
        { number : 12, temp : 'Hot'},
        { number : 18, temp : 'Hot'},
        { number : 19, temp : 'Hot'},
        { number : 44, temp : 'Hot'},
        { number : 53, temp : 'Hot'},
    
        ]);
    
        const [selectedRegularNumbers, setSelectedRegularNumbers] = useState<number[]>([]);
        const [selectedPowerball, setSelectedPowerball] = useState<number>(0);
          const [generatedNumbers, setGeneratedNumbers] = useState<
            { numbers: number[]; powerball: number }[]
          >([]);
          const [generationMethod, setGenerationMethod] = useState<string>("");
        
          const handleRegularNumberClick = (number: number) => {
        
            setSelectedRegularNumbers((prev) =>
              prev.includes(number)
                ? prev.filter((n) => n !== number)
                : prev.length < 5
                ? [...prev, number]
                : prev
            );

          };
        
   

  return (
    <>
      <Breadcrumbs
        mainTitle={HistoricalHeading}
        parent={HistoricalHeading}
        title={HistoricalHeading}
      />
     <Container fluid>
        <div>
          <Row className="product-page-main p-0">
            <Col xxl="4" md="6" className="box-col-12">
            <Col>
                        <Card >
                        <CardBody>
                        <PowerballNumberSelector  numberPickHotCold={numberPickHotCold} selectedRegularNumbers={selectedRegularNumbers}  setSelectedRegularNumbers={setSelectedRegularNumbers} selectedPowerball={selectedPowerball} setSelectedPowerball={setSelectedPowerball}/>
                        </CardBody>
                        </Card>
                    </Col>
            </Col>
            <Col xxl="5" className="box-col-6 order-xxl-0 order-1">
              <ProductDetails setNumberPicks={setNumberPicks} selectedRegularNumbers={selectedRegularNumbers} setSelectedPowerball={setSelectedPowerball} selectedPowerball={selectedPowerball} numberPickHotCold={numberPickHotCold}/>
            </Col>
            <Col xxl="3" md="6" className="box-col-6">
            <NumberPickDetail setNumberPicks= {setNumberPicks} numberPicks={numberPicks} />
            <PatternPredictor setNumberPicks={setNumberPicks} selectedRegularNumbers={selectedRegularNumbers}/>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default NumberPicker;
