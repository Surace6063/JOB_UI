import React, {useState} from 'react'


const JobCard = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = 'We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript, with experience working with modern JavaScript frameworks such as React or Angular.'

  if (!showFullDescription) {
    description = description.substring(0, 90) + '...';
  }
  return (
    <div className='bg-white rounded-xl border p-3  relative'>
    <div className='p-4'>
      <div className='mb-6'>
        <div className='text-gray-600 my-2'>Full-Time</div>
        <h3 className='text-xl font-bold truncate'>Senior React Developer</h3>
      </div>

      <div className='mb-5'>{description}</div>

      <button
        onClick={() => setShowFullDescription((prevState) => !prevState)}
        className='text-indigo-500 mb-5 hover:text-indigo-600'
      >
        {showFullDescription ? 'Less' : 'More'}
      </button>

      <h3 className='text-indigo-500 mb-2'>10k / Year</h3>

      <div className='border border-gray-100 mb-5'></div>

      <div className='flex flex-col lg:flex-row justify-between mb-4'>
        <div className='text-orange-700 mb-3'>
          {/* <FaMapMarker className='inline text-lg mb-1 mr-1' /> */}
          Boston, MA
        </div>
        <button
          className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm'
        >
          Read More
        </button>
      </div>
    </div>
  </div>
  )
}

export default JobCard