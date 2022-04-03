import React, { useEffect, useState } from 'react'
import { Input, Button, message, Upload, DatePicker } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import E from 'wangeditor'
import { CreateVolunteerApi } from '../../service/api/Volunteer'
import FormPage from './upload'
const { RangePicker } = DatePicker

const props = {
    name: 'file',
    action: 'https://twitzz.cn/api/upload',
    headers: {
        authorization: 'Bearer ' + localStorage.getItem('token')
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList)
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`)
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`)
        }
    }
}

export default function CreateVolunteer() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    useEffect(() => {
        // 初始化编辑器
        const editor = new E('#div1')
        editor.create()
        editor.config.onchange = (newhtml) => {
            setContent(() => newhtml)
        }
        return () => {
            editor.destroy()
        }
    }, [])

    const dateChange = (dates, dateStrings) => {
        setStartDate(dateStrings[0])
        setEndDate(dateStrings[1])
    }

    const createVolunteer = () => {
        if (!title || !content || !startDate || !endDate) {
            message.error('请填写完整')
            return
        }
        CreateVolunteerApi({ title, desc: content, startDate, endDate })
            .then((res) => {
                setTitle('')
                setContent('')
                setStartDate('')
                setEndDate('')
                message.success('创建成功')
            })
            .catch((err) => {
                message.error('创建失败')
            })
    }

    return (
        <div>
            <div>
                <FormPage />
            </div>
            <div style={{ display: 'flex' }}>
                <Button type="primary" onClick={createVolunteer}>
                    创建
                </Button>
                <RangePicker onChange={dateChange} />
                <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
                ,
            </div>
            <Input
                placeholder="请输入标题"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <div>
                <div
                    id="div1"
                    style={{ position: 'absolute', zIndex: '0' }}
                ></div>
            </div>
        </div>
    )
}
