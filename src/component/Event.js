import React from 'react'

function Event() {
    return (
        <div>

            <div className='border h-[800px] text-sm overflow-auto '>
                <div className="text-xl font-semibold flex justify-between items-center px-5 py-4">
                    <span className="ml-1 font-medium">Add Event</span>
                    <span className="text-sm flex mr-2 font-medium">Schedule &nbsp;
                        <svg className="h-5 w-5 mt-[1px]" stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="m9 18 6-6-6-6"></path>
                        </svg>&nbsp;
                        <p className="text-blue-500">Add Event</p>
                    </span>
                </div>
                <div>
                    <form action="submit" className='grid lg:grid-flow-col md:grid-flow-col sm:grid-flow-row gap-5 m-7 p-2'>
                        <div className='border border-gray-300 p-4 rounded-md flex flex-col gap-4'>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="name" className='myfont font-bold'>Event Name</label>
                                <input className='myfont border border-gray-300 rounded-md h-10 w-full text-sm px-2' placeholder='Enter the event name' type='text' name="image" required />
                            </div>
                            <div className='flex flex-col myfont gap-1'>
                                <label htmlFor="type" className='font-bold'>Date</label>
                                <input className='myfont border border-gray-300 rounded-md h-10 w-full text-sm px-2' placeholder='Enter the salary' type='date' min={'0'} name="" id="" />
                            </div>
                            <div className='flex flex-col myfont gap-1'>
                                <label className='font-bold' htmlFor="subtype" >Time</label>
                                <input className='myfont border border-gray-300 rounded-md h-10 w-full text-sm px-2' placeholder='Enter the Subject name' type='time' name="name" required />
                            </div>
                            <div>
                                <label className="myfont font-bold mb-2 block text-sm text-default-900" htmlFor="description" >Description</label>
                                <div className="relative w-full">
                                    <textarea placeholder="short Description" name="description" rows="5" className="rounded-lg border border-default-200 px-4 py-2.5 dark:bg-default-50 w-full h-44 resize-none"></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="border border-gray-300 p-4 myfont rounded-md flex flex-col gap-4">
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="image" className='myfont font-bold'>Event Manager</label>
                                <select name="subtype" className='border myfont border-gray-300 bg-white rounded-md  px-2 h-10' required>
                                    <option className='myfont' value="Brownie">Prof.Zakir Husain</option>
                                    <option className='myfont' value="Cake">Prof.Ramesh Kamani</option>
                                    <option className='myfont' value="chapati">Prof.Suresh Jadeja</option>
                                    <option className='myfont' value="Coolers">Prof.Paresh Vasoya</option>
                                    <option className='myfont' value="Coffees & Hot Drinks">Prof.Mahesh Vadi</option>
                                </select>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="image" className='myfont font-bold'>Vanue</label>
                                <input className='myfont border border-gray-300 rounded-md h-10 w-full text-sm px-2' placeholder='Enter the Location' type='text' name="image" required />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="price" className='myfont font-bold'>Budget</label>
                                <input step="any" min="0" className='myfont border border-gray-300 rounded-md h-10 w-full text-sm px-2' placeholder='Enter the Budget' type='number' name="price" required />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="price" className='myfont font-bold'>Semester</label>
                                <input step="any" min="0" className='myfont border border-gray-300 rounded-md h-10 w-full text-sm px-2' placeholder='Enter the Semester' type='number' name="price" required />
                            </div>
                            <div className='flex gap-5'>
                                <button type='submit' className='border p-2 rounded-md font-semibold hover:bg-blue-400 bg-blue-500 text-white myfont w-24 h-10 flex justify-evenly items-center'>
                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
                                    Save
                                </button>
                                <button type='reset' className='border p-2 rounded-md font-semibold hover:bg-blue-300 bg-blue-200 text-blue-500 myfont w-24 h-10 flex justify-evenly items-center'>
                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
                                    Clear
                                </button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>



    )
}

export default Event