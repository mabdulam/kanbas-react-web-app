import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";

type Assignment = {
  _id: string;
  course: string;
  title: string;
  description: string;
  pts: number;
  due_date: string;
  due_time: string;
  available_date: string;
  available_time: string;
  until_date: string;
  until_time: string;
};

const initialState = {
  assignments: [] as Assignment[],
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
  } as Assignment,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action: PayloadAction<Assignment[]>) => {
      state.assignments = action.payload;
    },
    setAssignment: (state, action: PayloadAction<Assignment>) => {
      state.assignment = action.payload;
    },
    addAssignment: (state, action: PayloadAction<Assignment>) => {
      console.log("Adding assignment:", action.payload);
      state.assignments.push(action.payload);
      console.log("Assignments:", state.assignments);
    },
    deleteAssignment: (state, action: PayloadAction<string>) => {
      state.assignments = state.assignments.filter(
        assignment => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action: PayloadAction<Assignment>) => {
      const index = state.assignments.findIndex(a => a._id === action.payload._id);
      if (index !== -1) {
        state.assignments[index] = action.payload;
      } else {
        state.assignments.push(action.payload);
      }
    },
  },
});

const selectAssignments = (state: any) => state.assignmentsReducer.assignments;

export const selectAssignmentsByCourse = createSelector(
  [selectAssignments, (state: any, cid: string) => cid],
  (assignments, cid) => {
    return assignments.filter((assignment: Assignment) => assignment.course === cid);
  }
);

export const {
  setAssignments,
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;












