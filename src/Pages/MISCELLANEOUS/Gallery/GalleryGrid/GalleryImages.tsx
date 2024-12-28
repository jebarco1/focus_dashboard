import { Gallery, Item } from 'react-photoswipe-gallery'
import { galleryImagePath } from '../../../../Data/Gallary/GallaryGridData'
import { Href } from '../../../../utils/Constant'
import { Link } from 'react-router-dom'

const GalleryImages = () => {
  return (
    <Gallery>
      {galleryImagePath.map((item, i) => (
        <figure className="col-xl-3 col-md-4 col-6" key={i}>
          <Item original={require(`/public/assets/images/${item}`)} width="1600" height="950">
            {({ ref, open }) => (
              <Link to={Href} onClick={open}>
                <img height={500} width={500} className="img-thumbnail" ref={ref as React.MutableRefObject<HTMLImageElement>} src={require(`/public/assets/images/${item}`)} alt=""/>
              </Link>
            )}
          </Item>
        </figure>
      ))}
    </Gallery>
  )
}

export default GalleryImages