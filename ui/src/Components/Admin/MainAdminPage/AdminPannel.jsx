import { Link, useNavigate, Routes, Route } from 'react-router-dom';
import React from 'react';

import Analysis from './pages/Analysis';
import AdmissionStatus from './pages/students/AdmissionStatus';
import StudentDataBs from '../../Admission/StudentDataBs';
import Profile from './pages/Admin/Profile';
import AddAdmin from './pages/Admin/AddAdmin';
import AdminList from './pages/Admin/AdminList';
import AdmissionForm from '../../HomePage/pages/AdmissionForm';
import CreateNewCourse from './pages/Course/CreateNewCourse';
import CourseList from './pages/Course/CourseList';
import NoticeForm from './pages/Notice/NoticeForm';
import AllNotice from './pages/Notice/AllNotice';
import AppliedExamForms from './pages/Exam/AppliedExamForms';
import IssuedExamsForms from './pages/Exam/IssuedExamsForms';
import IssueExamForm from './pages/Exam/IssueExamForm';
import ProgramPictures from './pages/Gallery/ProgramPictures';
import SendProgramPicture from './pages/Gallery/SendProgramPicture';

export default function AdminPanel() {
  const navigate = useNavigate();
  const deign = {
    position: 'fixed',
    left: "10px",
    zIndex: 9,

  }
  return (
    <div className="admin-panel mt-4 pt-3" style={{ background: '#fff', overflowX: 'hidden' }}>
      <div className="row mx-0 px-0">
        <div style={{ width: '10%' }}>
          <button className="btn border bgBlur btn-sm text-white shadow" style={deign} data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            <i className="bi bi-list text-primary"></i>
          </button>
          <div className="offcanvas offcanvas-start pt-4" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header py-3 text-white text-center d-flex justify-content-between">
              <p className="offcanvas-title pt-2 text-primary fw-bolder" id="offcanvasExampleLabel"> <i class="bi bi-person-circle"></i> ADMIN MENU</p>
              <button type="button text-white" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <nav className="nav flex-column nav-pills">
                <div className="accordion" id="adminAccordion">
                  {/* Students Section */}
                  <AccordionItem title="Students" target="studentsSection" icon="fa-graduation-cap">
                    <Link className="nav-link" to="">Students Board</Link>
                    <Link className="nav-link" to="Admission-Form">Add Students</Link>
                    <Link className="nav-link" to="Admission-Status">Admission Status</Link>
                    <Link className="nav-link" to="Student-Data-Bs">Verified Students</Link>
                  </AccordionItem>

                  {/* Admin Section */}
                  <AccordionItem title="Admin" target="adminSection" icon="fa-user-circle">
                    <Link className="nav-link" to="Profile">Profile</Link>
                    <Link className="nav-link" to="Add-Admin">Create an account</Link>
                    <Link className="nav-link" to="Admin-List">Admin List</Link>
                    <button className="nav-link text-start" onClick={() => {
                      navigate('/');
                      localStorage.removeItem('aToken');
                    }}>Log Out</button>
                  </AccordionItem>

                  {/* Courses Section */}
                  <AccordionItem title="Courses" target="coursesSection" icon="fa-book">
                    <Link className="nav-link" to="Create-Course">Create New Course</Link>
                    <Link className="nav-link" to="Course-List">Course List</Link>
                  </AccordionItem>

                  {/* Notice Section */}
                  <AccordionItem title="Notice" target="noticeSection" icon="fa-bell">
                    <Link className="nav-link" to="Notice-Form">Push New Notice</Link>
                    <Link className="nav-link" to="All-Notice">All Notice</Link>
                  </AccordionItem>

                  {/* Exam Section */}
                  <AccordionItem title="Exam" target="examSection" icon="fa-book">
                    <Link className="nav-link" to="Applied-Exam-Forms">Applied Forms</Link>
                    <Link className="nav-link" to="Issued-Exam-Forms">Issued Forms</Link>
                    <Link className="nav-link" to="Issue-Exam-Form">Issue New Form</Link>
                  </AccordionItem>

                  {/* Gallery Section */}
                  <AccordionItem title="Gallery" target="gallerySection" icon="fa-images">
                    <Link className="nav-link" to="Program-Pictures">Program's Pictures</Link>
                    <Link className="nav-link" to="Upload-New-Picture">New Image</Link>
                  </AccordionItem>

                </div>
              </nav>
            </div>
          </div>
        </div>

        {/* Main content area */}
        <main className=" p-0">
          <div className="tab-content mx-1 px-0 bg-light" id="adminTabContent">
            <Routes>
              <Route path="/" element={<Analysis />} />
              <Route path="Admission-Form" element={<AdmissionForm />} />
              <Route path="Admission-Status" element={<AdmissionStatus />} />
              <Route path="Student-Data-Bs" element={<StudentDataBs />} />
              <Route path="Profile" element={<Profile />} />
              <Route path="Add-Admin" element={<AddAdmin />} />
              <Route path="Admin-List" element={<AdminList />} />
              <Route path="Create-Course" element={<CreateNewCourse />} />
              <Route path="Course-List" element={<CourseList />} />
              <Route path="Notice-Form" element={<NoticeForm />} />
              <Route path="All-Notice" element={<AllNotice />} />
              <Route path="Applied-Exam-Forms" element={<AppliedExamForms />} />
              <Route path="Issued-Exam-Forms" element={<IssuedExamsForms />} />
              <Route path="Issue-Exam-Form" element={<IssueExamForm />} />
              <Route path="Program-Pictures" element={<ProgramPictures />} />
              <Route path="Upload-New-Picture" element={<SendProgramPicture />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

// AccordionItem component for better code reuse
const AccordionItem = ({ title, target, icon, children }) => (
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button bg-primary text-light" type="button" data-bs-toggle="collapse" data-bs-target={`#${target}`}>
        <i className={`fa ${icon} me-2`}></i> {title}
      </button>
    </h2>
    <div id={target} className="accordion-collapse collapse">
      <div className="accordion-body m-0 p-2">
        {children}
      </div>
    </div>
  </div>
);
