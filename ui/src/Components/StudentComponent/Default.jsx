import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../api/studentApi/api';
import { setProfileDetails } from '../../store/reduxStore/student/studentSlice';
import StudentFooter from './StudentFooter';

export default function Default() {
    const dispatch = useDispatch();
    const fetchProfileHandler = async () => {
        try {
            const data = await getProfile();
            dispatch(setProfileDetails(data.message));
        } catch (error) {
            console.error('Error fetching profile:', error);
        }
    };
    useEffect(() => {
        fetchProfileHandler();
    }, []);
    const details = useSelector(state => state.studentProfileDetails);
    return (
        <div>
            {
                details && (
                    <div className="row student d-flex bg-white justify-content-center mt-0 pt-0 py-4 m-auto">
                        <div className="col-12 mb-5 pb-5 text-center">
                            <div className="shadow-sm p-2 shadow container m-auto my-2 bg-white">
                                <h5 className="fw-bolder mt-3 text-danger">{details.name} </h5>
                                <p className='small text-secondary mt-0 py-0'>{details.address}</p>
                            </div>
                            <div className="d-flex container m-auto bg-white text-start mshadow2 p-0 m-0">
                                <div className="p-2 m-0 d-flex flex-fill justify-content-evenly border border-warning m-1">
                                    <div>
                                        <p className='m-0 p-0 small text-primary fw-bolder'>Attendence</p>
                                        <h5 className='m-0 p-0 mdanger fw-bolder'>-----</h5>
                                    </div>

                                </div>    <div className="p-2 m-0 d-flex flex-fill justify-content-evenly border border-warning m-1">
                                    <div>
                                        <p className='m-0 p-0 small text-primary fw-bolder'>Course</p>
                                        <h5 className='m-0 p-0 mdanger fw-bolder'>{details.course}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="container my-3">
                                <div>
                                    <div>
                                        <h3 className="text-center text-danger fw-bolder HindiFont2 fs-2">दृष्टि कंप्यूटर सेंटर निचलौल</h3>
                                        <div className="row d-flex justify-content-center">
                                            <div className="col-md-4 text-center mx-0 px-0">
                                                <img src={details.photo} width={140} alt="" />
                                            </div>
                                            <div className="col-md-8 mx-0 px-0 text-start small d-flex justify-content-start">
                                                <table className='m-0 p-0 fw-bolder'>

                                                    <tr>
                                                        <th className='textMaroon'>Student Name: </th>
                                                        <td className='text-uppercase'>{details.name}</td>
                                                    </tr>
                                                    <tr>
                                                        <th className='textMaroon'>Student Category: </th>
                                                        <td className='text-uppercase'>{details.category}</td>
                                                    </tr>
                                                    <tr>
                                                        <th className='textMaroon'>Registration Number</th>
                                                        <td className='text-uppercase'>{details.regNum}</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="small text-start" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                                        <h4 className=" fw-bolder text-danger p-2 ms-2">About {details.name}</h4>
                                        <p className='text-lowercase'>{details.name} is the student of DRISHTEE INSTITUTE OF INFORMATION TECHNOLOGY, Nichlaul Maharajganj, Uttar-Pradesh 273304.</p>
                                        <p className='text-lowercase'>His father's name is {details.fatherName}. This {details.address}. He has done the {details.course} course from our Drishtee Computer Center Below.</p>
                                    </div>
                                </div>
                                <StudentFooter />
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
