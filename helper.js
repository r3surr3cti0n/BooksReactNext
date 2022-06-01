const API_URL = "http://localhost:3001/api/book";

// Return only book IDs
const getAllBookIds = async () => {
	const res = await fetch(API_URL).then((res) => res.json());
	const books = res.map((book) => {
		return {
			id: book.id.toString(),
		};
	});

	return books;
};

export { API_URL, getAllBookIds };
