import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Box, Flex, useBreakpoint } from '@chakra-ui/react'
import Footer from './layout/Footer'
import Header from './layout/Header'
import AboutMe from './screens/AboutMe'
import ContactMe from './screens/ContactMe'
import Home from './screens/Home'
import Lectures from './screens/Lectures'
import Media from './screens/Media'
import NotFound from './screens/NotFound'
import Services from './screens/Services'
import Workshops from './screens/Workshops'

function App() {
  const isHomePage = window.location.pathname === '/'
  const breakpoint = useBreakpoint()

  return (
    <Router>
      <Header />
      <Flex
        px={isHomePage ? '0px' : '20px'}
        pb={['base', 'sm'].includes(breakpoint) ? '0px' : '150px'}
        w='full'
        justifyContent='center'
      >
        <Box
          w={isHomePage ? 'full' : '1024px'}
          //maxW={isHomePage ? 'full' : '1024px'}
          minW='320px'
          my={isHomePage ? '0px' : '20px'}
        >
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
