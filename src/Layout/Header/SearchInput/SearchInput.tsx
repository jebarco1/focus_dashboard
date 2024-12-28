import { Input } from "reactstrap";
import { LI } from "../../../AbstractElements";
import SVG from "../../../utils/CommonSvgIcon/SVG";
import { useState } from "react";
import { MenuInterface, SubMenuInterface } from "../../Sidebar/SideBarTypes";
import { SidebarMenu } from "../../../Data/Layout/Sidebar/Menu";
import SearchValueDetails from "./SearchValueDetails";

const SearchInput = () => {
  const [suggestionOpen, setSuggestionOpen] = useState<boolean>(false);
  const [open,setOpen] = useState<boolean>(false)
  const [suggestion, setSuggestion] = useState([]);
  const [searchValue, setSearchValue] = useState<string | undefined>("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    let searchKey = e.target.value.toLowerCase();
    setSearchValue((prev: string | undefined) => {
      return searchKey;
    });

    if (searchKey !== "") {
      document.body.classList.add("offcanvas");
      let icon: string | undefined | any;
      let suggestionArray: MenuInterface[] | SubMenuInterface[] | [] | any = [];
      let updatedList: MenuInterface | SubMenuInterface | any;

      const deepSearchFun = ( menuItem: MenuInterface | SubMenuInterface, searchKeyValue: string, mainTitle: string
      ) => {
        if (menuItem.title.toLowerCase().includes(searchKeyValue)) {
          updatedList = { ...menuItem, mainTitle, icon };
          suggestionArray.push(updatedList);
        }
        if (!menuItem.subMenu) return;

        menuItem.subMenu.map((mainSubItem: SubMenuInterface) => {
          if (!mainSubItem.svgIcon) {
            icon = menuItem.svgIcon;
          }
          deepSearchFun(mainSubItem, searchKeyValue, mainTitle);
        });
      };
      SidebarMenu.map((mainItem: any) => {
        mainItem?.subMenu.map((data: any) => {
          const mainTitle = data.title;
          deepSearchFun(data, searchKey, mainTitle);
        });
      });
      setSuggestion(suggestionArray);
      setSuggestionOpen(true);
    }

    if (searchKey === "") {
      setSuggestionOpen(false);
      setSuggestion([]);
    }
  };
  return (
    <LI className="serchinput">
      <div className="serchbox">
        <SVG iconId={'Search'} onClick={()=>setOpen(!open)}/>
      </div>
      <div className={`form-group search-form ${open ? "open" : ""}`}>
        <Input type="text" placeholder="Search here..." value={searchValue} onChange={(e) => handleSearch(e)} />
      </div>
      <div className={`Typeahead-menu ${suggestionOpen ? "is-open" : ""}`}>
        <SearchValueDetails setSuggestionOpen={setSuggestionOpen} suggestion={suggestion} setSearchValue={setSearchValue} setOpen={setOpen}/>
      </div>
    </LI>
  );
};

export default SearchInput;
