import react from "react";

const StaffRow = ({ StaffRow }) => {
  return (
    <div className="staff__main--content">
      <div className="staff__main-position">{StaffRow.STAFF_POSITION}</div>
      <div className="staff__main-staff">{StaffRow.STAFF_NAME}</div>
      <div className="staff__main-sex">{StaffRow.STAFF_SEX}</div>
      <div className="staff__main-num">{StaffRow.STAFF_NUM}</div>
    </div>
  );
};
export default StaffRow;
