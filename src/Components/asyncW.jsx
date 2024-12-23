    import React, { useState, useEffect } from 'react';
    import './asyncW.css'

    const Marksheet = () => {
    const [marksheets, setMarksheets] = useState([]);

    useEffect(() => {
        async function fetchData() {
        const persons = ['Sagar', 'Ritik', 'Pritam', 'Manoj', 'Aman'];

        const marksheetsData = await Promise.all(
            persons.map(async person => {
            const marks = await fetchMarks();
            const sumMarks = Object.values(marks).reduce((sum, mark) => sum + mark); // sum of 5 subjects marks 

            let colorFail = <div className='Fail'>Fail</div>
            let colorPass = <div className='Pass'>Pass</div>
            const result = sumMarks > 380 ? colorPass : colorFail; // pass or fail conditon with ternary operator

            return { person, sumMarks, marks, result };
            })
        );

        setMarksheets(marksheetsData);
        }

        fetchData();
    }, []);

    
    const fetchMarks = async () => {

        const randomNumber = Math.floor(Math.random() * (39)) + 60;// one way is: const string
                return {
                'Maths': Math.floor(Math.random() * (5)) + 92, //second way is: direct
                'Physics': Math.floor(Math.random() * (30)) + 60, //second way is: direct
                'Chemistry': Math.floor(Math.random() * (30)) + 60, //second way is: direct
                'English': Math.floor(Math.random() * (30)) + 60, //second way is: direct
                'Computer': randomNumber, //one way is: const string
                };
    };

    return (
        <div>
        <h1>Marksheets</h1>
        <h2>12th</h2>
        
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Maths</th>
                <th>Physics</th>
                <th>Chemistry</th>
                <th>English</th>
                <th>Computer</th>
                <th>Marks Obtained</th>
                <th>Total Marks</th>
                <th>Result:</th>
            </tr>
            </thead>
            <tbody>
            {marksheets.map(({ person, marks, sumMarks, result }, index) => (
                <tr key={index}>
                <td className='colorPerson'>{person}</td>
                <td>{marks.Maths}</td>
                <td>{marks.Physics}</td>
                <td>{marks.Chemistry}</td>
                <td>{marks.English}</td>
                <td>{marks.Computer}</td>
                <td>{sumMarks}</td>
                <td>500</td>
                <td>{result}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
    };

    export default Marksheet;
