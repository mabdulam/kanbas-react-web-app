import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";

export default function AssignmentControlButtonsTop() {
  return (
    <div className="float-end">
      <span className="badge rounded-pill text-bg-light border border-dark">40% of total</span>
      <BsPlus className="ms-2 me-2" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}

