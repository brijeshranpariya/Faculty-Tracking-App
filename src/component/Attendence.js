import React from 'react'
import Progress from 'react-progressbar';
function Attendence() {
    return (
        <div>
            <div className="text-xl font-semibold flex justify-between items-center px-5 py-4">
                <span className="ml-1 font-medium">Attendence</span>
                <span className="text-sm flex mr-2 font-medium">Admin &nbsp;
                    <svg className="h-5 w-5 mt-[1px]" stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>&nbsp;
                    <p className="text-blue-500">Attendence</p>
                </span>
            </div>
            <div className='border border-gray-300 rounded-lg mx-6 p-5 flex flex-col gap-5'>
                <div>
                    <label htmlFor="">Prof.Zakir Husain</label>
                    <Progress completed={75} color={'rgb(37 ,99 ,235)'} />
                </div>
                <div>
                    <label htmlFor="">Prof.Ramesh Kamani</label>
                    <Progress completed={80} color={'rgb(37 ,99 ,235)'} />
                </div>
                <div>
                    <label htmlFor="">Prof.Paresh Vasoya</label>
                    <Progress completed={99} color={'rgb(37 ,99 ,235)'} />
                </div>
                <div>
                    <label htmlFor="">Prof.Kamlesh Kamalpara</label>
                    <Progress completed={80} color={'rgb(37 ,99 ,235)'} />
                </div>
                <div>
                    <label htmlFor="">Prof.Suresh Jadeja</label>
                    <Progress completed={68} color={'rgb(37 ,99 ,235)'} />
                </div>
                <div>
                    <label htmlFor="">Prof.Mahesh Vadi</label>
                    <Progress completed={85} color={'rgb(37 ,99 ,235)'} />
                </div>
            </div>
        </div>
    )
}

export default Attendence