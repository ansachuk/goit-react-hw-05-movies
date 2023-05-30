// import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Homepage from "pages/Homepage/Homepage";
import Movies from "pages/Movies/Movies";
import MovieDetails from "pages/MovieDetails/MovieDetails";

import Cast from "components/Cast/Cast";
import Reviews from "components/Reviews/Reviews";
import Layout from "components/Layout/Layout";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Homepage />} />
				<Route path="/movies" element={<Movies />} />
				<Route path="/movies/:movieId" element={<MovieDetails />}>
					<Route path="cast" element={<Cast />} />
					<Route path="reviews" element={<Reviews />} />
				</Route>
				<Route path="*" element={<Navigate to={"/"} />} />
			</Route>
		</Routes>
	);
};

export default App;
