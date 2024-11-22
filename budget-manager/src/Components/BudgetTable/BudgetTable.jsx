/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { Trash2 } from 'lucide-react'
import Modal from "../Modal/Modal"

const BugdgetTable = ({ data }) => {
    const [rows, setRows] = useState([])

    useEffect(() => {
        setRows(data)
    }, [data])

    const formatToBRL = (value) => {
        return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    }

    const formatDate = (date) => {
        if (date.includes('/')) {
            const [day, month, year] = date.split('/')
            return `${day}-${month}-${year}`
        }
        return date
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
                            <td className="px-4 py-2 border-r border-b border-gray-700">{formatDate(r.date)}</td>
                            <td className="px-4 py-2 border-r border-b border-gray-700 hover:bg-red-500"><button onClick={() => removeRow(r.id)}>remove</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex w-full justify-center p-4 gap-4">
                {/* <button ><Modal /></button> */}
                <Modal rows={rows} setRows={setRows} />
            </div>
        </>
    )
}

export default BugdgetTable