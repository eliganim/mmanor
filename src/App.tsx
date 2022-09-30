import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Box, Flex } from '@chakra-ui/react'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Lectures from './Lectures'
import Media from './Media'
import Services from './Services'
import Workshops from './Workshops'

function App() {
  return (
    <Router>
      <Header />
      <Flex px='20px' w='full' justifyContent='center'>
        <Box w='1024px'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-me' element={<AboutMe />} />
            <Route path='/services' element={<Services />} />
            <Route path='/workshops' element={<Workshops />} />
            <Route path='/lectures' element={<Lectures />} />
            <Route path='/media' element={<Media />} />
            <Route path='/contact-me' element={<ContactMe />} />
          </Routes>
        </Box>
      </Flex>
      <Footer />
    </Router>
  )
}

export default App
