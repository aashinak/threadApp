import threadImage from "../assets/icons/threadImage.jpg"
import threadVideo from '../assets/icons/threadVideo.mp4'


function Thread() {
  return (
    <div className="text-white w-full border-b-[0.5px] border-[rgba(166,144,144,0.25)] py-3">
       <p>hey</p>
       {/* <img src={threadImage} className="max-h-96" alt="" /> */}
       <video src={threadVideo} className="max-h-96" loop autoPlay>
        </video>
    </div>
  )
}

export default Thread