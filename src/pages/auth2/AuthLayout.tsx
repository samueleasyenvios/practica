import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// images
import LogoDark from '../../assets/images/logo-dark.png';
import LogoLight from '../../assets/images/logo-light.png';

interface AccountLayoutProps {
    helpText?: string;
    bottomLinks?: any;
    isCombineForm?: boolean;
    children?: any;
}

const AuthLayout = ({ helpText, bottomLinks, children, isCombineForm }: AccountLayoutProps) => {
    const { t } = useTranslation();

    useEffect(() => {
        if (document.body) document.body.classList.remove('authentication-bg', 'authentication-bg-pattern');
        if (document.body) document.body.classList.add('auth-fluid-pages', 'pb-0');

        return () => {
            if (document.body) document.body.classList.remove('auth-fluid-pages', 'pb-0');
        };
    }, []);

    return (
        <>
            <div className="auth-fluid">
                {/* Auth fluid right content */}
                <div className="auth-fluid-right">
                    <div className="auth-user-testimonial">
                        <h3 className="mb-3 text-white">{t('Very elegant & impressive!')}</h3>
                        <p className="lead fw-normal">
                            <i className="mdi mdi-format-quote-open"></i>{' '}
                            {t(
                                "I've been using this theme for a while and I must say that whenever I am looking for a design - I refer to this theme for specifics & implementation. With wide arrays of components, designs, charts - I would highly recommend this theme for anyone using it for dashboard or project management usage.."
                            )}{' '}
                            <i className="mdi mdi-format-quote-close"></i>
                        </p>
                        <h5 className="text-white">- {t('Admin User')}</h5>
                    </div>
                </div>

                {/* Auth fluid left content */}
                <div className="auth-fluid-form-box">
                    <div className="align-items-center d-flex h-100">
                        <Card.Body>
                            {/* logo */}
                            <div className="auth-brand text-center text-lg-start">
                                <div className="auth-logo">
                                    <Link to="/" className="logo logo-dark text-center">
                                        <span className="logo-lg">
                                            <img src={LogoDark} alt="" height="22" />
                                        </span>
                                    </Link>

                                    <Link to="/" className="logo logo-light text-center">
                                        <span className="logo-lg">
                                            <img src={LogoLight} alt="" height="22" />
                                        </span>
                                    </Link>
                                </div>
                            </div>

                            {children}

                            {/* footer links */}
                            {bottomLinks}
                        </Card.Body>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthLayout;
