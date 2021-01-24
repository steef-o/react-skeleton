import T from "prop-types";
import "./Skeleton.css";

const SkeletonElement = ({ type }) => {
  const classes = `skeleton ${type}`;

  return <div className={classes} />;
};

SkeletonElement.propTypes = {
  type: T.oneOf(["avatar, title, text, thumbnail"]),
};

export default SkeletonElement;
