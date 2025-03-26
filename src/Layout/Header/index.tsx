import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "../../ReaduxToolkit/Hooks";
import TopButtons from './UserProfile/topButtons';
import { Row } from 'reactstrap';
import RightHeader from './RightHeader/RightHeader';
import { fetchHotColdData } from "../../ReaduxToolkit/Reducer/numberPickHotCold";
import { fetchhotColdYellowData } from "../../ReaduxToolkit/Reducer/numberPickHotColdYellow";
import { fetchLast30Drawings } from '../../ReaduxToolkit/Reducer/last30Drawings';

const Index = () => {
  const { user, token } = useAppSelector((state) => state.auth);
  const [userData, setUserData] = useState<{ firstName: string; lastName: string; level_of_access: number } | null>(null);
  const dispatch = useAppDispatch(); // Move useAppDispatch into the component body

  useEffect(() => {
    dispatch(fetchHotColdData());
    dispatch(fetchhotColdYellowData());
    dispatch(fetchLast30Drawings());

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserData(parsedUser);
    }
  }, [dispatch]);

  return (
    <Row className="header-wrapper m-0">
      {/* Pass userData as a prop to TopButtons and RightHeader */}
      <TopButtons userData={userData} />
      <RightHeader userData={userData} />
    </Row>
  );
}

export default Index;
