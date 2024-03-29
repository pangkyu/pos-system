import react, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Category from "../components/Category";
import Menu from "../components/Menu";
import axios from "axios";
import PosLine from "../components/PosLine";

function Takeout() {
  // navigate 설정
  const navigate = useNavigate();

  const handleonClick = () => {
    navigate(-1);
  };

  // 시간 UI 출력
  const [timer, setTimer] = useState("");

  useEffect(() => {
    let startTimer = setInterval(() => {
      setTimer(currentTimer);
    }, 1000);
    return () => {
      clearInterval(startTimer);
    };
  }, []);
  const currentTimer = () => {
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getUTCDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    setTimer(`${year}년 ${month}월 ${day}일 ${hours}:${minutes}:${seconds}`);
  };

  // 카테고리 데이터 받아오기
  const [categoryData, setCategoryData] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("커피");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("category");

      if (response.data.length < 10) {
        for (let i = response.data.length; i < 10; i++) {
          response.data.push([{ MENU_CATEGORY: " " }]);
          setCategoryData(response.data);
        }
      } else {
        setCategoryData(response.data);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `category/${encodeURIComponent(currentCategory)}`
      );
      if (response.data.length < 20) {
        for (let i = response.data.length; i < 20; i++) {
          response.data.push([{ MENU_NAME: " " }]);
          setMenuData(response.data);
        }
      } else {
        setMenuData(response.data);
      }
    };
    fetchData();
  }, [currentCategory]);

  // 메뉴 데이터 받아오기

  const [menuData, setMenuData] = useState([]);

  const handleonClick2 = (category) => {
    setCurrentCategory(category);
  };

  // 포스라인 데이터 받아오기
  const [posLineData, setPosLineData] = useState([]);

  return (
    <>
      <header>
        <div className="header">
          <div className="header-sector">
            <div className="header__img">
              <i className="fas fa-concierge-bell fa-2x"></i>
            </div>
            <div className="header__text">
              <h5>테이크 아웃</h5>
            </div>
            <div className="header__time">
              <p id="header__timeNow">{timer}</p>
            </div>
          </div>
          <div className="header-sector">
            <div className="header__text header--left">
              <p>테이크 아웃</p>
            </div>
            <div className="header__text header--left">
              <i className="far fa-user fa-lg"></i>
              <p>배성규</p>
            </div>
            <div onClick={handleonClick} className="header__close header--left">
              <i className="fas fa-times fa-2x"></i>
            </div>
          </div>
        </div>
      </header>

      <main className="takeout__main">
        <div className="takeout__cash">
          <div className="takeout__cash--info">
            <div className="takeout__cash--info-list">메뉴 이름</div>
            <div className="takeout__cash--info-list">단가</div>
            <div className="takeout__cash--info-list">수량</div>
            <div className="takeout__cash--info-list">가격</div>
          </div>
          <div className="takeout__cash--list">
            {posLineData.map((e) => {
              return <PosLine Category={e}></PosLine>;
            })}
            <div className="takeout__cash--list-area">
              <p className="takeout__cash--list-area-menu">아메리카노(ice)</p>
              <p className="takeout__cash--list-area-unitprice">4500</p>
              <p className="takeout__cash--list-area-amount">1</p>
              <p className="takeout__cash--list-area-price">4500</p>
            </div>
          </div>
          <div className="takeout__cash--option">
            <div className="takeout__cash--option-cancel">
              <div className="takeout__cash--option-cancel-allclear">
                전체취소
              </div>
              <div className="takeout__cash--option-cancel-lineclear">
                라인취소
              </div>
              <div className="takeout__cash--option-cancel-plus">+</div>
              <div className="takeout__cash--option-cancel-minus">-</div>
            </div>
            <div className="takeout__cash--option-total">
              <div className="takeout__cash--option-total-price">합계 금액</div>
              <div className="takeout__cash--option-total-price">4500원</div>
            </div>
          </div>
        </div>
        <div className="takeout__menu">
          <div className="takeout__menu--group">
            {categoryData.map((e, i) => {
              return <Category Category={e} handleonClick2={handleonClick2} />;
            })}
          </div>
          <div className="takeout__menu--dishes">
            <div className="takeout__menu--dishes-coffee">
              {menuData.map((e) => {
                return <Menu Category={e}></Menu>;
              })}
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="takeout__footer">
          <div className="takeout__footer--option">
            <div className="takeout__footer--option-kind">
              <i className="fas fa-box-open fa-lg"></i>돈통
            </div>
            <div className="takeout__footer--option-kind">
              <i className="fas fa-concierge-bell fa-lg"></i>전체 서비스
            </div>
            <div className="takeout__footer--option-kind">
              <i className="fas fa-comment-dollar fa-lg"></i>단가 변경
            </div>
            <Link to="../Orderlist" className="takeout__footer--option-kind">
              <i className="fas fa-file-invoice-dollar fa-lg"></i>영수증 관리
            </Link>
          </div>
          <div className="takeout__footer--pay">
            <div className="takeout__footer--pay-method">
              <i className="fas fa-won-sign fa-lg"></i>현금
            </div>
            <div className="takeout__footer--pay-method">
              <i className="fas fa-won-sign fa-lg"></i>카드
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Takeout;
