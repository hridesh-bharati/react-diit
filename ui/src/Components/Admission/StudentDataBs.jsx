import React, { useState, useEffect } from 'react';
import { getStudentList } from '../../api/adminApi/api';

export default function StudentDataBs() {
    const [students, setStudents] = useState([]);
    const [originalStudents, setOriginalStudents] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchStudentData = async () => {
        try {
            const response = await getStudentList();
            if (response.ackbool === 1) {
                setStudents(response.message);
                setOriginalStudents(response.message);
            } else {
                console.error('Failed to fetch student data');
            }
        } catch (error) {
            console.error('Error fetching student data:', error);
        }
    };

    const handleSearch = () => {
        // Filter original list of students based on search query
        const filteredStudents = originalStudents.filter(student =>
            student.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setStudents(filteredStudents);
    };

    const handleReload = () => {
        fetchStudentData(); // Refetch student data
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };
    useEffect(() => {
        fetchStudentData();
    }, []);
    return (
        <div className='mb-5 pb-3'>
            <div className="mb-3 row bg-success-subtle p-4">
                <span className="text-danger fw-medium">महत्वपूर्ण निर्देश:</span>
                <div className="col-12 small py-2 text-danger d-flex align-items-center">
                    <div className="marquee-container">
                        <div className="marquee">
                            किसी भी छात्र/छात्रा का पूरा रिकॉर्ड प्राप्त करने के लिए छात्र/छात्रा का पंजीकृत पूरा नाम सही-सही से भरें
                        </div>
                    </div>
                </div>
                <div className="col-md-10 my-1 d-flex justify-content-center align-items-center small">
                    <div className="col">
                        <input
                            type="text"
                            className='form-control'
                            placeholder="Search by name..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-md-2 my-1 d-flex justify-content-center align-items-center small">
                    <button className="btn btn-primary btn-sm mx-2" onClick={handleSearch}>Search</button>
                    <button className="btn btn-sm btn-warning mx-2" onClick={handleReload}>Reload</button>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table mtable table-bordered diplomaTable stdStatus m-2" >
                    <thead className='my-row-color small table-dark'>
                        <tr>
                            <th>Reg.</th>
                            <th>Name</th>
                            <th>Father's Name</th>
                            <th>Mother's Name</th>
                            <th>Gender</th>
                            <th className='stdAddress'>Complete Address</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>D.O.B</th>
                            <th>Course</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.length > 0 ? (
                            students.map((student, index) => (
                                <tr key={student._id}>
                                    <td className='text-center'>{index + 1}</td>
                                    <td>{student.name}</td>
                                    <td>{student.fatherName}</td>
                                    <td>{student.motherName}</td>
                                    <td>{student.gender}</td>
                                    <td>{student.address}</td>
                                    <td>{student.mobileNumber}</td>
                                    <td>{student.email}</td>
                                    <td>{formatDate(student.dob)}</td>
                                    <td>{student.course}</td>
                                    <td>{student.category}</td>
                                </tr>
                            ))

                        ) : (
                            <tr>
                                <td colSpan="10" className='text-center'>No students found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};