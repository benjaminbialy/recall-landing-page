import React from "react";
import Link from "next/link";

// needs number of terms, name of set and visibility
function SetCard(props) {
	return (
		<Link href={"/users/" + props.userID + "/set/" + props.setID}>
			<a
				className="setcard"
				style={{
					width: props.use === "profile" ? "85%" : "345px",
				}}
			>
				<div className="setcard--upper">
					<h4 className="setcard--name">
						{props.setName ? props.setName : "Set Name"}
					</h4>
					<p className="setcard--terms">
						{props.setName ? props.noTerms + " " : "No. "}Terms
					</p>
				</div>
				{props.use === "profile" ? (
					<p>{props.visibility}</p>
				) : (
					<p> {props.creatorName ? props.creatorName : "Creator Name"}</p>
				)}
			</a>
		</Link>
	);
}

export default SetCard;
