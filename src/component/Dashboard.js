import React from 'react'
function Dashboard() {
    return (
        <div>
            <div>
                <div>
                    <div className='myfont text-xl font-semibold flex justify-between items-center px-5 py-4'>
                        <span className='ml-1 font-medium'>Dashboard</span>
                        <span className='text-sm flex mr-2 font-medium'>Admin &nbsp; <svg className='h-5 w-5 mt-[1px]' stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>&nbsp; <p className='text-blue-500'>Dashboard</p></span>
                    </div>
                    <div className='flex gap-4 my-5 px-6 flex-wrap'>
                        <div className=' shadow-lg border-2 w-80 hover:cursor-pointer text-center hover:border-blue-800 p-5 border-gray-200 rounded-md'>
                            <p className='text-2xl font-bold text-blue-600'>Total Faculties</p>
                            <p className='text-3xl font-semibold mt-3'>6</p>
                        </div>
                        <div className=' shadow-lg border-2 w-80 hover:cursor-pointer text-center hover:border-blue-800 p-5 border-gray-200 rounded-md'>
                            <p className='text-2xl font-bold text-blue-600'>Total Subjects</p>
                            <p className='text-3xl font-semibold mt-3'>8</p>
                        </div>
                        <div className=' shadow-lg border-2 w-80 hover:cursor-pointer text-center hover:border-blue-800 p-5 border-gray-200 rounded-md'>
                            <p className='text-2xl font-bold text-blue-600'>Total Students</p>
                            <p className='text-3xl font-semibold mt-3'>150</p>
                        </div>
                        <div className=' shadow-lg border-2 w-80 hover:cursor-pointer text-center hover:border-blue-800 p-5 border-gray-200 rounded-md'>
                            <p className='text-2xl font-bold text-blue-600'>Upcoming Event</p>
                            <p className='text-3xl font-semibold mt-3'>2</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard