import React from 'react'
import groupDashboard from '../assets/Group 3.png'

const ThirdSection = () => {
  return (
    <div>
      <div className='bg-slate-300 p-20'>
          <h1 className='font-bold text-center text-5xl'>Suiwise Connects Lenders And Borrowers</h1>
          <p className='underline decoration-black-500 text-center p-8 text-4xl'>For Lenders</p>
          <img src={groupDashboard} alt="group-dashboard" className='p-10 mx-auto  h-1/2 '/>
          <p className='text-3xl text-center'><span className='text-blue-500'>Sign Up</span> With Just An Email Address and Password</p>
      </div>
      <div className='bg-blue-600 p-20 text-white '>
          <h1 className='text-5xl font-bold text-center text-white'>Join Active Suiwise Accounts Across Africa </h1>
          <div className='p-12'>
           <h1 className='py-5 font-medium text-3xl '>Safer And Protected</h1>
           <p  className='text-2xl'>Suiwise is a highly secure system that uses a decentralized system to protect user data and for a more secured Loan Contracts</p>
            <h1 className='py-5 font-medium text-3xl '> Mostly Free And Upfront</h1>
            <p className='text-2xl'>It's free to open a Suiwise account and take Loans unless it involves currency conversion</p>
          </div>
          
         
      </div>
    </div>
  )
}

export default ThirdSection