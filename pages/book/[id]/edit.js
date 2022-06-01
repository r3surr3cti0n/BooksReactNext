import React from "react";
import { useRouter } from "next/router";
import { API_URL } from "../../../helper";

const edit = ({ book }) => {
	const router = useRouter();
	const { id } = router.query;
	console.log(book);
	return <div>edit {id}</div>;
};

export default edit;

export async function getServerSideProps(context) {
	const res = await fetch(API_URL + "/" + context.query.id);
	const book = await res.json();

	return {
		props: {
			book,
		},
	};
}
