import { useState, useEffect } from "react";
import { getAllNotice } from "../../api/adminApi/api";
export default function Offers() {
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
        <div className=" mt-5">
            <div className="w-100 p-lg-5 ">
               <div className="mx-2 shadow p-2" id="HomeOffer">
               <h4 className="vlColor p-2">Hello   Everyone....! here you can see your all offer's that update by the Institute.</h4>
                {
                    notice.map((data) => {
                        return (
                            <div key={data._id} className="fw-bolder w-100 my-4 p-0" data-aos="fade-right" data-aos-duration="1500" id={data._id}>
                                <h5 className="fw-bolder px-2">
                                    <ul><li className="text-info">{data.title}</li></ul>
                                </h5>
                                <div className=" text-secondary ps-2 px-md-5 mx-3">
                                    {data.nMessage}
                                </div>
                            </div>
                        );
                    })
                }
               </div>
            </div>
        </div>
    )
}
