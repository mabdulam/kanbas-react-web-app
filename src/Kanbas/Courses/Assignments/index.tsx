import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtonsTop from "./AssignmentControlButtonsTop";
import AssignmentControlButtons from "./AssignmentControlButtons";
import SearchBar from "./SearchBar";
import { BsGripVertical } from "react-icons/bs";
import { SlNote } from "react-icons/sl";
import "./index.css";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter(assignment => assignment.course === cid);
  return (
    <div className="p-3">
      <div className="d-flex justify-content-between align-items-center">
        <SearchBar />
        <AssignmentsControls />
      </div>
      <ul id="wd-assignments" className="list-group rounded-0 mt-3">
        <li className="wd-assignment list-group-item p-0 mb-3 border-0">
          <div className="d-flex justify-content-between align-items-center p-3 bg-light border">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-4" />
              <h5 className="mb-0">ASSIGNMENTS</h5>
            </div>
            <AssignmentControlButtonsTop />
          </div>
          <ul className="list-group rounded-0">
            {assignments.map((assignment) => (
              <li key={assignment._id} className="wd-assignment list-group-item d-flex align-items-start p-3 wd-assignment-green-border">
                <div className="d-flex align-items-center me-2">
                  <BsGripVertical className="fs-4 me-2" />
                  <SlNote className="fs-4 me-2" style={{ color: 'green' }} />
                </div>
                <div className="flex-grow-1">
                  <a className="wd-assignment-link d-block" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} style={{ color: 'black', textDecoration: 'none' }}>
                    <strong>{assignment.title}</strong>
                  </a>
                  <div className="small text-muted">
                    <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> {assignment.available_date} <span>at</span> {assignment.available_time} | <strong>Due</strong> {assignment.due_date} <span>at</span> {assignment.due_time} | {assignment.pts} pts
                  </div>
                </div>
                <AssignmentControlButtons />
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}











  