import Thread from "../components/Thread"
import home from '../assets/icons/home.svg'

function HomePage() {
  return (
    <div className="w-full flex-col flex justify-center items-center">
        <div className="w-[560px]   ">
            <div className="text-white flex justify-between p-5 border-b-[0.5px] border-[rgba(166,144,144,0.25)]">
                <div className="flex gap-5 items-center">
                    <img src={home} alt="profilePic" className="w-8 bg-white rounded-full" />
                    <p className="text-[#4d4d4d] font-medium">Start a thread...</p>
                </div>
                <button className="bg-white text-black font-semibold px-4 rounded-2xl py-1">Post</button>
            </div>
            <Thread/>
            <Thread/>
            <Thread/>
            <Thread/>
            <Thread/>

        </div>

    </div>
  )
}

export default HomePage