import { configureStore } from "@reduxjs/toolkit";
import LayoutSlice from "./Reducer/LayoutSlice";
import BookmarkTabSlice from "./Reducer/BookmarkTabSlice";
import ThemeCustomizerSlice from "./Reducer/ThemeCustomizerSlice";
import FilterSlice from "./Reducer/FilterSlice";
import ProductSlice from "./Reducer/ProductSlice";
import CartSlice from "./Reducer/CartSlice";
import ProjectSlice from "./Reducer/ProjectSlice";
import TasksSlice from "./Reducer/TasksSlice";
import ChatSlice from "./Reducer/ChatSlice";
import ContactSlice from "./Reducer/ContactSlice";
import BookmarkSlice from "./Reducer/BookmarkSlice";
import ToDoSlice from "./Reducer/ToDoSlice";
import hotColdSlice from "./Reducer/numberPickHotCold";
import hotColdYellowSlice from "./Reducer/numberPickHotColdYellow";
import last30DrawingsSlice from "./Reducer/last30Drawings";
import numberPicksSlice from "./Reducer/numberPicks";
import selectedRegularNumbersReducer from './Reducer/selectedRegularNumbers';
import selectedPowerballReducer from './Reducer/selectedPowerball';
import patternsBetweenNumReducer from './Reducer/patternsBetweenNum';
import coldBetweenNumReducer from './Reducer/coldBetweenNum';
import hotBetweenNumReducer from './Reducer/hotBetweenNum';
import last30dayDrawingReducer from './Reducer/last30dayDrawingBetweenNum';
import getPatternsBetweenReducer from './Reducer/getPatternsBetweenDrawing';
import numberDetailsTableReducer from './Reducer/numberDetailsTable';
import getNumberByMonthReducer from './Reducer/getNumberByMonth';
import lotterySelectReducer from './Reducer/lotterySelectSlice';
import listenerMiddleware from "./listenerMiddleware";
import LastesNewsReducer from "./Reducer/getLastestNew";
import getPatternDetailReducer from "./Reducer/getPatternDetails"
import HighlightPatternReducer from "./Reducer/HighlightPattern";


const Store = configureStore({
reducer:{
    layout:LayoutSlice,
    bookmarkTab:BookmarkTabSlice,
    themeCustomizer: ThemeCustomizerSlice,
    filterData: FilterSlice,
    product: ProductSlice,
    cartData: CartSlice,
    todo:ToDoSlice,
    project:ProjectSlice,
    tasks:TasksSlice,
    chatData: ChatSlice,
    contact:ContactSlice,
    bookmark: BookmarkSlice,
    hotCold : hotColdSlice,
    hotColdYellow : hotColdYellowSlice,
    last30Drawings : last30DrawingsSlice,
    numberPicks: numberPicksSlice,
    selectedRegularNumbers: selectedRegularNumbersReducer,
    selectedPowerball: selectedPowerballReducer,
    patternsBetweenNum: patternsBetweenNumReducer,
    hotBetweenNum : hotBetweenNumReducer,
    coldBetweenNum : coldBetweenNumReducer,
    last30dayDrawing : last30dayDrawingReducer,
    getPatternsBetween : getPatternsBetweenReducer,
    numberDetailsTable: numberDetailsTableReducer,
    getNumberByMonth : getNumberByMonthReducer,
    lotterySelect : lotterySelectReducer,
    LastesNews : LastesNewsReducer,
    getPatternDetail : getPatternDetailReducer,
    HighlightPattern : HighlightPatternReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;