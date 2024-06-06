import { CiFilter } from "react-icons/ci";

export default function ApplyFilterButton() {
  return (
    <div id="wd-apply-filter-button" className="d-flex justify-content-start align-items-center ms-2 mt-2">
      <button id="wd-apply-filter-button-btn" className="btn btn-light me-2" style={{ height: "38px" }}>
        <CiFilter className="me-1" />
        Apply Filter
      </button>
    </div>
  );
}