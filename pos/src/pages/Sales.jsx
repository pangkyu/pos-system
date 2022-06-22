import react from "react";
import { useNavigate } from "react-router-dom";

import "../css/styles.css";

function Sales() {
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
              <i className="fas fa-won-sign fa-2x"></i>
            </div>
            <div className="header__text">
              <h5>매출액 조회</h5>
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
        <div className="sales-date">
          <div className="sales-date__today">2월 16일</div>
          <div className="sales-date__calendar">
            <div className="sales-date__calendar-box">
              <div className="sales-date__calendar-box-header">오늘</div>
              <div className="sales-date__calendar-box-content">￦ 100,000</div>
            </div>
            <div className="sales-date__calendar-box">
              <div className="sales-date__calendar-box-header">이번 주</div>
              <div className="sales-date__calendar-box-content">￦ 600,000</div>
            </div>
            <div className="sales-date__calendar-box">
              <div className="sales-date__calendar-box-header">이번 달</div>
              <div className="sales-date__calendar-box-content">
                ￦ 3,000,000
              </div>
            </div>
          </div>
        </div>
        <div className="sales-content">
          <div className="sales-record">
            <div className="sales-record__header">
              <div className="sales-record__header--day">요일</div>
              <div className="sales-record__header--sales">매출액</div>
              <div className="sales-record__header--statement">총 전표수</div>
            </div>
            <div className="sales-record__content">
              <div className="sales-record__content--day">01</div>
              <div className="sales-record__content--sales">134,800</div>
              <div className="sales-record__content--statement">20</div>
            </div>
          </div>
          <div className="sales-paytype">
            <div className="sales-paytype__payment">
              <div className="sales-paytype__payment--header">2021-02-16</div>
              <div className="sales-paytype__payment--content">
                <div className="sales-paytype__payment--content-cash">
                  <div className="sales-paytype__payment--content-icon">
                    <i className="fas fa-cash-register"></i>
                  </div>
                  <div className="sales-paytype__payment--content-methodtext">
                    현금
                  </div>
                  <div className="sales-paytype__payment--content-counttext">
                    3
                  </div>
                  <div className="sales-paytype__payment--content-totaltext">
                    21,000
                  </div>
                </div>
                <div className="sales-paytype__payment--content-credit">
                  <div className="sales-paytype__payment--content-icon">
                    <i className="fas fa-credit-card"></i>
                  </div>
                  <div className="sales-paytype__payment--content-methodtext">
                    신용카드
                  </div>
                  <div className="sales-paytype__payment--content-counttext">
                    24
                  </div>
                  <div className="sales-paytype__payment--content-totaltext">
                    160,300
                  </div>
                </div>
                <div className="sales-paytype__payment--content-gift">
                  <div className="sales-paytype__payment--content-icon">
                    <i className="fas fa-gift"></i>
                  </div>
                  <div className="sales-paytype__payment--content-methodtext">
                    상품권
                  </div>
                  <div className="sales-paytype__payment--content-counttext">
                    0
                  </div>
                  <div className="sales-paytype__payment--content-totaltext">
                    0
                  </div>
                </div>
                <div className="sales-paytype__payment--content-point">
                  <div className="sales-paytype__payment--content-icon">
                    <i className="fab fa-pinterest-p"></i>
                  </div>
                  <div className="sales-paytype__payment--content-methodtext">
                    포인트
                  </div>
                  <div className="sales-paytype__payment--content-counttext">
                    0
                  </div>
                  <div className="sales-paytype__payment--content-totaltext">
                    0
                  </div>
                </div>
                <div className="sales-paytype__payment--content-total">
                  <div className="sales-paytype__payment--content-icon">
                    <i className="fas fa-file-invoice-dollar"></i>
                  </div>
                  <div className="sales-paytype__payment--content-methodtext">
                    합계
                  </div>
                  <div className="sales-paytype__payment--content-totaltext">
                    181,300
                  </div>
                </div>
                <div className="sales-paytype__payment--content-discount">
                  <div className="sales-paytype__payment--content-icon">
                    <i className="fas fa-tags"></i>
                  </div>
                  <div className="sales-paytype__payment--content-methodtext">
                    할인
                  </div>
                  <div className="sales-paytype__payment--content-totaltext">
                    4,000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Sales;
