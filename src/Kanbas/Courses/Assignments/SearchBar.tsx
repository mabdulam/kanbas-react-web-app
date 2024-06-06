import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div id="wd-search-bar" className="d-flex justify-content-start align-items-center">
      <div className="input-group flex-nowrap me-2" style={{ width: "300px" }}>
        <span className="input-group-text bg-white border-end-0" id="addon-wrapping">
          <FaSearch />
        </span>
        <input
          type="text"
          className="form-control border-start-0"
          placeholder="Search..."
          aria-label="Search..."
          aria-describedby="addon-wrapping"
        />
      </div>
    </div>
  );
}
