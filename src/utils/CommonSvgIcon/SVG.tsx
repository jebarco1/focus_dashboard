interface PropTypes {
  iconId: string | undefined;
  onClick?: () => void;
  className?: string;
}

const SVG = (props: PropTypes) => {
  return (
    <svg className={props.className} onClick={props.onClick}>
      <use href={`${process.env.PUBLIC_URL}/assets/svg/icon-sprite.svg#${props.iconId}`}></use>
    </svg>
  );
};

export default SVG;
