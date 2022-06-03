// const API_URL_GET = "http://localhost:3001/api/get/book";
// const API_URL_PUT = "http://localhost:3001/api/put/book";
const API_URL_GET = "https://books-api-react.herokuapp.com/api/get/book";
const API_URL_PUT = "https://books-api-react.herokuapp.com/api/put/book";

// Return only book IDs
const getAllBookIds = async () => {
	const res = await fetch(API_URL_GET).then((res) => res.json());
	const books = res.map((book) => {
		return {
			id: String(book.id),
		};
	});

	return books;
};

export { API_URL_GET, API_URL_PUT, getAllBookIds };
