import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const socialLinks = [
    {
        variant: 'purple',
        icon: 'facebook',
    },
    {
        variant: 'danger',
        icon: 'google',
    },
    {
        variant: 'info',
        icon: 'twitter',
    },
    {
        variant: 'secondary',
        icon: 'github',
    },
];

const SocialLinks = () => {
    return (
        <>
            <ul className="social-list list-inline mt-3 mb-0">
                {(socialLinks || []).map((item, index) => {
                    return (
                        <li key={index} className="list-inline-item">
                            <Link
                                to="#"
                                className={classNames(
                                    'social-list-item',
                                    'border-' + item.variant,
                                    'text-' + item.variant
                                )}
                            >
                                <i className={classNames('mdi', 'mdi-' + item.icon)}></i>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default SocialLinks;
