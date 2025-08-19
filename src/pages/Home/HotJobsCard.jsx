import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HotJobsCard = (job) => {
    const { _id, title, company, company_logo, requirements, description, location,
        salaryRange } = job.job;

    return (
        <div className="card card-compact bg-base-100  shadow-xl md:m-2 animate-fadeInUp">
            <div className='flex md:gap-4 md:m-2'>
                <figure>
                    <img className='w-16'
                        src={company_logo}
                        alt="Shoes" />
                </figure>
                <div>
                    <h4 className="text-2xl">{company}</h4>
                    <p className='flex gap-1 items-center'> <FaMapMarkerAlt />{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className='flex gap-2 flex-wrap'>
                    {
                        requirements.map((skill, index) => <p
                            key={index}
                            className='border rounded-md text-center px-2 py-1 hover:bg-primary hover:text-white  transition-colors duration-300'
                        >{skill}</p>)
                    }
                </div>
                <div className="card-actions justify-end md:mt-4 text-center">
                    <p>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency} </p>
                    
                    <Link className='w-full' to={`/jobs/${_id}`}>
                        <button className="btn btn-primary hover:bg-purple-500">Apply</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default HotJobsCard;