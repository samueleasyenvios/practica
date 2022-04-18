import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classNames from 'classnames';
import CountUp from 'react-countup';

// types
import { Statisctics } from './data';

interface StatiscticsProp {
    statisticsData: Statisctics[];
}

const Statistics = ({ statisticsData }: StatiscticsProp) => {
    return (
        <section className="py-5 bg-primary">
            <Container>
                <Row id="counter">
                    {statisticsData &&
                        statisticsData.length > 0 &&
                        (statisticsData || []).map((stat, index) => {
                            return (
                                <Col lg={3} sm={6} key={index}>
                                    <div className="counter-box text-center my-2 p-3">
                                        <div className="counter-icon text-white-50">
                                            <i className={classNames('display-4', stat.icon)}></i>
                                        </div>
                                        <div className="counter-content">
                                            <h2 className="counter_value text-white mt-0 mb-3">
                                                <CountUp duration={1} end={stat.stats} />
                                            </h2>
                                            <p className="text-white-50 mb-0">{stat.title}</p>
                                        </div>
                                    </div>
                                </Col>
                            );
                        })}
                </Row>
            </Container>
        </section>
    );
};

export default Statistics;
