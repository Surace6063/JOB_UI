import React from 'react'

const Jobs = () => {
  return (
    <div className='container my-10'>
    <div className='border-b p-4 mb-4 flex justify-between'>
      <div>
        <label htmlFor="type">Filter JobType</label>
        <select className=' w-[200px]'>
          <option value="">All Types</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Contract">Contract</option>
          {/* Add more job types as needed */}
        </select>
      </div>
      <div>
        <label htmlFor="salary">Filter By Price</label>
        <select
          id='salary'
          name='salary'
           className=' w-[200px]'
        >
          <option value='Under $50K'>Under $50K</option>
          <option value='$50K - 60K'>$50K - $60K</option>
          <option value='$60K - 70K'>$60K - $70K</option>
          <option value='$70K - 80K'>$70K - $80K</option>
          <option value='$80K - 90K'>$80K - $90K</option>
          <option value='$90K - 100K'>$90K - $100K</option>
          <option value='$100K - 125K'>$100K - $125K</option>
          <option value='$125K - 150K'>$125K - $150K</option>
          <option value='$150K - 175K'>$150K - $175K</option>
          <option value='$175K - 200K'>$175K - $200K</option>
          <option value='Over $200K'>Over $200K</option>
        </select>
      </div>
    </div>
  </div>
  )
}

export default Jobs