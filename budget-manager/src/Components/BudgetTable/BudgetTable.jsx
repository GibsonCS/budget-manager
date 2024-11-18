/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

const BugdgetTable = ({ data }) => {
    const [rows, setRows] = useState([])

    const addRow = (category, amount) => {
        setRows([...rows, { category, amount }]);
    }

    useEffect(() => {
        setRows(data)
    }, [data])

    return (
        <>
            <table className="table-auto border-collapse  border-t border-r border-l w-full text-center">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border-b ">Category</th>
                        <th className="px-4 py-2 border-b ">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((r, index) => (
                        <tr key={index}>
                            <td className="px-4 py-2 border-r border-b">{r.Category}</td>
                            <td className="px-4 py-2 border-b">{r.Amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex w-full justify-center p-4 gap-4">
                <button className="flex w-max border  p-1 rounded-md" onClick={() => addRow('teste', 5)}>Add row</button>
                <button className="flex w-max border  p-1 rounded-md">Remove row</button>
            </div>
        </>
    )
}

export default BugdgetTable