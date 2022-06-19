import React, { useContext } from "react";
import Link from "next/link";
import UserContext from "../firebase/UserContext";
import { getAuth, signOut } from "firebase/auth";

function NavBar() {
	// used to get the uid of the signed in person
	const userStatus = useContext(UserContext);

	const signOutUser = () => {
		const auth = getAuth();
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				console.log("Sign out successful");
			})
			.catch((error) => {
				// An error happened.
				console.log(error);
			});
	};

	return (
		<div className="navbar">
			<h1 className="navbar--title">
				<Link href="/home">
					<a className="navbar--title--text">
						<span className="accent--span">re</span>call
					</a>
				</Link>
			</h1>
			<ul className="navbar--right">
				<li className="navbar--right--item">
					<Link
						href={
							userStatus.authenticated ? "/users/" + userStatus.uid : "/home"
						}
					>
						<a className="navbar--right--item--link">Profile</a>
					</Link>
				</li>
				<li className="navbar--right--item">
					<Link href="/create">
						<a className="navbar--right--item--link">Create</a>
					</Link>
				</li>
				<li className="navbar--right--item">
					<Link href="/home">
						<input
							className="navbar--right--item--search"
							placeholder="Search"
						></input>
					</Link>
				</li>
				<li className="navbar--right--item">
					<Link href="/home">
						<a className="navbar--right--item--link" onClick={signOutUser}>
							Sign Out
						</a>
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default NavBar;
