import React from "react";
import styles from "./BookPage.module.css";
import SharedLayout from "./SharedLayout";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import Feedback from "./Feedback";

const BookPage = ({ book }) => {
	const { id, author, title, cover, description } = book[0] || {};
	const router = useRouter();
	const { feedback } = router.query;

	return (
		<SharedLayout>
			{feedback !== undefined ? <Feedback message={feedback} /> : ""}
			<div className={styles.book_complete}>
				<Image
					className={styles.book_img}
					src={"/img/" + cover}
					alt={cover || " "}
					width={350}
					height={450}
				/>
				<div className={styles.book_details}>
					<div className={styles.book_title}>
						<h1>{title}</h1>
						<Link href={`/book/${id}/edit`}>
							<a className={styles.editLink} title="Edit">
								<FontAwesomeIcon icon={faEdit} />
							</a>
						</Link>
					</div>
					<h2 className="book_author">{author}</h2>
					<p className={styles.book_desc}>
						{description === "" ? "no description" : description}
					</p>
				</div>
			</div>
		</SharedLayout>
	);
};

export default BookPage;
