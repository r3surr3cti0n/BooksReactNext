import React from "react";
import Link from "next/link";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

const SharedLayout = ({ children, isHome }) => {
	return (
		<div id="shared_layout">
			<Head>
				<title>My Library</title>
			</Head>

			<header>
				<h2 className="title">My Library</h2>
			</header>
			<main id="main">
				{!isHome && (
					<Link href="/">
						<a className="backHomeLink">
							<FontAwesomeIcon
								style={{ paddingRight: "5px" }}
								icon={faArrowLeftLong}
							/>
							Go back home
						</a>
					</Link>
				)}
				{children}
			</main>
		</div>
	);
};

export default SharedLayout;
