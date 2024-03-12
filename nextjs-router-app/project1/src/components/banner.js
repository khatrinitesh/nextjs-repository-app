'use client'


const Banner = ({bannerStyle,title,desc}) => {
  
  return (
    <div className={`${bannerStyle} bannerContent`}>
      <h3 className='text-[32px] font-bold'>{title}</h3>
      <p>{desc}</p>
      
    </div>
  )
}

export default Banner
