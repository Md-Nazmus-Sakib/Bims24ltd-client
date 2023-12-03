import React from 'react';
// import bannerImg from "../../../assets/Image/Home-1.jpg"
import bannerImg from "../../../assets/Image/Home (2).jpg"

const Banner = () => {
    return (
        <div>
            <img className='w-full h-[800px] bg-cover object-right-top' src={bannerImg} alt="" />
        </div>
    );
};

export default Banner;