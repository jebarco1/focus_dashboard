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
import last30DrawingsSlice from "./Reducer/last30Drawings";
import numberPicksSlice from "./Reducer/numberPicks";
import selectedRegularNumbersReducer from './Reducer/selectedRegularNumbers';
import selectedPowerballReducer from './Reducer/selectedPowerball';

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
    last30Drawings : last30DrawingsSlice,
    numberPicks: numberPicksSlice,
    selectedRegularNumbers: selectedRegularNumbersReducer,
    selectedPowerball: selectedPowerballReducer,
}
});

export default Store;

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch