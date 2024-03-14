import React from 'react'
import ProfilePic from '../Assets/Facultypic.jpg'
function Facultydata() {
    return (
        <div className='border h-[800px] overflow-auto'>
            <div className='text-xl md:mt-10 lg:mt-0 font-semibold flex justify-between items-center px-5 py-4'>
                <span className='ml-1 font-medium'>Prof.Zakir Husain</span>
                <span className='text-sm flex mr-2 font-medium'>Faculties &nbsp;
                    <svg className='h-5 w-5 mt-[1px]' stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m9 18 6-6-6-6"></path></svg>&nbsp;
                    <p className='text-blue-500'>Prof.Zakir Husain</p>
                </span>
            </div>
            <div className='flex gap-3 flex-col sm:flex-row sm:mt-0 md:mt-0 lg:mt-0 md:flex-row rounded-3xl mx-5 h-fit'>
                <div className="rounded-lg flex m-auto" style={{ width: '35%' }}>
                    <img className='m-auto rounded-xl' alt='prof. zakir' src={ProfilePic} height="150" width="250" />
                </div>
                <div className='border border-gray-200 m-auto rounded-lg h-fit w-fit shadow-lg' style={{ width: '50%' }}>
                    <div className="mx-3 my-4 flex justify-between">
                        <h4 className="text-4xl">Prof.Zakir Husain</h4>
                        <button>
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer transition-colors hover:text-green-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path><path d="m15 5 4 4"></path></svg>
                        </button>
                    </div>
                    <div className='mx-3 my-4'>
                        <h3 className="text-2xl text-blue-600">WEB TECHNOLOGY</h3>
                    </div>
                    <div>
                        <p className="mx-3 my-3 text-[16px] text-gray-500 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam laborum veniam est maiores ratione sit officiis soluta magnam fugiat labore magni illo similique fugit eos provident recusandae, voluptatem voluptatibus amet!</p>
                    </div>
                    <div className="mx-3 my-5 flex gap-4 flex-col">
                        <div className="flex w-[90px] justify-center items-center gap-2.5 rounded-full border border-gray-300 py-1.5">
                            <span className="text-[17px]">&#8377;50000</span>
                        </div>
                        <div className='flex lg:gap-28 md:gap-11 gap-10 sm:gap-12 flex-wrap'>
                            <div>
                                <div className=" flex py-1.5 gap-2.5">
                                    <span className='text-[17px] font-semibold text-gray-500'>Id :</span>
                                    <span className="text-[17px] text-gray-500">92100104015</span>
                                </div>
                                <div className=" flex py-1.5 gap-2.5">
                                    <span className='text-[17px] font-semibold text-gray-500'>Location :</span>
                                    <span className="text-[17px] text-gray-500">Rajkot</span>
                                </div>
                                <div className=" flex py-1.5 gap-2.5">
                                    <span className='text-[17px] font-semibold text-gray-500'>Workshop :</span>
                                    <span className="text-[17px] text-gray-500">8</span>
                                </div>
                                <div className=" flex py-1.5 gap-2.5">
                                    <span className='text-[17px] font-semibold text-gray-500'>Research Papers:</span>
                                    <span className="text-[17px] text-gray-500">2</span>
                                </div>
                                <div className=" flex py-1.5 gap-2.5">
                                    <span className='text-[17px] font-semibold text-gray-500'>Awards:</span>
                                    <span className="text-[17px] text-gray-500">2</span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div className=" flex py-1.5 gap-2.5">
                                        <span className='text-[17px] font-semibold text-gray-500'>Leave Req :</span>
                                        <span className="text-[17px] text-gray-500">0</span>
                                    </div>
                                    <div className=" flex py-1.5 gap-2.5">
                                        <span className='text-[17px] font-semibold text-gray-500'>Total Leaves :</span>
                                        <span className="text-[17px] text-gray-500">2</span>
                                    </div>
                                    <div className=" flex py-1.5 gap-2.5">
                                        <span className='text-[17px] font-semibold text-gray-500'>Availability :</span>
                                        <span className="text-[17px] text-gray-500">8:45-10:45</span>
                                    </div>
                                    <div className=" flex py-1.5 gap-2.5">
                                        <span className='text-[17px] font-semibold text-gray-500'>Attendence:</span>
                                        <span className="text-[17px] text-gray-500">88%</span>
                                    </div>
                                    <div className=" flex py-1.5 gap-2.5">
                                        <span className='text-[17px] font-semibold text-gray-500'>Events:</span>
                                        <span className="text-[17px] text-gray-500">2</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Facultydata