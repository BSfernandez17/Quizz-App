import {Route,Routes} from 'react-router-dom'
import {CategoryPage,HomePage} from './pages/index'
import { NavBar } from './components/NavBar'
export const AppRouter = () => {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path='/'element={<HomePage/>}></Route>
        <Route path='category/:category' element={<CategoryPage/>}></Route>
    </Routes>
    </>
  )
}
