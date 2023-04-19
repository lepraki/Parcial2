import { createSlice } from "@reduxjs/toolkit";

export const FotosSlice = createSlice({
	name: "pokemon",
	initialState: {
		page: 0,
		Fotos: [],
		isLoading: false,
	},
	reducers: {
		startLoading: (state, action) => {
			state.isLoading = true;
		},
		setFotos: (state, action) => {
			state.isLoading = false;
			state.page = action.payload.page;
			state.Fotos = action.payload.getFotos;
		},
	},
});

export const { startLoading, setFotos } = FotosSlice.actions;

export default FotosSlice.reducer
