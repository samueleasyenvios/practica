import React from 'react';
import { Button, ButtonGroup, Card } from 'react-bootstrap';

const Campaigns = () => {
    return (
        <Card>
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <h4 className="header-title">Campaigns</h4>
                    <ButtonGroup className="mb-2">
                        <Button variant="light" className="btn-xs active">
                            Today
                        </Button>
                        <Button variant="light" className="btn-xs">
                            Weekly
                        </Button>
                        <Button variant="light" className="btn-xs">
                            Monthly
                        </Button>
                    </ButtonGroup>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Campaigns;
