import React, { useCallback, useEffect, useRef } from 'react';
import { Nav, Tab } from 'react-bootstrap';

// actions
import { hideRightSidebar } from '../../redux/actions';

// hooks
import { useRedux } from '../../hooks/';

// components
import Scrollbar from '../../components/Scrollbar';
import Chats from '../../components/Chats';
import Tasks from '../../components/Tasks';
import ThemeCustomizer from '../../components/ThemeCustomizer/';

import { chats, tasks } from './data';

interface RightSideBarProps {
    hideRightSidebar?: () => void;
    title?: string;
    children?: any;
}

const RightSideBar = (props: RightSideBarProps) => {
    const { dispatch, appSelector } = useRedux();
    const rightBarNodeRef: any = useRef(null);

    const { isOpenRightSideBar } = appSelector((state) => ({
        isOpenRightSideBar: state.Layout.isOpenRightSideBar,
    }));

    /**
     * Handle the click anywhere in doc
     */
    const handleOtherClick = useCallback(
        (e: any) => {
            if (isOpenRightSideBar) {
                if (rightBarNodeRef && rightBarNodeRef.current && rightBarNodeRef.current.contains(e.target)) {
                    return;
                } else {
                    dispatch(hideRightSidebar());
                }
            }
        },
        [rightBarNodeRef, dispatch, isOpenRightSideBar]
    );

    useEffect(() => {
        document.addEventListener('mousedown', handleOtherClick, false);
        return () => {
            document.removeEventListener('mousedown', handleOtherClick, false);
        };
    }, [handleOtherClick]);

    return (
        <React.Fragment>
            <div className="right-bar" ref={rightBarNodeRef}>
                <Scrollbar className="h-100">
                    <>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="themecustomizer">
                            <Nav variant="tabs" as="ul" className="nav-bordered nav-justified">
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="chats" className="py-2">
                                        <i className="mdi mdi-message-text-outline d-block font-22 my-1"></i>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="tasks" className="py-2">
                                        <i className="mdi mdi-format-list-checkbox d-block font-22 my-1"></i>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="themecustomizer" className="py-2">
                                        <i className="mdi mdi-cog-outline d-block font-22 my-1"></i>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content className="pt-0">
                                <Tab.Pane eventKey="chats">
                                    <Chats chats={chats} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="tasks">
                                    <Tasks tasks={tasks} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="themecustomizer">
                                    <ThemeCustomizer />
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </>
                </Scrollbar>
            </div>
            <div className="rightbar-overlay"></div>
        </React.Fragment>
    );
};

export default RightSideBar;
