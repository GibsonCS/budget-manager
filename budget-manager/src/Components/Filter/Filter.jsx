import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Filter = ({ setFilter }) => {
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');

    const aplyFilter = () => {
        setFilter({ start, end })
    }

    return (
        <div className="flex-col text-center p-4">
            <span className="text-2xl">Enter date</span>
            <div className="flex gap-3 p-4 justify-center">
                <label htmlFor="start">Start</label>
                <input onChange={(e) => setStart(e.target.value)} className="rounded-md text-sky-950" type="date" />
                <label htmlFor="end">End</label>
                <input onChange={(e) => setEnd(e.target.value)} className="rounded-md text-sky-950" type="date" />
                <button onClick={aplyFilter} className="border pr-2 pl-2 pb-0.5 ml-2 rounded-lg">Find</button>
            </div>
        </div>
    )
};

export default Filter