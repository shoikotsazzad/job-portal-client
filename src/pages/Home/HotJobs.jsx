import React, { useEffect, useState } from 'react';
import HotJobsCard from './HotJobsCard';

const HotJobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('https://job-portal-server-nu-seven.vercel.app/jobs')
        .then(res => res.json())
        .then(data => {
            setJobs(data);
        })
    }, []);

    return (
        <div>
            <h1 className="text-6xl md:mb-6 text-center font-extrabold">Hot Jobs</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 md:p-4 mx-1 md:mx-5'>
                {
                    jobs.map(job => <HotJobsCard key={job._id} job={job}></HotJobsCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;