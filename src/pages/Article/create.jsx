import React, { useEffect, useState } from 'react'
import { Input, Button, message, Radio } from 'antd'
import E from 'wangeditor'
import { CreateApi } from '../../service/api/baseApi'

export default function CreateVolunteer() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [type, setType] = useState('')

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
    const createArticle = () => {
        if (!title || !content || !type) {
            message.error('请填写完整')
            return
        }
        CreateApi('article')({ title, content, type })
            .then((res) => {
                setTitle('')
                setContent('')
                setType('')
                message.success('创建成功')
            })
            .catch((err) => {
                message.error('创建失败')
            })
    }

    const onChange = (e) => {
        setType(e.target.value)
    }

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <Button type="primary" onClick={createArticle}>
                    创建
                </Button>
                <div style={{ marginLeft: '20px' }}>
                    <Radio.Group onChange={onChange} value={type}>
                        <Radio value={1}>相关科普</Radio>
                        <Radio value={2}>预防治疗</Radio>
                    </Radio.Group>
                </div>
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
