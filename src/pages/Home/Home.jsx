import React from 'react';
import Banner from './Banner';
import FeaturedJobs from './FeaturedJobs';
import HowItWorks from './HowItWorks';
import JobCategories from './JobCategories';
import Testimonials from './Testimonials';
import HotJobs from './HotJobs';

const Home = () => {
    return (
        <div >
           <Banner></Banner>
           <HotJobs></HotJobs>
           {/*<FeaturedJobs></FeaturedJobs>
           <JobCategories></JobCategories>
           <HowItWorks></HowItWorks>
           <Testimonials></Testimonials> */}
        </div>
    );
};

export default Home;