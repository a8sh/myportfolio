import React from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { VscHeartFilled } from "react-icons/vsc";
import { MdConnectWithoutContact } from "react-icons/md";
import { useState } from "react";

export default function Nav() {
	const [activeNav, setactiveNav] = useState("");
	return (
		<nav>
			<a href='#' onClick={() => setactiveNav("#")} className={activeNav === "#" ? "active" : ""}>
				<AiOutlineHome />
			</a>
			<a
				href='#user'
				onClick={() => setactiveNav("#user")}
				className={activeNav === "#user" ? "active" : ""}>
				<AiOutlineUser />
			</a>
			<a href='#experience' onClick={() => setactiveNav("#experience")}
				className={activeNav === "#experience" ? "active" : ""}>
				<BiBook />
			</a>
			<a href='#opentowork' onClick={() => setactiveNav("#opentowork")}
				className={activeNav === "#opentowork" ? "active" : ""}>
				<VscHeartFilled />
			</a>
			<a href='#contact' onClick={() => setactiveNav("#contact")}
				className={activeNav === "#contact" ? "active" : ""}>
				<MdConnectWithoutContact />
			</a>
		</nav>
	);
}
