import axios from "axios";
import react from "react";
import { useState, useEffect } from "react";

const Category = ({ Category }) => {
  const [categoryData, setCategoryData] = useState("");
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`menu/${categoryData}`);
      if (response.data.length < 20) {
        for (let i = response.data.length; i < 20; i++) {
          response.data.push([{ MENU_NAME: " " }]);
          console.log(response.data.length);
          setMenuData(response.data);
        }
      } else {
        setMenuData(response.data);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div
        className="takeout__menu--group-button"
        onClick={() => setCategoryData(Category.MENU_CATEGORY)}
      >
        {Category.MENU_CATEGORY}
      </div>
    </>
  );
};
export default Category;
