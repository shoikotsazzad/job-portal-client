import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const AddJob = () => {

    const {user} = useAuth();
    const navigate = useNavigate();

    const handleAddJob = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        //console.log(formData.entries());

        const initialData = Object.fromEntries(formData.entries());
        //console.log(initialData);

        const { min, max, currency, ...newJob } = initialData;

        newJob.salaryRange = { min, max, currency }
        newJob.requirements = newJob.requirements.split('\n');
        newJob.responsibilities = newJob.responsibilities.split('\n');
        console.log(newJob);

        fetch('http://localhost:3000/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Job Has Been Posted Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myPostedJobs');

                }
            })
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto my-10">
            <h2 className="text-3xl">Post a new job</h2>
            <form onSubmit={handleAddJob} className="card-body">
                {/* Job Title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" name="title" placeholder="Job Title" className="input input-bordered" required />
                </div>
                {/* Job Location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text" name="location" placeholder="Location" className="input input-bordered" required />
                </div>
                {/* Job Type */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Type</span>
                    </label>
                    <select defaultValue="Pick a Job Type" className="select select-ghost w-full max-w-xs">
                        <option disabled >Pick a Job Type: </option>
                        <option>Full-Time</option>
                        <option>Intern</option>
                        <option>Part Time</option>
                    </select>
                </div>
                {/* Job Category */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Category</span>
                    </label>
                    <select defaultValue="Pick a Job Category" className="select select-ghost w-full max-w-xs">
                        <option disabled >Pick a Job Category: </option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                        <option>Teaching</option>
                    </select>
                </div>
                {/* Salary Range */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4 items-end">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Salary Range</span>
                        </label>
                        <input type="text" name="min" placeholder="Min" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="text" name="max" placeholder="Max" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <select defaultValue="Currency" name="currency" className="select select-ghost w-full max-w-xs">
                            <option disabled >Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>INR</option>
                            <option>YAN</option>
                        </select>
                    </div>
                </div>
                {/* Job Description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered" name="description" placeholder="Job Description" required></textarea>
                </div>
                {/* Company Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                    <input type="text" name="company" placeholder="Company Name" className="input input-bordered" required />
                </div>
                {/* Requirements */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Requirements</span>
                    </label>
                    <textarea className="textarea textarea-bordered" name="requirements" placeholder="Each requirements in a new line" required></textarea>
                </div>
                {/* Responsibility */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Responsibility</span>
                    </label>
                    <textarea className="textarea textarea-bordered" name="responsibilities" placeholder="Write each responsibility in a new line" required></textarea>
                </div>
                {/* HR Email*/}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Email</span>
                    </label>
                    <input type="email" defaultValue={user?.email} name="hr_email" placeholder="HR Email" className="input input-bordered" required />
                </div>
                {/* Application Deadline */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Application Deadline</span>
                    </label>
                    <input type="date" name="applicationDeadline" placeholder="Application Deadline" className="input input-bordered" required />
                </div>
                {/* HR Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Name</span>
                    </label>
                    <input type="text" name="hr_name" placeholder="HR Name" className="input input-bordered" required />
                </div>
                {/* Company Logo */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Logo</span>
                    </label>
                    <input type="text" name="company_logo" placeholder="Company Logo" className="input input-bordered" required />
                </div>
                {/* Button */}
                <div className="form-control mt-6 text-center">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;