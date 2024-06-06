import { FaFileImport, FaFileExport, FaCog } from 'react-icons/fa';

export default function ImportExportButtons() {
  return (
    <div id="wd-import-export-buttons" className="d-flex justify-content-end align-items-center me-2">
          <button className="btn btn-light me-2">
            <FaFileImport /> Import
          </button>
          <div className="dropdown">
            <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              <FaFileExport /> Export
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a className="dropdown-item" href="#">Export as CSV</a></li>
              <li><a className="dropdown-item" href="#">Export as Excel</a></li>
            </ul>
          </div>
          <button className="btn btn-light ms-2">
            <FaCog />
          </button>
        </div>
  );
}