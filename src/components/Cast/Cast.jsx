import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import css from "./Cast.module.scss";
import { fetchCastById } from "../../utils/fetchMovies";

export default function Cast() {
	const { movieId } = useParams();
	const [cast, setCast] = useState(null);

	useEffect(() => {
		if (!cast) {
			fetchCastById(movieId).then(rev => setCast([...rev]));
		}
	}, [movieId, cast]);
	return cast?.length ? (
		<ul>
			{cast?.map(
				person =>
					person.profile_path && (
						<li key={person.cast_id}>
							<img
								loading="lazy"
								className={css.img}
								alt={person.name}
								src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
							/>

							<h3>Name:{person.name}</h3>
							<h4>Character:{person.character}</h4>
						</li>
					),
			)}
		</ul>
	) : (
		<p>We don't have information about cast</p>
	);
}
