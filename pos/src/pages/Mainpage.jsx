import "../css/styles.css";

function Mainpage() {
  return (
    <>
      <div>
        <div>
          <h1>Coffee cook</h1>
        </div>
        <div>
          <a>
            테이크아웃
            <i className="fas fa-coffee"></i>
            <div>
              <i className="fas fa-angle-right"></i>
            </div>
          </a>
          <a>
            매출액<i className="fas fa-desktop"></i>
            <div>
              <i className="fas fa-angle-right"></i>
            </div>
          </a>
          <a>
            주문목록조회<i className="fas fa-comment-alt"></i>
            <div>
              <i className="fas fa-angle-right"></i>
            </div>
          </a>
          <a>
            근무자 관리<i className="fas fa-user-cog"></i>
            <div>
              <i className="fas fa-angle-right"></i>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Mainpage;
