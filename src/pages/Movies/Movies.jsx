import { useState, useEffect } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";

import MovieItem from "components/MovieItem/MovieItem";
import { fetchByQuery } from "utils/fetchMovies";
import css from "./Movies.module.scss";

export default function Movies() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [searchedMovies, setSearchedMovies] = useState(null);
	const query = searchParams.get("query") ?? "";
	const location = useLocation();

	const updateSearchParams = query => {
		const nextSearchParams = query.trim() !== "" ? { query } : {};
		setSearchParams(nextSearchParams);
	};

	useEffect(() => {
		if (query.trim().length > 1) {
			fetchByQuery(query).then(setSearchedMovies);
		} else return setSearchedMovies([]);
	}, [query]);

	return (
		<>
			<input
				type="text"
				value={query}
				placeholder="Type a name of movie..."
				autoComplete="off"
				autoFocus
				autoCorrect="off"
				className={css.input}
				onChange={({ target }) => updateSearchParams(target.value)}
			/>

			{searchedMovies && (
				<div className={css.wrapper}>
					{searchedMovies.map(
						movie =>
							movie.poster_path && (
								<Link key={movie.id} to={`${movie.id}`} state={{ from: location }}>
									<MovieItem movie={movie} />
								</Link>
							),
					)}
				</div>
			)}
		</>
	);
}
