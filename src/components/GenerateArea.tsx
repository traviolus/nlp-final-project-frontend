import React, { useState } from 'react';
import { Input, Select } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';

export default function GenerateArea() {
    const [text, setText] = useState<string>('');
    const [startText, setStartText] = useState<string>('');
    const [page, setPage] = useState<string>('เลือกสไตล์');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleText = (e: string) => {
        setStartText(e);
    }

    const handlePage = (e: string) => {
        setPage(e);
    }

    const generateText = async () => {
        if (page === 'เลือกสไตล์' || startText === '') {
            alert('ERROR');
            return;
        }
        setIsLoading(true);
        const payload = {
            start_text: startText,
            page: page
        };
        await axios.get('http://35.198.207.198:8000/api/sentence/', {
            params: payload
        }).then((response) => {
            setText(response.data.message);
        }).catch((error) => {
            setText('คำเริ่มต้นไม่ถูกต้อง กรุณาลองใหม่');
        });
        setIsLoading(false);
    }

    const { Search } = Input;
    const { Option } = Select;

    return (
        <div style={{'marginTop': '30px'}}>
            <h1>
                เลือกสไตล์ที่ต้องการและกรอกข้อความเริ่มต้น
            </h1>
            <Input.Group compact>
                <Select defaultValue="เลือกสไตล์" style={{ width: '10%', }} size='large' value={page} onChange={(e) => handlePage(e.toString())}>
                    <Option value="dinosaturday">ไดโนเศร้า</Option>
                    <Option value="t047">t_047</Option>
                    <Option value="quotes">คำคม</Option>
                    <Option value="mix">แบบผสม!</Option>
                </Select>
                <Search 
                    loading={isLoading} 
                    placeholder='ป้อนข้อความเริ่มต้นที่นี่' 
                    onChange={(e) => handleText(e.target.value)} 
                    onSearch={generateText} 
                    enterButton="Generate" 
                    size="large" 
                    style={{ width: '50%' }} 
                    value={startText} 
                />
            </Input.Group>
            <h2 className='result' style={{'margin': '30px auto 0px auto', width: '80%'}}>
                {text}
            </h2>
        </div>
    )
}