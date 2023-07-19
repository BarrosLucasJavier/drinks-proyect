import PropTypes from 'prop-types'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CartModal from '../components/CartModal';

const MainLayout = ({ children }) => {
    return (
        <>  
            <Header/>
            {children}
            <CartModal/>
            <Footer/>
        </>
    );
}
MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
export default MainLayout;
