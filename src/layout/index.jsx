import PropTypes from 'prop-types'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CartModal from '../components/CartModal';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header/>
            {children}
            <CartModal/>
            <Footer/>
        </div>
    );
}
MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
export default MainLayout;
