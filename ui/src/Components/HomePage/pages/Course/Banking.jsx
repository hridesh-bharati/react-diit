import React from 'react';
import CommanCourse from './CommanCourse';

export default function Banking() {
    const targetCourses = ['DBI'];
    const CTitle = 'Banking'
    return (
        <div className='MT3'>
            <CommanCourse targetCourses={targetCourses} CTitle={CTitle} />
        </div>
    );
}
