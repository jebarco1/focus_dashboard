import { Card, CardBody } from "reactstrap";
import { H3, LI, UL } from "../../../../AbstractElements";
import { Brand } from "../../../../utils/Constant";


import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../../../../ReaduxToolkit/Hooks";
import { fetchHotColdData } from "../../../../ReaduxToolkit/Reducer/numberPickHotCold";
import { fetchLast30Drawings } from "../../../../ReaduxToolkit/Reducer/last30Drawings";

// Props definition
interface numberPickDetailProps {
    numberPicks: { number: number; temp: string }[];
  }


  const numberPickDetail: React.FC<numberPickDetailProps> = ({numberPicks}) => {

    const dispatch = useAppDispatch();
    const { value, loading, error } = useAppSelector((state) => state.hotCold);
  
  

  return (
    <Card>
      <CardBody>
        <div className="filter-block">
          <H3>{Brand}</H3>
          <UL className="simple-list">
            <LI className="pt-3">{'Clothing'}</LI>
            <LI className="pt-3">{'Bags'}</LI>
            <LI className="pt-3">{'Footwear'}</LI>
            <LI className="pt-3">{'Watches'}</LI>
            <LI className="pt-3">{'ACCESSORIES'}</LI>
          </UL>
        </div>
      </CardBody>
    </Card>
  );
};

export default numberPickDetail;
