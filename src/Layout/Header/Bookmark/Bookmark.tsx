import { useCallback, useEffect, useState } from "react";
import { LI, UL} from "../../../AbstractElements";
import { SidebarMenu } from "../../../Data/Layout/Sidebar/Menu";
import { useAppDispatch, useAppSelector } from "../../../ReaduxToolkit/Hooks";
import BackButton from "./BackButton";
import BookmarkBox from "./BookmarkBox";
import { Input } from "reactstrap";
import ListOfMenu from "./ListOfMenu";
import EmpltyClass from "./EmpltyClass";
import { MenuItemChildMenu, MenuItemMenuType, MenuItemType } from "../../../Types/BookmarkType/BookmarkType";
import SVG from "../../../utils/CommonSvgIcon/SVG";
import { setBookmarkDropDown, setIsClose } from "../../../ReaduxToolkit/Reducer/BookmarkSlice";

const Bookmark = () => {
  const { bookMarkClass, bookmarkDropDown } = useAppSelector((state) => state.bookmark);
  const mainMenu = [...SidebarMenu];
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState<MenuItemType[]>([]);
  const [bookmarkItems, setBookmarkItems] = useState<any>([]);
  const [searchIcon, setSearchIcon] = useState(false);
  const checkSearchResultEmpty = (items: string) => {
    if (!items.length) setSearchIcon(true);
    else setSearchIcon(false);
  };
  useEffect(() => {
    mainMenu.map((menuItems:any) => {
      if (menuItems.bookmark) setBookmarkItems(() => [...bookmarkItems, menuItems])
      if (!menuItems.subMenu) return false;
      menuItems.subMenu?.filter((mItems: MenuItemMenuType) => {
        if (mItems.bookmark) setBookmarkItems(() => [...bookmarkItems, mItems])
        if (!mItems.subMenu) return false;
        mItems.subMenu.filter((subItems: MenuItemChildMenu) => {
          if (subItems.bookmark) {
            subItems.icon1 = mItems.svgIcon;
            setBookmarkItems((prev: MenuItemChildMenu[]) => [...prev, subItems]);
          }
          if (!subItems.subMenu) return false;
          subItems.subMenu.filter((items)=>{
            if (items.bookmark) {
              items.icon1 = mItems.svgIcon;
              setBookmarkItems((prev: MenuItemChildMenu[]) => [...prev, items]);
            }
            if (!items.subMenu) return false;
            return items;
          })
          return subItems;
        });
        return mItems;
      });
      return menuItems;
    });
  }, []);
  const addFix = () => dispatch(setIsClose(true));
  const removeFix = () => setSearchValue(searchValue);
  const handleSearchKeyword = (keyword: string) => {
    keyword ? addFix() : removeFix();
    let items: any = [];
    setSearchValue(keyword);
    mainMenu.map((menuItems: any) => {
      if (menuItems.title.toLowerCase().includes(keyword) && menuItems.type === "link") items = [...items, menuItems]
      if (!menuItems.subMenu) return false;
      menuItems.subMenu?.filter((mItems: MenuItemMenuType) => {
        if (mItems.title.toLowerCase().includes(keyword) && mItems.type === "link") {
          menuItems.icon1 = mItems.svgIcon;
          items = [...items, mItems];
        }
        if (!mItems.subMenu) return false;
        mItems.subMenu.filter((subItems: MenuItemChildMenu) => {
          if (subItems.title.toLowerCase().includes(keyword) && subItems.type === "link") {
            subItems.icon1 = mItems.svgIcon;
            items = [...items, subItems];
          }
          if (!subItems.subMenu) return false;
          subItems.subMenu.filter((item)=>{
            if (item.bookmark) {
              item.icon1 = mItems.svgIcon;
              items = [...items, item]
            }
            if (!items.subMenu) return false;
            return items;
          })
          return subItems;
        });
        return mItems;
      });
      checkSearchResultEmpty(items);
      setSearchResult(items);
      return menuItems;
    });
  };
  const removeFixCallback = useCallback((searchVal: string) => {setSearchValue(searchVal)}, []);
  const setCallbackBookmark = useCallback((valueAdd: string) => {setBookmarkItems(valueAdd)}, []);
  return (
    <LI className="onhover-dropdown" onClick={() => dispatch(setBookmarkDropDown())}>
      <SVG iconId="Bookmark" />
      <div className={`onhover-show-div bookmark-flip ${bookmarkDropDown || bookMarkClass ? "active" : ""}`}>
        <div className="flip-card">
          <div className={`flip-card-inner ${bookMarkClass ? "flipped" : ""}`}>
            <BookmarkBox bookmarkItems={bookmarkItems} />
            <div className="back">
              <UL>
                <LI>
                  <div className="bookmark-dropdown flip-back-content">
                    <Input type="text" placeholder="search..." value={searchValue} onChange={(e) => handleSearchKeyword(e.target.value)} />
                    <ListOfMenu removeFix={removeFixCallback} bookmarkItems={bookmarkItems} setCallbackBookmark={setCallbackBookmark} searchValue={searchValue} setBookmarkItems={setBookmarkItems} searchResult={searchResult} setSearchResult={setSearchResult} />
                    <EmpltyClass searchIcon={searchIcon} />
                  </div>
                </LI>
                <BackButton setSearchValue={setSearchValue}/>
              </UL>
            </div>
          </div>
        </div>
      </div>
    </LI>
  );
};
export default Bookmark;
