import { FaPlus } from "react-icons/fa6";

export default function AssignmentsControls() {
  return (
    <div id="wd-assignments-controls" className="d-flex justify-content-end align-items-center">
      <button id="wd-add-assignment-group-btn" className="btn btn-secondary me-2" style={{ height: "38px" }}>
        <FaPlus className="me-1" />
        Group
      </button>
      <button id="wd-add-assignment-btn" className="btn btn-danger" style={{ height: "38px" }}>
        <FaPlus className="me-1" />
        Assignment
      </button>
    </div>
  );
}


















