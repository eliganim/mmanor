import { useNavigate } from 'react-router-dom'
import {
  Box,
  Flex,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import logoChair from './assets/logo-chair.png'
import logoText from './assets/logo-text.png'

const Header = () => {
  const navigate = useNavigate()
  const { isOpen: isServicesOpen, onOpen: onOpenServices, onClose: onCloseServices } = useDisclosure()

  return (
    <Box>
      <Flex flexDir='column' bgColor='#fcf7f1' alignItems='center'>
        <Flex>
          <Image
            src={logoChair}
            boxSize='100px'
            mr='24px'
            ml='12px'
            cursor='pointer'
            onClick={() => {
              navigate('/')
            }}
          />
          <Image
            src={logoText}
            h='100px'
            cursor='pointer'
            onClick={() => {
              navigate('/')
            }}
          />
        </Flex>
        <Box my='24px'>
          <Link href='/about-me' fontSize='xl' px='12px'>
            אודותיי
          </Link>{' '}
          |{' '}
          <Menu placement='bottom-end' isOpen={isServicesOpen}>
            <MenuButton
              onMouseEnter={onOpenServices}
              onMouseLeave={onCloseServices}
              onClick={() => navigate('/services')}
            >
              <Text fontSize='xl' px='12px'>
                תחומי השירות
              </Text>
            </MenuButton>
            <MenuList onMouseEnter={onOpenServices} onMouseLeave={onCloseServices}>
              <MenuItem>
                <Link href='?service=rights'>מיצוי זכויות לגיל השלישי</Link>
              </MenuItem>
              <MenuItem>
                <Link href='?service=legal'>תכנון משפטי – יפוי כח רפואי מתמשך/החלטות לגבי סוף החיים</Link>
              </MenuItem>
              <MenuItem>
                <Link href='?service=logotherapy'>לוגותרפיה - יצירת משמעות בגיל השלישי</Link>
              </MenuItem>
              <MenuItem>
                <Link href='?service=homeaid'>סיוע בשילוב עזרה ביתית</Link>
              </MenuItem>
              <MenuItem>
                <Link href='?service=caregivers'>תמיכה ויעוץ לבני משפחה/מטפלים עיקריים</Link>
              </MenuItem>
              <MenuItem>
                <Link href='?service=nursery'>מעבר לבית אבות/דיור מוגן</Link>
              </MenuItem>
              <MenuItem>
                <Link href='?service=dementia'>התמודדות עם ירידה קוגנטיבית ודמנציה במשפחה</Link>
              </MenuItem>
              <MenuItem>
                <Link href='?service=soultalk'>שיחת נפש</Link>
              </MenuItem>
            </MenuList>
          </Menu>{' '}
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
