"use client";

import React from "react";
import {useRouter} from "next/navigation";
import {Image, Card, Row, Col, Button, Form, Input, Typography} from "antd";

import type {FormProps} from 'antd';
import PageLayout from '@/app/page';

const {Title, Link} = Typography;

type FieldType = {
    username?: string;
    password?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

export default function LoginPage() {
    const [user, setUser] = React.useState({
        username: "",
        password: "",
    })

    return (
        <PageLayout>
            <Row align="middle" justify="space-evenly" style={{height: '100vh', width: '100vw'}}>
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
                                    // {min: 6, max: 20, message: 'The username must be between 6 and 20characters'},
                                    // {whitespace: true, message: 'The username cannot be whitespaces only'},
                                    // {pattern: /^[a-zA-Z][a-zA-Z0-9_]*$/, message: 'The username must start with an alphabet and contain only alphanumeric characters and underscores'}
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
                                    // {min: 12, max: 20, message: 'The username must be between 12 and 20 characters'},
                                    // {whitespace: true, message: 'The password cannot be whitespaces only'},
                                    // {pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/, message: 'The username contains at least one uppercase letter, one lowercase letter, at least one number and at least one special character'}
                                ]}
                            >
                                <Input.Password placeholder="Password"/>
                            </Form.Item>
                            <Form.Item style={{paddingTop: '5px'}}>
                                <Button block type="primary" htmlType="submit">
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
                            <Link href="/forget-password">
                                Create account now
                            </Link>
                        </div>

                        <div style={{textAlign: 'center'}}>
                            <Typography.Text style={{padding: '5px'}}>
                                Check account registration status?
                            </Typography.Text>
                            <Link href="/forget-password">
                                Click here
                            </Link>
                        </div>
                    </Card>
                </Col>
            </Row>
        </PageLayout>
    );
}
