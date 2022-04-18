import React, { useEffect } from 'react';
import { Row, Col, Button, Alert } from 'react-bootstrap';
import { Redirect, Link } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';

// hooks
import { useRedux } from '../../hooks/';

// actions
import { resetAuth, loginUser, signupUser } from '../../redux/actions';

// components
import { VerticalForm, FormInput } from '../../components/form/';

import AuthLayout from './AuthLayout';

interface UserData {
    loginpassword: string;
    password: string;
    fullname: string;
    email: string;
    email2: string;
}

const SignInSignUp = () => {
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
            email: yup.string().required('Please enter Email').email('Please enter valid Email'),
            loginpassword: yup.string().required(t('Please enter Password')),
        })
    );

    const signUpSchema = yupResolver(
        yup.object().shape({
            password: yup.string().required(t('Please enter Password')),
            fullname: yup.string().required(t('Please enter Fullname')),
            email2: yup.string().required('Please enter Email').email('Please enter valid Email'),
        })
    );

    /*
    handle form submission
    */
    const onSubmit = (formData: UserData) => {
        dispatch(loginUser(formData['email'], formData['loginpassword']));
    };

    const onSignUp = (formData: UserData) => {
        dispatch(signupUser(formData['fullname'], formData['email2'], formData['password']));
    };

    return (
        <>
            {user ? <Redirect to="/"></Redirect> : null}

            {userSignUp ? <Redirect to={'/auth/confirm'}></Redirect> : null}

            <AuthLayout isCombineForm={true}>
                <Row className="mt-4">
                    <Col lg={6}>
                        <div className="p-sm-3">
                            <h4 className="mt-0">{t('Sign In')}</h4>
                            <p className="text-muted mb-4">
                                {t('Enter your email address and password to access account.')}
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
                                    email: 'minton@coderthemes.com',
                                    loginpassword: 'test',
                                }}
                            >
                                <FormInput
                                    type="email"
                                    name="email"
                                    label={t('Email address')}
                                    placeholder={t('hello@coderthemes.com')}
                                    containerClass={'mb-3'}
                                />
                                <FormInput
                                    label="Password"
                                    type="password"
                                    name="loginpassword"
                                    placeholder="Enter your password"
                                    containerClass={'mb-3'}
                                >
                                    <Link to="/auth/forget-password" className="text-muted float-end">
                                        <small>{t('Forgot your password?')}</small>
                                    </Link>
                                </FormInput>

                                <div className="mb-3">
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        className="btn btn-primary float-sm-end"
                                        disabled={loading}
                                    >
                                        {t('Log In')}
                                    </Button>
                                    <FormInput label="Remember me" type="checkbox" name="checkbox" />
                                </div>
                            </VerticalForm>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <div className="p-sm-3">
                            <h4 className="mt-0">{t('Free Sign Up')}</h4>
                            <p className="text-muted mb-4">
                                {t("Don't have an account? Create your account, it takes less than a minute")}
                            </p>

                            <VerticalForm<UserData> onSubmit={onSignUp} resolver={signUpSchema} defaultValues={{}}>
                                <FormInput
                                    label={t('Full Name')}
                                    type="text"
                                    name="fullname"
                                    placeholder={t('Enter your name')}
                                    containerClass={'mb-3'}
                                />
                                <FormInput
                                    label={t('Email address')}
                                    type="email"
                                    name="email2"
                                    placeholder={t('Enter your email')}
                                    containerClass={'mb-3'}
                                />
                                <FormInput
                                    label={t('Password')}
                                    type="password"
                                    name="password"
                                    placeholder={t('Enter your password')}
                                    containerClass={'mb-3'}
                                />

                                <div className="mb-0">
                                    <Button
                                        variant="success"
                                        type="submit"
                                        className="btn btn-success float-sm-end"
                                        disabled={loading}
                                    >
                                        {t('Sign Up')}
                                    </Button>
                                    <FormInput
                                        label={t('I accept Terms and Conditions')}
                                        type="checkbox"
                                        name="checkboxsignup"
                                        containerClass={'pt-1'}
                                    />
                                </div>
                            </VerticalForm>
                        </div>
                    </Col>
                </Row>
            </AuthLayout>
        </>
    );
};

export default SignInSignUp;
