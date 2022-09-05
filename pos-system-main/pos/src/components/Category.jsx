import react from "react";

const Category = ({ Category, handleonClick2 }) => {
  return (
    <>
      <div
        className="takeout__menu--group-button"
        onClick={() => handleonClick2(Category.MENU_CATEGORY)}
      >
        {Category.MENU_CATEGORY}
      </div>
    </>
  );
};
export default Category;
