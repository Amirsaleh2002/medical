import { configureStore } from "@reduxjs/toolkit";

import patientReduce from "./store/newpatients";
import { useDispatch , TypedUseSelectorHook, useSelector} from "react-redux";

const store = configureStore({
  reducer: {
    patients: patientReduce,
    // registereduser: ,
    // doctors: ,
    // drugs,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export const useAppDispatch : () => typeof store.dispatch = useDispatch
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector

export default store;
