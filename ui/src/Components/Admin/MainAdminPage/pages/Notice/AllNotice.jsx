import React, { useState, useEffect } from 'react';
import { getAllNotice, deleteNotice, updateNotice } from '../../../../../api/adminApi/api';
import { toast } from 'react-toastify';
export default function AllNotice() {
    const [showInput, setShowInput] = useState(false);
    const [id, setId] = useState('');
    const [notice, setNotice] = useState([]);
    const [title, setTitle] = useState('');
    const [nMessage, setNewMessage] = useState('');
    const fetchNotice = async () => {
        const rspns = await getAllNotice();
        if (rspns.ackbool == 1) {
            setNotice(rspns.message);
        }

    }
    const deleteNoticeHandler = async (_id) => {
        const rspns = await deleteNotice(_id);
        if (rspns.ackbool == 1) {
            toast.success(rspns.message);
            fetchNotice();
        }
    }
    const updateNoticeHandler = async (_id) => {
        const rspns = await updateNotice({ _id: _id, title: title, nMessage: nMessage });
        if (rspns.ackbool == 1) {
            toast.success(rspns.message)
            setShowInput(false)
            fetchNotice();
        }
    }
    useEffect(() => {
        fetchNotice();
    }, [])
    return (
        <div className='container m-auto '>
            <table className='table table-sm table-borderd border-primary mx-0 px-0'>
                <tbody>
                    <tr className="table-dark">
                        <th>Title</th>
                        <th colSpan={2}>Description</th>
                        <th>Action</th>
                    </tr>
                    {
                        notice[0] && notice.map((notice, index) => {
                            return (
                                <tr key={index}>
                                    <td className='fw-bold text-primary'>{notice.title}</td>
                                    <td>{notice.nMessage}</td>
                                    <td><button className="btn btn-primary btn-sm" onClick={() => {
                                        setTitle(notice.title);
                                        setNewMessage(notice.nMessage);
                                        setId(notice._id);
                                        setShowInput(true)
                                    }}><i className="bi bi-pencil"></i>&nbsp; Edit</button></td>
                                    <td><button className="btn btn-danger small btn btn-sm" onClick={() => { deleteNoticeHandler(notice._id) }}>
                                        <i className="bi bi-trash-fill"></i>&nbsp; Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {showInput && <div className='py-2'>
                <input type="text" className='form-control my-2' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='New Title' />
                <textarea className='form-control my-2' value={nMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder='New Description' />
                <button className="btn btn-primary" onClick={() => { updateNoticeHandler(id) }}>Update</button>
            </div>}
        </ div>
    );
}
