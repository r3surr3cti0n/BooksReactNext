import React, { useState } from "react";
import Link from "next/link";
import { API_URL_GET, API_URL_PUT } from "../../../../helper";
import SharedLayout from "../../../../components/SharedLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import styles from "./Edit.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const Edit = ({ book }) => {
	const { id, author, title, cover, description } = book[0];

	const router = useRouter();
	const [editedBook, setEditedBook] = useState(book[0]);
	const [changeHappened, setchangeHappened] = useState(false);
	const [error, setError] = useState(false);
	const [feedback, setFeedback] = useState("");

	if (feedback !== "") {
		router.push({
			pathname: `/book/${id}`,
			query: { feedback: feedback },
		});
	}

	const onSubmitHandler = (e) => {
		e.preventDefault();

		// Sending data to be updated
		if (changeHappened && !error) {
			const PUT_URL = `${API_URL_PUT}/${id}`;

			fetch(PUT_URL, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(editedBook),
			})
				.then((res) => res.json())
				.then((res) => setFeedback(res.message));
		}
	};

	const changeHandler = (data) => {
		// Error handling
		if (data.title === "") {
			setError(true);
		} else setError(false);

		const newData = { ...editedBook, ...data };
		setEditedBook(newData);
		setchangeHappened(true);
	};

	return (
		<SharedLayout isHome>
			<Link href={`/book/${id}`}>
				<a className="backLink">
					<FontAwesomeIcon
						style={{ paddingRight: "5px" }}
						icon={faArrowLeftLong}
					/>
					Quit from editing
				</a>
			</Link>
			<form id={styles.form} onSubmit={(e) => onSubmitHandler(e)}>
				<div className={styles.book_complete}>
					<Image
						className={styles.book_img}
						src={"/img/" + cover}
						alt={cover || " "}
						width={350}
						height={450}
					/>
					<div className={styles.book_details}>
						<input
							placeholder="Title"
							className={
								error
									? `${styles.inputErr} ${styles.book_title}`
									: styles.book_title
							}
							defaultValue={title}
							type="text"
							required
							onChange={(e) =>
								changeHandler({ title: e.target.value.trim() })
							}
						/>
						<input
							placeholder="Author"
							className={styles.book_author}
							defaultValue={author}
							type="text"
							onChange={(e) =>
								changeHandler({ author: e.target.value.trim() })
							}
						/>
						<textarea
							placeholder="Description"
							className={styles.book_desc}
							defaultValue={description}
							onChange={(e) =>
								changeHandler({
									description: e.target.value.trim(),
								})
							}
						></textarea>
					</div>
				</div>
				<input
					className={styles.submitBtn}
					type="submit"
					value="Submit"
				/>
			</form>
		</SharedLayout>
	);
};

export default Edit;

export async function getServerSideProps(context) {
	const res = await fetch(API_URL_GET + "/" + context.query.id);
	const book = await res.json();

	return {
		props: {
			book,
		},
	};
}
