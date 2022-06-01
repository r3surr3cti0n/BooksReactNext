import React from "react";
import Link from "next/link";
import Image from "next/image";

const SingleBook = ({ book }) => {
	const { id, author, title, cover } = book;

	return (
		<div className="book">
			<h1 className="book_title">{title}</h1>
			<h2 className="book_author">{author}</h2>
			<Link href={"/book/" + id}>
				<a className="book_cover">
					<Image
						src={"/img/" + cover}
						alt={"../images/" + cover}
						width={250}
						height={300}
					/>
				</a>
			</Link>
		</div>
	);
};

export default SingleBook;
