import { Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
// Homepage start
import PageNotFound from "./Components/HomePage/pages/PageNotFound"
import Home from "./Components/HomePage/Home"
import About from './Components/HomePage/pages/About/About'
import OurCourses from "./Components/HomePage/pages/Course/OurCourses"
import Branch from "./Components/HomePage/pages/Branch/Branch"
import Gallery from "./Components/HomePage/pages/Gallery"
import AdmissionForm from "./Components/HomePage/pages/AdmissionForm"
import Verification from "./Components/HomePage/pages/Verification/Verification"
import QueryForm from "./Components/HomePage/pages/QueryFrom"
// Homepage end
import AdminPannel from "./Components/Admin/MainAdminPage/AdminPannel"
import StudentHomePage from "./Components/StudentComponent/StudentHomePage"
import ButtomToTop from "./Components/HomePage/ButtomToTop"
import CRepairing from "./Components/HomePage/pages/Course/CRepairing"
import Certificate from "./Components/HomePage/pages/Course/Ceritificate"
import ComputerLanguage from "./Components/HomePage/pages/Course/ComputerLanguage"
import Designing from "./Components/HomePage/pages/Course/Designing"
import WebDev from "./Components/HomePage/pages/Course/WebDev"
import Nielet from "./Components/HomePage/pages/Course/Nielet"
import Banking from "./Components/HomePage/pages/Course/Banking"
import Lock from "./Components/HomePage/LockWeb/Lock"
import Offers from "./Components/HomePage/Offers"
import Discription from "./Components/HomePage/pages/Course/Discription"
import Greating from "./Components/StudentComponent/Greating"
import Default from "./Components/StudentComponent/Default"
import Exam from "./Components/StudentComponent/Exam"
import Library from "./Components/HomePage/pages/Library/Library"
import CopyBoard from "./Components/HomePage/LockWeb/CopyBoard"
export default function App() {
    Lock()
    return (
        // <div className='HindiFont' >
        <div >
            <CopyBoard />
            <Header />
            <div>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/About" element={<About />}></Route>
                    {/* Start Course  */}
                    <Route path="/OurCourses" element={<OurCourses />}></Route>
                    <Route path="/CRepairing" element={<CRepairing />}></Route>
                    <Route path="/Certificate" element={<Certificate />}></Route>
                    <Route path="/ComputerLanguage" element={<ComputerLanguage />}></Route>
                    <Route path="/Designing" element={<Designing />}></Route>
                    <Route path="/WebDev" element={<WebDev />}></Route>
                    <Route path="/Nielet" element={<Nielet />}></Route>
                    <Route path="/Banking" element={<Banking />}></Route>
                    {/* End Course  */}
                    <Route path="/Library" element={<Library />}></Route>
                    <Route path="/Branch" element={<Branch />}></Route>
                    <Route path="/Gallery" element={<Gallery />}></Route>
                    <Route path="/AdmissionForm" element={<AdmissionForm />}></Route>
                    <Route path="/Download-Certificate" element={<Verification />} />
                    <Route path="/Discription" element={<Discription />} />
                    <Route path="/Contact-us" element={<QueryForm />} />
                    <Route path="/Offers" element={<Offers />} />
                    <Route path="Student-Portal/*" element={<StudentHomePage />}></Route>
                    <Route path="/Greating" element={<Greating />}></Route>
                    <Route path="/Exam" element={<Exam />}></Route>
                    <Route path="/Default" element={<Default />}></Route>

                    <Route path="/Admin-Pannel/*" element={<AdminPannel />}></Route>
                    <Route path="*" element={<PageNotFound />}></Route>
                </Routes>
            </div>
            <ButtomToTop />
        </div>
    )
}