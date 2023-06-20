import React from 'react';
import './Footer.css';
import { BsDiscord, BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">AKSHANSH</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#user">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#testimonial">College Contribution</a></li>
        <li><a href="#opentowork">Open to Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/akshansh.dixit.31"><BsFacebook /></a>
        <a href="https://instagram.com/akshanshhh10"><BsInstagram /></a>
        <a href="https://twitter.com/login"><BsTwitter /></a>
        <a href="https://discord.com/users/Tempest#5353"><BsDiscord /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Akshansh Portfolio 2023</small>
      </div>
    </footer>
  );
}
