import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Box, Flex } from '@chakra-ui/react'
import Footer from './Footer'
import Header from './Header'
import AboutMe from './screens/AboutMe'
import ContactMe from './screens/ContactMe'
import Home from './screens/Home'
import Lectures from './screens/Lectures'
import Media from './screens/Media'
import NotFound from './screens/NotFound'
import Services from './screens/Services'
import Workshops from './screens/Workshops'

function App() {
  return (
    <Router>
      <Header />
      <Flex px='20px' w='full' justifyContent='center'>
        <Box w='1024px'>
          <Routes>
            <Route path='*' element={<NotFound />} />
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
