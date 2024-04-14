import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/react";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import { Patients } from "../Components/srcTs/tsTypes/Patients.type";

export const getPatientsFromServer = createAsyncThunk(
  "patients/getPatientsFromServer",
  async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }
);


interface CounterState {
  value: [];
}

const initialState: CounterState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    //     incrementByAmount: (state, action: PayloadAction<number>) => {
    //       state.value += action.payload;
    //     },
  },
  //   extraReducers(builder) {
  //     builder.addCase(getPatientsFromServer.fulfilled, (state, action) => {
  //       console.log(state);
  //       console.log(action);
  //     });
  //   },
});

export default counterSlice.reducer;
