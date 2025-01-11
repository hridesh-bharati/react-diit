import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../Footer/Footer";                                                                                                        
import { useSelector } from 'react-redux';
import CourseNav from "./CourseNav";

function CommanCourse({ targetCourses, CTitle }) { // Accept targetCourses as a prop
    const [courses, setCourses] = useState([]);
    const [searchQuery, setSearchQuery] = useState(""); // Search query state
    const crs = useSelector(state => state.courses);

    useEffect(() => {
        if (crs[0]) {
            setCourses(crs);
        }
    }, [crs]);

    const trimmedQuery = searchQuery.trim().toLowerCase();

    const filteredCourses = courses.filter(course =>
        targetCourses.includes(course.name) &&
        (trimmedQuery ? course.name.toLowerCase().includes(trimmedQuery) : true)
    );

    return (
        <>
            <div className="container-fluid MT3 diplomaTable">
                <CourseNav data={CTitle} className='bg-warning' searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                {filteredCourses.length === 0 ? (
                    <div className="my-2 p-2 bg-white">
                        <p><span className="text-danger">Dear student.....!</span> No courses found. Please try again with a different search query.</p>
                    </div>
                ) : (
                    filteredCourses.map((course, index) => (
                        <div key={index} className="my-2 p-2 bg-transparent">
                            <table className="table table-bordered bg-transparent">
                                <thead className="bg-dark table-danger">
                                    <tr className="text-center h4">
                                        <th colSpan={4}>{course.name} ({course.description})</th>
                                    </tr>
                                    <tr className="text-start">
                                        <th colSpan={3}>Course Contents</th>
                                        <th className="text-end">Duration {course.duration}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[...Array(Math.ceil(course.subjects.length / 4))].map((_, rowIndex) => (
                                        <tr key={rowIndex}>
                                            {[...Array(4)].map((_, colIndex) => (
                                                <td key={colIndex} className="border border-primary">
                                                    {course.subjects[rowIndex * 4 + colIndex]?.name}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div>
                                <Link to="/AdmissionForm" className="btn btn-primary btn-sm">Apply</Link>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <Footer />
        </>
    );
}

export default CommanCourse;
