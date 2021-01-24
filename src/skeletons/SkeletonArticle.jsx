import T from "prop-types";
import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";

const SkeletonArticle = ({ theme }) => {
  const themeClass = theme || "light";

  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-article">
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
      <Shimmer />
    </div>
  );
};

SkeletonArticle.propTypes = {
  theme: T.oneOf(["light, dark"]),
};

export default SkeletonArticle;
