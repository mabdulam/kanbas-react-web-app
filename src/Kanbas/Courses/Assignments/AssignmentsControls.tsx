import React from "react";
import { FaPlus } from "react-icons/fa6";

interface AssignmentsControlsProps {
  onAddAssignment: () => void;
}

const AssignmentsControls: React.FC<AssignmentsControlsProps> = ({ onAddAssignment }) => {
  return (
    <div id="wd-assignments-controls" className="d-flex justify-content-end align-items-center">
      <button id="wd-add-assignment-group-btn" className="btn btn-secondary me-2" style={{ height: "38px" }}>
        <FaPlus className="me-1" />
        Group
      </button>
      <button id="wd-add-assignment-btn" className="btn btn-danger" style={{ height: "38px" }} onClick={onAddAssignment}>
        <FaPlus className="me-1" />
        Assignment
      </button>
    </div>
  );
};

export default AssignmentsControls;






















