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
      const response = await axios.get("Staff");
      setStaffData(response.data);
    };
    fetchData();
  }, []);

  // 삭제 클릭버튼 이벤트리스너
  const [deleteData, setDeleteData] = useState(0);
  const handleDelete = async (e) => {
    e.preventDefault();
    if (window.confirm("정말 삭제하시겠습니까?")) {
    } else {
      alert("삭제가 취소되었습니다.");
      navigate(0);
    }
  };

  // 등록 클릭버튼 이벤트리스너
  const handleSubmit = async (e) => {
    e.preventDefault();

    const position = prompt("포지션을 입력해주세요", "직원");
    const name = prompt("이름을 입력해주세요", "홍길동");
    const sex = prompt("성별을 입력해주세요", "남성");
    const number = prompt("연락처를 입력해주세요", "000-0000-0000");
    await axios.post("http://localhost:3001/Staff", {
      STAFF_POSITION: position,
      STAFF_NAME: name,
      STAFF_SEX: sex,
      STAFF_NUM: number,
    });
    navigate(0);
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
          {staffData.map((e) => {
            return <StaffRow StaffRow={e} />;
          })}
          <div className="staff__main--footer">
            <div
              id="staffAddBtn"
              className="staff__main--footer-add"
              onClick={handleSubmit}
            >
              추가
            </div>
            <div
              id="staffDelBtn"
              className="staff__main--footer-remove"
              onClick={handleDelete}
            >
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
