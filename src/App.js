import React,  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, useMatch } from 'react-router-dom'
import { Container, Box } from '@mui/material'
import Typography from '@mui/material/Typography'

// internal import
import Menu from './components/Menu'
import Home from './pages/Home'
import AddVisit from './pages/AddVisit'
import LoginForm from './pages/LoginForm'
import VisitView from './pages/VisitView'
import Footer from './components/Footer'
import { initializeVisits } from './reducers/visitReducer'
import { loginActionWindow } from './reducers/loginReducer'
import EditVisit from './pages/EditVisit'
import Search from './pages/Search'


const App = () => {

  // logged in user
  const user = useSelector((state) => state.login)

  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(initializeVisits())
  }, [dispatch])
  const visits = useSelector(state => state.visits)

  // fetch user from local storage
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    if (loggedUserJSON) {
        const user = JSON.parse(loggedUserJSON)
        dispatch(loginActionWindow(user))
      }
    }, [dispatch])
  
  // individual blog page
  const visitMatch = useMatch('/visits/:id')
  const viewVisit = visitMatch
      ? visits.find((visit) => visit.id === visitMatch.params.id)
      : null

  // individual visit edit page
  const visitEditMatch = useMatch('/visits/:id/edit')
  const viewEditVisit = visitEditMatch
      ? visits.find((visit) => visit.id === visitEditMatch.params.id)
      : null


  return (
    <Box m={2} pt={3}>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<AddVisit />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/visits/:id" element={<VisitView visit={viewVisit}/>} />
        <Route path="/visits/:id/edit" element={<EditVisit visit={viewEditVisit}/>} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App;
