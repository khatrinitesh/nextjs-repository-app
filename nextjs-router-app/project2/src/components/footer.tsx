import React from 'react'

const Footer:React.FC = () => {
    const currentdate = new Date();
    const currentyear = currentdate.getFullYear();
  return (
    <footer className='bg-black text-white p-[10px]'>
      <div className="container mx-auto">
        <p>&copy; Copyright {currentyear}</p>
        </div>
    </footer>
  )
}

export default Footer