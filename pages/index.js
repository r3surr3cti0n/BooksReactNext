import React from "react";
import Book from "../components/SingleBook";
import { API_URL } from "../helper";
import SharedLayout from "../components/SharedLayout";

export default function Home({ books }) {
	return (
		<SharedLayout isHome>
			<ul id="books">
				{books.map((book) => (
					<Book key={book.id} book={book} />
				))}
			</ul>
		</SharedLayout>
	);
}

// Get all books
export async function getStaticProps() {
	const res = await fetch(API_URL);
	const books = await res.json();

	return {
		props: {
			books,
		},
	};
}
