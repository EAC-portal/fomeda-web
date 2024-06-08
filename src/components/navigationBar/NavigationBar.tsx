"use client"

import React from "react";
import {Image, Button, Dropdown, Divider, Avatar, Row, notification} from "antd";
import {DownOutlined, UserOutlined} from "@ant-design/icons";
import "../../styles/header.component.css"
import {MenuProps} from "antd/lib";
import {Header} from "antd/es/layout/layout";
import {
    HEADER_MANAGEMENT_DROPDOWN_LIST_CONSTANTS, HEADER_USER_DROPDOWN_CONSTANTS
} from "@/constants/header.constants";
import Link from "next/link";
import {useState, useEffect} from 'react';
import {useRouter} from 'next/navigation';

const MANAGEMENT_DROPDOWN_LIST: MenuProps["items"] = HEADER_MANAGEMENT_DROPDOWN_LIST_CONSTANTS.map((item) => ({
    key: item.key,
    label: (
        <Link href={item.link}>
            <div>{item.label}</div>
        </Link>
    ),
}));

interface UserData {
    user_id: string;
    fullname: string;
    username: string;
    email_address: string;
    password: string;
    is_active: boolean;
    type: string;
}


const NavigationBar = () => {
    const [userData, setUserData] = useState<UserData | null>(null);
    const router = useRouter();

    const handleLogout = async () => {
        try {
            // Clear session storage
            sessionStorage.clear();

            // Show a success message
            notification.success({
                message: 'Logout Successful',
                description: 'You have successfully logged out.',
                duration: 3,
            })

            // Redirect to content page
            router.push('/login');
        } catch (error) {
            // Handle error
            console.error('Logout error:', error);
        }
    };

    const PROFILE_DROPDOWN_LIST: MenuProps["items"] = HEADER_USER_DROPDOWN_CONSTANTS.map((item) => ({
        key: item.key,
        label: item.key === "logout" ?
            <div onClick={handleLogout}>{item.label}</div>
            : (
                <Link href={item.link}>
                    <div>{item.label}</div>
                </Link>
            ),
    }));

    // Check session storage on component mount
    useEffect(() => {
        const storedUserData = sessionStorage.getItem('user');

        if (storedUserData) {
            setUserData(JSON.parse(storedUserData));
        }
    }, []);

    return (
        <Header className="header-box">
            <Image
                preview={false}
                width={50}
                src="/logoFomeda.svg"
                alt="fomeda-logo"
            />
            <Row style={{alignItems: "center"}}>
                <Button type="text" className="nav-button">Home</Button>
                <Button type="text" className="nav-button">Announcement</Button>
                <Button type="text" className="nav-button">Product</Button>

                {/*Conditional rendering*/}
                {userData ? (
                    <>
                        <Divider className="divider" type="vertical"/>
                        <Dropdown menu={{items: MANAGEMENT_DROPDOWN_LIST}}>
                            <Button type="text" className="nav-button" icon={<DownOutlined/>} iconPosition="end">
                                Management
                            </Button>
                        </Dropdown>
                        <Avatar icon={<UserOutlined/>} className="nav-avatar"/>
                        <Dropdown menu={{items: PROFILE_DROPDOWN_LIST}}>
                            <Button type="text" className="nav-button" icon={<DownOutlined/>} iconPosition="end">
                                {userData.fullname}
                            </Button>
                        </Dropdown>
                    </>
                ) : (
                    <>
                        <Divider className="divider" type="vertical"/>
                        <Row>
                            <Button type="text" className="nav-button" onClick={
                                () => router.push('/login')
                            }>
                                Login
                            </Button>
                        </Row>
                    </>
                )
                }
            </Row>
        </Header>
    );
};

export default NavigationBar;
