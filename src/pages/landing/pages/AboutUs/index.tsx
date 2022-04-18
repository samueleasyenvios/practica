import React from 'react';

// components
import PageTitle from '../PageTitle';
import Header from '../../Header';
import About from './About';
import Services from './Services';
import Team from './Team';
import Statistics from '../../Statistics';
import Testimonial from '../../Testimonial';
import Footer from '../../Footer';

// dummy data
import { statisticsData, testimonials } from '../../data';
import { services, teamMembers } from './data';

const AboutUs = () => {
    return (
        <div className="landing">
            {/* header */}
            <Header />

            {/* page title */}
            <PageTitle title="About us" breadcrumbItem="About" />

            {/* about */}
            <About />

            {/* services */}
            <Services services={services} />

            {/* statistics */}
            <Statistics statisticsData={statisticsData} />

            {/* testimonial */}
            <Testimonial testimonials={testimonials} />

            {/* team */}
            <Team teamMembers={teamMembers} />

            {/* footer */}
            <Footer />
        </div>
    );
};

export default AboutUs;
