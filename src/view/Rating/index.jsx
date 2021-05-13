import React from 'react'
import './index.scss'
import Star from '../../components/Functions/Star'

const Rating = () => {
    return (
        <div className='rating'>
            <div className='rate'>
                <img alt='ev' src='./image/ev.jpg'></img>
                <Star></Star>
                <p>Nhật Xét Của Bạn : </p>
                <textarea cols="130" rows="10" placeholder="Hãy Nhận Xét Đi"></textarea>
                <button className='rating-btn'>Gửi Đánh Giá</button>
            </div>
        </div>
    )
}

export default Rating
