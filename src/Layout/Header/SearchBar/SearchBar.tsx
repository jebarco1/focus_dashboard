import { Form, Input } from "reactstrap";
import SVG from "../../../utils/CommonSvgIcon/SVG";
import { SidebarMenu } from "../../../Data/Layout/Sidebar/Menu";
import { useState } from "react";
import { MenuInterface, SubMenuInterface } from "../../Sidebar/SideBarTypes";
import SearchSuggestionList from "./SearchSuggestionList";

const SearchBar = () => {
  const [suggestionOpen, setSuggestionOpen] = useState<boolean>(false);
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

      const deepSearchFun = (
        menuItem: MenuInterface | SubMenuInterface,
        searchKeyValue: string,
        mainTitle: string
      ) => {
        if (
          menuItem.title.toLowerCase().includes(searchKeyValue) &&
          menuItem.link
        ) {
          updatedList = { ...menuItem, mainTitle, icon };
          suggestionArray.push(updatedList);
        }
        if (!menuItem.subMenu) return;

        menuItem.subMenu &&
          menuItem.subMenu.map((mainSubItem: SubMenuInterface) => {
            if (!mainSubItem.svgIcon) {
              icon = menuItem.svgIcon;
              if (mainSubItem.subMenu) {
                mainSubItem.subMenu.map((mainChildItem: SubMenuInterface) => {
                  icon = menuItem.svgIcon;
                  deepSearchFun(mainChildItem, searchKeyValue, mainTitle);
                });
              }else{
                deepSearchFun(mainSubItem, searchKeyValue, mainTitle);
              }
            }
            if (!menuItem.subMenu) return;
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
    } else {
      setSuggestionOpen(false);
      setSuggestion([]);
      document.body.classList.remove("offcanvas");
    }
  };
  return (
    <Form className="col-auto form-inline search-full" action="#" method="get">
      <div className="form-group search-wrapper">
        <div className="Typeahead Typeahead--twitterUsers">
          <div className="u-posRelative">
            <Input
              className="demo-input Typeahead-input form-control-plaintext w-100"
              type="text"
              placeholder="Type to Search .."
              name="q"
              title=""
              value={searchValue}
              onChange={(e) => handleSearch(e)}
            />
            <SVG className={"search-bg svg-color"} iconId={"Search"} />
          </div>
          <div className={`Typeahead-menu custom-scrollbar ${suggestionOpen ? "is-open" : ""}`}>
            <SearchSuggestionList setSuggestionOpen={setSuggestionOpen} suggestion={suggestion} setSearchValue={setSearchValue}/>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default SearchBar;
