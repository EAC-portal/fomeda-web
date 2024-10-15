import {Button, Table, Tag} from "antd";
import Link from "next/link";
import {DateTimeUtils} from "@/utils/date-time.utils";
import {REPORT_PENDING_TABLE_HEADER, ReportConstant} from "@/constants/report.constant";
import React, {useEffect, useState} from "react";
import ReportService from "@/services/report.service";
import ReportDetailsModal from "@/components/report/ReportDetailsModal";

const ReportPendingTable = ({filterData}: any) => {

    const [reportList, setReportList] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    const [recordId, setRecordId] = useState<string>();
    const [recordProductName, setRecordProductName] = useState<string>();
    
    const fetchReportList = async () => {
        try {
            setLoading(true)
            filterData.adm_status_list = [ReportConstant.PENDING, ReportConstant.NOTIFIED];
            const response = await ReportService.getAdminReportListByFilter(filterData);
            if (response) {
                setReportList(response);
            }
        } catch (error) {
            console.error(error);
            throw error;
        } finally {
            setLoading(false);
        }
    }
    
    useEffect(() => {
        fetchReportList().then();
    }, [filterData]);

    const handleViewDetails = (record: any) => {
        setRecordId(record._id);
        setRecordProductName(record.product_name);
        setIsDetailsOpen(true); // Open the modal after setting the data
    };

    const handleUpdate = () => {
        fetchReportList().then();
    };

    const REPORT_TABLE_HEADER = REPORT_PENDING_TABLE_HEADER.map((column) => {
        switch (column.key) {
            case 'product_name':
                return {
                    ...column,
                    render: (text: any, record: any) => (
                        <Link href={`/product/details?id=${record.pro_id}`}>{record.product_name}</Link>
                    )
                }
            case 'created_on':
                return {
                    ...column,
                    render: (text: any, record: any) => DateTimeUtils.formatDate(record[column.key], DateTimeUtils.CATEGORY_DATE_FORMAT),
                    sorter: (a: any, b: any) => new Date(a[column.key]).getTime() - new Date(b[column.key]).getTime(),
                };
            case 'sup_status':
                return {
                    ...column,
                    render: (text: any, record: any) => renderStatus(record.sup_status)
                };
            case 'adm_status':
                return {
                    ...column,
                    render: (text: any, record: any) => renderStatus(record.adm_status)
                };
            case 'actions':
                return {
                    ...column,
                    render: (text: any, record: any) =>
                        <Button onClick={() => handleViewDetails(record)}>
                            View Details
                        </Button>
                };
            default:
                return {
                    ...column,
                    sorter: (a: any, b: any) => (a[column.key] || "").toString().localeCompare((b[column.key] || "").toString()),
                };
        }
    })

    const renderStatus = (status: string) => {
        switch (status) {
            case ReportConstant.NOTIFIED: {
                return <Tag color={'blue'} bordered={false} className="px-3 py-0.5 rounded-xl">Notified Owner</Tag>
            }
            case ReportConstant.PENDING: {
                return <Tag color={'yellow'} bordered={false} className="px-3 py-0.5 rounded-xl">Pending</Tag>
            }
            case ReportConstant.CLOSED: {
                return <Tag color={'red'} bordered={false} className="px-3 py-0.5 rounded-xl">Closed</Tag>
            }
            default: {
                return <div>-</div>
            }
        }
    };

    return (
        <>
            <Table className="mt-4"
                   columns={REPORT_TABLE_HEADER}
                   showSorterTooltip={false}
                   dataSource={reportList}
                   rowKey="_id"
                   loading={loading}
                   pagination={{
                       defaultPageSize: 10,
                       showSizeChanger: true,
                       pageSizeOptions: [10, 20, 50, 100],
                   }}/>
            {isDetailsOpen && (
                <ReportDetailsModal onOpen={isDetailsOpen}
                                    onClose={() => setIsDetailsOpen(false)}
                                    reportId={recordId}
                                    productName={recordProductName}
                                    onUpdate={handleUpdate}
                />
            )}
        </>
    )
}

export default ReportPendingTable;