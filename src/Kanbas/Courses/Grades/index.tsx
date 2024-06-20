import ApplyFilterButton from './ApplyFilterButton';
import SearchBars from './SearchBars';
import ImportExportButtons from './ImportExportButtons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import { assignments, enrollments, users, grades } from "../../Database"; 

export default function Grades() {
  const { cid } = useParams();
  const assignmentList = assignments.filter((assignment) => assignment.course === cid); 
  const enrollmentList = enrollments.filter((enrollment) => enrollment.course === cid); 
  
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
              {assignmentList.map((assignmentItem) => (
                <th className="col-1" key={assignmentItem._id}>{assignmentItem.title}<br />Out of {assignmentItem.pts}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {enrollmentList.map((enrollmentItem) => { 
              const user = users.find((userItem) => userItem._id === enrollmentItem.user);
              return (
                <tr key={enrollmentItem._id}>
                  <td className="text-danger">{user?.firstName} {user?.lastName}</td>
                  {assignmentList.map((assignmentItem) => { 
                    const grade = grades.find(
                      (gradeItem) => gradeItem.student === enrollmentItem.user && gradeItem.assignment === assignmentItem._id
                    );
                    return (
                      <td key={assignmentItem._id}>
                        {grade ? `${grade.grade}%` : ""}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

