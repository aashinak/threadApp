import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Auth({children, authentication = true}) {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    
        const authStatus = useSelector((state) => state.auth.status)
        // const authStatus = true
        useEffect(() => {
          if (authentication && authStatus !== authentication){
              navigate('/login')
          } else if (!authentication && authStatus !== authentication){
            navigate('/')
          }
          setLoading(false)
        },[authStatus,authentication,navigate])



   
  return (
    loading ? null : <>{children}</>
  )
}

export default Auth