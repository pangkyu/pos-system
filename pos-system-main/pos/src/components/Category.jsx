import react, { createElement, ReactDOM } from "react";

const Category = ({ Category }) => {
  return (
    <>
      <div className="takeout__menu--group-button">
        {Category.MENU_CATEGORY}
      </div>
    </>
  );
};
export default Category;
