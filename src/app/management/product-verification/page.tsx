"use client"

import PageLayout from "@/app/page";
import {Button, Col, Form, Input, Row, Segmented} from "antd";
import {PRODUCT_VERIFICATION_TAB_CONSTANT} from "@/constants/product.constant";
import React, {useEffect, useState} from "react";
import VerificationPendingTable from "@/components/product-verfication/VerificationPendingTable";
import VerificationHistoryTable from "@/components/product-verfication/VerificationHistoryTable";
import {ProductFilterModel} from "@/models/product-filter.model";
import {SearchOutlined} from "@ant-design/icons";
import CustomSelect from "@/components/common/CustomSelect";
import CategoryService from "@/services/category.service";

const ProductVerificationPage = () => {
    const [segmentedTab, setSegmentedTab] = useState(PRODUCT_VERIFICATION_TAB_CONSTANT[0].value);
    const [filterForm] = Form.useForm();
    const [categoryOptions, setCategoryOptions] = useState<any[]>([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [filterData, setFilterData] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const savedSegmentedKey = urlParams.get("verification_segmented_tab");
        if (savedSegmentedKey) {
            setSegmentedTab(savedSegmentedKey);
        }
    }, []);

    useEffect(() => {
        const handlePopState = (event: any) => {
            if (event.state?.segmentedTab) {
                setSegmentedTab(event.state.segmentedTab);
            }
        };

        window.addEventListener("popstate", handlePopState);

        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, []);

    const handleSegmentedChange = (value: any) => {
        setSegmentedTab(value);
        window.history.pushState({ segmentedTab: value }, "", `?verification_segmented_tab=${value}`);
        setFilterData({})
        filterForm.resetFields();
    };

    const handleSearch = async () => {
        setFilterData(filterForm.getFieldsValue());
    };

    const handleReset = async () => {
        filterForm.resetFields();
        setFilterData(filterForm.getFieldsValue());
    };

    const fetchAllCategoryAndSubcategory = async () => {
        try {
            setLoading(true);
            const response = await CategoryService.findAllActiveCategories();
            if (response) {
                const catOptions = response.map((cat: any) => {
                    const subcatOptions = cat.children?.map((subcat: any) => ({
                        title: subcat.subcat_name,
                        value: subcat._id,
                        key: subcat._id,
                    }));
                    return {
                        title: cat.cat_name,
                        value: cat._id,
                        key: cat._id,
                        children: subcatOptions,
                    }
                })
                setCategoryOptions(catOptions);
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    useEffect(() => {
        fetchAllCategoryAndSubcategory().then(() => setLoading(false));
    }, []);

    const handleSelectedCategory = (values: any) => {
        setSelectedCategory(values);
    }

    return (
        <PageLayout title={"Product Verification"}>
            <Segmented options={PRODUCT_VERIFICATION_TAB_CONSTANT} onChange={handleSegmentedChange} value={segmentedTab}/>
            <Row className="flex justify-between items-center space-x-3 mt-4">
                <Col flex={"auto"}>
                    <Form form={filterForm} >
                        <Row className="flex space-x-3">
                            <Form.Item<ProductFilterModel> name="search" className={"w-1/3 m-0"}>
                                <Input prefix={<SearchOutlined/>} placeholder="Product Name / Model Number"
                                       size={"large"}/>
                            </Form.Item>
                            <Form.Item<ProductFilterModel> name="cat_ids" className={"w-1/6 m-0"}>
                                <CustomSelect placeholder="Category" options={categoryOptions} showSearch={true}
                                              optionsPlaceholder={"Search Category..."}
                                              onChange={handleSelectedCategory}
                                              values={selectedCategory}
                                              size={"large"}
                                              loading={loading}/>
                            </Form.Item>
                            <Button type="primary" onClick={handleSearch} size={"large"}>Search</Button>
                            <Button type="default" onClick={handleReset} size={"large"}>Reset</Button>
                        </Row>
                    </Form>
                </Col>
            </Row>
            {segmentedTab === "pending" && (<VerificationPendingTable filterData={filterData} />)}
            {segmentedTab === "history" && (<VerificationHistoryTable filterData={filterData}/>)}
        </PageLayout>
    )
}

export default ProductVerificationPage;