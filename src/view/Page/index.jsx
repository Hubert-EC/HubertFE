import React from 'react'
import '../../../node_modules/antd/dist/antd.css';
import { Menu} from 'antd';
import { Row, Col } from 'antd';
import {UserOutlined,KeyOutlined,HomeOutlined,ShoppingCartOutlined,HeartOutlined,FileOutlined } from '@ant-design/icons';
import './index.scss'
import ChangePass from '../../components/Functions/ChangePassword';
import User from '../../components/Functions/User';



const Page = () => {   
    return (
        <div className='page'>
            <Row className='page-row1'>
                <Col span={5} className='page-col-left'>
                    <Menu   className='page-menu' 
                            style={{ width: 256 }}
                            mode="inline"
                            theme="dark" 
                    >
                        <img src='./image/logo.png' alt='logo'></img>   
                        <Menu.Item key="1" icon={<HomeOutlined />} >Trang Chủ</Menu.Item>
                        <Menu.Item key="2" icon={<ShoppingCartOutlined />}>Tạo đơn hàng</Menu.Item>
                        <Menu.Item key="3" icon={<FileOutlined />}>Quản lý đơn hàng</Menu.Item>
                        <Menu.Item key="4" icon={<HeartOutlined />}>Hãng ưa thích</Menu.Item>
                        <Menu.Item key="5" icon={<UserOutlined />}>Thông Tin Tài Khoản</Menu.Item>
                        <Menu.Item key="6" icon={<KeyOutlined />}>Đổi mật khẩu tài khoản</Menu.Item>
                    </Menu>
                </Col>
                <Col span={19} className='page-col-right'>
                    <div className='page-item'>
                        Giao Hàng Nhanh Thanh Toán Nhanh
                    </div>
                    <Row className="page-row2">
                        <Col span={18} className='page-infor-left'>
                        <p>Thay Đổi Mật Khẩu</p>
                        <div className='page-infor'>
                            <User></User>
                            {/* <ChangePass></ChangePass> */}
                        </div>
                        </Col>
                        <Col span={6} className='page-image-right'>
                            <div className='page-image1'>abc</div>
                            <div className='page-image2'>nbc</div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}


export default Page
