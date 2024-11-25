import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Filter = ({ setFilter }) => {
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');

    const aplyFilter = () => {
        setFilter({ start, end })
    }

    return (
        <div className="flex flex-col text-center p-4 items-center">
            <span className="text-2xl">Enter date</span>
            <div className="sm:flex sm:flex-row flex-col  gap-3 p-2 w-min justify-center items-center">
                <label htmlFor="start">Start</label>
                <input onChange={(e) => setStart(e.target.value)} className="rounded-md text-sky-950" type="date" />
                <label htmlFor="end">End</label>
                <input onChange={(e) => setEnd(e.target.value)} className="rounded-md text-sky-950" type="date" />
                <button className="flex w-max text-center justify-center border-gray-700 hover:shadow-md hover:shadow-slate-100 hover:scale-105 border bg-gradient-to-bl from-gray-900 to-gray-500  p-1 rounded-md sm:m-auto ml-12 mt-3" onClick={() => aplyFilter()}>Find</button>
            </div>
        </div>
    )
};

export default Filter