/* eslint-disable react/prop-types */

import { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

const Modal = ({ rows, setRows }) => {
    const [visible, setVisible] = useState(false);
    const [allCost, setAllcost] = useState('');
    const [date, setDate] = useState('');
    const [id, setId] = useState(999);


    const addRow = () => {
        const convertedDate = new Date(date).toLocaleDateString('pt-BR')
        const cost = parseFloat(allCost)
        setDate(convertedDate)
        setRows([...rows, { id, cost, date }]);
        console.log(rows)
        setId(id + 1)
    }

    return (
        <div className="card flex bg-sky-950 justify-content-center w-full text-center justify-center border-gray-700 hover:shadow-md hover:shadow-slate-100 hover:scale-105 border bg-gradient-to-bl from-gray-900 to-gray-500  p-1 rounded-md">
            < Button label="Add row" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            < Dialog className='bg-gray-700 p-8 gap-3 text-xl rounded-md w-10' header="Add new row" visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                <label className='p-4' htmlFor="All cost">All cost</label>
                <input onChange={(e) => setAllcost(e.target.value)} className='text-sky-950 rounded-md' type="number" />
                <label className='p-4' htmlFor="date">Date</label>
                <input onChange={(e) => setDate(e.target.value)} className='text-sky-950 rounded-md' type="date" />
                <button className="flex w-max text-center justify-center border-gray-700 hover:shadow-md hover:shadow-slate-100 hover:scale-105 border bg-gradient-to-bl from-gray-900 to-gray-500 p-1 items-center rounded-md" onClick={() => addRow()}>Add row</button>
            </Dialog >
        </div >
    )
}
export default Modal
