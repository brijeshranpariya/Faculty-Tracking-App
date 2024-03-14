import React from 'react'
import PropTypes from 'prop-types'
function Schedule({setSchedule}) {
    const handleshcedule=()=>{

        setSchedule(true,)

    }
    return (
        <div>
            <div className='text-xl font-semibold flex justify-between items-center px-5 py-4'>
                <span className='ml-1 font-medium'>Schedule</span>
                <span className='text-sm flex mr-2 font-medium'>Admin &nbsp; <svg className='h-5 w-5 mt-[1px]' stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>&nbsp; <p className='text-blue-500'>Schedule</p></span>
            </div>
            <div>
                <ul className='px-6 flex flex-col gap-3'>
                    <li onClick={handleshcedule} className='shadow-md border hover:border-2 px-4 h-12 flex items-center rounded-md border-gray-300 hover:cursor-pointer hover:border-blue-600'>prof. Zakir Husain</li>
                    <li onClick={handleshcedule} className='shadow-md border hover:border-2 px-4 h-12 flex items-center rounded-md border-gray-300 hover:cursor-pointer hover:border-blue-600'>prof. Ramesh Kamani</li>
                    <li onClick={handleshcedule} className='shadow-md border hover:border-2 px-4 h-12 flex items-center rounded-md border-gray-300 hover:cursor-pointer hover:border-blue-600'>prof. Paresh Vasoya</li>
                    <li onClick={handleshcedule} className='shadow-md border hover:border-2 px-4 h-12 flex items-center rounded-md border-gray-300 hover:cursor-pointer hover:border-blue-600'>prof. Kamlesh Kamalpara</li>
                    <li onClick={handleshcedule} className='shadow-md border hover:border-2 px-4 h-12 flex items-center rounded-md border-gray-300 hover:cursor-pointer hover:border-blue-600'>prof. Suresh Jadeja</li>
                    <li onClick={handleshcedule} className='shadow-md border hover:border-2 px-4 h-12 flex items-center rounded-md border-gray-300 hover:cursor-pointer hover:border-blue-600'>prof. Mahesh Vadi</li>
                </ul>
            </div>
        </div>
    )
}
Schedule.propTypes = {
    openDetails: PropTypes.func.isRequired
  };
export default Schedule