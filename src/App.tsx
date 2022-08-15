import './App.css'
import { Route, Routes } from 'react-router-dom';
import Index from './pages/index/index'
import Login from './pages/login/login'
import Page404 from './pages/404'

function App() {
  return (
    <Routes>
	  <Route path='/' element={<Index /> } />
    <Route path='/login' element={<Login /> } caseSensitive={false}/>
    <Route path='*' element={<Page404 /> } caseSensitive={false}/>
	</Routes>
  )
}

export default App
