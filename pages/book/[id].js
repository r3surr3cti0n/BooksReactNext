import { useRouter } from "next/router";
import BookPage from "../../components/BookPage";
import { API_URL, getAllBookIds } from "../../helper";

const Book = ({ book }) => {
	const router = useRouter();
	// const { id } = router.query;

	return <BookPage book={book} />;
};

// Get an individual book
export async function getServerSideProps(context) {
	const res = await fetch(API_URL + "/" + context.query.id);
	const book = await res.json();

	return {
		props: {
			book,
		},
	};
}

// Get an individual book ---- Using static props
// export async function getStaticProps({ params }) {
// 	const res = await fetch(API_URL + "/" + params.id);
// 	const book = await res.json();

// 	return {
// 		props: {
// 			book,
// 		},
// 	};
// }

// export async function getStaticPaths() {
// 	const paths = await getAllBookIds();

// 	return {
// 		paths,
// 		fallback: false,
// 	};
// }

export default Book;
