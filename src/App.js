import React,  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, useMatch } from 'react-router-dom'
import { Container, Box } from '@mui/material'
import Typography from '@mui/material/Typography'

// internal import
import Menu from './components/Menu'
import Home from './pages/Home'
import AddVisitForm from './pages/AddVisitForm'
import LoginForm from './pages/LoginForm'
import VisitView from './pages/VisitView'

import { initializeVisits } from './reducers/visitReducer'


const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(initializeVisits())
    }, [dispatch])
    const visits = useSelector(state => state.visits)
  
  // individual blog page
  const visitMatch = useMatch('/visits/:id')
  const viewVisit = visitMatch
      ? visits.find((visit) => visit.id === visitMatch.params.id)
      : null


  return (
    <Box m={2} pt={3}>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<AddVisitForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/visits/:id" element={<VisitView visit={viewVisit}/>} />
      </Routes>
    </Box>
  )
}

export default App;
