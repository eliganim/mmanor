import { ChatIcon, EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { Box, HStack, Link, Text, useBreakpoint } from '@chakra-ui/react'

const IconProps = {
  bgColor: 'darkBrown',
  color: 'lightBrown',
  boxSize: '25px',
  p: '5px',
  borderRadius: 'full',
  borderColor: 'brown',
  border: 'solid 0.5px',
  overflow: 'visible',
}

const Footer = () => {
  const breakpoint = useBreakpoint()

  return (
    <Box
      w='full'
      mt='20px'
      py='10px'
      position={['base', 'sm'].includes(breakpoint) ? 'relative' : 'fixed'}
      left='0'
      bottom='0'
      bgColor='lightBrown'
    >
      <Box w='fit-content' margin='auto'>
        <Text fontWeight='bold'>צרו איתי קשר</Text>
        <HStack>
          <ChatIcon {...IconProps} />
          <Link lineHeight='25px' href='https://wa.me/+972503955388' target='_blank'>
            שלחו הודעת WhatsApp
          </Link>
        </HStack>
        <HStack pt='4px'>
          <PhoneIcon {...IconProps} />
          <Link lineHeight='25px' href='tel:0503955388'>
            050-3955388
          </Link>
        </HStack>
        <HStack pt='4px'>
          <EmailIcon {...IconProps} />
          <Link lineHeight='25px' href='mailto:moriahmanor@gmail.com' target='_blank'>
            moriahmanor@gmail.com
          </Link>
        </HStack>
      </Box>
    </Box>
  )
}

export default Footer
