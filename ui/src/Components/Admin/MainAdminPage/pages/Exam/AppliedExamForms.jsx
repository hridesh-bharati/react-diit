import React, { useEffect, useState } from 'react'
import { examFormList, getCourseList, verifyExamForm } from '../../../../../api/adminApi/api';
import { toast } from 'react-toastify';
export default function AppliedExamForms() {
    const [formList, setFormList] = useState([]);
    const [examId, setExamId] = useState("");
    const [courses, setCourses] = useState("");
    const [course, setCourse] = useState();
    const [completed, setComplete] = useState();
    const [all, setAll] = useState(false);
    const getCoursesHandler = async () => {
        const rspns = await getCourseList();
        const allCourses = rspns.message;
        var coursesName = [];
        allCourses.forEach(course => {
            coursesName.push(course.name);
        });
        setCourses(coursesName);
    }
    const fetchExamFormHandler = async () => {
        if (all) {
            setComplete(null);
            setCourse(null);
        }
        const rspns = await examFormList(completed, course);
        setExamId(rspns.examId);
        setFormList(rspns.message);
    }
    const verifyExamFormHandler = async (exmId, frmId) => {
        try {
            const rspns = await verifyExamForm(exmId, frmId);
            toast.success(rspns.message);
        } catch (error) {
            throw error;
        }
    }
    useEffect(() => {
        fetchExamFormHandler();
    }, []);
    return (
        <>
            <div className="row m-0 p-0 pb-5">
                <div className="row d-flex text-center w-100 bg-primary py-1 m-auto px-0 mx-0">
                    <div className="m-0 p-0">
                        <h4 className="text-center py-4 bg-primary text-white fw-bolder m-0">STUDENT'S FINAL EXAMIATION QUERIES</h4>
                    </div>
                    <div className="col-12 mx-0">
                        <div className="row ">
                            <div className="col-4">
                                <select className='form-control p-1  m-1' onChange={(e) => { setAll(e.target.value) }}>
                                    <option className="form-select small" onClick={() => { setAll(false) }}>Not Selected</option>
                                    <option className="form-select small" value={true}>All</option>
                                </select>

                            </div>
                            <div className="col-4">
                                <select className='form-control p-1  m-1' onChange={(e) => { setComplete(e.target.value) }}>
                                    <option className="form-select small" onClick={() => { setComplete(null) }}>Exam Status</option>
                                    <option className="form-select small" value={true}>Completed</option>
                                    <option className="form-select small" value={false}>Uncompleted</option>
                                </select>

                            </div>
                            <div className="col-4">
                                <select className='form-control p-1  m-1' onClick={getCoursesHandler} onChange={(e) => { setCourse(e.target.value) }}>
                                    <option className="form-select small" onClick={() => { setCourse(null) }} >Select Course</option>
                                    {
                                        courses && courses.map((name) => {
                                            return (
                                                <option className="form-select small" value={name} >{name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-12">
                                <button className="btn my-2 btn-primary rounded-0" onClick={fetchExamFormHandler}><i className="bi bi-search"></i> Search</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-md-12 mb-5 mx-0 p-0">
                    <div className="table-responsive">
                        <table className="diplomaTable m-auto table table-responsive table-bordered table-sm small p-0 shadow">
                            <thead className='my-row-color mx-0 px-0'>
                                <tr className='table-dark'>
                                    <th>Photo</th>
                                    <th>Reg No.</th>
                                    <th>Name</th>
                                    <th>Request Type</th>
                                    <th>Applied at</th>
                                    <th>Tested</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className='diplomaTable'>
                                {
                                    formList && formList.map((stdnt) => {
                                        return (
                                            <tr key={stdnt.id} className='my-row-color '  >
                                                <td><img width="40px" height="40px" src={stdnt.photo} alt="Loading..." /></td>
                                                <td>{stdnt.regNum}</td>
                                                <td>{stdnt.name}</td>
                                                <td>{stdnt.verified ? "Verified" : "Pending"}</td>
                                                <td>{new Date(stdnt.applyDate).toLocaleDateString()}</td>
                                                <td>{stdnt.tested ? "Tested" : "Not"}</td>
                                                <td><button className="btn btn-primary small btn-sm" onClick={() => { verifyExamFormHandler(examId, stdnt.id) }}>Verify Now</button></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
