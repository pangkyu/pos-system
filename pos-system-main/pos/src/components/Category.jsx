import react from "react";

const Category = ({ Category }) => {
  console.log(Object.keys(Category));

  return (
    <>
      <div className="takeout__menu--group-button">
        {Category.MENU_CATEGORY}
      </div>
    </>
  );
};
export default Category;
