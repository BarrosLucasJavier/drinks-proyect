import MainLayout from './layout'
import AppRoutes from './routes'
import {CategoriesProvider} from './context/category.contex'
import {DrinksProvider} from './context/drinks.context'

function App() {
  

  return (
    <MainLayout>
      <CategoriesProvider>
        <DrinksProvider>
          <AppRoutes/>
        </DrinksProvider>
      </CategoriesProvider>
    </MainLayout>
  )
}

export default App
