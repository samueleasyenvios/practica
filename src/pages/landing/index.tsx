import React from 'react';

// components
import Footer from './Footer';
import Hero from './Hero';
import Services from './Services';
import Statistics from './Statistics';
import Features from './Features';
import Pricing from './Pricing';
import FAQs from './FAQs';
import Testimonials from './Testimonial';

// dummy data
import { services, features, pricingPlans, generalFAQs, pricingFAQs, testimonials, statisticsData } from './data';
import Header from './Header';

const Landing = () => {
    return (
        <div className="landing">
            {/* header */}
            <Header />

            {/* hero */}
            <Hero />

            {/* services */}
            <Services services={services} />

            {/* features */}
            <Features features={features} />

            {/* statistics */}
            <Statistics statisticsData={statisticsData} />

            {/* pricing */}
            <Pricing pricingPlans={pricingPlans} />

            {/* testimonials */}
            <Testimonials testimonials={testimonials} />

            {/* faqs */}
            <FAQs generalFaqs={generalFAQs} pricingFaqs={pricingFAQs} />

            {/* footer */}
            <Footer />
        </div>
    );
};

export default Landing;
