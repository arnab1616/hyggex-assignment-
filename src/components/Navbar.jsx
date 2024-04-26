import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    <>
    <div className='container-fluid'>
        <nav className="nav-padding flex justify-between">
            <div className='flex items-center	'>
                <button className='btn rounded-full toggle' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <i className="bi bi-list fs-4"></i>
                </button>
                <img className='me-1' src="/assets/Clip path group.png" alt="" />
                <p className='text-2xl' style={{color:'#06286E'}}>
                    Hyggex<strong>X</strong>
                </p>
            </div>
            <div className='head-nav flex items-center '>
                <ul className='flex items-center justify-between navbar'>
                    <li className='nav-item'><a href="/">Home</a></li>
                    <li className='nav-item'><a href="/flashcard">Flashcard</a></li>
                    <li className='nav-item'><a href="/contact">Contact</a></li>
                    <li className='nav-item'><a href="/faq">FAQ</a></li>
                    <li className='login'><a href="/login">Login</a></li>
                </ul>
            </div>
{/*             <ul className='flex items-center justify-between navbar mobile-login'>
                <li className='login'><a href="/login">Login</a></li>
            </ul> */}
        </nav>
    </div>
    <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header flex items-center justify-between">
            <b className="fs-5" id="offcanvasExampleLabel">Menu</b>
            <button type="button" data-bs-dismiss="offcanvas" aria-label="Close"> <i className='bi bi-x-circle'></i> </button>
        </div>
        <div className='offcanvas-body'>
            <ul className='flex flex-col items-center justify-center navbar-nav'>
                <li className='nav-item'><a className='nav-link' href="/">Home</a></li>
                <li className='nav-item'><a className='nav-link' href="/flashcard">Flashcard</a></li>
                <li className='nav-item'><a className='nav-link' href="/contact">Contact</a></li>
                <li className='nav-item'><a className='nav-link' href="/faq">FAQ</a></li>
                <li className='login mt-3'><a className='nav-link ' href="/login">Login</a></li>
            </ul>
        </div>
    </div>
    <div className='container-fluid mt-3'>
        <nav className='nav-padding flex items-center'>
            <a href="/"><img src="/assets/Frame.png" alt="" /></a>
            <img src="/assets/Frame (1).png" alt="" />
            <p className='m-0 text-zinc-500'>Flashcard</p>
            <img src="/assets/Frame (1).png" alt="" />
            <p className='m-0 text-zinc-500'>Mathmetics</p>
            <img src="/assets/Frame (1).png" alt="" />
            <b className='m-0 text-blue-900'>Relation and Function</b>
        </nav>
    </div>
    </>
  )
}
