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

    const formatToBRL = (value) => {
        return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    }

    return (
        <>
            <table className="table-auto border-collapse  border-t border-r border-l w-full text-center">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border-b ">All costs</th>
                        <th className="px-4 py-2 border-b ">Date</th>

                    </tr>
                </thead>
                <tbody>
                    {rows.map((r, index) => (
                        <tr key={index}>
                            <td className="px-4 py-2 border-r border-b">{formatToBRL(r.cost)}</td>
                            <td className="px-4 py-2 border-r border-b">{formatToBRL(r.date)}</td>
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