"use client"

import React from 'react';
import NavigationBar from '@/components/navigationBar/NavigationBar';
import {Breadcrumb, Button, Layout, Row} from 'antd';
import {usePathname, useRouter} from 'next/navigation';
import Link from 'next/link';
import {StringUtils} from "@/utils/string.utils";
import {LeftOutlined} from "@ant-design/icons"; // Ensure you import Link for breadcrumb navigation

const PageLayout = ({title, children}: any) => {
    const router = useRouter();
    const pathname = usePathname();

    const getBreadcrumbItems = () => {
        const segments = pathname.split('/').filter(Boolean);
        return segments.map((segment, index) => {
            const href = `/${segments.slice(0, index + 1).join('/')}`;
            return {
                title: StringUtils.formatTitleCase(segment, "-"),
                key: href
            };
        });
    };

    const breadcrumbItems = getBreadcrumbItems();

    return (
        <Layout>
            <NavigationBar/>
            <main>
                <Breadcrumb>
                    {breadcrumbItems.map((item) => (
                        <Breadcrumb.Item key={item.key}>
                            <Link href={item.key}>{item.title}</Link>
                        </Breadcrumb.Item>
                    ))}
                </Breadcrumb>
                <Row className="mb-4 items-center">
                    {breadcrumbItems.length > 1 && (
                        <Button type="text" icon={<LeftOutlined />} onClick={() => router.back()} />
                    )}
                    <h1>{title}</h1>
                </Row>
                {children}
            </main>
        </Layout>
    );
};

export default PageLayout;
