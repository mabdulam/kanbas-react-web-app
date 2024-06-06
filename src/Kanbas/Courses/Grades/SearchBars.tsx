import { FaSearch } from "react-icons/fa";

export default function SearchBars() {
  return (
    <div id="wd-search-bars" className="container-fluid mt-2">
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex justify-content-start">
            <label htmlFor="search-students" className="form-label"><strong>Student Names</strong></label>
          </div>
          <div className="input-group flex-nowrap">
            <span className="input-group-text bg-white border-end-0" id="addon-wrapping">
              <FaSearch />
            </span>
            <select
              id="search-students"
              className="form-select border-start-0"
              aria-label="Search Students"
              aria-describedby="addon-wrapping"
            >
              <option value="">Search Students</option>
              <option value="1">Jane Adams</option>
              <option value="2">Christina Allen</option>
              <option value="3">Samreen Ansari</option>
              <option value="4">Han Bao</option>
              <option value="5">Mahi Sai Srinivas Bobbili</option>
              <option value="6">Siran Cao</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-start">
            <label htmlFor="search-assignments" className="form-label"><strong>Assignment Names</strong></label>
          </div>
          <div className="input-group flex-nowrap">
            <span className="input-group-text bg-white border-end-0" id="addon-wrapping">
              <FaSearch />
            </span>
            <select
              id="search-assignments"
              className="form-select border-start-0"
              aria-label="Search Assignments"
              aria-describedby="addon-wrapping"
            >
              <option value="">Search Assignments</option>
              <option value="1">A1 SETUP</option>
              <option value="2">A2 HTML</option>
              <option value="3">A3 CSS</option>
              <option value="4">A4 BOOTSTRAP</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}


