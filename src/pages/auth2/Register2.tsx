import React, { useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Button, Alert } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// actions
import { resetAuth, signupUser } from '../../redux/actions';

// hooks
import { useRedux } from '../../hooks/';

// components
import { VerticalForm, FormInput } from '../../components/form';
import SocialLinks from '../../components/SocialLinks';

import AuthLayout from './AuthLayout';

interface UserData {
    fullname: string;
    email: string;
    password: string;
}

/* bottom link */
const BottomLink = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer footer-alt">
            <p className="text-muted">
                {t('Already have account?')}{' '}
                <Link to={'/auth/login2'} className="text-primary fw-medium ms-1">
                    <b>{t('Sign In')}</b>
                </Link>
            </p>
        </footer>
    );
};

const Register2 = () => {
    const { t } = useTranslation();
    const { dispatch, appSelector } = useRedux();

    const { loading, userSignUp, error } = appSelector((state) => ({
        loading: state.Auth.loading,
        error: state.Auth.error,
        userSignUp: state.Auth.userSignUp,
    }));

    useEffect(() => {
        dispatch(resetAuth());
    }, [dispatch]);

    /*
     * form validation schema
     */
    const schemaResolver = yupResolver(
        yup.object().shape({
            fullname: yup.string().required(t('Please enter Fullname')),
            email: yup.string().required(t('Please enter Email address')).email(t('Please enter Email')),
            password: yup.string().required(t('Please enter Password')),
        })
    );

    /*
     * handle form submission
     */
    const onSubmit = (formData: UserData) => {
        dispatch(signupUser(formData['fullname'], formData['email'], formData['password']));
    };

    return (
        <>
            {userSignUp ? <Redirect to={'/auth/confirm2'}></Redirect> : null}

            <AuthLayout bottomLinks={<BottomLink />}>
                <h4 className="mt-0">{t('Sign Up')}</h4>
                <p className="text-muted mb-4">
                    {t("Don't have an account? Create your own account, it takes less than a minute")}
                </p>

                {error && (
                    <Alert variant="danger" className="my-2">
                        {error}
                    </Alert>
                )}

                <VerticalForm onSubmit={onSubmit} resolver={schemaResolver} defaultValues={{}}>
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
                        containerClass={'mb-3 text-muted'}
                    />

                    <div className="mb-0 d-grid text-center">
                        <Button variant="primary" type="submit" disabled={loading}>
                            {t('Sign Up')}
                        </Button>
                    </div>

                    {/* social links */}
                    <div className="text-center mt-4">
                        <h5 className="text-muted mt-0">{t('Sign up using')}</h5>
                        <SocialLinks />
                    </div>
                </VerticalForm>
            </AuthLayout>
        </>
    );
};

export default Register2;
