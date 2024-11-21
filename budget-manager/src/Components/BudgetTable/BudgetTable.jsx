/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { Trash2 } from 'lucide-react'

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
    const removeRow = (id) => {
        const updatedRows = rows.filter(row => row.id !== id);
        setRows(updatedRows)
    }

    return (
        <>
            <table className="table-auto border-gray-700 bg-gradient-to-r from-gray-900 to-gray-600 border-t border-r border-l w-full text-center">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border-b border-gray-700 ">All costs</th>
                        <th className="px-4 py-2 border-b border-gray-700 ">Date</th>
                        <th className=" flex justify-center px-4 py-2 border-b border-gray-700 "><Trash2 /></th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((r, index) => (
                        <tr key={index}>
                            <td className="px-4 py-2 border-r border-b border-gray-700">{formatToBRL(r.cost)}</td>
                            <td className="px-4 py-2 border-r border-b border-gray-700">{formatToBRL(r.date)}</td>
                            <td className="px-4 py-2 border-r border-b border-gray-700 hover:bg-red-500"><button onClick={() => removeRow(r.id)}>remove</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex w-full justify-center p-4 gap-4">
                <button className="flex w-full text-center justify-center border-gray-700 hover:shadow-md hover:shadow-slate-100 hover:scale-105 border bg-gradient-to-bl from-gray-900 to-gray-500  p-1 rounded-md" onClick={() => addRow('teste', 5)}>Add row</button>
            </div>
        </>
    )
}

export default BugdgetTable