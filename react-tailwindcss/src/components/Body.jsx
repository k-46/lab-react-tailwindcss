

function Body() {
  return (
    <div>
      <div className='flex flex-col my-10 ml-10'>
        <button className='bg-blue-600 py-2 text-white text-xl rounded-md w-40'>Button One</button>
      </div>

      <div className='bg-red-100 border-2 border-red-500 py-5 w-11/12 ml-10 px-3 text-red-500 rounded-md'>
        <p className="text-red-700" > <span className='font-bold'>Alert!</span> This is awesome!</p>
      </div>

      <div className='flex justify-center ml-10 mt-10'>
        <div className='flex gap-10 shadow-lg w-70 py-10 px-14 border-2 border-gray-200'>
          <img className='h-15' src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="" />
          <div>
            <h1 className='text-3xl font-semibold'>Kalvium Store</h1>
            <p className='text-gray-600 pt-2'>You have a new course!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body