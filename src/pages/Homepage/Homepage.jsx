import { Link } from "react-router-dom";

import MovieItem from "components/MovieItem/MovieItem";

import css from "./Homepage.module.scss";
import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "utils/fetchMovies";

export default function Homepage() {
	const [trendingMovies, setTrendingMovies] = useState(null);

	useEffect(() => {
		fetchTrendingMovies().then(setTrendingMovies);
	}, []);

	return (
		<>
			<h1 className={css.title}>Trending now !</h1>
			<div className={css.wrapper}>
				{trendingMovies?.map(movie => (
					<Link key={movie.id} to={`movies/${movie.id}`}>
						<MovieItem movie={movie} />
					</Link>
				))}
			</div>
		</>
	);
}
