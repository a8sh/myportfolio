import React from "react";
import "./Testimonial.css";
import ECELL from "../../assets/ecell.png";
import VF from "../../assets/viral-fission.jpg";
import ISP from "../../assets/internshala.jpg";
import VISHWA from "../../assets/vishwa.jpg";
import COC from "../../assets/coc.jpg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
	{
		avatar: ECELL,
		name: "ECELL-VJTI",
		work: "Worked at E-Cell VJTI as a design head of the committee, designing posts for social media handle",
	},
	{
		avatar: VF,
		name: "VIRAL-FISSION",
		work: "Campus Ambassador at viral fission. Represented VF by organizing various events,sharing exciting events,etc",
	},
	{
		avatar: ISP,
		name: "Internshala",
		work: "Internshala Student Partner of VJTI",
	},
	{
		avatar: VISHWA,
		name: "VISHWA-VJTI",
		work: " Founded VISHWA VJTI a Space and Astronomy club along with my seniors and started many sectors in the club",
	},
	{
		avatar: COC,
		name: "Community Of Coders",
		work: "Worked at Community of Coders as a design executibe of the club, designing magazines, banners, posts of the clubb and conducted hackathons",
	},
];
export default function Testimonial() {
	return (
		<section id='testimonial'>
			<h4>Work in committees</h4>
			<h2>Positions and Responsibiltes</h2>
			<Swiper
				className='container testimonials__container'
				modules={[Pagination]}
				spaceBetween={40}
				slidesPerView={1}
				pagination={{ clickable: true }}>
				{data.map(({ avatar, name, work }, index) => {
					return (
						<SwiperSlide key={index} className='testimonial'>
							<div className='client__avatar'>
								<img src={avatar} alt='' />
							</div>
							<h3 className='client__name'>{name}</h3>
							<small className='client__review'>{work}</small>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
}
