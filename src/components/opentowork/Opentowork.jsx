import React from "react";
import "./Opentowork.css";
import { BsCheckLg } from "react-icons/bs";
export default function Opentowork() {
	return (
		<section id='opentowork'>
			<h4>Open To Work</h4>
			<h2>In Following Fields:</h2>
			<div className='container services__container'>
				<article className='service'>
					<div className='service__head'>
						<h3>UI/UX Design</h3>
					</div>
					<ul className='service__list'>
						<li>
							<BsCheckLg className='service__list-icon' />
							<p>Figma</p>
						</li>
						<li>
							<BsCheckLg className='service__list-icon' />
							<p>Adobe Photoshop</p>
						</li>
						<li>
							<BsCheckLg className='service__list-icon' />
							<p>Canva</p>
						</li>
						<li>
							<BsCheckLg className='service__list-icon' />
							<p>Adobe Illustrator</p>
						</li>
					</ul>
				</article>
				<article className='service'>
					<div className='service__head'>
						<h3>Web Development</h3>
					</div>
					<ul className='service__list'>
						<li>
							<BsCheckLg className='service__list-icon' />
							<p>Front-End Development</p>
						</li>
						<li>
							<BsCheckLg className='service__list-icon' />
							<p>MERN Development</p>
						</li>
						<li>
							<BsCheckLg className='service__list-icon' />
							<p>Front-End React Development</p>
						</li>
					</ul>
				</article>
				<article className='service'>
					<div className='service__head'>
						<h3>Data Analyst</h3>
					</div>
					<ul className='service__list'>
						<li>
							<BsCheckLg className='service__list-icon' />
							<p>MySQL</p>
						</li>
						<li>
							<BsCheckLg className='service__list-icon' />
							<p>DBMS</p>
						</li>
						<li>
							<BsCheckLg className='service__list-icon' />
							<p>Python</p>
						</li>
						<li>
							<BsCheckLg className='service__list-icon' />
							<p>APIs</p>
						</li>
					</ul>
				</article>
			</div>
		</section>
	);
}
