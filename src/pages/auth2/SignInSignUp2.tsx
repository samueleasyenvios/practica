import React, { useEffect } from 'react';
import { Button, Alert, Nav, Tab } from 'react-bootstrap';
import { Redirect, Link } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';

// actions
import { resetAuth, loginUser, signupUser } from '../../redux/actions';

// hooks
import { useRedux } from '../../hooks/';

// components
import { VerticalForm, FormInput } from '../../components/form/';
import SocialLinks from '../../components/SocialLinks';

import AuthLayout from './AuthLayout';

interface UserData {
    loginemail: string;
    loginpassword: string;
    password: string;
    fullname: string;
    email: string;
}

/* bottom link */
const BottomLink = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer footer-alt">
            <p className="text-muted">
                {new Date().getFullYear()}
                {t(' © Minton theme by')}{' '}
                <Link to="#" className="text-dark">
                    {t('Coderthemes')}
                </Link>
            </p>
        </footer>
    );
};

const SignInSignUp2 = () => {
    const { t } = useTranslation();
    const { dispatch, appSelector } = useRedux();

    const { user, userSignUp, loading, error } = appSelector((state) => ({
        user: state.Auth.user,
        loading: state.Auth.loading,
        error: state.Auth.error,
        userSignUp: state.Auth.userSignUp,
    }));

    useEffect(() => {
        dispatch(resetAuth());
    }, [dispatch]);

    /*
    form validation schema
    */
    const loginSchema = yupResolver(
        yup.object().shape({
            loginemail: yup.string().required(t('Please enter email')).email('Please enter valid Email'),
            loginpassword: yup.string().required(t('Please enter Password')),
        })
    );

    const signUpSchema = yupResolver(
        yup.object().shape({
            password: yup.string().required(t('Please enter Password')),
            fullname: yup.string().required(t('Please enter Fullname')),
            email: yup.string().required('Please enter Email').email('Please enter valid Email'),
        })
    );

    /*
    handle form submission
    */
    const onSubmit = (formData: UserData) => {
        dispatch(loginUser(formData['loginemail'], formData['loginpassword']));
    };

    const onSignUp = (formData: UserData) => {
        dispatch(signupUser(formData['fullname'], formData['email'], formData['password']));
    };

    return (
        <>
            {user ? <Redirect to="/"></Redirect> : null}

            {userSignUp ? <Redirect to={'/auth/confirm2'}></Redirect> : null}

            <AuthLayout isCombineForm={true} bottomLinks={<BottomLink />}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="login">
                    <Nav variant="tabs" className="nav-bordered">
                        <Nav.Item as="li">
                            <Nav.Link eventKey="login" className="cursor-pointer">
                                {t('Log In')}
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link eventKey="signup" className="cursor-pointer">
                                {t('Sign Up')}
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <Tab.Content>
                        {/* login form */}
                        <Tab.Pane eventKey="login">
                            <p className="text-muted mb-3">
                                {t('Enter your email address and password to access admin panel.')}
                            </p>

                            {error && (
                                <Alert variant="danger" className="my-2">
                                    {error}
                                </Alert>
                            )}
                            <VerticalForm<UserData>
                                onSubmit={onSubmit}
                                resolver={loginSchema}
                                defaultValues={{
                                    loginemail: 'minton@coderthemes.com',
                                    loginpassword: 'test',
                                }}
                            >
                                <FormInput
                                    label="Email address"
                                    type="text"
                                    name="loginemail"
                                    placeholder="Enter your email"
                                    containerClass={'mb-2'}
                                />
                                <FormInput
                                    label="Password"
                                    type="password"
                                    name="loginpassword"
                                    placeholder="Enter your password"
                                    containerClass={'mb-2'}
                                >
                                    <Link to="/auth/forget-password" className="text-muted float-end">
                                        <small>{t('Forgot your password?')}</small>
                                    </Link>
                                </FormInput>

                                <FormInput
                                    label="Remember me"
                                    type="checkbox"
                                    name="checkbox"
                                    containerClass={'mb-3'}
                                />

                                <div className="d-grid mb-0 text-center">
                                    <Button variant="primary" type="submit" disabled={loading}>
                                        {t('Log In')}
                                    </Button>
                                </div>

                                {/* social links */}
                                <div className="text-center mt-4">
                                    <h5 className="mt-3 text-muted">{t('Sign in with')}</h5>
                                    <SocialLinks />
                                </div>
                            </VerticalForm>
                        </Tab.Pane>

                        {/* sign up form */}
                        <Tab.Pane eventKey="signup">
                            <p className="text-muted mb-3">
                                {t("Don't have an account? Create your own account, it takes less than a minute")}
                            </p>
                            <VerticalForm onSubmit={onSignUp} resolver={signUpSchema} defaultValues={{}}>
                                <FormInput
                                    label={t('Full Name')}
                                    type="text"
                                    name="fullname"
                                    placeholder={t('Enter your name')}
                                    containerClass={'mb-2'}
                                />
                                <FormInput
                                    label={t('Email address')}
                                    type="email"
                                    name="email"
                                    placeholder={t('Enter your email')}
                                    containerClass={'mb-2'}
                                />
                                <FormInput
                                    label={t('Password')}
                                    type="password"
                                    name="password"
                                    placeholder={t('Enter your password')}
                                    containerClass={'mb-2'}
                                />
                                <FormInput
                                    label={t('I accept Terms and Conditions')}
                                    type="checkbox"
                                    name="checkboxsignup"
                                    containerClass={'mb-3'}
                                />

                                <div className="mb-0 d-grid text-center">
                                    <Button variant="primary" type="submit" disabled={loading}>
                                        {t('Sign Up')}
                                    </Button>
                                </div>

                                {/* social links */}
                                <div className="text-center mt-4">
                                    <h5 className="mt-3 text-muted">{t('Sign Up using')}</h5>
                                    <SocialLinks />
                                </div>
                            </VerticalForm>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </AuthLayout>
        </>
    );
};

export default SignInSignUp2;
