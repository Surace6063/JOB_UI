import React from 'react'
import Wrapper from '../components/Wrapper'
import Header from '../components/Header'

const Home = () => {
    return (
        <Wrapper>
            <Header />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg my-10'>
                <div className='border rounded-lg p-8 shadow'>
                    <h2 className='text-2xl font-bold'>For Developers</h2>
                    <p className='mt-2 mb-4'>
                        Browse our React jobs and start your career today
                    </p>
                    <button
                        className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'
                    >
                        Browse Jobs
                    </button>
                </div>
                <div className='bg-indigo-100 border rounded-lg p-8 shadow'>
                    <h2 className='text-2xl font-bold'>For Employers</h2>
                    <p className='mt-2 mb-4'>
                        List your job to find the perfect developer for the role
                    </p>
                    <button
                        className='inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600'
                    >
                        Add Job
                    </button>
                </div>
            </div>
        </Wrapper>
    )
}

export default Home