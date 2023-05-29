import css from "./MovieItem.module.scss";

export default function MovieItem({ movie: { title, poster_path } }) {
	// https://image.tmdb.org/t/p/original/

	return (
		<>
			<img className={css.posterImg} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
			<h3 className={css.title}>{title}</h3>
		</>
	);
}
