import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function StudyOption(props) {
	const [show, setShow] = useState(false);

	const route = useRouter();

	return (
		<Link
			href={
				"/users/" +
				route.query.userid +
				"/set/" +
				route.query.setID +
				"/" +
				props.option
			}
		>
			<a
				className="studyoption"
				onMouseOver={() => {
					setShow(true);
				}}
				onMouseLeave={() => {
					setShow(false);
				}}
			>
				<div className="studyoption--left">
					<h4 className="studyoption--left--heading">
						{props.option === "flashcards"
							? "Flashcards"
							: props.option === "test"
							? "Test"
							: props.option === "write"
							? "Write"
							: "Learn"}
					</h4>
					<p className="studyoption--left--desc">{props.description}</p>
				</div>

				<img className="studyoption--top--image" src={props.image} />
			</a>
		</Link>
	);
}

export default StudyOption;
