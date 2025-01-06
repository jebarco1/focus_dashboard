// listenerMiddleware.ts
import { createListenerMiddleware } from "@reduxjs/toolkit";
import { setSelectedlotterySelect } from "../ReaduxToolkit/Reducer/lotterySelectSlice";
import { fetchHotColdData } from "../ReaduxToolkit/Reducer/numberPickHotCold";
import { fetchhotColdYellowData } from "../ReaduxToolkit/Reducer/numberPickHotColdYellow";
import { fetchLast30Drawings } from "../ReaduxToolkit/Reducer/last30Drawings";

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: setSelectedlotterySelect,
  effect: async (action, listenerApi) => {
    // Use listenerApi.dispatch instead of useAppDispatch
    listenerApi.dispatch(fetchHotColdData());
    listenerApi.dispatch(fetchhotColdYellowData());
    listenerApi.dispatch(fetchLast30Drawings());
  },
});

export default listenerMiddleware;
