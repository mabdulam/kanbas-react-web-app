import ApplyFilterButton from './ApplyFilterButton';
import SearchBars from './SearchBars';
import ImportExportButtons from './ImportExportButtons';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Grades() {
  return (
    <div>
      <ImportExportButtons />
      <SearchBars />
      <ApplyFilterButton />
      <div className="table-responsive p-2">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th className="col-1">Student Name</th>
              <th className="col-1">A1 SETUP<br />Out of 100</th>
              <th className="col-1">A2 HTML<br />Out of 100</th>
              <th className="col-1">A3 CSS<br />Out of 100</th>
              <th className="col-1">A4 BOOTSTRAP<br />Out of 100</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-danger">Jane Adams</td>
              <td>100%</td>
              <td>96.67%</td>
              <td>92.18%</td>
              <td>66.22%</td>
            </tr>
            <tr>
              <td className="text-danger">Christina Allen</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td className="text-danger">Samreen Ansari</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td className="text-danger">Han Bao</td>
              <td>100%</td>
              <td>100%</td>
              <td className="table-primary">
                <input type="text" className="form-control" value="88.03%" />
              </td>
              <td>98.99%</td>
            </tr>
            <tr>
              <td className="text-danger">Mahi Sai Srinivas Bobbili</td>
              <td>100%</td>
              <td>96.67%</td>
              <td>98.37%</td>
              <td>99.15%</td>
            </tr>
            <tr>
              <td className="text-danger">Siran Cao</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

