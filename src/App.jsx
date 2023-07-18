import MainLayout from './layout'
import AppRoutes from './routes'
import {CategoriesProvider} from './context/category.contex'
import {DrinksProvider} from './context/drinks.context'
import {CartProvider} from './context/CartProvider'
import { ModalProvider } from './context/ModalProvider'
import { AuthProvider } from './context/AuthProvider'
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css'

function App() {
  

  return (
    <Router>
      <AuthProvider>
        <ModalProvider>
          <CartProvider>
            <MainLayout>
              <DrinksProvider>
                <CategoriesProvider>
                    <AppRoutes/>
                </CategoriesProvider>
              </DrinksProvider>
            </MainLayout>
          </CartProvider>
        </ModalProvider>
      </AuthProvider>
    </Router>
  )
}

export default App
