import MainLayout from './layout'
import AppRoutes from './routes'
import {CategoriesProvider} from './context/category.contex'
import {DrinksProvider} from './context/drinks.context'
import {CartProvider} from './context/CartProvider'

function App() {
  

  return (
    <MainLayout>
      <DrinksProvider>
        <CategoriesProvider>
          <CartProvider>
            <AppRoutes/>
          </CartProvider>
        </CategoriesProvider>
      </DrinksProvider>
    </MainLayout>
  )
}

export default App
