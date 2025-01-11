import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setExamData, setExmQstns } from '../../store/reduxStore/student/studentSlice';
import { useNavigate } from 'react-router-dom';
import { getExams, fillExamForm, startExam } from '../../api/studentApi/api';
import { toast } from 'react-toastify';
export default function Exam() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const fetchExamHandler = async (completed, locked) => {
        try {
            const data = await getExams(completed, locked);
            dispatch(setExamData(data.message))
        } catch (error) {
            console.log('exam fetching error', error);
        }
    };
    const applyForm = async (applied, examId) => {
        const response = await fillExamForm(applied, examId);
        toast.success(response.message);
    }
    const startExamination = async (start) => {
        const rspns = await startExam(start);
        if (rspns.ackbool == 1) {
            navigate('/Exam-Portal');
            dispatch(setExmQstns(rspns.message));
            toast.success("Exam Has Been Started");
        }
    }
    useEffect(() => {
        fetchExamHandler(false, false);
    }, [])
    const examData = useSelector(state => state.examDetails);
    const { name, photo } = useSelector(state => state.studentProfileDetails);
    return (
        <>
            <div className="container-fluid row w-100 m-auto  mb-5 bg-white shadow  py-5 ">
                <h2 className="text-center fw-bolder text-white dblue shadow py-3 my-0 ">
                    <i className="bi bi-card-list fs-2 text-warning fw-bolder"></i> Apply Examination
                </h2>
                <h3 className="text-center p-2 bg-primary-subtle text-uppercase fw-bolder" style={{ color: 'maroon' }}>Welcome to examinition dashboard</h3>

                <div className="col-md-6 shadow text-center py-3">
                    <img src={photo} width={200} />
                    <p className='small pt-2'>Registration No: 121</p>
                </div>
                <div className="col-md-6 shadow py-3">
                    <div
                        class="table-responsive small" >
                        <table
                            class="table table-responsive table-sm"
                        >
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <td>{name}</td>
                                </tr>
                            </thead>
                            {examData && (
                                <tbody >
                                    <tr>
                                        <th>Course</th>
                                        <td>{examData.courseName}</td>
                                    </tr>
                                    <tr>
                                        <th>Date</th>
                                        <td>{new Date(examData.examDate).toDateString()}</td>
                                    </tr>

                                    <tr>
                                        <th>Duration</th>
                                        <td>{examData.duration} hours</td>
                                    </tr>
                                    <tr>
                                        <th>Reporting time</th>
                                        <td>{new Date(examData.reportingTime).toLocaleTimeString()}</td>
                                    </tr>
                                    <tr>
                                        <th>Start from</th>
                                        <td>{new Date(examData.from).toLocaleTimeString()}</td>
                                    </tr>
                                    <tr>
                                        <th>End at</th>
                                        <td>{new Date(examData.to).toLocaleTimeString()}</td>
                                    </tr>
                                </tbody>
                            )}
                        </table>
                    </div>

                </div>
                <div className="col-12 my-2">
                    <h3 className="text-center w-100 maroon py-2 text-white HindiFont2">छात्रों के लिए निर्देश</h3>
                    <ol>
                        <li className='my-2 small HindiFont2'>परीक्षा की तारीख, समय और महत्वपूर्ण जानकारी के लिए कृपा संस्थान की शैक्षिक वेबसाइट से संबंधित अध्ययन अधिसूचना को अवसर देखें।</li>
                        <li className='my-2 small HindiFont2'>"छात्रों को सलाह दी जाती है कि वे परीक्षा की अद्यतन जानकारी के लिए संस्थान की आधिकारिक वेबसाइट को नियमित रूप से देखते रहें।"</li>
                    </ol>
                </div>
                <div className="col-md-6 shadow HindiFont2 small ">
                    <p><b className='text-danger '>Note:</b> अगर छात्र/छात्रा को किसी भी तरह की पूछताछ करनी या किसी भी तरह की जानकारी लेनी हो तो  संस्था Number पर कॉल या ईमेल कर सकते हैं</p>
                </div>
                <div className="col-md-6 shadow">
                    <h5 className="text-center w-100 maroon py-1 text-white HindiFont2">महत्वपूर्ण निर्देश</h5>
                    <marquee direction="up" scrollamount="1">
                        <li className='my-2 small HindiFont2'>सभी छात्रों का कोर्से नोट्स हस्तलिखित पूरा होना जरूरी है।</li>
                        <li className='my-2 small HindiFont2'>सभी छात्रों की उपस्थिति 80% होना अनिवार्य है।</li>
                        <li className='my-2 small HindiFont2'>"परीक्षा के दौरान किसी भी इलेक्ट्रॉनिक उपकरण का उपयोग सख्त रूप से निषेध है।"</li>
                    </marquee>
                </div>
                <>

                    <div class="d-flex align-items-center justify-content-center">
                        <div className="text-center m-4" onClick={() => { applyForm(true, examData._id) }}>
                            <button className="btn btn-primary">Apply for Examination</button>
                        </div>
                        <div class="nav flex-column nav-pills m-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <button class="nav-link bg-primary-subtle text-dark" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" onClick={() => { startExamination(true) }}>Start  Examination</button>
                        </div>
                    </div>
                </>
            </div>
        </>
    )
}
