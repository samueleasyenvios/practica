import React from 'react';
import classNames from 'classnames';

// components
import Scrollbar from './Scrollbar';

interface MessageListProps {
    className?: string;
    children?: Object;
}

/**
 * MessageList
 */
const MessageList = (props: MessageListProps) => {
    const children = props.children || null;

    return (
        <Scrollbar style={{ maxHeight: '407px' }}>
            <div className={classNames('inbox-widget', props.className)}>{children}</div>
        </Scrollbar>
    );
};

export default MessageList;
