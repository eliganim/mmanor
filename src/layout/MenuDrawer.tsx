import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Link,
} from '@chakra-ui/react'
import { MOBILE_HEADER_HEIGHT } from './Header'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const MenuDrawer = (props: Props) => {
  return (
    <>
      <Drawer isOpen={props.isOpen} placement='left' onClose={props.onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size='lg' mt='10px' right='unset' left='var(--chakra-space-3)' />
          <DrawerBody pt={`${MOBILE_HEADER_HEIGHT + 10}px`}>
            <Link display='block' fontWeight='bold' href='/about-me' fontSize='xl' px='12px'>
              אודותיי
            </Link>
            <Divider my='5px' />
            <Link display='block' fontWeight='bold' href='/services' fontSize='xl' px='12px'>
              תחומי השירות
            </Link>
            <Divider my='5px' />
            <Link display='block' fontWeight='bold' href='/workshops' fontSize='xl' px='12px'>
              קבוצות וסדנאות
            </Link>
            <Divider my='5px' />
            <Link display='block' fontWeight='bold' href='/lectures' fontSize='xl' px='12px'>
              הרצאות{' '}
            </Link>
            <Divider my='5px' />
            <Link display='block' fontWeight='bold' href='/media' fontSize='xl' px='12px'>
              מדיה
            </Link>
            <Divider my='5px' />
            <Link display='block' fontWeight='bold' href='/contact-me' fontSize='xl' px='12px'>
              צור קשר
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MenuDrawer
