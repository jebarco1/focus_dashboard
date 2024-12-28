import { Gallery, Item } from "react-photoswipe-gallery";
import { imageList } from "../../../../Data/Gallary/GallaryGridData";
import { Href } from "../../../../utils/Constant";
interface PropsType{
  data:number
}
const HoverImages = ({data}:PropsType) => {
  return (
    <Gallery>
      {imageList &&
        imageList.map((item, i) => (
          <figure className={`col-md-3 col-6 img-hover hover-${data}`} key={i}>
            <Item original={require(`/public/assets/images/${item}`)} width="1024" height="768">
              {({ ref, open }) => (
                <a href={Href} onClick={open}>
                  <div className="overflow-hidden">
                    <img
                      width={500}
                      height={500}
                      className="img-thumbnail"
                      ref={ref as React.MutableRefObject<HTMLImageElement>}
                      src={require(`/public/assets/images/${item}`)}
                      alt=""
                    />
                  </div>
                </a>
              )}
            </Item>
          </figure>
        ))}
    </Gallery>
  );
};

export default HoverImages;
