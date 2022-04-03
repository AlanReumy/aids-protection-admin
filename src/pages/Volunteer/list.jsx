import { Table } from 'antd'
import { useEffect, useState } from 'react'
import { GetListApi } from '../../service/api/baseApi'

const columns = [
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id'
    },
    {
        title: '标题',
        dataIndex: 'title',
        key: 'title'
    },
    {
        title: '详情',
        dataIndex: 'desc',
        key: 'desc',
        render: (text) => {
            return text ? text.substring(0, 10) + '...' : text
        }
    },
    {
        title: '开始时间',
        dataIndex: 'startDate',
        key: 'startDate',
        render: (text) => {
            return text ? text.substring(0, 10) : text
        }
    },
    {
        title: '结束时间',
        dataIndex: 'endDate',
        key: 'endDate',
        render: (text) => {
            return text ? text.substring(0, 10) : text
        }
    }
]

export default function VolunteerList() {
    const [data, setData] = useState([])
    useEffect(() => {
        GetListApi('volunteer')().then((res) => {
            res.map((item, index) => {
                item.key = index
                return item
            })
            setData(() => res)
        })
    })
    return (
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}
