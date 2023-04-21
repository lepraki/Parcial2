import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFotos } from "../store/slices/fotos/thunks";

export const FotosApp = () => {
	const [FotosList, setFotosList] = useState([]);
	const [inc, setInc] = useState(0);

	const Fots = useSelector((state) => state.Fotos);
	const dispatch = useDispatch();

	const onInput = () => {
		dispatch(getFotos(0));
		setFotosList(Fotos.Fotos);
		console.log(Fotos.Fotos);
	};

	return (
		<>
			<div>Fotos</div>
			<button onClick={() => onInput()}>aja</button>
			<tbody>
				{FotosList.map((Fotos, index) => (
					<tr key={index}>
						<td>{FotosList[index].name}</td>
                        <td>{FotosList[index].url}</td>
					</tr>
				))}
			</tbody>
		</>
	);
};
