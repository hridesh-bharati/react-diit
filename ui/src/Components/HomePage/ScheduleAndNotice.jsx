import { useState, useEffect } from "react";
import { getAllNotice } from "../../api/adminApi/api";
export default function ScheduleAndNotice() {
    const [notice, setNotice] = useState([]);

    const fetchNotice = async () => {
        try {
            const rspns = await getAllNotice();
            if (rspns.ackbool == 1) {
                setNotice(rspns.message);
            }
        } catch (error) {
            throw error;
        }
    }
    useEffect(() => {
        fetchNotice();
    }, [])
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12" id="RegistrationContainer">
                    <div className="row my-4">
                        <div className="col-md-8 d-flex justify-content-center align-content-center m-auto p-2 text-white" >
                            <div className="row">
                                <div className="col-12">
                                    {
                                        notice.map((data) => {
                                            return (
                                                <div key={data._id} className="fw-bolder w-100 my-3 p-2" data-aos="fade-right" data-aos-duration="1500" id={data._id}>
                                                    <h1 className="fw-bolder  px-5">
                                                        <font color="red"><img src="/images/icon/arrow.png" alt="" /> {data.title}</font>
                                                    </h1>
                                                    <div className="container text-white ps-2 mx-3">
                                                        {data.nMessage}
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
