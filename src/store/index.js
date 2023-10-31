import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { albumApi } from "./apis/albumApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { photoApi } from "./apis/photoApi";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumApi.reducerPath]: albumApi.reducer,
    [photoApi.reducerPath]: photoApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(albumApi.middleware)
      .concat(photoApi.middleware);
  },
});

setupListeners(store.dispatch);

export * from "./thunks/userFetchThunk";
export * from "./thunks/userAddThunk";
export * from "./thunks/userFetchThunk";

export {
  useFetchAlbumsQuery,
  useAddAlbumsMutation,
  useRemoveAlbumsMutation,
} from "./apis/albumApi";

export {
  useFetchPhotosQuery,
  useAddPhotosMutation,
  useRemovePhotosMutation,
} from "./apis/photoApi";
