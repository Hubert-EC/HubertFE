import React from 'react'
import './index.scss'

const Authenticaton = () => {
    return (
        <div className='authentication-z'>
            <div className='authentication'>
                <h1>Vui Lòng Xác Nhận Địa Chỉ Email Của Bạn</h1>
                <p>Trước khi bạn có thể tham gia HuBert,chúng tôi cần xác nhận địa chỉ Email của bạn</p>
                <p>Một email chứa mã xác thực đã được gửi tới :</p>
                <p>Vui lòng nhập mã xác nhận tại đây</p>
                <input type='text' placeholder='Mã Xác Thực'></input><br />
                <button>Gửi Lại Mã</button>
                <button>Xác Thực</button>
                <img src='./image/mail.png' alt='back'></img>
            </div>
        </div>
    )
}

export default Authenticaton

