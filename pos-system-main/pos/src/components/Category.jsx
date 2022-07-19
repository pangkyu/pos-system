import react from "react";
import _ from "lodash";

const Category = ({ Category }) => {
  const newArray = _.uniq(Category.MENU_CATEGORY);
  return (
    <>
      <div className="takeout__menu--group-button">{newArray}</div>
    </>
  );
};
export default Category;
