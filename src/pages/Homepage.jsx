import { Link } from "react-router-dom";

export default function Homepage({ trendingMovies }) {
	return (
		<>
			<h1>Trending now !</h1>
			<div>
				{trendingMovies?.map(movie => (
					<Link key={movie.id} to={`movies/${movie.id}`}>
						{movie.title}
					</Link>
				))}
			</div>
		</>
	);
}
