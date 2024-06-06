import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtonsTop from "./AssignmentControlButtonsTop";
import AssignmentControlButtons from "./AssignmentControlButtons";
import SearchBar from "./SearchBar";
import { BsGripVertical } from "react-icons/bs";
import { SlNote } from "react-icons/sl";
import "./index.css";

export default function Assignments() {
  return (
    <div className="p-3">
      <div className="d-flex justify-content-between align-items-center">
        <SearchBar />
        <AssignmentsControls />
      </div>
      <ul id="wd-assignments" className="list-group rounded-0 mt-3">
        <li className="wd-assignment list-group-item p-0 mb-3 border-0">
          <div className="d-flex justify-content-between align-items-center p-3 bg-light">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-4" />
              <h5 className="mb-0">ASSIGNMENTS</h5>
            </div>
            <AssignmentControlButtonsTop />
          </div>
          <ul className="list-group rounded-0">
            <li className="wd-assignment list-group-item d-flex align-items-start p-3 wd-assignment-green-border">
              <div className="d-flex align-items-center me-2">
                <BsGripVertical className="fs-4 me-2" />
                <SlNote className="fs-4 me-2" style={{ color: 'green' }} />
              </div>
              <div className="flex-grow-1">
                <a className="wd-assignment-link d-block" href="#/Kanbas/Courses/1234/Assignments/123" style={{ color: 'black', textDecoration: 'none' }}>
                  <strong>A1</strong>
                </a>
                <div className="small text-muted">
                  <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am | <strong>Due</strong> May 13 at 11:59pm | 100 pts
                </div>
              </div>
              <AssignmentControlButtons />
            </li>
            <li className="wd-assignment list-group-item d-flex align-items-start p-3 wd-assignment-green-border">
              <div className="d-flex align-items-center me-2">
                <BsGripVertical className="fs-4 me-2" />
                <SlNote className="fs-4 me-2" style={{ color: 'green' }} />
              </div>
              <div className="flex-grow-1">
                <a className="wd-assignment-link d-block" href="#/Kanbas/Courses/1234/Assignments/124" style={{ color: 'black', textDecoration: 'none' }}>
                  <strong>A2</strong>
                </a>
                <div className="small text-muted">
                  <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 13 at 12:00am | <strong>Due</strong> May 20 at 11:59pm | 100 pts
                </div>
              </div>
              <AssignmentControlButtons />
            </li>
            <li className="wd-assignment list-group-item d-flex align-items-start p-3 wd-assignment-green-border">
              <div className="d-flex align-items-center me-2">
                <BsGripVertical className="fs-4 me-2" />
                <SlNote className="fs-4 me-2" style={{ color: 'green' }} />
              </div>
              <div className="flex-grow-1">
                <a className="wd-assignment-link d-block" href="#/Kanbas/Courses/1234/Assignments/125" style={{ color: 'black', textDecoration: 'none' }}>
                  <strong>A3</strong>
                </a>
                <div className="small text-muted">
                  <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 20 at 12:00am | <strong>Due</strong> May 27 at 11:59pm | 100 pts
                </div>
              </div>
              <AssignmentControlButtons />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}









  