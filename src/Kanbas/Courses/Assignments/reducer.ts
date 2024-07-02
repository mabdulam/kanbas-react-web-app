import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments: assignments,
  assignment: {
    _id: "",
    course: "AA123",
    title: "New Assignment",
    description: "",
    pts: 0,
    due_date: "",
    due_time: "",
    available_date: "",
    available_time: "",
    until_date: "",
    until_time: "",
  },
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action: PayloadAction<typeof initialState.assignment>) => {
      const ids = state.assignments.map(a => parseInt(a._id.slice(1))).filter(id => !isNaN(id));
      const maxId = Math.max(...ids, 0);
      const newId = `A${maxId + 1}`;
      const newAssignment = { ...action.payload, _id: newId };
      console.log("Adding new assignment:", newAssignment); // Debug log
      state.assignments.push(newAssignment);
    },
    deleteAssignment: (state, action: PayloadAction<string>) => {
      state.assignments = state.assignments.filter(
        assignment => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action: PayloadAction<typeof initialState.assignment>) => {
      console.log("Updating assignment:", action.payload); // Debug log
      const index = state.assignments.findIndex(a => a._id === action.payload._id);
      if (index !== -1) {
        state.assignments[index] = action.payload;
      } else {
        state.assignments.push(action.payload);
      }
    },
    setAssignment: (state, action: PayloadAction<typeof initialState.assignment>) => {
      state.assignment = action.payload;
    },
  },
});

const selectAssignments = (state: any) => state.assignmentsReducer.assignments;

export const selectAssignmentsByCourse = createSelector(
  [selectAssignments, (state: any, cid: string) => cid],
  (assignments, cid) => {
    const filteredAssignments = assignments.filter((assignment: any) => assignment.course === cid);
    console.log("Filtered assignments for course", cid, filteredAssignments); // Debug log
    return filteredAssignments;
  }
);

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;





