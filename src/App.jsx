import MainLayout from './layout'
import AppRoutes from './routes'
import {CategoriesProvider} from './context/category.contex'
import {DrinksProvider} from './context/drinks.context'
import {CartProvider} from './context/CartProvider'
import { ModalProvider } from './context/ModalProvider'
import './index.css'

function App() {
  

  return (
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
  )
}

export default App
