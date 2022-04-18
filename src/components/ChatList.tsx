import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Card, Dropdown, Row, Col } from 'react-bootstrap';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import classNames from 'classnames';

//components
import { FormInput } from '../components/form/';
import Scrollbar from '../components/Scrollbar';

// images
import profilePic from '../assets/images/users/avatar-1.jpg';

/* Chat Item Avatar */
const ChatItemAvatar = ({ userAvatar, postedOn }: { userAvatar: string; postedOn: string }) => {
    return (
        <>
            <div className="chat-avatar">
                <img src={userAvatar} alt={userAvatar} />
                <i>{postedOn}</i>
            </div>
        </>
    );
};

/* Chat Item Text */
const ChatItemText = ({ userName, text }: { userName: string; text: string }) => {
    return (
        <>
            <div className="conversation-text">
                <div className="ctext-wrap">
                    <i>{userName}</i>
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
};

/* Chat Item */
const chatItemDefaultProps = {
    placement: '',
    children: PropTypes.object,
    className: '',
};

const ChatItem = ({ children, placement, className }: { children: any; placement: string; className: string }) => {
    return <li className={classNames('clearfix', { odd: placement === 'left' }, className)}>{children}</li>;
};

ChatItem.defaultProps = chatItemDefaultProps;

/**
 * ChatForm
 */

interface FormValues {
    newMessage: string;
}

/**
 * Renders the ChatForm
 */
const ChatForm = ({ onNewMessagesPosted }: { onNewMessagesPosted: (message: string) => void }) => {
    /*
     * form validation schema
     */
    const schemaResolver = yupResolver(
        yup.object().shape({
            newMessage: yup.string().required('Please enter your messsage'),
        })
    );

    const methods = useForm<FormValues>({ resolver: schemaResolver });
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
        reset,
    } = methods;

    /**
     * Handle valid form submission
     */
    const handleValidMessageSubmit: SubmitHandler<FormValues> = (values) => {
        const message = values['newMessage'];
        onNewMessagesPosted(message);
        reset();
    };

    return (
        <>
            <form className="mt-2" name="chat-form" id="chat-form" onSubmit={handleSubmit(handleValidMessageSubmit)}>
                <Row>
                    <Col>
                        <FormInput
                            type="text"
                            name="newMessage"
                            className="form-control chat-input"
                            placeholder="Enter your text"
                            register={register}
                            key="newMessage"
                            errors={errors}
                            control={control}
                        />
                    </Col>
                    <Col className="col-auto">
                        <button type="submit" className="btn btn-primary chat-send width-sm waves-effect waves-light">
                            Send
                        </button>
                    </Col>
                </Row>
            </form>
        </>
    );
};

/**
 * ChatList
 */
export interface MessageItemTypes {
    id: number;
    userPic?: string;
    userName: string;
    text: string;
    postedOn: string;
}

interface ChatListProps {
    title?: string;
    className?: string;
    messages: Array<MessageItemTypes>;
}

/**
 * Renders the ChatList
 */
const ChatList = (props: ChatListProps) => {
    const [messages, setMessages] = useState<Array<MessageItemTypes>>(props.messages);

    /**
     * Handle new message posted
     */
    const handleNewMessagePosted = (message: string) => {
        // save new message
        setMessages(
            messages.concat({
                id: messages.length + 1,
                userPic: profilePic,
                userName: 'Dominic',
                text: message,
                postedOn: new Date().getHours() + ':' + new Date().getMinutes(),
            })
        );
    };

    return (
        <>
            <Card>
                <Card.Body>
                    <Dropdown className="float-end" align="end">
                        <Dropdown.Toggle as="a" className="cursor-pointer arrow-none card-drop">
                            <i className="mdi mdi-dots-vertical"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Settings</Dropdown.Item>
                            <Dropdown.Item>Action</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <h4 className="header-title mb-3">{props.title}</h4>

                    <div className="chat-conversation">
                        {/* chat messages */}
                        <Scrollbar style={{ maxHeight: '358px', width: '100%' }}>
                            <ul className={classNames('conversation-list', props.className)}>
                                {(messages || []).map((message, i) => {
                                    return (
                                        <ChatItem key={i} placement={message.userName === 'Dominic' ? 'left' : 'right'}>
                                            {message.userPic && (
                                                <ChatItemAvatar
                                                    userAvatar={message.userPic}
                                                    postedOn={message.postedOn}
                                                />
                                            )}
                                            <ChatItemText userName={message.userName} text={message.text} />
                                        </ChatItem>
                                    );
                                })}
                            </ul>
                        </Scrollbar>

                        {/* chat form */}
                        <ChatForm onNewMessagesPosted={handleNewMessagePosted} />
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default ChatList;
