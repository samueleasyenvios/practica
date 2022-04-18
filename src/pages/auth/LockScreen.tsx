import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// components
import { VerticalForm, FormInput } from '../../components/form/';

import AuthLayout from './AuthLayout';

// images
import userImg from '../../assets/images/users/avatar-1.jpg';

interface UserData {
    password: string;
}

/* bottom link */
const BottomLink = () => {
    const { t } = useTranslation();
    return (
        <Row className="mt-3">
            <Col xs={12} className="text-center">
                <p className="text-muted">
                    {t('Not you? return')}{' '}
                    <Link to={'/auth/login'} className="text-primary fw-medium ms-1">
                        <b>{t('Sign In')}</b>
                    </Link>
                </p>
            </Col>
        </Row>
    );
};

const LockScreen = () => {
    const { t } = useTranslation();

    /*
     * form validation schema
     */
    const schemaResolver = yupResolver(
        yup.object().shape({
            password: yup.string().required(t('Please enter Password')),
        })
    );

    return (
        <>
            <AuthLayout bottomLinks={<BottomLink />}>
                <div className="text-center w-75 m-auto mt-4">
                    <img src={userImg} alt="" height="88" className="rounded-circle avatar-lg img-thumbnail" />
                    <h4 className="text-dark-50 text-center mt-3">{t('Hi ! Nik Patel ')}</h4>
                    <p className="text-muted mb-4">{t('Enter your password to access the admin.')}</p>
                </div>
                <VerticalForm<UserData> onSubmit={() => {}} resolver={schemaResolver}>
                    <FormInput
                        label={t('Password')}
                        type="password"
                        name="password"
                        placeholder={t('Enter your password')}
                        containerClass={'mb-3'}
                    />

                    <div className="d-grid text-center">
                        <Button variant="primary" type="submit">
                            {t('Log In')}
                        </Button>
                    </div>
                </VerticalForm>
            </AuthLayout>
        </>
    );
};

export default LockScreen;
