import React, { useEffect } from 'react';
import { useAppDispatch } from "../../ReaduxToolkit/Hooks";
import SearchBar from './SearchBar/topButtons';
import { Row } from 'reactstrap';
import RightHeader from './RightHeader/RightHeader';
import { fetchHotColdData } from "../../ReaduxToolkit/Reducer/numberPickHotCold";
import { fetchhotColdYellowData } from "../../ReaduxToolkit/Reducer/numberPickHotColdYellow";
import { fetchLast30Drawings } from '../../ReaduxToolkit/Reducer/last30Drawings';

const Index = () => {
  const dispatch = useAppDispatch(); // Move useAppDispatch into the component body

  useEffect(() => {
    dispatch(fetchHotColdData());
    dispatch(fetchhotColdYellowData());
    dispatch(fetchLast30Drawings());
  }, [dispatch]);

  return (
    <Row className="header-wrapper m-0">
      <SearchBar />
      <RightHeader />
    </Row>
  );
}

export default Index;
