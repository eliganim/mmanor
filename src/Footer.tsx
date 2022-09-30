import { useNavigate } from 'react-router-dom'
import { Flex, Image } from '@chakra-ui/react'
import footerContact from './assets/footer-contact.png'
import footerName from './assets/footer-name.png'

const Footer = () => {
  const navigate = useNavigate()

  return (
    <Flex
      w='full'
      h='100px'
      justifyContent='space-between'
      position='fixed'
      left='0'
      bottom='0'
      py='10px'
      bgColor='#fcf7f1'
    >
      <Image
        src={footerName}
        mr='24px'
        ml='12px'
        cursor='pointer'
        onClick={() => {
          navigate('/')
        }}
      />
      <Image
        src={footerContact}
        cursor='pointer'
        onClick={() => {
          navigate('/')
        }}
      />{' '}
    </Flex>
  )
}

export default Footer
