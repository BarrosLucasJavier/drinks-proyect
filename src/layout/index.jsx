import PropTypes from 'prop-types'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
}
MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
export default MainLayout;
