import React from 'react'

function AddFaculty() {
    return (
        <div>
            <div className='border h-[800px] text-sm overflow-auto '>
                <div className="text-xl font-semibold flex justify-between items-center px-5 py-4">
                    <span className="ml-1 font-medium">Add Faculty</span>
                    <span className="text-sm flex mr-2 font-medium">Schedule &nbsp;
                        <svg className="h-5 w-5 mt-[1px]" stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="m9 18 6-6-6-6"></path>
                        </svg>&nbsp;
                        <p className="text-blue-500">Add Faculty</p>
                    </span>
                </div>
                <div>
                    <form action="submit" className='grid lg:grid-flow-col md:grid-flow-col sm:grid-flow-row gap-5 m-7 p-2'>
                        <div className='border border-gray-300 p-4 rounded-md flex flex-col gap-4'>
                            <div className='flex flex-col myfont gap-1'>
                                <label htmlFor="type" className='font-bold'>Name</label>
                                <input className='myfont border border-gray-300 rounded-md h-10 w-full text-sm px-2' placeholder='Enter the Faculty name' type='text' name="" id="" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="name" className='myfont font-bold'>Subject</label>
                                <select name="subtype" className='border myfont border-gray-300 bg-white rounded-md  px-2 h-10' required>
                                    <option value="Web Technology">Web Technology</option>
                                    <option value="Java">Java</option>
                                    <option value=".NET">.NET</option>
                                    <option value="Database Management">Database Management</option>
                                    <option value="Python">Python</option>
                                    <option value="Linear algebra">Linear algebra</option>
                                </select>
                            </div>
                            <div className='flex flex-col myfont gap-1'>
                                <label htmlFor="type" className='font-bold'>Id</label>
                                <input className='myfont border border-gray-300 rounded-md h-10 w-full text-sm px-2' placeholder='Enter the Id' type='number' name="" id="" />
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
                                <label htmlFor="image" className='myfont font-bold'>Qualification</label>
                                {/* <select name="subtype" className='border myfont border-gray-300 bg-white rounded-md  px-2 h-10' required>
                                <option className='myfont' value="Brownie">Information Technology</option>
                                <option className='myfont' value="Cake">Computer</option>
                                <option className='myfont' value="chapati">ICT</option>
                                <option className='myfont' value="Coolers">Mechanical</option>
                                <option className='myfont' value="Coffees & Hot Drinks">B.Sc (I.T.)</option>
                                <option className='myfont' value="Eggs & Omelettes">BCA</option>
                            </select> */}
                                <input className='myfont border border-gray-300 rounded-md h-10 w-full text-sm px-2' placeholder='Enter the Qualification' type='text' name="image" required />

                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="image" className='myfont font-bold'>Office No.</label>
                                <input className='myfont border border-gray-300 rounded-md h-10 w-full text-sm px-2' placeholder='Enter the office number' type='number' name="image" required />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="price" className='myfont font-bold'>Subject Code</label>
                                <select name="subtype" className='border myfont border-gray-300 bg-white rounded-md  px-2 h-10' required>
                                    <option value="01IT0501">01IT0501</option>
                                    <option value="01IT0502">01IT0502</option>
                                    <option value="01IT0503">01IT0503</option>
                                    <option value="01IT0504">01IT0504</option>
                                    <option value="01IT0505">01IT0505</option>
                                    <option value="01IT0506">01IT0506</option>
                                </select>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="price" className='myfont font-bold'>Salary</label>
                                <input step="any" min="0" className='myfont border border-gray-300 rounded-md h-10 w-full text-sm px-2' placeholder='Enter the salary' type='number' name="price" required />
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

export default AddFaculty