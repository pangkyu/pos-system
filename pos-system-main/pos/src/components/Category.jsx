import axios from "axios";
import react from "react";
import { useState, useEffect } from "react";

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
