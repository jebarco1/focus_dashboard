import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "../../ReaduxToolkit/Hooks";
import TopButtons from './UserProfile/topButtons';
import { Row } from 'reactstrap';
import RightHeader from './RightHeader/RightHeader';
import MobileRightHeader from './RightHeader/mobileRightHeader';
import { fetchHotColdData } from "../../ReaduxToolkit/Reducer/numberPickHotCold";
import { fetchhotColdYellowData } from "../../ReaduxToolkit/Reducer/numberPickHotColdYellow";
import { fetchLast30Drawings } from '../../ReaduxToolkit/Reducer/last30Drawings';
import { fetchMessages } from '../../ReaduxToolkit/Reducer/fetchMessages';
import { fetchLastDrawings } from '../../ReaduxToolkit/Reducer/lastDrawings';
import { fetchTop10Numbers } from '../../ReaduxToolkit/Reducer/getTop10NumberStatics';
import { fetchUserPicks } from '../../ReaduxToolkit/Reducer/numberPicks';

const Index = () => {
  const dispatch = useAppDispatch();
  const { user, token } = useAppSelector((state) => state.auth);
  const [userData, setUserData] = useState<{
    firstName: string;
    lastName: string;
    level_of_access: number;
  } | null>(null);

  useEffect(() => {
    dispatch(fetchHotColdData());
    dispatch(fetchhotColdYellowData());
    dispatch(fetchLast30Drawings());
    dispatch(fetchLastDrawings());
    dispatch(fetchTop10Numbers());



    // Retrieve the token from localStorage if not available in Redux store
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(fetchMessages(token));
      dispatch(fetchUserPicks(token))
    }

    // Load user data
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserData(parsedUser);
    }

    // Set default lottery config if not present
    const configKey = "lotteryConfig";
    if (!localStorage.getItem(configKey)) {
      const defaultConfig = {
        mega: {
          regular: 70,
          yellow: 25,
        },
        powerball: {
          regular: 69,
          yellow: 26,
        },
      };
      localStorage.setItem(configKey, JSON.stringify(defaultConfig));
    }
  }, [dispatch]);

  return (
    <Row className="header-wrapper m-0">
      <TopButtons userData={userData} />
      <RightHeader userData={userData} />
      <MobileRightHeader userData={userData} />
    </Row>
  );
};

export default Index;
