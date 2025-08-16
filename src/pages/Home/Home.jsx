import React from 'react';
import Banner from './Banner';
import FeaturedJobs from './FeaturedJobs';
import HowItWorks from './HowItWorks';
import JobCategories from './JobCategories';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
           <Banner />
           <FeaturedJobs></FeaturedJobs>
           <JobCategories></JobCategories>
           <HowItWorks></HowItWorks>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;