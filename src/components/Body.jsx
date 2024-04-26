import React, { useState } from 'react'

export default function Body() {
    const [col1, seCol1] = useState(false);
    const [col2, seCol2] = useState(false);
    const [col3, seCol3] = useState(false);
  return (
    <div className='container mt-4'>
        <div className='nav-padding'>
            <b className='text-blue-900 fs-5'>Relations and Functions ( Mathematics )</b>
            <div className='flex items-center justify-center mt-3'>
                <div className='flex flex-col justify-center items-center w-fit'>
                    <ul className='nav mb-3'>
                        <li className="nav-item"><a className='nav-link' href="">Study</a></li>
                        <li className="nav-item"><a className='nav-link' href="">Quiz</a></li>
                        <li className="nav-item"><a className='nav-link' href="">Test</a></li>
                        <li className="nav-item"><a className='nav-link' href="">Game</a></li>
                        <li className="nav-item"><a className='nav-link' href="">Others</a></li>
                    </ul>
                    <div>
                        <div className='body-box'>
                            <div className='flex items-center justify-between p-4'>
                                <img src="/assets/Vector (1).png" alt="hints" />
                                <img src="/assets/Vector.png" alt="volume" />
                            </div>
                            <div className='text-center' style={{transform:'translate(0,200%)'}}><b className='text-indigo-50 fs-4 '>9 + 6 + 7x - 2x - 3</b></div>
                        </div>
                        <div className='flex justify-between items-center p-3'>
                            <button>
                                <img src="/assets/Vector (4).png" alt="volume" />
                            </button>
                            <div className='flex items-center'>
                                <button><img src="/assets/Vector (3).png" alt="volume" /></button>
                                <b className='text-blue-900 fs-5 mx-3'>01/10</b>
                                <button><img src="/assets/Vector (2).png" alt="volume" /></button>
                            </div>
                            <button>
                                <i className="bi bi-fullscreen fs-5 text-blue-900 fs-5"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='nav-padding flex items-center justify-between mt-5'>
                <div className='flex logo-power'>
                    <div className='logo flex items-center justify-center me-2'>
                        <a href="/"><img src="/assets/Clip path group.png" alt="" /></a>
                    </div>
                    <div>
                        <p className='m-0 text-sm'>Powered by</p>
                        <p className='text-2xl m-0' style={{color:'#06286E'}}>Hyggex<strong>X</strong></p>
                    </div>
                </div>
                <div className='flex items-center create'>
                    <button className='me-3'>
                        <img src="/assets/Vector (5).png" alt="" />
                    </button>
                    <p className='m-0 text-blue-900 text-2xl font-medium'>Create Flashcard</p>
                </div>
            </div>
            <div className='collapse-group mt-5'>
                <p className='text-blue-900 fs-4 mb-4 font-bold	'>FAQ</p>
                <div id="collapseExample" style={{height:!col1?'fit-content':'max-content', transition:'ease-in-out 100ms'}}>
                    <div onClick={()=>{col1?seCol1(false):seCol1(true)}} className='flex items-center justify-between' type="button">
                        <p>Can education flashcards be used for all age groups?</p>
                        <i className="bi bi-caret-down-fill"></i>
                    </div>
                    <div className="" >
                        <p style={{display:!col1?'none':'block'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio perferendis mollitia accusamus. Quo magni, deleniti iusto, et, cumque alias ex debitis repellat quos laboriosam vitae. Natus debitis eum dignissimos alias.</p>
                    </div>
                </div>
                <div id="collapseExample" style={{height:!col2?'fit-content':'max-content', transition:'ease-in-out 100ms'}} >
                    <div onClick={()=>{col2?seCol2(false):seCol2(true)}} className='flex items-center justify-between' type="button">
                        <p>How do education flashcards work?</p>
                        <i className="bi bi-caret-down-fill"></i>
                    </div>
                    <div className="co" >
                        <p style={{display:!col2?'none':'block'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio perferendis mollitia accusamus. Quo magni, deleniti iusto, et, cumque alias ex debitis repellat quos laboriosam vitae. Natus debitis eum dignissimos alias.</p>
                    </div>
                </div>
                <div id="collapseExample" style={{height:!col3?'fit-content':'max-content', transition:'ease-in-out 100ms'}}>
                    <div onClick={()=>{col3?seCol3(false):seCol3(true)}} className='flex items-center justify-between' type="button">
                        <p>Can education flashcards be used for test preparation?</p>
                        <i className="bi bi-caret-down-fill"></i>
                    </div>
                    <div className="" >
                        <p style={{display:!col3?'none':'block'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio perferendis mollitia accusamus. Quo magni, deleniti iusto, et, cumque alias ex debitis repellat quos laboriosam vitae. Natus debitis eum dignissimos alias.</p>
                    </div>
                
                </div>
            </div>
        </div>
    </div>
  )
}
