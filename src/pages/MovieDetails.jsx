import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { fetchMovieById } from "utils/fetchMovies";

export default function MovieDetails() {
	const [movie, setMovie] = useState(null);
	const { movieId } = useParams();

	useEffect(() => {
		if (!movie) {
			fetchMovieById(movieId).then(setMovie);
		}
	}, [movie, movieId]);

	return (
		<>
			<h1>{movie?.title}</h1>
			<p>{movie?.overview}</p>
			<Link to={"cast"}>Cast</Link>
			<Link to={"reviews"}>Reviews</Link>

			<Outlet />
		</>
	);
}
