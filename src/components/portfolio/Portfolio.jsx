import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/newsapp.png";
import IMG2 from "../../assets/spotifyimg.png";
import IMG3 from "../../assets/textUtils.png";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/foodies.png";
import IMG6 from "../../assets/intelliweb.png"

const data=[
	{
		id:1,
		image:IMG1,
		title:'LastMinuteNews - Live News',
		github:'https://github.com/a8sh/lastMinuteNews',
		demo:'https://a8sh.github.io/lastMinuteNews/'
	},
	{
		id:2,
		image:IMG2,
		title:'Spotify Clone - Music for everyone',
		github:'https://github.com/a8sh/spotify',
		demo:'https://a8sh.github.io/spotify/',
	},
	{
		id:3,
		image:IMG3,
		title:'TextUtilis - Online website for manipulating your text',
		github:'https://github.com/a8sh/textUtils',
		demo:'https://a8sh.github.io/about'
	},
	{
		id:4,
		image:IMG4,
		title:'Login Page - MERN stack project',
		github:'https;//github.com',
		demo:'https://dribbble.com/shots/17315290-CloserMusic'
	},
	{
		id:5,
		image:IMG5,
		title:'Foodies - A responsive online restraunt site',
		github:'https://github.com/a8sh/foodies',
		demo:'https://a8sh.github.io/foodies/'
	},
	{
		id:6,
		image:IMG6,
		title:'IntelliWeb',
		github:'https://github.com/a8sh/IntelliWeb',
		demo:'https://intelli-web.vercel.app/'
	}
]

export default function Portfolio() {
	return (
		<section id='portfolio'>
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>
			<div className='container portfolio__container'>
				{
					data.map(({id,image,title,github,demo})=>{
						return (
							<article key={id} className='portfolio__item'>
					<div className='portfolio__item-image'>
						<img src={image} alt={title} />
					</div>
					<h3>{title}</h3>
					<div className='portfolio__item-cta'>
						<a href={github} className='btn'>
							Github
						</a>
						<a
							href={demo}
							className='btn btn-primary'
							target='_blank'>
							Live Demo
						</a>
					</div>
				</article>
						)
					})
				}
			</div>
		</section>
	);
}
