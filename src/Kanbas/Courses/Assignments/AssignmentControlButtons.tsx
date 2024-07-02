import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";

export default function AssignmentControlButtons({ _id, deleteAssignment }: {
  _id: string; deleteAssignment: (_id: string) => void }) {
  return (
    <div className="float-end">
      <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteAssignment(_id)}/>
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}