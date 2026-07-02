import React from 'react'

function Login() {
  return (
    <div className='font-serif'>
      <h1 className='text-2xl font-bold justify-center mt-2 flex'>Login</h1>
      <div className='p-5 w-full h-100 justify-center items-center flex'>
        <form className='w-100  h-auto '>
          <div>
            <label className='form-label text-md'>*USERNAME</label><br />
            <input type="text" className='border-b-2 border-gray-300 text-md w-full h-10 text-black focus:outline-none' placeholder='...USERNAME...' />
          </div><br />
          <div>
            <label className='form-label text-md'>*PASSWORD</label><br />
            <input type="password" className='border-b-2 border-b-gray-300 text-md w-full h-10 text-black focus:outline-none' placeholder='...PASSWORD...' />
          </div><br />
          <button type='submit' className='w-full h-10 bg-black shadow-2xl shadow-black duration-500 text-white text-md mt-5 justify-center items-center flex hover:text-black hover:bg-gray-300'>LOGIN</button>
        </form>
      </div>
    </div>
  )
}

export default Login