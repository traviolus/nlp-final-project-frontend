import React, { useState } from 'react';
import { Input, Select } from 'antd';
import 'antd/dist/antd.css';

export default function GenerateArea() {
    const [text, setText] = useState<string>('');

    const { Search } = Input;
    const { Option } = Select;

    return (
        <div style={{'marginTop': '30px'}}>
            <h1>
                เลือกสไตล์ที่ต้องการและกรอกข้อความเริ่มต้น
            </h1>
            <Input.Group compact>
            <Select defaultValue="เลือกสไตล์" style={{ width: '10%', }} size='large'>
                <Option value="dinosaturday">ไดโนเศร้า</Option>
                <Option value="t047">t_047</Option>
                <Option value="quotes">คำคม</Option>
                <Option value="mix">แบบผสม!</Option>
            </Select>
            <Search placeholder='ป้อนข้อความเริ่มต้นที่นี่' enterButton="Search" size="large" style={{ width: '50%' }} />
            </Input.Group>
            <h2 className='result' style={{'marginTop': '30px'}}>
                {text}
            </h2>
        </div>
    )
}