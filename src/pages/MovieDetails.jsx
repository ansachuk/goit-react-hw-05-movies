import Cast from "components/Cast/Cast";
import Reviews from "components/Reviews/Reviews";
import { Link } from "react-router-dom";

export default function MovieDetails() {
	return (
		<>
			<div>MovieDetails</div>
			<Link to={<Cast />}>Cast</Link>
			<Link to={<Reviews />}>Reviews</Link>
		</>
	);
}
