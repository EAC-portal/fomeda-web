"use client";

import React from "react";
import {Image, Card, Row, Col, Button, Form, Input, Typography, notification} from "antd";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import type {FormProps} from 'antd';
import PageLayout from '@/app/page';
import AuthenticationService from "@/services/authentication.service";
import Cookies from 'js-cookie';

const {Title, Link} = Typography;

type FieldType = {
    username?: string;
    password?: string;
};

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        setIsLoading(true);
        try {
            await AuthenticationService.login(values).then(res => {
                notification.success({
                    message: 'Login Successful',
                    description: 'You have successfully logged in.',
                    duration: 3,
                });
                const sessionId = res?.sessionId
                const userData = res?.token

                Cookies.set('session', JSON.stringify(sessionId), { expires: 1 / 24 });
                Cookies.set('token', JSON.stringify(userData), { expires: 1 / 12  });

                router.push('/content');
            });
        } catch (error) {
            console.error(error);
            notification.error({
                message: 'Login Failed',
                description: 'Invalid credentials during login. Please try again.',
                duration: 3,
            });
        }
        finally {
            setIsLoading(false);
        }
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <PageLayout showTitle={false}>
            <Row align="middle" justify="space-evenly" style={{height: '100vh'}}>
                <Col>
                    <Image
                        preview={false}
                        src="/logoFomeda.svg"
                        alt="fomeda-logo"
                    />
                </Col>
                <Col>
                    <Card>
                        <Form
                            name="basic"
                            layout="vertical"
                            autoComplete="off"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            style={{width: "400px"}}
                        >
                            <Title level={2}>Login</Title>
                            <Form.Item<FieldType>
                                label="Username"
                                name="username"
                                rules={[
                                    {required: true, message: 'Please input your username'},
                                    {min: 6, max: 20, message: 'The username must be between 6 and 20 characters'},
                                    {whitespace: true, message: 'The username cannot be whitespaces only'},
                                    {pattern: /^[a-zA-Z][a-zA-Z0-9_]*$/, message: 'The username must start with an alphabet and contain only alphanumeric characters and underscores'}
                                ]}
                                hasFeedback
                            >
                                <Input placeholder="Username"/>
                            </Form.Item>
                            <Form.Item<FieldType>
                                label="Password"
                                name="password"
                                rules={[
                                    {required: true, message: 'Please input your password'},
                                    {min: 12, max: 20, message: 'The username must be between 12 and 20 characters'},
                                    {whitespace: true, message: 'The password cannot be whitespaces only'},
                                    {pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/, message: 'The username contains at least one uppercase letter, one lowercase letter, at least one number and at least one special character'}
                                ]}
                            >
                                <Input.Password placeholder="Password"/>
                            </Form.Item>
                            <Form.Item style={{paddingTop: '5px'}}>
                                <Button block type="primary" htmlType="submit" loading={isLoading}>
                                    Sign in
                                </Button>
                                <div style={{padding: '5px', textAlign: 'right'}}>
                                    <Link href="/forget-password">
                                        Forget Password
                                    </Link>
                                </div>
                            </Form.Item>
                        </Form>
                        <div style={{textAlign: 'center'}}>
                            <Typography.Text style={{padding: '5px'}}>
                                New to FOMEDA?
                            </Typography.Text>
                            <Link href="/register">
                                Create account now
                            </Link>
                        </div>
            
                        <div style={{textAlign: 'center'}}>
                            <Typography.Text style={{padding: '5px'}}>
                                Check account registration status?
                            </Typography.Text>
                            <Link href="">
                                Click here
                            </Link>
                        </div>
                    </Card>
                </Col>
            </Row>
        </PageLayout>
    );
}
