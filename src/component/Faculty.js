import React from 'react'
import PropTypes from 'prop-types'
function Faculty({openDetails,addFaculty}) {
    const opendetails=()=>{
        openDetails(true)
    }
    const addfaculty=()=>{
        addFaculty(true)
    }
    return (
        <div className=' text-black'>
            <div>

                <div className='text-xl font-semibold flex justify-between items-center px-5 py-4'>
                    <span className='ml-1 font-medium'>Faculty list</span>
                    <span className='text-sm flex mr-2 font-medium'>Admin &nbsp; <svg className='h-5 w-5 mt-[1px]' stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>&nbsp; <p className='text-blue-500'>Faculty list</p></span>
                </div>
            </div>
            <div>
                <button onClick={addfaculty} className='float-end mx-5 h-8 bg-blue-600 text-white w-36 flex items-center justify-center p-5 rounded-md my-5'>+ Add Faculty</button>
                <table className="min-w-full divide-y divide-default-200 ">
                    <thead className="bg-gray-100">
                        <tr className="text-start hover:cursor-pointer">
                            <th onClick={opendetails} className="whitespace-nowrap px-6 py-3 text-start text-sm font-semibold text-default-800">Faculty Name</th>
                            <th  className="whitespace-nowrap px-6 py-3 text-start text-sm font-semibold text-default-800">Id</th>
                            <th  className="whitespace-nowrap px-6 py-3 text-start text-sm font-semibold text-default-800">Subject</th>
                            <th  className="whitespace-nowrap px-6 py-3 text-start text-sm font-semibold text-default-800">Salary</th>
                            <th  className="whitespace-nowrap px-6 py-3 text-start text-sm font-semibold text-default-800">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='hover:cursor-pointer hover:bg-blue-50'>
                            <th onClick={opendetails} className="whitespace-nowrap px-6 py-3 text-start font-semibold text-default-800 text-xl">prof.Zakir Husain</th>
                            <th className="whitespace-nowrap px-6 py-3 text-start font-semibold text-default-800 text-xl">92100104015</th>
                            <th className="whitespace-nowrap px-6 py-3 text-start font-semibold text-default-800 text-xl">W.T.</th>
                            <th className="whitespace-nowrap px-6 py-3 text-start font-semibold text-default-800 text-xl">50000</th>
                            <th className="flex gap-3 whitespace-nowrap px-6 py-3 text-start text-sm font-semibold text-default-800">
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer transition-colors hover:text-blue-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                                    <path d="m15 5 4 4"></path>
                                </svg>
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer transition-colors hover:text-primary" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer transition-colors hover:text-red-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 6h18"></path>
                                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                    <line x1="10" x2="10" y1="11" y2="17"></line>
                                    <line x1="14" x2="14" y1="11" y2="17"></line>
                                </svg>
                            </th>
                        </tr>
                        <tr className='hover:cursor-pointer hover:bg-blue-50'>
                            <th className="whitespace-nowrap px-6 py-3 text-start font-semibold text-default-800 text-xl">prof.Zakir Husain</th>
                            <th className="whitespace-nowrap px-6 py-3 text-start font-semibold text-default-800 text-xl">92100104015</th>
                            <th className="whitespace-nowrap px-6 py-3 text-start font-semibold text-default-800 text-xl">W.T.</th>
                            <th className="whitespace-nowrap px-6 py-3 text-start font-semibold text-default-800 text-xl">50000</th>
                            <th className="flex gap-3 whitespace-nowrap px-6 py-3 text-start text-sm font-semibold text-default-800">
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer transition-colors hover:text-blue-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                                    <path d="m15 5 4 4"></path>
                                </svg>
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer transition-colors hover:text-primary" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer transition-colors hover:text-red-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 6h18"></path>
                                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                    <line x1="10" x2="10" y1="11" y2="17"></line>
                                    <line x1="14" x2="14" y1="11" y2="17"></line>
                                </svg>
                            </th>
                        </tr>
                        <tr>
                            <th className="whitespace-nowrap px-6 py-3 text-start font-semibold text-default-800 text-xl">prof.Zakir Husain</th>
                            <th className="whitespace-nowrap px-6 py-3 text-start font-semibold text-default-800 text-xl">92100104015</th>
                            <th className="whitespace-nowrap px-6 py-3 text-start font-semibold text-default-800 text-xl">W.T.</th>
                            <th className="whitespace-nowrap px-6 py-3 text-start font-semibold text-default-800 text-xl">50000</th>
                            <th className="flex gap-3 whitespace-nowrap px-6 py-3 text-start text-sm font-semibold text-default-800">
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer transition-colors hover:text-blue-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                                    <path d="m15 5 4 4"></path>
                                </svg>
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer transition-colors hover:text-primary" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer transition-colors hover:text-red-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 6h18"></path>
                                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                    <line x1="10" x2="10" y1="11" y2="17"></line>
                                    <line x1="14" x2="14" y1="11" y2="17"></line>
                                </svg>
                            </th>
                        </tr>
                        <tr>
                            <th className="whitespace-nowrap px-6 py-3 text-start font-semibold text-default-800 text-xl">prof.Zakir Husain</th>
                            <th className="whitespace-nowrap px-6 py-3 text-start font-semibold text-default-800 text-xl">92100104015</th>
                            <th className="whitespace-nowrap px-6 py-3 text-start font-semibold text-default-800 text-xl">W.T.</th>
                            <th className="whitespace-nowrap px-6 py-3 text-start font-semibold text-default-800 text-xl">50000</th>
                            <th className="flex gap-3 whitespace-nowrap px-6 py-3 text-start text-sm font-semibold text-default-800">
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer transition-colors hover:text-blue-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                                    <path d="m15 5 4 4"></path>
                                </svg>
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer transition-colors hover:text-primary" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer transition-colors hover:text-red-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 6h18"></path>
                                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                    <line x1="10" x2="10" y1="11" y2="17"></line>
                                    <line x1="14" x2="14" y1="11" y2="17"></line>
                                </svg>
                            </th>
                        </tr>
                        <tr>
                            <th className="whitespace-nowrap px-6 py-3 text-start font-semibold text-default-800 text-xl">prof.Zakir Husain</th>
                            <th className="whitespace-nowrap px-6 py-3 text-start font-semibold text-default-800 text-xl">92100104015</th>
                            <th className="whitespace-nowrap px-6 py-3 text-start font-semibold text-default-800 text-xl">W.T.</th>
                            <th className="whitespace-nowrap px-6 py-3 text-start font-semibold text-default-800 text-xl">50000</th>
                            <th className="flex gap-3 whitespace-nowrap px-6 py-3 text-start text-sm font-semibold text-default-800">
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer transition-colors hover:text-blue-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                                    <path d="m15 5 4 4"></path>
                                </svg>
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer transition-colors hover:text-primary" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer transition-colors hover:text-red-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 6h18"></path>
                                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                    <line x1="10" x2="10" y1="11" y2="17"></line>
                                    <line x1="14" x2="14" y1="11" y2="17"></line>
                                </svg>
                            </th>
                        </tr>
                        <tr>
                            <th className="whitespace-nowrap px-6 py-3 text-start font-semibold text-default-800 text-xl">prof.Zakir Husain</th>
                            <th className="whitespace-nowrap px-6 py-3 text-start font-semibold text-default-800 text-xl">92100104015</th>
                            <th className="whitespace-nowrap px-6 py-3 text-start font-semibold text-default-800 text-xl">W.T.</th>
                            <th className="whitespace-nowrap px-6 py-3 text-start font-semibold text-default-800 text-xl">50000</th>
                            <th className="flex gap-3 whitespace-nowrap px-6 py-3 text-start text-sm font-semibold text-default-800">
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer transition-colors hover:text-blue-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                                    <path d="m15 5 4 4"></path>
                                </svg>
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer transition-colors hover:text-primary" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer transition-colors hover:text-red-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 6h18"></path>
                                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                    <line x1="10" x2="10" y1="11" y2="17"></line>
                                    <line x1="14" x2="14" y1="11" y2="17"></line>
                                </svg>
                            </th>
                        </tr>
                        <tr>
                            <th className="whitespace-nowrap px-6 py-3 text-start font-semibold text-default-800 text-xl">prof.Zakir Husain</th>
                            <th className="whitespace-nowrap px-6 py-3 text-start font-semibold text-default-800 text-xl">92100104015</th>
                            <th className="whitespace-nowrap px-6 py-3 text-start font-semibold text-default-800 text-xl">W.T.</th>
                            <th className="whitespace-nowrap px-6 py-3 text-start font-semibold text-default-800 text-xl">50000</th>
                            <th className="flex gap-3 whitespace-nowrap px-6 py-3 text-start text-sm font-semibold text-default-800">
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer transition-colors hover:text-blue-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                                    <path d="m15 5 4 4"></path>
                                </svg>
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer transition-colors hover:text-primary" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer transition-colors hover:text-red-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 6h18"></path>
                                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                    <line x1="10" x2="10" y1="11" y2="17"></line>
                                    <line x1="14" x2="14" y1="11" y2="17"></line>
                                </svg>
                            </th>
                        </tr>
                        <tr>
                            <th className="whitespace-nowrap px-6 py-3 text-start font-semibold text-default-800 text-xl">prof.Zakir Husain</th>
                            <th className="whitespace-nowrap px-6 py-3 text-start font-semibold text-default-800 text-xl">92100104015</th>
                            <th className="whitespace-nowrap px-6 py-3 text-start font-semibold text-default-800 text-xl">W.T.</th>
                            <th className="whitespace-nowrap px-6 py-3 text-start font-semibold text-default-800 text-xl">50000</th>
                            <th className="flex gap-3 whitespace-nowrap px-6 py-3 text-start text-sm font-semibold text-default-800">
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer transition-colors hover:text-blue-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                                    <path d="m15 5 4 4"></path>
                                </svg>
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer transition-colors hover:text-primary" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer transition-colors hover:text-red-500" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 6h18"></path>
                                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                    <line x1="10" x2="10" y1="11" y2="17"></line>
                                    <line x1="14" x2="14" y1="11" y2="17"></line>
                                </svg>
                            </th>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}
Faculty.propTypes = {
    openDetails: PropTypes.func.isRequired,
    addFaculty: PropTypes.func.isRequired
  };
export default Faculty