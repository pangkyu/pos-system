import react from "react";
import { useNavigate } from "react-router-dom";

function Orderlist() {
  const navigate = useNavigate();

  const handleonClick = () => {
    navigate(-1);
  };
  return (
    <>
      <header>
        <div className="header">
          <div className="header-sector">
            <div className="header__img">
              <i className="fas fa-file-invoicde fa-2x"></i>
            </div>
            <div className="header__text">
              <h5>주문목록 조회</h5>
            </div>
          </div>
          <div className="header-sector">
            <div onClick={handleonClick} className="header__close header--left">
              <i className="fas fa-times fa-2x"></i>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="orderlist__list">
          <div className="orderlist__list--header">
            <div className="orderlist__list--header-no">No</div>
            <div className="orderlist__list--header-receipt">영수증 번호</div>
            <div className="orderlist__list--header-staff">직원명</div>
            <div className="orderlist__list--header-deal">거래일시</div>
            <div className="orderlist__list--header-table">테이블 이름</div>
            <div className="orderlist__list--header-discount">할인</div>
            <div className="orderlist__list--header-amount">금액</div>
            <div className="orderlist__list--header-paymethod">결제 방법</div>
          </div>
          <div className="orderlist__list--content">
            <div className="orderlist__list--header-no">1</div>
            <div className="orderlist__list--header-receipt">202102110001</div>
            <div className="orderlist__list--header-staff">배성규</div>
            <div className="orderlist__list--header-deal">
              2021-02-11 17:03:08
            </div>
            <div className="orderlist__list--header-table">테이크 아웃</div>
            <div className="orderlist__list--header-discount">0</div>
            <div className="orderlist__list--header-amount">4500</div>
            <div className="orderlist__list--header-paymethod">카드</div>
          </div>
        </div>
        <div className="orderlist__button">
          <div className="orderlist__button--up">
            <i className="fas fa-chevron-up fa-2x"></i>
          </div>
          <div className="orderlist__button--down">
            <i className="fas fa-chevron-down fa-2x"></i>
          </div>
          <div className="orderlist__button--return">반품</div>
        </div>
      </main>
      <footer>
        <div className="orderlist__footer">
          <div className="orderlist__footer--header">
            <div className="orderlist__footer--header-no">영수증번호</div>
            <div className="orderlist__footer--header-goods">상품명</div>
            <div className="orderlist__footer--header-paymethod">결제방법</div>
            <div className="orderlist__footer--header-amount">결제금액</div>
            <div className="orderlist__footer--header-deal">주문시간</div>
          </div>
          <div className="orderlist__footer--content">
            <div className="orderlist__footer--header-no">202102130001</div>
            <div className="orderlist__footer--header-goods">카페라떼(ice)</div>
            <div className="orderlist__footer--header-paymethod">카드</div>
            <div className="orderlist__footer--header-amount">3500</div>
            <div className="orderlist__footer--header-deal">
              2021-02-11 17:03:08
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Orderlist;
