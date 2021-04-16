import React from 'react'
import './index.scss'

const Register = () => {
    return (
<div className='content'>        
            <div className='left'>
                <img src='./image/blue.jpg' alt='back'></img> 
                <button className='btn-home'>Trang Chủ</button><br />
                <h1>Welcome to my service!</h1><br />
                <h2>Hãy đăng ký và sử dụng dịch vụ của chúng tôi</h2>
            </div>
            <div className='right'>
                <div className='right-top'>
                    <h1>Đăng Ký</h1>
                    <h5>Bạn chưa có tài khoản?</h5>
                    <a href='/login'>Đăng nhập ngay</a>
                </div>
                <div className='right-body'>
                    <input className='fname' type='text' placeholder='Tên'/>
                    <input className='lname' type='text' placeholder='Họ'/><br />
                    <input className='user' type='text' placeholder='Tài Khoản'/><br />
                    <input className='email' type='email' placeholder='Email'/><br />
                    <button className='so'>+84</button>
                    <input className='phone' type='number' placeholder='Số Điện Thoại'/><br />
                    <input className='pass' type='password' placeholder='Mật Khẩu'/><br />
                    <input className='repass' type='password' placeholder='Xác Thực Mật Khẩu'/><br />
                    <button className='register'>Đăng Ký</button>
                </div>
                <div className='right-bottom'>
                    <h4>Đăng nhập với :</h4>
                    <button className='facebook'>f</button>
                    <button className='google'>G</button> 
                </div>
            </div>
        </div>
    )
}

export default Register
