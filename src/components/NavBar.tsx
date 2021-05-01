import React from 'react';
import { Menu, Layout } from 'antd';
import { HomeOutlined, FileTextOutlined, ContactsOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../App.css';

export default function NavBar() {
    const { Header } = Layout;

    return (
        <div>
            <Header style={{ zIndex: 1, width: '100%', paddingLeft: '25px' }}>
                <div className='logo'>
                    <h2 style={{color: 'white'}}>BERTong</h2>
                </div>
                <Menu selectedKeys={['generate']} mode='horizontal' theme='dark'>
                    <Menu.Item key='home' icon={<HomeOutlined />}>
                        Home
                    </Menu.Item>
                    <Menu.Item key='generate' icon={<FileTextOutlined />}>
                        Generate Text
                    </Menu.Item>
                    <Menu.Item key='contact' icon={<ContactsOutlined />}>
                        Contact Us
                    </Menu.Item>
                </Menu>
            </Header>
        </div>
    )
}
