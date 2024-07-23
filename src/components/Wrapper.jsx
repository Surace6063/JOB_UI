import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='max-w-6xl mx-auto px-4 lg:px-0'>
        {children}
    </div>
  )
}

export default Wrapper