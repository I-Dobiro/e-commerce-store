import { Routes, Route, Navigate } from 'react-router'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ProfilePage from './pages/ProfilePage'
import CreateProductPage from './pages/CreateProductPage'
import EditProductPage from './pages/EditProductPage'
import useAuthReq from './hooks/useAuthReq'
import useUserSync from './hooks/useUserSync'


const App = () => {
  const { isClerkLoaded, isSignedIn } = useAuthReq();
  useUserSync();

  if (!isClerkLoaded) return null;

  return (
    <div className='min-h-screen bg-base-100'>
      <NavBar />
      <main className='max-width-5xl mx-auto py-8 px-4'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/profile' element={isSignedIn ? <ProfilePage /> : <Navigate to={'/'} />} />
          <Route path='/create' element={isSignedIn ? <CreateProductPage /> : <Navigate to={'/'} />} />
          <Route path='/edit/:id' element={<EditProductPage />} />
        </Routes>
      </main>
    </div>
  )
}
export default App
