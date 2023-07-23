import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import SignIn from '../pages/User/Signin';
import SignUp from '../pages/User/Signup';
import { ProtectedRoute } from './ProtectedRoute';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/login' element={<SignIn />} />
            <Route path='/register' element={<SignUp />} />

            <Route exact path='/' element={<ProtectedRoute />}>
                <Route exact path='/' element={<Home />} />
            </Route>

            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;
