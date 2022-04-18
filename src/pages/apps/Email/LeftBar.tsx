import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// components
import ComposeEmail from './ComposeEmail';

interface LeftBarProps {
    totalUnreadEmails?: number;
    showAllEmails?: () => void;
    showStarredEmails?: () => void;
}

// left side panel
const LeftBar = ({ totalUnreadEmails, showAllEmails, showStarredEmails }: LeftBarProps) => {
    const [isOpen, setIsOpen] = useState(false);

    /**
     * Toggles the compose modal
     */
    const toggleComposeModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="inbox-leftbar">
            <div className="d-grid">
                <Button variant="danger" className="waves-effect waves-light" onClick={toggleComposeModal}>
                    Compose
                </Button>
            </div>

            <div className="mail-list mt-4">
                <Link to="#" className="text-danger" onClick={showAllEmails}>
                    <i className="ri-inbox-fill align-bottom me-2"></i>Inbox
                    <span className="badge badge-soft-danger float-end ms-2">{totalUnreadEmails}</span>
                </Link>
                <Link to="#" onClick={showStarredEmails}>
                    <i className="ri-star-line align-bottom me-2"></i>Starred
                </Link>
                <Link to="#">
                    <i className="ri-time-line align-bottom me-2"></i>Snoozed
                </Link>
                <Link to="#">
                    <i className="ri-file-list-2-line align-bottom me-2"></i>Draft
                    <span className="badge badge-soft-info float-end ms-2">32</span>
                </Link>
                <Link to="#">
                    <i className="ri-send-plane-2-line align-bottom me-2"></i>Sent Mail
                </Link>
                <Link to="#">
                    <i className="ri-delete-bin-line align-bottom me-2"></i>Trash
                </Link>
                <Link to="#">
                    <i className="ri-price-tag-3-line align-bottom me-2"></i>Important
                </Link>
                <Link to="#">
                    <i className="ri-error-warning-line align-bottom me-2"></i>Spam
                </Link>
            </div>

            <h6 className="mt-4">Labels</h6>

            <div className="list-group b-0 mail-list">
                <Link to="#" className="list-group-item border-0">
                    <i className="mdi mdi-circle text-info me-2"></i>Web App
                </Link>
                <Link to="#" className="list-group-item border-0">
                    <i className="mdi mdi-circle text-warning me-2"></i>Recharge
                </Link>
                <Link to="#" className="list-group-item border-0">
                    <i className="mdi mdi-circle text-dark me-2"></i>Wallet Balance
                </Link>
                <Link to="#" className="list-group-item border-0">
                    <i className="mdi mdi-circle text-primary me-2"></i>Friends
                </Link>
                <Link to="#" className="list-group-item border-0">
                    <i className="mdi mdi-circle text-success me-2"></i>Family
                </Link>
            </div>

            {/* compose email modal */}
            {isOpen && <ComposeEmail isOpen={isOpen} toggleComposeModal={toggleComposeModal} />}
        </div>
    );
};

export default LeftBar;
