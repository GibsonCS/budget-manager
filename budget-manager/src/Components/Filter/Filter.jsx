
const Filter = () => {
    return (
        <div className="flex-col text-center p-4">
            <span className="text-2xl">Enter date</span>
            <div className="flex gap-3 p-4">
                <label htmlFor="start">Start</label>
                <input className="rounded-md text-sky-950" type="date" />
                <label htmlFor="end">End</label>
                <input className="rounded-md text-sky-950" type="date" />
            </div>
        </div>
    )
};

export default Filter