function Navbar() {
  return (
    <div>
      <nav className='flex justify-between px-10 py-5 bg-red-400 text-white'>
        <div className='flex gap-10 items-center'>
          <h1 className='text-3xl font-bold'>Kalvium</h1>
          <ul className='flex gap-5 text-[#dadada]'>
            <li>About us</li>
            <li>Contacts</li>
            <li>Courses</li>
          </ul>
        </div>
        <button className='border-2 border-white px-5 rounded-md'>Login</button>
      </nav>
    </div>
  )
}

export default Navbar