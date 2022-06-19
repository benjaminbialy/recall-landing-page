import React from "react";
import Link from "next/link";

function FolderCard(props) {
	return (
		<Link href="/users/benjaminbialy/folders/folder">
			<a
				className="foldercard"
				style={{ width: props.use === "profile" ? "85%" : "345px" }}
			>
				<div className="foldercard--upper">
					<h4 className="foldercard--name">Folder Name</h4>
					<p className="foldercard--terms">No. Sets</p>
				</div>
				<p>Creator Name</p>
			</a>
		</Link>
	);
}

export default FolderCard;
