import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const JobApply = () => {

    const { id } = useParams();
    const {user} = useAuth();
    const navigate = useNavigate();
    //console.log(id, user);

    const submitJobApplication = (event) => {
        event.preventDefault();

        const form = event.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;


        //console.log(linkedIn, github, resume);

        const jobApplication ={
            job_id: id,
            applicant_email: user.email,
            linkedIn,
            github,
            resume
        }

        fetch('https://job-portal-server-nu-seven.vercel.app/job-applications',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jobApplication)
        } )
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Apply Successful",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/myApplications');

            }
        })



    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
          <div className="card bg-gray-800 w-full max-w-md shadow-2xl p-6 rounded-2xl">
            <h1 className="text-3xl font-bold text-center mb-6 text-white">
              Job Application Form
            </h1>
            <form onSubmit={submitJobApplication} className="space-y-4">
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-300 font-medium">LinkedIn URL</span>
                </label>
                <input
                  type="url"
                  name="linkedIn"
                  placeholder="Enter your LinkedIn URL"
                  className="input input-bordered w-full bg-gray-700 text-white placeholder-gray-400"
                  required
                />
              </div>
      
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-300 font-medium">GitHub URL</span>
                </label>
                <input
                  type="url"
                  name="github"
                  placeholder="Enter your GitHub URL"
                  className="input input-bordered w-full bg-gray-700 text-white placeholder-gray-400"
                  required
                />
              </div>
      
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-300 font-medium">Resume URL</span>
                </label>
                <input
                  type="url"
                  name="resume"
                  placeholder="Enter your Resume URL"
                  className="input input-bordered w-full bg-gray-700 text-white placeholder-gray-400"
                  required
                />
              </div>
      
              <div className="form-control mt-6">
                <button className="btn btn-primary w-full hover:scale-105 transition-transform">
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      );
      
};

export default JobApply;