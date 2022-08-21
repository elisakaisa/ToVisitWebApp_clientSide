import React,  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, useMatch } from 'react-router-dom'
import { Paper, Box } from '@mui/material'

// internal import
import Menu from './components/Menu'
import Home from './pages/Home'
import AddVisit from './pages/AddVisit'
import LoginForm from './pages/LoginForm'
import VisitView from './pages/VisitView'
import Footer from './components/Footer'
import AlertNotification from './components/AlertNotification'
import { initializeVisits } from './reducers/visitReducer'
import { loginActionWindow } from './reducers/loginReducer'
import EditVisit from './pages/EditVisit'
import Search from './pages/Search'
import Analytics from './pages/Analytics'
import Category from './pages/Category'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: "#010204"
    },
    primary: {
      light: '#0C4160',
      main: '#738FA7'
    },
    text: {
      primary: "#ffffff"
    }
  },
});


const App = () => {

  // States
  const notification = useSelector(state => state.notifications)

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

  // category page
  const visitCategoryMatch = useMatch('visits/category/:category')
  let categoryMatch = []
  let category = null
  if (visitCategoryMatch) {
    visits.filter(visit => visit.category.find(item => {
      if (item === visitCategoryMatch.params.category) {
        categoryMatch.push(visit)
        category = visitCategoryMatch.params.category
      }
    }))
  } else {
    categoryMatch = null
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box m={2} pt={3}>
        <Menu />
        {notification.message && <AlertNotification />}
        <Box m={2} >
          <Paper elevation={3} sx= {{ p:1, backgroundColor: "#040a1a" }} >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<AddVisit />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/visits/:id" element={<VisitView visit={viewVisit}/>} />
              <Route path="/visits/:id/edit" element={<EditVisit visit={viewEditVisit}/>} />
              <Route path="/search" element={<Search />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/visits/category/:category" element={
                      <Category visits={categoryMatch} filteredBy={category}/>
                    } />
            </Routes>
          </Paper>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App;
