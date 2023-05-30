import { useState, useEffect } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";

// import { Notify } from "notiflix/build/notiflix-notify-aio";
// import debounce from "lodash.debounce";

import MovieItem from "components/MovieItem/MovieItem";
import { fetchByQuery } from "utils/fetchMovies";
import css from "./Movies.module.scss";

export default function Movies() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [searchedMovies, setSearchedMovies] = useState(null);
	const query = searchParams.get("query") ?? "";

	const location = useLocation();

	const updateSearchParams = query => {
		const nextSearchParams = query !== "" ? { query } : {};
		setSearchParams(nextSearchParams);
	};

	useEffect(() => {
		if (query.trim().length > 2) {
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
				onChange={({ target }) => updateSearchParams(target.value)}
			/>

			{searchedMovies && (
				<div className={css.wrapper}>
					{searchedMovies.map(movie => (
						<Link key={movie.id} to={`${movie.id}`} state={{ from: location }}>
							<MovieItem movie={movie} />
						</Link>
					))}
				</div>
			)}
		</>
	);
}
