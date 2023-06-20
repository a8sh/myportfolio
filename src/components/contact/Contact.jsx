import React from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import {AiFillLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g9udxp4', 'service_g9udxp4', form.current, 'R1fFcKq4NPtTIsECa')
      e.target.reset();
  };
	return (
		<section id='contact'>
			<h4>Get in touch</h4>
			<h2>Contact Me</h2>
			<div className='container contact__container'>
				<div className='contact__options'>
					<article className='contact__option'>
						<MdEmail className="contact__option-icon" />
						<h4>Email</h4>
						<h5>Send a mail</h5>
						<a href='mailto:akshanshd46@gmail.com' target="_blank">Send a message</a>
					</article>
					<article className='contact__option'>
						<AiFillLinkedin className="contact__option-icon" />
						<h4>LinkedIn</h4>
						<h5>Message on LinkedIn</h5>
						<a
							href='https://linkedin.com
                ' target="_blank">
							Send a message
						</a>
					</article>
					<article className='contact__option'>
						<BsWhatsapp className="contact__option-icon" />
						<h4>WhatsApp (Web)</h4>
						<h5>Message on WhatsAPP</h5>
						<a href='https://web.whatsapp.com/send?phone=+918657839267' target="_blank">Send a message</a>
					</article>
          <article className='contact__option'>
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp (App)</h4>
            <h5>Message on WhatsAPP</h5>
            <a href='https://api.whatsapp.com/send?phone=918657839267' target='_blank' rel='noopener noreferrer'>
              Send a message
            </a>
            </article>
				</div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Full Name" required />
          <input type="text" email="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
			</div>
		</section>
	);
}
