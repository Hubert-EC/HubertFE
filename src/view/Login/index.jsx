import React from 'react'
import './index.scss'

const Login = () => {
    return (
        <div className='login'>    
        <img src='./image/backlong.png' alt='back'></img>    
            <div className='login-left'>
                <button className='btn-home'>Trang Chủ</button><br />
                <h1>Welcome Back!</h1><br />
                <h2>Hãy đăng nhập và sử dụng dịch vụ của chúng tôi</h2>
            </div>
            <div className='login-right'>
                <div className='login-right-top'>
                    <h1>Đăng Nhập</h1>
                    <h5>Bạn chưa có tài khoản?</h5>
                    <a href='/register'>Tạo mới Ngay</a>
                </div>
                <div className='login-right-body'>
                    <input className='user' type='text' placeholder='Nhập số điện thoại/Email'/><br />
                    <input className='pass' type='password' placeholder='Nhập mật khẩu'/><br />
                    <button className='display'><img src='./image/eye.png'></img></button><br/>
                    <a href='/changepassword'>Quên mật khẩu?</a><br />
                    <button className='login'>Đăng Nhập</button>
                </div>
                <div className='login-right-bottom'>
                    <h4>Đăng nhập với :</h4>
                    <button className='facebook'>f</button>
                    <button className='google'>G</button> 
                </div>
            </div>
        </div>
    )
}

export default Login
