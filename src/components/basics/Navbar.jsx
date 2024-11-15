"use client"
import React from 'react'
import Link from 'next/link'
import { FcLike } from "react-icons/fc";
import { Poppins, Roboto } from "next/font/google"
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from 'react';
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", '800', '900']
})
const roboto = Roboto({
  subsets: ['latin'],
  weight: ["100", "300", "400", "500", "700", '900']
})
export default function Nav() {

  const [isNavOpen, setNavOpen]= useState(false)
  const openNav=()=>{
    setNavOpen(!isNavOpen)
  }
  const closeNav=()=>{
    setNavOpen(false)
  }
  return (
    <div className={`${isNavOpen ? "active-nav" : ""} select-none lg:px-5 px-4 shadow-md fixed top-0 bg-purple-700 h-16 w-full flex justify-between items-center`}>
      <div className='flex h-16 justify-between items-center lg:w-auto w-full '>
        <Link href={"/"} onClick={closeNav} className='flex space-x-2 justify-center items-center text-2xl text-white font-bold'>
          <AiOutlineFundProjectionScreen className='flex justify-center items-center'/> <span className={`${poppins.className}`}>CEP-Projects</span>
        </Link>
        <RiMenu3Fill onClick={openNav} size={24} color='white' className='lg:hidden flex justify-center items-center' />
      </div>
      <div className={`${roboto.className} ${isNavOpen ? "active-links" : ""} lg:block hidden  mx-5`}>
        <ul className='lg:flex lg:h-16 justify-center items-center space-x-8 text-md font-semibold text-white'>
          <li onClick={closeNav}><Link href={"/"}>Home</Link></li>
          <li onClick={closeNav}><Link href={"/projects"}>All Projects</Link></li>
        </ul>
      </div>
    </div>
  )
}