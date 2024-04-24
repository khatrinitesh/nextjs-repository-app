import React from 'react';

interface BannerProps{
    title:string;
    desc:string;
    bannerStyle:string;
}

const Banner:React.FC<BannerProps> = ({title,desc,bannerStyle}) => {
  return (
    <div className={`${bannerStyle} bannerContent bg-blue-500 text-white py-[50px]`}>
      <div className="container mx-auto">
        <h3>{title}</h3>
        <p>{desc}</p>
        </div>
    </div>
  )
}

export default Banner