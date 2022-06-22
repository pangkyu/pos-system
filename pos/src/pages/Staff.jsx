import react from "react";
import { useNavigate } from "react-router-dom";

import "../css/styles.css";

function Staff() {
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
              <i className="fas fa-user-circle fa-2x"></i>
            </div>
            <div className="header__text">
              <h5>근무자 관리</h5>
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
        <div className="staff__main">
          <div className="staff__main--header">
            <div className="staff__main-position">직위</div>
            <div className="staff__main-staff">근무자명</div>
            <div className="staff__main-sex">성별</div>
            <div className="staff__main-num">연락처</div>
          </div>
          <div className="staff__main--content">
            <div className="staff__main-position">직원</div>
            <div className="staff__main-staff">배성규</div>
            <div className="staff__main-sex">남성</div>
            <div className="staff__main-num">01040998259</div>
          </div>
          <div className="staff__main--footer">
            <div id="staffAddBtn" className="staff__main--footer-add">
              추가
            </div>
            <div id="staffDelBtn" className="staff__main--footer-remove">
              삭제
            </div>
            <div id="staffEditBtn" className="staff__main--footer-edit">
              수정
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Staff;
