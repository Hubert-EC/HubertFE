import React,{ useState } from 'react'
import './index.scss'
import { FaStar} from 'react-icons/fa'
import {MdTagFaces} from 'react-icons/md'

const Star = () => {
    const [rating,setRating] = useState(null)
    const [hover,setHover] = useState(null)

    return (
    <>
        <p>Đánh Giá 5 sao cho tụi mình nhé <MdTagFaces/></p>
        <div className='star'>
            {[...Array(5)].map((star,i) =>{
                const ratingValue = i + 1;

                return (
                    <label>
                        <input 
                            type='radio' 
                            name='star' 
                            value={ratingValue} 
                            onClick={() => setRating(ratingValue)}
                            
                        />
                        <FaStar 
                            className='starz' 
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} 
                            size={20} 
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
        </div>
    </>
    )
}

export default Star
