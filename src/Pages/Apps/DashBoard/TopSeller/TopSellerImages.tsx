import { Image, LI, UL } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";

const TopSellerImages = () => {
  const imagesData = ["9", "10", "11", "8"];
  return (
    <UL className="simple-list">
      {imagesData.map((data,index) => (
        <LI className="d-inline-block" key={index}>
          <Image
            className="img-30 rounded-circle"
            src={dynamicImage(`dashboard/user/0${data}.jpg`)}
            alt="user"
          />
        </LI>
      ))}
      <LI className="d-inline-block">
        <div className="light-card">
          <span className="f-w-500">+5</span>
        </div>
      </LI>
    </UL>
  );
};

export default TopSellerImages;
