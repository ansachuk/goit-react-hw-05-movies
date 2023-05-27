import { useParams } from "react-router-dom";
import { fetchReviewsById } from "../../utils/fetchMovies";
import { useEffect, useState } from "react";

export default function Reviews() {
	const { movieId } = useParams();
	const [reviews, setReviews] = useState(null);

	useEffect(() => {
		if (!reviews) {
			fetchReviewsById(movieId).then(rev => setReviews([...rev]));
		}
	}, [movieId, reviews]);

	return (
		<ul>
			{reviews?.map(review => (
				<li key={review.id}>
					<h3>Author:{review.author}</h3>
					<p>{review.content}</p>
				</li>
			))}
		</ul>
	);
}
