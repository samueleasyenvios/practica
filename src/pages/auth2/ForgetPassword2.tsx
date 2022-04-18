import React, { useEffect } from 'react';
import { Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// actions
import { resetAuth, forgotPassword } from '../../redux/actions';

// hooks
import { useRedux } from '../../hooks/';

// components
import { VerticalForm, FormInput } from '../../components/form/';

import AuthLayout from './AuthLayout';

interface UserData {
    email: string;
}

/* bottom links */
const BottomLink = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer footer-alt">
            <p className="text-muted">
                {t('Back to')}{' '}
                <Link to={'/auth/login2'} className="text-muted ms-1">
                    <b>{t('Log in')}</b>
                </Link>
            </p>
        </footer>
    );
};

const ForgetPassword2 = () => {
    const { dispatch, appSelector } = useRedux();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(resetAuth());
    }, [dispatch]);

    const { loading, passwordReset, resetPasswordSuccess, error } = appSelector((state) => ({
        loading: state.Auth.loading,
        resetPasswordSuccess: state.Auth.resetPasswordSuccess,
        error: state.Auth.error,
        passwordReset: state.Auth.passwordReset,
    }));

    /*
     * form validation schema
     */
    const schemaResolver = yupResolver(
        yup.object().shape({
            email: yup.string().required(t('Please enter Email address')),
        })
    );

    /*
     * handle form submission
     */
    const onSubmit = (formData: UserData) => {
        dispatch(forgotPassword(formData['email']));
    };

    return (
        <>
            <AuthLayout bottomLinks={<BottomLink />}>
                <h4 className="mt-0">{t('Recover Password')}</h4>
                <p className="text-muted mb-4">
                    {t(
                        "Enter your email address and we'll send you an email with instructions to reset your password."
                    )}
                </p>

                {resetPasswordSuccess && <Alert variant="success">{resetPasswordSuccess.message}</Alert>}

                {error && !resetPasswordSuccess && (
                    <Alert variant="danger" className="my-2">
                        {error}
                    </Alert>
                )}

                {!passwordReset && (
                    <VerticalForm onSubmit={onSubmit} resolver={schemaResolver}>
                        <FormInput
                            label={t('Email address')}
                            type="text"
                            name="email"
                            placeholder={t('Enter your email')}
                            containerClass={'mb-3'}
                        />

                        <div className="text-center d-grid">
                            <Button type="submit" disabled={loading}>
                                {t('Reset Password')}
                            </Button>
                        </div>
                    </VerticalForm>
                )}
            </AuthLayout>
        </>
    );
};

export default ForgetPassword2;
