// Copyright (C) 2021-2022 Intel Corporation
//
// SPDX-License-Identifier: MIT

import React from 'react';
import { Col, Row } from 'antd/lib/grid';
import Layout from 'antd/lib/layout';
import Button from 'antd/lib/button';
import './styles.scss';

const { Content } = Layout;

/**
 * Component for displaying message that email should be verified
 */

export default function EmailVerificationIsRequiredPage(): JSX.Element {
    return (
        <Layout>
            <Content>
                <Row justify='center' align='middle' id='email-verification-is-required-page-container'>
                    <Col>
                        <h1>Please, confirm your email</h1>
                        <Button type='link' href='/auth/login'>
                            Go to login page
                        </Button>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
}