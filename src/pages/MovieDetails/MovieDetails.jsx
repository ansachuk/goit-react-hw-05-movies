import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { fetchMovieById } from "utils/fetchMovies";

import css from "./MovieDetails.module.scss";

export default function MovieDetails() {
	const [movie, setMovie] = useState(null);
	const { movieId } = useParams();

	useEffect(() => {
		if (!movie) {
			fetchMovieById(movieId).then(setMovie);
		}
	}, [movie, movieId]);

	const releaseYear = movie?.release_date ? new Date(movie.release_date).getFullYear() : "N/A";

	return (
		movie && (
			<>
				<div className={css.wrapper}>
					<img
						loading="lazy"
						className={css.poster}
						src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
						alt={movie.title}
					/>

					<div className={css.info}>
						<h2 className={css.title}>{`${movie.title} (${releaseYear})`}</h2>
						<p className={css.tagline}>{movie.tagline}</p>

						<p className={css.score}>User score: {(movie.vote_average * 10).toFixed(2)}%</p>
						<h3>Genres</h3>

						<p>{movie.genres.map(genre => `${genre.name} `)}</p>

						<h3>Overview</h3>
						<p className={css.overview}>{movie.overview}</p>

						<h3>Status</h3>

						<p className={css.status}>{movie.status}</p>
					</div>
				</div>
				<Link to={"cast"}>Cast</Link>
				<Link to={"reviews"}>Reviews</Link>

				<Outlet id={movieId} />
			</>
		)
	);
}
