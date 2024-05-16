import { useSelector } from "react-redux"
import { Link, Outlet } from "react-router-dom"
import home from "./assets/icons/home.svg"
import search from "./assets/icons/search.svg"
import addpost from "./assets/icons/addpost.svg"
import profile from "./assets/icons/profile.svg"



function App() {

  const authStatus = useSelector((state)=> state.auth.status)

  return (
    <div className="w-full min-h-screen bg-[#101010] overflow-y-hidden">
      {authStatus?(
        <div className="w-full bg-[#101010] h-[74px] flex justify-center items-center">
          <nav className="w-1/3  h-full">

            <ul className="flex justify-center px-14 items-center h-full">
              <Link to="/" className="h-full">
                <li className="w-[140px] rounded-md h-full flex items-center justify-center  hover:bg-[#1e1e1e]">
                  <img className="w-7 h-7  cursor-pointer" src={home} alt="" />
                </li>
              </Link>

              <Link to="/search" className="h-full">
                <li className="w-[140px] items-center rounded-md h-full flex  justify-center  hover:bg-[#1e1e1e]">
                  <img className="w-7 h-7 cursor-pointer" src={search} alt="" />
                </li>
              </Link>

              <Link to="" className="h-full">
                <li className="w-[140px] items-center rounded-md h-full flex  justify-center  hover:bg-[#1e1e1e]">
                  <img className="w-7 h-7 cursor-pointer" src={addpost} alt="" />
                </li>
              </Link>

              <Link to="" className="h-full">
                <li className="w-[140px] items-center rounded-md h-full flex  justify-center  hover:bg-[#1e1e1e]">
                  <img className="w-7 h-7 cursor-pointer" src={profile} alt="" />
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      ) : null}
      <Outlet/>
    </div>
  
  )
}

export default App