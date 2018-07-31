import React from 'react';
import Table from './table';

const students = [
    {
        name: 'Kevin Young',
        course: 'PE',
        grade: 100
    },
    {
        name: 'Howard Kim',
        course: 'Psychology',
        grade: 91
    },
    {
        name: 'Mike Yim',
        course: 'Mechanical Engineering',
        grade: 85
    }
  ];

export default () => {
    // return <h1>My first React functional component</h1>
    return (
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    )
    }