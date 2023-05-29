import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCastById } from "../../utils/fetchMovies";

export default function Cast() {
	const { movieId } = useParams();
	const [cast, setCast] = useState(null);

	useEffect(() => {
		if (!cast) {
			fetchCastById(movieId).then(rev => setCast([...rev]));
		}
	}, [movieId, cast]);
	return (
		<ul>
			{cast?.map(person => (
				<li key={person.cast_id}>
					<h3>Name:{person.name}</h3>
					<h4>Character:{person.character}</h4>
				</li>
			))}
		</ul>
	);
}
