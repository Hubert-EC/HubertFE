import React from 'react'
import './index.scss'

const User = () => {
    return (
        <div className='user-infor'>
            <p>Tên Khách Hàng,Công Ty</p>
            <input className='ucompany' type='text'></input>
            <p>Email</p>
            <input className='uemail' type='email'></input>
            <p>Số Điện Thoại</p>
            <input className='uphone' type='text'></input>
            <p>Ngày Sinh</p>
            <input className='ubdate' type='datetime-local'></input>
            <p>Chứng Minh Thư/Mã Số Thuế</p>
            <input className='uCMND' type='text'></input>
            <p>Địa chỉ khách hàng</p>
            <input className='uAdress' type='text'></input>
            <div className='inline'>
                <div className='utinh'>
                    <p>Tỉnh/Tành Phố</p><br/>
                    <input className='uTinh' type='combobox'></input>
                </div>
                <div className='uquan'>
                    <p>Quận/Huyện</p><br/>
                    <input className='uQuan' type='combobox'></input>
                </div>
                <div className='uphuong'>
                    <p>Phường/Xã</p><br/>
                    <input className='uPhuong' type='combobox'></input>
                </div>
            </div>
            <div className='user-btn'>
                <a href='#' className='update'>Cập Nhật Thông Tin</a>
            </div>
        </div>
    )
}

export default User
