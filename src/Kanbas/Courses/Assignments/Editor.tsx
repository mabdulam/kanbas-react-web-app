import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import "./index.css";

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const assignment = useSelector((state: any) =>
    state.assignmentsReducer.assignments.find((assignment: any) => assignment._id === aid)
  );

  const [title, setTitle] = useState(assignment?.title || "");
  const [description, setDescription] = useState(assignment?.description || "");
  const [points, setPoints] = useState(assignment?.pts || 0);
  const [dueDate, setDueDate] = useState(assignment?.due_date || "");
  const [dueTime, setDueTime] = useState(assignment?.due_time || "");
  const [availDate, setAvailDate] = useState(assignment?.available_date || "");
  const [availTime, setAvailTime] = useState(assignment?.available_time || "");
  const [untilDate, setUntilDate] = useState(assignment?.until_date || "");
  const [untilTime, setUntilTime] = useState(assignment?.until_time || "");

  useEffect(() => {
    if (aid && assignment) {
      setTitle(assignment.title);
      setDescription(assignment.description);
      setPoints(assignment.pts);
      setDueDate(assignment.due_date);
      setDueTime(assignment.due_time);
      setAvailDate(assignment.available_date);
      setAvailTime(assignment.available_time);
      setUntilDate(assignment.until_date);
      setUntilTime(assignment.until_time);
    }
  }, [aid, assignment]);

  const handleSave = () => {
    const updatedAssignment = {
      _id: aid || 'new',
      course: cid || "",
      title,
      description,
      pts: points,
      due_date: dueDate,
      due_time: dueTime,
      available_date: availDate,
      available_time: availTime,
      until_date: untilDate,
      until_time: untilTime,
    };

    if (aid) {
      console.log("Dispatching updateAssignment with:", updatedAssignment);
      dispatch(updateAssignment(updatedAssignment));
    } else {
      console.log("Dispatching addAssignment with:", updatedAssignment);
      dispatch(addAssignment(updatedAssignment));
    }

    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label"><strong>Assignment Name</strong></label>
        <input id="wd-name" type="text" value={title} className="form-control" onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div className="mb-5">
        <label htmlFor="wd-description" className="form-label"><strong>Description</strong></label>
        <textarea id="wd-description" className="form-control custom-textarea" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>

      <div className="row mb-5 justify-content-end align-items-center">
        <div className="col-md-5 text-end">
          <label htmlFor="wd-points" className="form-label"><strong>Points</strong></label>
        </div>
        <div className="col-md-7">
          <input id="wd-points" type="number" value={points} className="form-control" onChange={(e) => setPoints(Number(e.target.value))} />
        </div>
      </div>

      <div className="row mb-5 justify-content-end align-items-center">
        <div className="col-md-5 text-end">
          <label htmlFor="wd-group" className="form-label"><strong>Assignment Group</strong></label>
        </div>
        <div className="col-md-7">
          <select id="wd-group" className="form-select" value="ASSIGNMENTS" onChange={() => {}}>
            <option>ASSIGNMENTS</option>
          </select>
        </div>
      </div>

      <div className="row mb-5 justify-content-end align-items-center">
        <div className="col-md-5 text-end">
          <label htmlFor="wd-display-grade-as" className="form-label"><strong>Display Grade as</strong></label>
        </div>
        <div className="col-md-7">
          <select id="wd-display-grade-as" className="form-select" value="Percentage" onChange={() => {}}>
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
            <select id="wd-submission-type" className="form-select" value="Online" onChange={() => {}}>
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
                <label htmlFor="wd-due-date" className="form-label"><strong>Due</strong></label>
                <input
                  type="datetime-local"
                  id="wd-due-date"
                  value={dueDate ? `${dueDate}T${dueTime}` : ''}
                  className="form-control"
                  onChange={(e) => {
                    const [date, time] = e.target.value.split('T');
                    setDueDate(date);
                    setDueTime(time);
                  }}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="wd-available-from" className="form-label"><strong>Available from</strong></label>
                <input
                  type="datetime-local"
                  id="wd-available-from"
                  value={availDate ? `${availDate}T${availTime}` : ''}
                  className="form-control"
                  onChange={(e) => {
                    const [date, time] = e.target.value.split('T');
                    setAvailDate(date);
                    setAvailTime(time);
                  }}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="wd-available-until" className="form-label"><strong>Until</strong></label>
                <input
                  type="datetime-local"
                  id="wd-available-until"
                  value={untilDate ? `${untilDate}T${untilTime}` : ''}
                  className="form-control"
                  onChange={(e) => {
                    const [date, time] = e.target.value.split('T');
                    setUntilDate(date);
                    setUntilTime(time);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end mb-5">
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
        <button onClick={handleSave} className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}























































































  