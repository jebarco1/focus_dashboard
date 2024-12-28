import { createSlice } from "@reduxjs/toolkit";
import { projectData } from "../../Data/Apps/Project/ProjectListData";
import { ProjectListData } from "../../Types/Apps/ProjectList/ProjectListTypes";
interface ProjectType {
    activeTab:string;
    createdFormData:ProjectListData[]
}
const initialState: ProjectType = {
  activeTab: "1",
  createdFormData: projectData,
};

const ProjectSlice = createSlice({
  name: "SideBarSlice",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setCreatedData: (state, action) => {
      state.createdFormData = [...state.createdFormData,action.payload];
    },
  },
});
export const { setActiveTab, setCreatedData } = ProjectSlice.actions;

export default ProjectSlice.reducer;