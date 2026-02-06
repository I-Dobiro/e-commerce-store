import { Routes, Route } from 'react-router'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ProfilePage from './pages/ProfilePage'
import CreateProductPage from './pages/CreateProductPage'
import EditProductPage from './pages/EditProductPage'

const App = () => {
  return (
    <div className='min-h-screen bg-base-100'>
      <NavBar />
      <main className='max-width-5xl mx-auto py-8 px-4'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/create' element={<CreateProductPage />} />
          <Route path='/edit/:id' element={<EditProductPage />} />
        </Routes>
      </main>
    </div>
  )
}
export default App
