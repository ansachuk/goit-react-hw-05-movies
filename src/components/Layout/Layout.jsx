import { NavLink, Outlet } from "react-router-dom";

import css from "./Layout.module.css";

export default function Layout() {
	return (
		<>
			<header className={css.header}>
				<div className={css.container}>
					<nav className={css.nav}>
						<ul className={css.list}>
							<li className={css.item}>
								<NavLink className={css.navLink} to={"/"}>
									Home
								</NavLink>
							</li>
							<li className={css.item}>
								<NavLink className={css.navLink} to={"/movies"}>
									Movies
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</header>
			<main className={css.main}>
				<div className={css.container}>
					<Outlet />
				</div>
			</main>
		</>
	);
}
