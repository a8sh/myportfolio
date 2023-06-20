import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import { TypeAnimation } from "react-type-animation";
export default function Header() {
	return (
		<header>
			<div className='container header__container'>
				<h2>Hello I'm</h2>
				<h1>Akshansh Dixit</h1>
				<div className='text-light'>
					<h3><TypeAnimation
						sequence={[
							"MERN Developer",
							2000,
							"Designer",
							2000,
							"Coder",
							2000,
							"Video Editor",
							2000,
							"C++ DSA 300+ Question solved",
							2000
						]}
						speed={50}
						repeat={Infinity}
					/></h3>
				</div>
				<CTA />
				<HeaderSocials />
				<div className='me'>
					<img src={ME} alt='my-image' />
				</div>
				<a href='#contact' className='scroll__down'>
					Scroll Down
				</a>
			</div>
		</header>
	);
}
