import React from 'react';
import { Row, Col } from 'react-bootstrap';

// components
import PageTitle from '../../components/PageTitle';
import StatisticsWidget from '../../components/StatisticsWidget';
import StatisticsChartWidget from '../../components/StatisticsChartWidget';
import Messages from '../../components/Messages';
import ChatList from '../../components/ChatList';
import TodoList from '../../components/TodoList';

import Statistics from './Statistics';
import Statistics2 from './Statistics2';
import Statistics3 from './Statistics3';
import ProfileCard from './ProfileCard';
import WeatherWidget from './WeatherWidget';
import StatisticsChartWidget2 from './StatisticsChartWidget2';
import StatisticsChartWidget3 from './StatisticsChartWidget3';
import StatisticsChartWidget4 from './StatisticsChartWidget4';
import StatisticsChartWidget5 from './StatisticsChartWidget5';
import StatisticsChartWidget6 from './StatisticsChartWidget6';
import StatisticsChartWidget7 from './StatisticsChartWidget7';

// images
import user1 from '../../assets/images/users/avatar-1.jpg';
import user2 from '../../assets/images/users/avatar-2.jpg';
import user3 from '../../assets/images/users/avatar-3.jpg';
import user4 from '../../assets/images/users/avatar-4.jpg';

// dummy data
import { weather, chatMessages } from './data';

const Widgets = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Components', path: '/apps/widgets' },
                    { label: 'Widgets', path: '/apps/widgets', active: true },
                ]}
                title={'Widgets'}
            />

            <Row>
                <Col xl={3} md={6}>
                    <Statistics variant="success" description="Total Sales today" stats="2562" />
                </Col>
                <Col xl={3} md={6}>
                    <Statistics variant="primary" description="Daily visitors" stats="5685" />
                </Col>
                <Col xl={3} md={6}>
                    <Statistics
                        variant="pink"
                        description="Total Earning"
                        counterOptions={{
                            prefix: '$ ',
                        }}
                        stats="12480"
                    />
                </Col>
                <Col xl={3} md={6}>
                    <Statistics variant="purple" description="Pending Orders" stats="62" />
                </Col>
            </Row>

            <Row>
                <Col xl={3} md={6}>
                    <Statistics2
                        variant="success"
                        description="Today's Visits"
                        icon="mdi mdi-android-studio"
                        stats="64570"
                    />
                </Col>
                <Col xl={3} md={6}>
                    <Statistics2 variant="primary" description="Total Revenue" icon="mdi mdi-amazon" stats="31570" />
                </Col>
                <Col xl={3} md={6}>
                    <Statistics2 variant="danger" description="Today's Sales" icon="mdi mdi-apple" stats="280" />
                </Col>
                <Col xl={3} md={6}>
                    <Statistics2
                        variant="purple"
                        description="Conversion"
                        icon="mdi mdi-barley"
                        counterOptions={{
                            suffix: '%',
                            decimals: 2,
                        }}
                        stats="0.16"
                    />
                </Col>
            </Row>

            <Row>
                <Col xl={3} md={6}>
                    <Statistics2 variant="info" description="Today's Visits" icon="mdi mdi-black-mesa" stats="23570" />
                </Col>
                <Col xl={3} md={6}>
                    <Statistics2 variant="warning" description="Total Revenue" icon="mdi mdi-bullseye" stats="9654" />
                </Col>
                <Col xl={3} md={6}>
                    <Statistics2 variant="dark" description="Today's Sales" icon="mdi mdi-cart" stats="965" />
                </Col>
                <Col xl={3} md={6}>
                    <Statistics2
                        variant="pink"
                        description="Conversion"
                        icon="mdi mdi-clock"
                        counterOptions={{
                            suffix: '%',
                            decimals: 2,
                        }}
                        stats="0.65"
                    />
                </Col>
            </Row>

            <Row>
                <Col xl={3} md={6}>
                    <StatisticsChartWidget
                        hasHeader
                        title={'New Customers'}
                        color={'#f05050'}
                        data={58}
                        stats={'268'}
                        description={'Since last week'}
                    />
                </Col>
                <Col xl={3} md={6}>
                    <StatisticsChartWidget
                        hasHeader
                        title={'Online Orders'}
                        color={'#675db7'}
                        data={80}
                        stats={'8715'}
                        description={'Since last month'}
                    />
                </Col>
                <Col xl={3} md={6}>
                    <StatisticsChartWidget
                        hasHeader
                        title={'Revenue'}
                        color={'#23b397'}
                        data={77}
                        stats={'$925'}
                        description={'This week'}
                    />
                </Col>
                <Col xl={3} md={6}>
                    <StatisticsChartWidget
                        hasHeader
                        title={'Daily Average'}
                        color={'#ffbd4a'}
                        data={35}
                        stats={'$78.58'}
                        description={'Revenue today '}
                    />
                </Col>
            </Row>

            <Row>
                <Col xl={3} md={6}>
                    <StatisticsWidget
                        icon="ri-stack-line"
                        stats="865"
                        title="Campaign Sent"
                        trend={{
                            value: '5.27%',
                            title: 'Since last month',
                            icon: 'mdi mdi-arrow-up-bold',
                            variant: 'success',
                        }}
                    />
                </Col>
                <Col xl={3} md={6}>
                    <StatisticsWidget
                        icon="ri-slideshow-2-line"
                        stats="384"
                        title="New Leads"
                        trend={{
                            value: '3.27%',
                            title: 'Since last month',
                            icon: 'mdi mdi-arrow-down-bold',
                            variant: 'danger',
                        }}
                    />
                </Col>
                <Col xl={3} md={6}>
                    <StatisticsWidget
                        icon="ri-hand-heart-line"
                        stats="34521"
                        title="Deals"
                        trend={{
                            value: '8.58%',
                            title: 'Since last month',
                            icon: 'mdi mdi-arrow-up-bold',
                            variant: 'success',
                        }}
                    />
                </Col>
                <Col xl={3} md={6}>
                    <StatisticsWidget
                        icon="ri-money-dollar-box-line"
                        stats="89357"
                        title="Booked Revenue"
                        counterOptions={{
                            prefix: '$',
                        }}
                        trend={{
                            value: '34.61%',
                            title: 'Since last month',
                            icon: 'mdi mdi-arrow-up-bold',
                            variant: 'success',
                        }}
                    />
                </Col>
            </Row>

            <Row>
                <Col xl={3} md={6}>
                    <ProfileCard
                        avatar={user1}
                        name="Chadengle"
                        email="coderthemes@gmail.com"
                        role="Admin"
                        variant="warning"
                    />
                </Col>
                <Col xl={3} md={6}>
                    <ProfileCard
                        avatar={user2}
                        name="Tomaslau"
                        email="coderthemes@gmail.com"
                        role="User"
                        variant="success"
                    />
                </Col>
                <Col xl={3} md={6}>
                    <ProfileCard
                        avatar={user3}
                        name="Stillnotdavid"
                        email="coderthemes@gmail.com"
                        role="Admin"
                        variant="pink"
                    />
                </Col>
                <Col xl={3} md={6}>
                    <ProfileCard
                        avatar={user4}
                        name="Arashasghari"
                        email="coderthemes@gmail.com"
                        role="User"
                        variant="info"
                    />
                </Col>
            </Row>

            <Row>
                <Col xl={3} md={6}>
                    <Statistics3
                        icon="mdi mdi-coffee"
                        variant="primary"
                        title="New User"
                        stats="8541"
                        trend={{
                            value: '39% Up',
                            variant: 'success',
                        }}
                    />
                </Col>
                <Col xl={3} md={6}>
                    <Statistics3
                        icon="mdi mdi-contrast-circle"
                        variant="warning"
                        title="New ORDERS"
                        stats="6521"
                        trend={{
                            value: '56% Down',
                            variant: 'danger',
                        }}
                    />
                </Col>
                <Col xl={3} md={6}>
                    <Statistics3
                        icon="mdi mdi-crown"
                        variant="success"
                        title="Bug Reports"
                        stats="1452"
                        trend={{
                            value: '0%',
                            variant: 'info',
                        }}
                    />
                </Col>
                <Col xl={3} md={6}>
                    <Statistics3
                        icon="mdi mdi-download"
                        variant="pink"
                        title="Total Downloads"
                        stats="562"
                        trend={{
                            value: '39% Up',
                            variant: 'success',
                        }}
                    />
                </Col>
            </Row>

            {/* weather */}
            <Row>
                {(weather || []).map((item, index) => {
                    return (
                        <Col xl={6} key={index}>
                            <WeatherWidget item={item} />
                        </Col>
                    );
                })}
            </Row>

            <Row>
                <Col xs={12}>
                    <h4 className="mb-3">Chart Widgets</h4>

                    <Row>
                        <Col xl={4}>
                            <StatisticsChartWidget2 />
                        </Col>
                        <Col xl={4}>
                            <StatisticsChartWidget3 />
                        </Col>
                        <Col xl={4}>
                            <StatisticsChartWidget4 />
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={4}>
                            <StatisticsChartWidget5 />
                        </Col>
                        <Col xl={4}>
                            <StatisticsChartWidget6 />
                        </Col>
                        <Col xl={4}>
                            <StatisticsChartWidget7 />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <h4 className="mb-3">Chart Widgets</h4>
                    <Row>
                        <Col xl={4}>
                            <Messages />
                        </Col>
                        <Col xl={4}>
                            <ChatList title="Chat" messages={chatMessages} />
                        </Col>
                        <Col xl={4}>
                            <TodoList addTodo={true} height={'310px'} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default Widgets;
