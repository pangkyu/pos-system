import axios from "axios";
import react from "react";
import { useState, useEffect } from "react";

const Menu = ({ Category }) => {
  return (
    <>
      <div className="takeout__menu--dishes-button">아메리카노 ICE 3000</div>
      <div className="takeout__menu--dishes-button">아메리카노 HOT 2500</div>
      <div className="takeout__menu--dishes-button">카페라떼 HOT 3000</div>
      <div className="takeout__menu--dishes-button">카페라떼 ICE 3500</div>
      <div className="takeout__menu--dishes-button">
        카라멜 마끼야또 ICE 3000
      </div>
      <div className="takeout__menu--dishes-button">
        카라멜 마끼야또 HOT 2500
      </div>
      <div className="takeout__menu--dishes-button">카푸치노 ICE 3000</div>
      <div className="takeout__menu--dishes-button">카푸치노 HOT 3000</div>
      <div className="takeout__menu--dishes-button">
        더치 아메리카노 ICE 3000
      </div>
      <div className="takeout__menu--dishes-button">
        더치 아메리카노 HOT 3000
      </div>
      <div className="takeout__menu--dishes-button">아포가토 4500</div>
      <div className="takeout__menu--dishes-button">에스프레소 HOT 3000</div>
      <div className="takeout__menu--dishes-button">콜드브루 ICE 3000</div>
      <div className="takeout__menu--dishes-button">콜드브루 HOT 3000</div>
      <div className="takeout__menu--dishes-button">바닐라라떼 ICE 3000</div>
      <div className="takeout__menu--dishes-button">바닐라라떼 HOT 3000</div>
      <div className="takeout__menu--dishes-button">달구나크림커피 3000</div>
      <div className="takeout__menu--dishes-button">카페모카 ICE 3000</div>
      <div className="takeout__menu--dishes-button">카페모카 HOT 3000</div>
      <div className="takeout__menu--dishes-button">샷추가 500</div>
    </>
  );
};
export default Menu;
