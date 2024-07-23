import React from 'react'


const Register = () => {
    return (
        <div className="min-h-[95vh] flex justify-center items-center my-6">
        <div className="max-w-xl w-full p-4">
          <h1 className="uppercase text-teal-600 text-3xl font-semibold text-center mb-6">
            Register
          </h1>
          <form className="space-y-3">
            <div className="flex gap-6">
              <div className="flex-1 space-y-1">
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  id="firstname"
                />
              </div>
              <div className="flex-1 space-y-1">
                <label htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  id="lastname"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
              />
            </div>
            <div>
              <label htmlFor="country">Country</label>
              <select id="country">
                <option value="">select a country</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="conformPassword">Conform Password</label>
              <input
                type="password"
                id="conformPassword"
              />
            </div>
           <div className="space-y-1">
           <div className="flex gap-2">
              <div>
                <input type="checkbox" value="true" id="terms" />
              </div>
              <span className="text-sm">
                Yes, I understand and agree to the Terms of Service ,
                including the User Agreement and Privacy Policy .
              </span>
            </div>
           </div>
  
            <button
             
              className="btn bg-teal-600 hover:bg-teal-700 mt-3"
            >
              Register
            </button>
          </form>
          <div className="space-x-1 mt-4 text-sm font-semibold text-gray-600">
            <span>Already have an account?</span>
           
              Login
          
          </div>
        </div>
      </div>
    )
}

export default Register