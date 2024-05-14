import { useRouteError } from 'react-router-dom'

function ErrorPage() {

    const error = useRouteError()
    console.log(error);
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <h1 className='font-bold text-7xl text-center'>{error.statusText}{error.data}</h1>    
    </div>
  )
}

export default ErrorPage