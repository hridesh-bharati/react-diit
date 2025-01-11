import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';
export default function StudentFooter() {
    const navigate = useNavigate();
    const details = useSelector(state => state.studentProfileDetails);
    return (
        <>
            {
                details.name && <nav className="navbar fixed-bottom bg-white StudentFooter pb-0 shadow-lg">
                    <ul className="d-flex justify-content-evenly w-100 mb-2 p-0 m-0">
                        <li className="nav-item text-center text-center">
                            <Link className="nav-link mt-2" to='/Student-Portal'> <i className="fa fa-home d-block" aria-hidden="true"></i>  Home</Link>
                        </li>
                        <li className="nav-item text-center">
                            <>
                                <Link className="nav-link mt-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" to='/'><i className="fa fa-search d-block" aria-hidden="true"></i>Search</Link>
                                <div className="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                                    <div className="offcanvas-header">
                                        <h5 className="offcanvas-title" id="offcanvasBottomLabel">Search Here</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body small">
                                        <span className="input-group">
                                            <input type="text" className='form-control' placeholder='Search any query.......' />
                                            <i className="bi bi-search px-2 bg-primary d-flex align-items-center fw-bolder fs-5"></i>
                                        </span>
                                    </div>
                                </div>
                            </>
                        </li>
                        <li className="nav-item text-center">
                            <Link className="nav-link mt-2" to='/Exam' ><i className="fa fa-id-card d-block" aria-hidden="true"></i>Exam</Link>
                        </li>
                        <li className="nav-item text-center pt-0 mt-0">
                            <img src={details.photo} width={20} className='img-fluid rounded-pill' alt="" />
                            <Link className="nav-link pt-0 mt-0" data-bs-toggle="offcanvas" to="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                Profile
                            </Link>
                            {/* Student setting  */}
                            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                <div className="offcanvas-header dblue text-white pt-5 ">
                                    <div className="d-flex justify-content-between w-100">
                                        <div className='d-flex align-items-center'>   <button type="button" className='btn text-white' data-bs-dismiss="offcanvas"><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
                                            <h5 className="offcanvas-title" id="offcanvasExampleLabel">Setting</h5></div>
                                        <i className="bi bi-bell-fill fs-4"></i>
                                    </div>
                                </div>
                                <div className="offcanvas-body m-0 p-0">
                                    <div className="row w-100 dblue mx-0 px-0 py-3">
                                        <div className="col-4 mx-0 px-0">
                                            <img src={details.photo} alt='Std' width={90} className='img-fluid rounded-circle' />
                                        </div>
                                        <div className="col-8 text-white text-start pt-2 mx-0 px-0">
                                            <h5 className="fw-bolder">{details.name}</h5>
                                            <p className='p-0 m-0'>{details.mobileNumber}</p>
                                            <p className='p-0 m-0'>{details.email}</p>
                                        </div>
                                    </div>
                                    <div className='text-start py-2 dbtext'>
                                        <ul>
                                            <li><i className="fa fa-user-circle" aria-hidden="true"></i>&nbsp; Father's Name : {details.fatherName}</li>
                                            <li><i className="fa fa-user-circle" aria-hidden="true"></i> &nbsp; Mother's Name : {details.motherName}</li>
                                            <li><i className="fa fa-book" aria-hidden="true"></i>&nbsp;  Student Course: {details.course}</li>
                                            <li><i className="fa fa-calendar" aria-hidden="true"></i> &nbsp; Date of birth: {new Date(details.dob).toDateString()} </li>
                                            <li><i className="fa fa-calendar" aria-hidden="true"></i> &nbsp; Admission date: {new Date(details.createdAt).toDateString()} </li>
                                            <li><i className="fa fa-clock" aria-hidden="true"></i> &nbsp; Course Completed:  {details.completed ? (<b>Completed</b>) : (<>Ongoing</>)}</li>
                                            <li>
                                                <button className="btn btn-danger btn-sm" onClick={() => {
                                                    localStorage.removeItem('sToken');
                                                    toast.success('Logout success');
                                                    navigate('/')
                                                }}>Log out </button>
                                            </li>
                                        </ul>

                                    </div>

                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            }
        </>
    )
}
