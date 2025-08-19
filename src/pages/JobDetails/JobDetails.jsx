import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
 
    const { _id, title, company, deadline} = useLoaderData();


    return (
        <div className='m-10'>
            <h1 className='text-3xl'>Job Details for {title}</h1>
            <p>apply for: {company} </p>
            <p>deadline: {deadline}</p>
            <Link to={`/jobApply/${_id}`}>
            <button className='btn btn-primary md:mt-4'>Apply Now</button>
            </Link>
        </div>
    );
};

export default JobDetails;