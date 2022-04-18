import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import classNames from 'classnames';

// types
import { WeatherTypes } from './data';

interface WeatherWidgetProps {
    item: WeatherTypes;
}

const WeatherWidget = ({ item }: WeatherWidgetProps) => {
    return (
        <Card className={classNames('bg-' + item.variant, 'border-' + item.variant)}>
            <Card.Body>
                <Row>
                    <Col md={7}>
                        <Row className="align-items-center">
                            <div className="col-6 text-center">
                                <h1 className="display-4">
                                    <i className="wi wi-day-sleet text-white"></i>
                                </h1>
                            </div>
                            <div className="col-6">
                                <div className="text-white">
                                    <h2 className="text-white">
                                        <b>{item.temp}</b>
                                    </h2>
                                    <p>{item.clouds}</p>
                                    <p className=" mb-0">
                                        {item.windSpeed} - {item.humidity}
                                    </p>
                                </div>
                            </div>
                        </Row>
                    </Col>
                    <Col md={5}>
                        <Row>
                            {(item.forecast || []).map((item, index) => {
                                return (
                                    <Col key={index} className="col-4 text-center">
                                        <h4 className="text-white mt-0">{item.day}</h4>
                                        <h3 className="my-3">
                                            <i className={classNames('text-white', item.icon)}></i>
                                        </h3>
                                        <h4 className="text-white mb-0">
                                            {item.temp}
                                            <i className="wi wi-degrees"></i>
                                        </h4>
                                    </Col>
                                );
                            })}
                        </Row>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default WeatherWidget;
