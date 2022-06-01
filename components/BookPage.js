import React from "react";
import styles from "./BookPage.module.css";
import SharedLayout from "./SharedLayout";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const BookPage = ({ book }) => {
	const { id, author, title, cover, description } = book[0];

	return (
		<SharedLayout>
			<div className={styles.book_complete}>
				<Image
					className={styles.book_img}
					src={"/img/" + cover}
					alt={"../images/" + cover}
					width={350}
					height={450}
				/>
				<div className={styles.book_details}>
					<div className="book_title">
						<h1>{title}</h1>
						<Link href={`/book/${id}/edit`} >
							<a className={styles.editLink} title="Szerkeszt">
								<FontAwesomeIcon icon={faEdit} />
							</a>
						</Link>
					</div>
					<h2 className="book_author">{author}</h2>
					<p className={styles.book_desc}>{description}</p>
				</div>
			</div>
		</SharedLayout>
	);
};

export default BookPage;
