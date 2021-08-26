import {useContext} from 'react'
import SignUp from '../../components/sign-up/SignUp'
import SignIn from '../../components/sign-in/SignIn'
import  AddProduct from '../../components/add-product/AddProduct'
import CurrentUserContext from '../../context/user-context/UserContext'

const Account = () => {
    const isLoggedIn = localStorage.getItem('uid')
    const userContext = useContext(CurrentUserContext)

    console.log("userContext", !!userContext)
    
    return(
    <div>
    {isLoggedIn ?
    
        (<div><AddProduct/></div>) : (<div><SignIn/><SignUp/></div>)
    }
    </div>
)}

export default Account