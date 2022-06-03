import React from "react";
import Book from "../components/SingleBook";
import { API_URL_GET } from "../helper";
import SharedLayout from "../components/SharedLayout";
import Feedback from "../components/Feedback";

export default function Home({ books }) {
	return (
		<SharedLayout isHome>
			<ul id="books">
				{books.message ? (
					<Feedback message={books.message} />
				) : (
					books.map((book) => <Book key={book.id} book={book} />)
				)}
			</ul>
		</SharedLayout>
	);
}

// Get all books
export async function getStaticProps() {
	const res = await fetch(API_URL_GET);
	const books = await res.json();

	return {
		props: {
			books,
		},
	};
}
