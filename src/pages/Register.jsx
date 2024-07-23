import React from 'react'

const Register = () => {
    return (
        <div className='min-h-[95vh] flex justify-center items-center my-6'>
            <div className='border rounded-xl shadow max-w-xl w-full px-4 py-10'>
                <h1 className='uppercase text-teal-600 text-3xl font-semibold text-center mb-6'>Register</h1>
                <form className='space-y-2'>
                    <div className='space-y-1'>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />

                    </div>
                    <div className='space-y-1'>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" />
                    </div>
                    <div className='space-y-1'>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className='space-y-1'>
                        <label htmlFor="conformPassword">Conform Password</label>
                        <input type="password" id="conformPassword" />
                    </div>

                    <div className='mt-4'>
                        <button className='btn bg-teal-600 hover:bg-teal-700 mt-3'>
                            Register

                        </button>
                    </div>
                </form>
                <div className='space-x-1 mt-4 text-sm font-semibold text-gray-600'>
                    <span>Already have an account?</span>
                    <span>Login</span>
                </div>
            </div>
        </div>
    )
}

export default Register