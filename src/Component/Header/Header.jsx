const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="px-[17px] py-[14px] text-[rgba(19,19,19,0.8)] text-lg">Home</a>
            </li>
            <li>
              <a className="px-[17px] py-[14px] text-[rgba(19,19,19,0.8)] text-lg">Listed Books</a>
              </li>
            <li>
              <a className="px-[17px] py-[14px] text-[rgba(19,19,19,0.8)] text-lg">Pages to Read</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-[28px] font-bold workSans">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="px-[17px] py-[14px] text-[rgba(19,19,19,0.8)] text-lg">Home</a>
          </li>
          <li>
            <a className="px-[17px] py-[14px] text-[rgba(19,19,19,0.8)] text-lg">Listed Books</a>
          </li>
          <li>
            <a className="px-[17px] py-[14px] text-[rgba(19,19,19,0.8)] text-lg">Pages to Read</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn px-7 py-[18px] bg-[rgb(35,190,10)] workSans text-white text-lg font-semibold rounded-lg">Sign In</button>
        <button className="btn px-7 py-[18px] bg-[rgb(89,198,210)] workSans text-white text-lg font-semibold rounded-lg ml-4">Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
