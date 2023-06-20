import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpeg";
import { HiAcademicCap } from "react-icons/hi";
import { FaUserCheck } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
export default function About() {
	return (
		<section id='user'>
			<h4>Get to know</h4>
			<h2>About Me</h2>
			<div className='container about__container'>
				<div className='about__me'>
					<div className='about__me-image'>
						<img src={ME} alt='' />
					</div>
				</div>

				<div className='about__content'>
					<div className='about__cards'>
						<article className='about__card'>
							<HiAcademicCap className='about__icon' />
							<h5>Current Education</h5>
							<small>Final Year B-Tech undergrad</small>
						</article>
						<article className='about__card'>
							<FaUserCheck className='about__icon' />
							<h5>Current Position</h5>
							<small>CDO - Ecell VJTI</small>
						</article>
						<article className='about__card'>
							<BsPersonWorkspace className='about__icon' />
							<h5>Projects</h5>
							<small>10+ Projects Completed</small>
						</article>
					</div>
          <p>
			A passionate MERN developer with the love for coding, development and designing and have strong foundation in front-end development.         </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
				</div>
			</div>
		</section>
	);
}
