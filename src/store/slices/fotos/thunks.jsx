import { setFotos, startLoading } from "./FotosSlice";
import { Parcal2Api } from "../../../api/Parcial2Api";

export const getFotos = (page = 0) => {
	return async (dispatch, getState) => {
		dispatch(startLoading());

        const resp = await Parcial2Api.get(`https://jsonplaceholder.typicode.com/photos`);}
        const resp = await fetch (url)
		const data= await resp.json();

		dispatch(
			setPokemons({
				getFotos: resp.data.results,
				page: page + 1,
			})
		);
	};

