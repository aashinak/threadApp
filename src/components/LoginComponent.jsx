import image from "./asset20.png"

function LoginComponent() {
  return (
    <div className="w-full  min-h-screen bg-black  flex flex-col justify-center items-center ">
        <img src={image} alt="" className="w-full  absolute top-0 z-0" />
        <div className="w-3/4 md:w-1/4  p-5   z-10">
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" name="" id="" 
                className="focus:border focus:border-gray-500 bg-[#1e1e1e] text-white font-medium focus:outline-none 
                w-full h-14 rounded-lg px-3 mb-3 " placeholder="Email" />

                <input type="password" name="" id="" 
                className="focus:border focus:border-gray-500 bg-[#1e1e1e] text-white font-medium focus:outline-none 
                w-full h-14 rounded-lg px-3 mb-3" placeholder="Password" />
                <div className="w-full h-14 flex justify-center items-center">
                  <button type="submit" className="mt-1 active:w-11/12 active:h-12 w-full h-14 rounded-lg transition-all  bg-white border-black font-medium text-[#101010] mb-3">Login</button>
                </div>
            </form>
            <p className="text-center text-[#777777]">Dont have a account ? Signup</p>
            

        </div>
        <ul className="text-[#777777]  text-sm flex absolute bottom-3 justify-center  gap-6">
              <li>Threads terms</li>
              <li>Policy</li>
              <li>Threads terms</li>
              <li>Threads terms</li>
            </ul>
    </div>
  )
}

export default LoginComponent