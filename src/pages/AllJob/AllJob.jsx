import { useState } from "react";
import useJobs from "../../hooks/useJobs";
import HotJobsCard from "../Home/HotJobsCard";
import { BiSearch } from "react-icons/bi";


const AllJob = () => {
    const [sort, setSort] = useState(false);
    const [search, setSearch] = useState("")
    //console.log(sort)
    const {jobs, loading} = useJobs(sort,search); 
    if(loading){
        return <h2 className="text-center md:m-5">Job is Loading...</h2>
    }

    return (
        <div >
            <h1 className="py-5 text-4xl font-bold text-center">All Jobs Here</h1>
            <div className="w-11/12 bg-base-200 md:py-5 p-3 flex items-center gap-5">
            <button 
            onClick={() => setSort(!sort)} 
            className={`btn btn-neutral ${sort && "btn-success"}`}
            >
                {sort == true ? "Sorted by Salary" : "Sort By Salaray"}
                </button>
                <BiSearch></BiSearch>
                <input 
                onKeyUp={(e) => setSearch(e.target.value)}
                type="text" className="input w-full max-w-2xl" 
                placeholder="Search Jobs by Location" />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 md:p-4 mx-1 md:mx-5'>
                {
                    jobs.map(job => <HotJobsCard key={job._id} job={job}></HotJobsCard>)
                }
            </div>
        </div>
    );
};

export default AllJob;