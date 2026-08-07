

function Nav(){
  return(
    <>
    <nav className='flex justify-center p-2 gap-10   '>
      <ul className='flex justify-center items-center gap-3 list-none'>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Blog</li>
      </ul>
      <button className="border border-amber-50 rounded-lg p-2">Login</button>
    </nav>
    </>
  )
}

export default Nav;