import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams, Link } from "react-router-dom";
import "./index.css";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = db.assignments.find(assignment => assignment._id === aid);

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label"><strong>Assignment Name</strong></label>
        <input id="wd-name" type="text" value={assignment ? assignment.title : ''} className="form-control" />
      </div>

      <div className="mb-5">
        <label htmlFor="wd-description" className="form-label"><strong>Description</strong></label>
        <div className="form-control custom-textarea" id="wd-description" contentEditable>
          The assignment is <span className="text-danger">available online</span>.<br /><br />
          Submit a link to the landing page of your Web application running on Netlify.<br /><br />
          The landing page should include the following:<br />
          <ul>
            <li>Your full name and section</li>
            <li>Links to each of the lab assignments</li>
            <li>Link to the Kanbas application</li>
            <li>Links to all relevant source code repositories</li>
          </ul>
          The Kanbas application should include a link to navigate back to the landing page.
        </div>
      </div>

      <div className="row mb-5 justify-content-end align-items-center">
        <div className="col-md-5 text-end">
          <label htmlFor="wd-points" className="form-label"><strong>Points</strong></label>
        </div>
        <div className="col-md-7">
          <input id="wd-points" type="number" value={assignment ? assignment.pts : ''} className="form-control" />
        </div>
      </div>

      <div className="row mb-5 justify-content-end align-items-center">
        <div className="col-md-5 text-end">
          <label htmlFor="wd-group" className="form-label"><strong>Assignment Group</strong></label>
        </div>
        <div className="col-md-7">
          <select id="wd-group" className="form-select">
            <option>ASSIGNMENTS</option>
          </select>
        </div>
      </div>

      <div className="row mb-5 justify-content-end align-items-center">
        <div className="col-md-5 text-end">
          <label htmlFor="wd-display-grade-as" className="form-label"><strong>Display Grade as</strong></label>
        </div>
        <div className="col-md-7">
          <select id="wd-display-grade-as" className="form-select">
            <option>Percentage</option>
          </select>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-5 text-end align-self-start">
          <label htmlFor="wd-submission-type" className="form-label"><strong>Submission Type</strong></label>
        </div>
        <div className="col-md-7">
          <div className="border p-3 rounded">
            <select id="wd-submission-type" className="form-select">
              <option>Online</option>
            </select>
            <div className="mt-3">
              <label className="form-label"><strong>Online Entry Options</strong></label>
              <div className="form-check">
                <input type="checkbox" id="wd-text-entry" className="form-check-input" />
                <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="wd-website-url" className="form-check-input" />
                <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="wd-media-recordings" className="form-check-input" />
                <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="wd-student-annotation" className="form-check-input" />
                <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="wd-file-upload" className="form-check-input" />
                <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-5 text-end align-self-start">
          <label htmlFor="wd-assign" className="form-label"><strong>Assign</strong></label>
        </div>
        <div className="col-md-7">
          <div className="border p-3 rounded">
            <div className="row mb-3">
              <div className="col-md-15">
                <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
                <input id="wd-assign-to" value="Everyone" className="form-control mb-2" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-15">
                <label htmlFor="wd-due-date" className="form-label">Due</label>
                <input
                  type="datetime-local"
                  id="wd-due-date"
                  value={assignment ? `${assignment.due_date}T${assignment.due_time}` : ''}
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="wd-available-from" className="form-label">Available from</label>
                <input
                  type="datetime-local"
                  id="wd-available-from"
                  value={assignment ? `${assignment.available_date}T${assignment.available_time}` : ''}
                  className="form-control"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="wd-available-until" className="form-label">Until</label>
                <input
                  type="datetime-local"
                  id="wd-available-until"
                  value={assignment ? `${assignment.available_date}T${assignment.available_time}` : ''}
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end mb-5">
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger">Save</Link>
      </div>
    </div>
  );
}


























































  