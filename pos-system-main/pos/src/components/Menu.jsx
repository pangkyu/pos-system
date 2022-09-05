import react from "react";

const Menu = ({ Category }) => {
  return (
    <>
      <div className="takeout__menu--dishes-button">
        {Category.MENU_NAME}
        {Category.MENU_PRICE}
      </div>
    </>
  );
};
export default Menu;
