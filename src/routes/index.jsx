import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import SignIn from '../pages/User/Signin';
import SignUp from '../pages/User/Signup';
import { useAuth } from '../hooks/useAuth'

const AppRoutes = () => {
    const { currentUser } = useAuth();
    return (
        <Routes>
            <Route exact path='/' element={currentUser ? <Home /> : <Navigate to={"/login"} />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/login' element={<SignIn />} />
            <Route path='/register' element={<SignUp />} />
        </Routes>
    );
}

export default AppRoutes;
