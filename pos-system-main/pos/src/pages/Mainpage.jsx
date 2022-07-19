import react from "react";
import { Link } from "react-router-dom";

import "../css/styles.css";

function Mainpage() {
  return (
    <>
      <div>
        <div className="cafe-form__title">
          <h1>Coffee cook</h1>
        </div>
        <div className="cafe-form__content">
          <Link to="Takeout" className="cafe-form__content-menu">
            테이크아웃
            <i className="fas fa-coffee"></i>
            <div>
              <i className="fas fa-angle-right"></i>
            </div>
          </Link>
          <Link to="Sales" className="cafe-form__content-menu">
            매출액<i className="fas fa-desktop"></i>
            <div>
              <i className="fas fa-angle-right"></i>
            </div>
          </Link>
          <Link to="Orderlist" className="cafe-form__content-menu">
            주문목록조회<i className="fas fa-comment-alt"></i>
            <div>
              <i className="fas fa-angle-right"></i>
            </div>
          </Link>
          <Link to="Staff" className="cafe-form__content-menu">
            근무자 관리<i className="fas fa-user-cog"></i>
            <div>
              <i className="fas fa-angle-right"></i>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Mainpage;
