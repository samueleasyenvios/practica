import React from 'react';
import { Row, Col } from 'react-bootstrap';
import classNames from 'classnames';

interface SpinIconProps {
    icons: string[];
}

const SpinIcons = ({ icons }: SpinIconProps) => {
    return (
        <Row className="icons-list-demo">
            {(icons || []).map((icon, index) => {
                return (
                    <Col key={index} sm={6} lg={4} xl={3}>
                        <i className={classNames('mdi', 'mdi-spin', 'mdi-' + icon)}></i> mdi-spin
                    </Col>
                );
            })}
        </Row>
    );
};

export default SpinIcons;
