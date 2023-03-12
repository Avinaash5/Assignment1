import {Route,Routes} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = (props: any ) => {
  const email = Cookies.get('email')
  if (email === undefined) {
    return window.location.href='/login'
  }
  return <Routes><Route {...props} /> </Routes>
}

export default ProtectedRoute