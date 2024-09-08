import React from 'react';
import { Modal, Form, Input, Button, Select } from 'antd';
import AuthenticationService from "@/services/authentication.service";
import {ADMINS_STATUS_OPTIONS} from "@/constants/admins.constant";

const { Option } = Select;

interface AdminModalProps {
    visible: boolean;
    onClose: () => void;
}

const AddAdminModal: React.FC<AdminModalProps> = ({ visible, onClose }) => {
    const [form] = Form.useForm();

    const checkEmailDuplicate = async (email: string) => {
        try {
            const response = await AuthenticationService.checkEmailDuplicate(email);
            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    const checkUsernameDuplicate = async (username: string) => {
        try {
            const response = await AuthenticationService.checkUsernameDuplicate(username);
            return response;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    const handleOnSubmit = async () => {
        try {
            const values = await form.validateFields();
            const data = {...values, type: "admin", created_by: "Superadmin", updated_by: "Superadmin"};
            try {
                await AuthenticationService.register(data);
            } catch (error) {
                console.error(error)
                throw error;
            }
            form.resetFields();
            onClose();
        } catch (error) {
            console.log('Validation Failed:', error);
        }
    };

    const handleOnClose = async () => {
        form.resetFields();
        onClose();
    }

    return (
        <Modal
            title={<h3 style={{textAlign:'center'}}>Create Admin</h3>}
            open={visible}
            onCancel={handleOnClose}
            onOk={handleOnSubmit}
            width={1000}
            footer={[
                <Button key="cancel" onClick={handleOnClose}>
                    Cancel
                </Button>,
                <Button key="submit" type="primary" onClick={handleOnSubmit}>
                    Submit
                </Button>,
            ]}
        >
            <Form form={form} layout="vertical">
                <Form.Item
                    name="fullname"
                    label="Admin fullname"
                    rules={[{ required: true, message: 'Please enter the admin fullname' }]}
                    hasFeedback
                >
                    <Input placeholder="Admin fullname" />
                </Form.Item>
                <Form.Item
                    name="username"
                    label="Admin username"
                    rules={[
                        {required: true, message: 'Please enter the admin username'},
                        {min: 6, max: 20, message: 'The username must be between 6 and 20 characters'},
                        {whitespace: true, message: 'The username cannot be whitespaces only'},
                        {
                            pattern: /^[a-zA-Z][a-zA-Z0-9_]*$/,
                            message: 'The username must start with an alphabet and contain only alphanumeric characters and underscores'
                        },
                        {
                            validator: async (_, value) => {
                                if (!value) {
                                    return Promise.resolve();
                                }
                                const isDuplicate = await checkUsernameDuplicate(value);
                                if (isDuplicate) {
                                    return Promise.reject(new Error('The username is already in use'));
                                }
                                return Promise.resolve();
                            },
                        },
                    ]}
                    hasFeedback
                >
                    <Input placeholder="Admin username" />
                </Form.Item>
                <Form.Item
                    name="email_address"
                    label="Admin email"
                    rules={[
                        { required: true, message: 'Please enter the admin email' },
                        { type: "email", message: 'Please enter a valid email address'},
                        {
                            validator: async (_, value) => {
                                if (!value) {
                                    return Promise.resolve();
                                }
                                const isDuplicate = await checkEmailDuplicate(value);
                                if (isDuplicate) {
                                    return Promise.reject(new Error('The email is already in use'));
                                }
                                return Promise.resolve();
                            },
                        },
                    ]}
                    hasFeedback
                >
                    <Input placeholder="Admin email" />
                </Form.Item>
                <Form.Item
                    name="role"
                    label="Role"
                    rules={[{ required: true, message: 'Please select a role' }]}
                   >
                    <Select placeholder="Please select a role">
                        <Option value="admin">Admin</Option>
                        <Option value="editor">Editor</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="is_active"
                    label="Status"
                    rules={[{ required: true, message: 'Please select a status' }]}
                >
                    <Select placeholder="Please select a status">
                        {ADMINS_STATUS_OPTIONS.map(option => (
                            <Option key={String(option.value)} value={option.value}>
                                {option.label}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AddAdminModal;
