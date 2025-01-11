import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { sendQuery } from "../../../api/studentApi/api";
function QueryForm() {
    const [fullName, setFullName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const clrqury = () => {
        setFullName('');
        setMobile('');
        setEmail('');
        setTitle('');
        setQuery('');
    }
    const pushMyQuery = async () => {
        if (fullName && mobile && email && title && query) {
            const rspns = await sendQuery({ fullName, mobile, email, title, query });
            if (rspns.ackbool == 1) {
                toast.success(rspns.message);
                const audio = new Audio("/audio/ring.mp3");
                audio.play();
                clrqury();
            }
        }
        else {
            toast.error("Please fill All Details")
        }
    }
    useEffect(() => {
        const aToken = localStorage.getItem('aJwt');
        if (aToken) {
            navigate('/Admin');
        }
    }, [])
    return (
        <div className="container my-5 p-3 shadow" id="signUpNow" >
            <h1 className="p-3 text-center text-uppercase text-white" style={{ background: 'var(--topNavBgColor)' }}>
                Enquiry Now
            </h1>
            <div className="row">
                <div className="col-md-6 my-2">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Full Name*"
                            value={fullName}
                            onChange={(event) => setFullName(event.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="col-md-6 my-2">
                    <div className="input-group">
                        <input
                            type="tel"
                            className="form-control"
                            placeholder="Enter Your Mobile*"
                            value={mobile}
                            onChange={(event) => setMobile(event.target.value)}
                            required
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 my-2">
                    <div className="input-group">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Your E-mail*"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="col-md-6 my-2">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Title*"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            required
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 my-2">
                    <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Type Your Enquiry*"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        required
                    ></textarea>
                </div>
            </div>
            <div className="row">
                <div className="col-12 my-1 text-center py-2 mx-0 px-0 d-flex justify-content-between">
                    <button className="btn btn-primary fw-medium text-white mx-2 px-5 w-100" onClick={() => clrqury()}> Reset </button>
                    <button className="btn fw-medium text-white mx-2 px-5 w-100" style={{ background: 'green' }} onClick={pushMyQuery}> Send </button>
                </div>
            </div>
        </div>

    );
}
export default QueryForm;
