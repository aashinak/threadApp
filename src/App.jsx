import { Outlet } from "react-router-dom"

function App() {
  return (
    <div>
      <h1 className="text-red-900 font-bold">HEllo</h1>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default App