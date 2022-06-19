import React from "react";

function ProfileHeader({ userData }) {
	return (
		<div className="profileheader">
			<img
				className="profileheader--pic"
				src={userData.picUrl}
				alt="profile picture"
			/>
			<h2 className="profileheader--name">{userData.name}</h2>
		</div>
	);
}

export default ProfileHeader;
