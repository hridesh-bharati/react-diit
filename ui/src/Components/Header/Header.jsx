import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCourses } from '../../store/reduxStore/student/studentSlice';
import '../../App.css';
import { Link } from "react-router-dom";

import { getCourseList } from '../../api/adminApi/api';

import { loginAdmin, sendOtpForRPsd as sendOtpForRPsdAdmin } from '../../api/adminApi/api';
import { verifyOtpAndUpdatePsd as verifyOtpAndUpdatePsdAdmin } from '../../api/adminApi/api';

import { loginStudent, sendOtpForRPsd as sendOtpForRspStudent } from '../../api/studentApi/api';
import { verifyOtpAndUpdatePsd as verifyOtpAndUpdatePsdStudent } from '../../api/studentApi/api';
import DarkMode from '../HelperCmp/Darkmode/DarkMode';
function Header() {
    const dispatch = useDispatch();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [regNum, setRegNum] = useState("");
    const [time, setTime] = useState(120);
    const [fEmail, setFEmail] = useState("");
    const [nPsd, setNPsd] = useState("");
    const [tOtp, setTOtp] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const [EnabledSendOtpBtn, setEnabledSendOtpBtn] = useState(true);
    const [otpStatus, setOtpStatus] = useState(false);
    const navigate = useNavigate();
    const startCountDown = (() => {
        const intervalId = setInterval(() => {
            setTime((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(intervalId);
                    setEnabledSendOtpBtn(true);
                    setOtpStatus(false);
                    return 120;
                }
                return prevTime - 1;
            }
            )
        }, 1000);
    });
    const fetchCourses = (async () => {
        const rspns = await getCourseList();
        if (rspns.ackbool == 1) {
            dispatch(setCourses(rspns.message));
        }
    });
    const fetchLogin = (async (func) => {
        const id = isAdmin ? email : regNum;
        if (id && password) {
            try {
                const rspns = await func(id, password);
                if (rspns.ackbool == 1) {
                    if (isAdmin) {
                        localStorage.setItem('aToken', rspns.token);
                        navigate('/Admin-Pannel');
                    } else {
                        localStorage.setItem('sToken', rspns.token);
                        navigate('/Student-Portal');
                    }
                    toast.success('Logged In')
                }
            } catch (error) {
                console.log('An Error occured while feching login admin profile ' + error)
            }

        } else {
            toast.error('Please fill the email and Password field');
        }
    })
    const sendOtpHandler = (async (func) => {
        try {
            setEnabledSendOtpBtn(false);
            const rspns = await func(fEmail);
            if (rspns.ackbool == 1) {
                toast.success(rspns.message);
                setEnabledSendOtpBtn(false);
                setOtpStatus(true)
                startCountDown();
            } else {
                setEnabledSendOtpBtn(true);
                otpStatus(false);
            }
        } catch (error) {
            console.log(error)
            setEnabledSendOtpBtn(true);
            setOtpStatus(false);
        }
    })
    const updatePsd = (async (func) => {
        const rspns = await func(fEmail, tOtp, nPsd);
        if (rspns.ackbool == 1) {
            setOtpStatus(false)
            setEnabledSendOtpBtn(true);
            toast.success(rspns.message);
        }
    })

    const [isVisible, setIsVisible] = useState(false);
    const [islogin, setIslogin] = useState(false);
    const handleToggleVisibility = () => {
        setIsVisible(!isVisible);
        setIslogin(!islogin);
    };
    const [isShowerify, setShowerify] = useState(false);
    const Showerify = () => {
        setShowerify(!isShowerify);
    };
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        DarkMode(isDarkMode, setIsDarkMode);
    };

    useEffect(() => {
    }, [isDarkMode]);
    // Start nav Link
    const courses = [
        { path: "/OurCourses", name: "All Computer Course" },
        { path: "/Certificate", name: "Computer Certificate" },
        { path: "/ComputerLanguage", name: "Computer Language" },
        { path: "/Designing", name: "Graphics Design" },
        { path: "/WebDev", name: "Web Development" },
        { path: "/CRepairing", name: "Computer Repairing" },
        { path: "/Nielet", name: "NIELIT Courses" },
        { path: "/Banking", name: "Banking Course" }
    ];
    const studentZoneItems = [
        { path: "/AdmissionForm", name: "New Admission" },
        { path: "/Download-Certificate", name: "Download Certificate" }
    ];
    // useEffect(() => {
    //     function header() {
    //         new window.google.translate.TranslateElement(
    //             {
    //                 pageLanguage: 'en',
    //                 includedLanguages: 'ar,bn,de,en,es,fr,gu,hi,it,ja,jv,ko,mr,pa,pt,ru,sw,ta,te,tr,ur,zh-CN,zh-TW,nl,fi,el,he,haw,hu,is,id,ga,lv,lt,ms,mt,ml,ne,no,fa,pl,ro,sm,sr,sk,sl,sv,tl,th,to,uk,vi,af,am,az,be,bg,bs,ca,ceb,co,cs,cy,da,et,eu,fa,fi,fj,fr,fy,ga,gd,gl,gu,ha,haw,hmn,hr,ht,hu,hy,ig,is,it,iw,ja,jw,ka,kk,km,kn,ku,ky,la,lb,lo,lt,lv,mg,mk,ml,mn,mr,ms,my,nb,ne,nl,nn,no,ny,or,pa,pl,ps,pt,ro,ru,rw,si,sk,sl,sm,sn,so,sq,sr,st,su,sv,sw,ta,te,tg,th,tk,tl,tn,tr,tt,ug,uk,ur,uz,vi,xh,yi,yo,zh,zh-CN,zh-TW,zu',
    //             },
    //             'ChangerLang'
    //         );

    //     }
    //     header();
    // }, []);
    return (
        <>
            <nav
                className="navbar navbar-expand-lg fixed-top py-0 my-0 d-flex justify-content-center align-items-center" id="TopNavBar">
                <div className="container-fluid fw-medium text-uppercase" id="ToperNav">
                    <Link className="navbar-brand p-0" to="/">
                        <img src="images/icon/logo.png" className="img-fluid smallText" width={30} alt="DIIT" />
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav d-flex justify-content-around overflow-0 align-items-center MobileNav" id='MobileNav'>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/About" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/OurCourses" role="button" onMouseOver={fetchCourses} data-bs-toggle="dropdown">Our Courses</Link>
                                <ul className="dropdown-menu px-1 py-0" id="CourseListNav">
                                    {courses.map((item, index) => (
                                        <li key={index}>
                                            <Link className="dropdown-item my-1 p-1" to={item.path}>{item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/Library" className="nav-link">Library</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Branch" className="nav-link">Branch</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Gallery" className="nav-link">Gallery</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/StudentZone" role="button" data-bs-toggle="dropdown">Student Zone</Link>
                                <ul className="dropdown-menu p-1" id="studentZoneNav">
                                    {studentZoneItems.map((item, index) => (
                                        <li key={index}>
                                            <Link className="dropdown-item m-0 p-1" to={item.path}>{item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/Contact-us" className="nav-link">Contact-us</Link>
                            </li>
                            {/* <li className="nav-item">
                                <span id="ChangerLang" title='Change into your own Language'></span>
                            </li> */}
                        </ul>
                    </div>
                    <div className="small smallFont">
                        <div className="d-flex align-items-center small">
                            <li className="nav-link py-0 my-0 mx-2" onClick={() => {
                                if (localStorage.getItem('sToken')) {
                                    navigate('/Student-Portal')
                                }
                                setIsAdmin(false);
                            }}>
                                <button className="btn btn-small rounded-0 p-0 border-0 myDisplayflexRow flex-column text-white" type="button"
                                    data-bs-toggle="offcanvas" data-bs-target="#loginSideBar" aria-controls="offcanvasScrollingRight">Student Login</button>
                            </li>
                            <li className="nav-link py-0 my-0 mx-2" onClick={() => {
                                if (localStorage.getItem('aToken')) {
                                    navigate('/Admin-Pannel')
                                }
                                setIsAdmin(true);
                            }}> <button className="btn btn-small rounded-0 p-0 border-0 myDisplayflexRow flex-column text-white" type="button"
                                data-bs-toggle="offcanvas" data-bs-target="#loginSideBar" aria-controls="offcanvasScrollingRight">Admin</button>
                            </li>

                            <button
                                className={`btn text-white p-0 p-1 fs-6  small  m-0 ${isDarkMode ? 'bi-sun' : 'bi-moon-stars-fill'}`}
                                onClick={toggleDarkMode}
                                title={isDarkMode ? "Light Mode" : "Dark Mode"}
                            >
                            </button>

                            <button className="navbar-toggler small p-1 m-0 border-0" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false">
                                <span className="bi bi-three-dots-vertical small fs-6 text-light p-0 m-0"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="offcanvas offcanvas-end shadow p-0" data-bs-backdrop="false" tabIndex="-1"
                id="loginSideBar" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-body card myshadow shadow p-0 m-0 fbcolor">
                    <div className="row mx-0 ">
                        <div className="col-3 mt-5">
                            <button type="button" className="btn btn-sm " data-bs-dismiss="offcanvas" aria-label="Close">
                                <i className="bi bi-arrow-left fw-bolder fs-3"></i></button>
                        </div>
                        <div className="col-12 pt-5" style={{ height: '100vh' }}>
                            <div className='d-flex align-content-center justify-content-center flex-column logincard w-100'>
                                <h2 className="text-center fw-bolder text-primary"><b>{isAdmin ? 'Admin Login' : 'Student Login'}</b></h2>
                                {
                                    !islogin && (
                                        <>
                                            <div className="my-2">
                                                <input type={isAdmin ? 'email' : 'text'} value={isAdmin ? email : regNum} className="form-control rounded-3 border-0" placeholder={isAdmin ? 'Enter your id' : 'Enter your registration id'} aria-describedby="emailHelp"
                                                    onChange={(e) => { isAdmin ? setEmail(e.target.value) : setRegNum(e.target.value) }} />
                                            </div>
                                            <div className="my-2">
                                                <input type="text" value={password} className="form-control rounded-3 border-0" placeholder='Password'
                                                    onChange={(event) => { setPassword(event.target.value) }} />
                                            </div>
                                            <button type="button" className="btn bg-primary text-white fw-bold my-1 rounded rounded-pill mt-3" onClick={() => {
                                                isAdmin ? fetchLogin(loginAdmin) : fetchLogin(loginStudent);
                                            }}>
                                                Log in
                                            </button>
                                        </>
                                    )
                                }

                                <button
                                    type="button"
                                    className="btn border-0 my-1"
                                    onClick={handleToggleVisibility}
                                >
                                    Forget Password?
                                </button>
                                <div className='container'>
                                    {isVisible && (
                                        <div className="forgot-password-container">
                                            <input type="email" value={fEmail} className="form-control" placeholder='Enter Your Email-id'
                                                onChange={(event) => setFEmail(event.target.value)} />
                                            {
                                                EnabledSendOtpBtn ? <button type="button" className="btn bg-warning btn-sm fw-bold my-1" onClick={() => {
                                                    isAdmin ? sendOtpHandler(sendOtpForRPsdAdmin) : sendOtpHandler(sendOtpForRspStudent);
                                                }}>Send OTP</button> :
                                                    <center>{time}</center>
                                            }
                                            {otpStatus &&
                                                <div>
                                                    <input
                                                        type="text"
                                                        className='form-control mt-3'
                                                        autoFocus
                                                        value={tOtp}
                                                        onChange={(e) => { setTOtp(e.target.value) }}
                                                        placeholder='Enter OTP' />
                                                    <div className="text-center">
                                                        <div className="forgot-password-container">
                                                            <input type="password" className='form-control my-2' onChange={(e) => { setNPsd(e.target.value) }} placeholder='New password' />
                                                            <button type="button" className="btn bg-primary text-white rounded-pill px-4 btn-sm my-1" onClick={() => {
                                                                isAdmin ? updatePsd(verifyOtpAndUpdatePsdAdmin) : updatePsd(verifyOtpAndUpdatePsdStudent);
                                                            }}>Verify OTP and Update Password</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
