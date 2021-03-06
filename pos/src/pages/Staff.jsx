import react from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import StaffRow from "../components/StaffRow";

import "../css/styles.css";

function Staff() {
  //navigate
  const navigate = useNavigate();

  const handleonClick = () => {
    navigate(-1);
  };

  //axios
  const [staffData, setStaffData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3001/staff");
      setStaffData(response.data);
    };
    fetchData();
  }, []);
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
          {staffData.map((e) => {
            return <StaffRow StaffRow={e} />;
          })}
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
