import { configureStore } from "@reduxjs/toolkit";
import { FotosSlice } from "./slices/fotos/FotosSlice";
import { todosApi } from "../api/Parcial2Api";
import {counterSlice} from "./slices/counterSlice.jsx";

export const store= configureStore({
	reducer: {
		counter: counterSlice.reducer,
		photos: FotosSlice.reducer,
		[Parcial2Api.reducerPath]:Parcial2Api.reducer,
	},
	middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(Parcial2Api.middleware)
	
});
