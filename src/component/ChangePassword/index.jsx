import React from 'react'
import './index.scss'

const ChangePass = () => {
    return (
        <div className='change-infor'>
            <p>Mật Khẩu Cũ</p>
            <input className='oldpassword' type='text'></input>
            <p>Mật Khẩu Mới</p>
            <input className='newpassword' type='password'></input>
            <p>Nhập Lại Mật Khẩu</p>
            <input className='repassword' type='passwordcd ec'></input>
            <div className='change-btn'>
                 <a href='#' className='update'>Thay Đổi Mật Khẩu</a>
            </div>
        </div>
    )
}

export default ChangePass
