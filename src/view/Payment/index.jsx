import React from 'react'
import './index.scss'

const Payment = () => {
    return (
        <div className='payment'>
            <div className='payment-top'>
                <h2>Chọn Hình Thức Thanh Toán Bạn Muốn *</h2>
                <form className='top'>
                    <br/>
                    <input type="radio" id="momo" name="pay"/>
                    <img src='./image/momo.png' alt='momo'></img>
                    <input type="radio" id="paypal" name="pay"/>
                    <img src='./image/paypal.jpg' alt='momo'></img>
                </form>
            </div>
            <hr></hr>
            <div className='payment-bot'>
                <h2>Chọn Đơn Vị Vận Chuyển Bạn Muốn *</h2><br/>
                <form className='bot-top'>
                    <br />
                    <input type="radio" id="giaohang" name="logic"/>
                    <img src='./image/giaohang.png' alt='giaohang'></img>
                    <input type="radio" id="lalamove" name="logic"/>
                    <img src='./image/lalamove.png' alt='lalamove'></img>
                    <input type="radio" id="kerry" name="logic"/>
                    <img src='./image/kerry.png' alt='kerry'></img>
                    <div className='bot-bot'>
                        <input type="radio" id="viettel" name="logic"/>
                        <img src='./image/viettel.png' alt='viettel'></img>
                        <input type="radio" id="grab" name="logic"/>
                        <img src='./image/garb.png' alt='grab'></img>
                    </div>
                </form>
            </div>
            <button className='payment-btn'>Xác Nhận</button>
        </div>
    )
}

export default Payment
