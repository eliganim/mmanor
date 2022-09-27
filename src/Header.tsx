import { Box, Flex, Image, Link, Spacer } from '@chakra-ui/react'
import logoChair from './assets/logo-chair.png'
import logoText from './assets/logo-text.png'

const Header = () => {
  return (
    <Box bgColor='white'>
      <Flex w='full' h='120px' bgColor='#fcf7f1' alignItems='center'>
        <Image src={logoChair} boxSize='80px' mr='24px' ml='12px' />
        <Image src={logoText} h='80px' />
        <Spacer />
        <Box ml='24px'>
          <Link href='/about-me' fontSize='xl' px='12px'>
            אודותיי
          </Link>{' '}
          |{' '}
          <Link href='/services' fontSize='xl' px='12px'>
            תחומי השירות
          </Link>{' '}
          |{' '}
          <Link href='/workshops' fontSize='xl' px='12px'>
            קבוצות וסדנאות
          </Link>
          |{' '}
          <Link href='/lectures' fontSize='xl' px='12px'>
            הרצאות{' '}
          </Link>
          |{' '}
          <Link href='/media' fontSize='xl' px='12px'>
            מדיה
          </Link>
          |{' '}
          <Link href='/contact-me' fontSize='xl' px='12px'>
            צור קשר
          </Link>
        </Box>
      </Flex>
    </Box>
  )
}

export default Header
