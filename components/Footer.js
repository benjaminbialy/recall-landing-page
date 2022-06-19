import Link from "next/link";
import React from "react";

function Footer() {
	return (
		<div className="footer">
			<h4>recall &copy; 2022</h4>
			<div className="footer--links">
				<Link href={"/help"}>
					<a>About</a>
				</Link>
				<Link href={"/credit"}>
					<a>Credit</a>
				</Link>
				<a href="mailto: studywithrecall@gmail.com">Support</a>
				<Link href={"/blog"}>
					<a>Blog</a>
				</Link>
			</div>
		</div>
	);
}

export default Footer;
