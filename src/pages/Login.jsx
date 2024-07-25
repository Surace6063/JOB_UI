import React from 'react'

const Login = () => {
  return (
    <div className="min-h-[95vh] flex justify-center items-center my-6">
    <div className="max-w-xl w-full p-4">
      <h1 className="uppercase text-teal-600 text-3xl font-semibold text-center mb-6">
        Login
      </h1>
      <form className="space-y-3">
        <div className="space-y-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
          />
        </div>
       <div className="space-y-1">

       </div>

        <button
         
          className="btn bg-teal-600 hover:bg-teal-700 mt-3 w-full"
        >
          Login
        </button>
      </form>
      <div className="space-x-1 mt-4 text-sm font-semibold text-gray-600">
        <span>Already have an account?</span>
       
         Register
      
      </div>
    </div>
  </div>
  )
}

export default Login