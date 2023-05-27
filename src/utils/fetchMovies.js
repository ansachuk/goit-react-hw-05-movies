import axios from "axios";
import { Notify } from "notiflix/build/notiflix-notify-aio";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common["Authorization"] =
	"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmI4NjA0YTQxYTY4ZTc5YTFlOWVlZmM3Mjg0MmVjMSIsInN1YiI6IjY0NzBlMjY4MTNhMzIwMDBkY2Y5MGEzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RsXnr-598oJBtRU8ad6qDSzA1gOYtXAbicSLwSyV3Kk";

export const fetchTrendingMovies = async () => {
	try {
		const trending = await axios.get(`trending/movie/day`);

		return trending.data.results;
	} catch (error) {
		Notify.failure(`${error.message}`);
	}
};

export const fetchMovieById = async id => {
	try {
		const movie = await axios.get(`movie/${id}`);
		// console.log(movie.data);

		return movie.data;
	} catch (error) {
		Notify.failure(`${error.message}`);
	}
};

export const fetchCastById = async id => {
	try {
		const cast = await axios.get(`movie/${id}/credits`);
		console.log(cast.data.results);

		return cast.data.results;
	} catch (error) {
		Notify.failure(`${error.message}`);
	}
};

export const fetchReviewsById = async id => {
	try {
		const reviews = await axios.get(`movie/${id}/reviews`);
		console.log(reviews.data.results);

		return reviews.data.results;
	} catch (error) {
		Notify.failure(`${error.message}`);
	}
};
