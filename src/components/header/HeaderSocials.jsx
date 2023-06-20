import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiGeeksforgeeks} from 'react-icons/si'
import {BsInstagram} from 'react-icons/bs'
export default function HeaderSocials() {
  return (
    <div>
      <div className="header__socials">
        <a href="www.linkedin.com/in/akshansh-dixit-215696210" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/a8sh" target='_blank'><BsGithub/></a>
        <a href="https://auth.geeksforgeeks.org/user/akshanshd45" target='_blank'><SiGeeksforgeeks/></a>
        <a href="https://instagram.com/akshanshhh10" target='_blank'><BsInstagram/></a>
      </div>
    </div>
  )
}
