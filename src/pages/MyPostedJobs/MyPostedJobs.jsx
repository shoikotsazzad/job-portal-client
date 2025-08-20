import React, { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const MyPostedJobs = () => {

    const [Jobs, setJobs] = React.useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:3000/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setJobs(data);
            })
            .catch(err => console.error('Failed to fetch jobs:', err));
    }, [user.email])

    return (
        <div>
            <h1 className='text-3xl'>My Posted Jobs: {Jobs.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job Title</th>
                            <th>Deadline</th>
                            <th>Application Count</th>
                            <th>Applications</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Jobs.map((job, index) => <tr>
                            <th>{index + 1} </th>
                            <td>{job.title} </td>
                            <td>{job.applicationDeadline} </td>
                            <td>{job.applicationCount}</td>
                            <td>
                                <Link to={`/viewApplications/${job._id}`} >
                                    <button className='btn btn-link'>View Applications</button>
                                </Link>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJobs;