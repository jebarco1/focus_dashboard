import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../../ReaduxToolkit/Hooks";
import { fetchLotteryResultsSearch } from "../../../../ReaduxToolkit/Reducer/lotterySeaarchResults";

const RandomNumbers: React.FC = () => {
  const dispatch = useAppDispatch();
   const selectedlotteryRaw = useAppSelector((state) => state.lotterySelect.value);
 
   // ✅ These must be declared at the top level
   const [lotteryType] = useState(selectedlotteryRaw);
   const [userType] = useState("history");
   const [token] = useState(() => {
     const raw = localStorage.getItem('token');
     try {
       return raw ? JSON.parse(raw) : ""; // removes extra quotes if JSON.stringify was used
     } catch {
       return raw ?? "";
     }
   });
 

    const handleSearch = () => {
   
      dispatch(
        fetchLotteryResultsSearch({
          lotteryType,
          limit: 100,
          token,
          userType,
          numberList: [],
        })
      );
    };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div></div>
  );
};

export default RandomNumbers;
