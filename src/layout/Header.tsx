import { useNavigate } from 'react-router-dom'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  Hide,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Spacer,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import logoChair from '../assets/logo-chair.png'
import logoText from '../assets/logo-text.png'
import MenuDrawer from './MenuDrawer'

const MOBILE_CONTENT_HEIGHT = 50
const MOBILE_CONTENT_PADDING = 10
export const MOBILE_HEADER_HEIGHT = MOBILE_CONTENT_HEIGHT + 2 * MOBILE_CONTENT_PADDING

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()
  const { isOpen: isServicesOpen, onOpen: onOpenServices, onClose: onCloseServices } = useDisclosure()

  return (
    <>
      <Show below='md'>
        <MenuDrawer isOpen={isOpen} onClose={onClose} />
        <Flex bgColor='lightBrown' alignItems='center' py={`${MOBILE_CONTENT_PADDING}px`} position='sticky' top='0px'>
          <Image
            src={logoChair}
            maxH={`${MOBILE_CONTENT_HEIGHT}px`}
            objectFit='cover'
            mx='12px'
            cursor='pointer'
            onClick={() => {
              navigate('/')
            }}
          />
          <Image
            src={logoText}
            maxH={`${MOBILE_CONTENT_HEIGHT}px`}
            boxSize='auto'
            cursor='pointer'
            onClick={() => {
              navigate('/')
            }}
          />
          <Spacer />
          <HamburgerIcon mx='20px' boxSize='25px' onClick={onOpen} />
        </Flex>
      </Show>
      <Hide below='md'>
        <Flex flexDir='column' bgColor='lightBrown' alignItems='center'>
          <Flex>
            <Hide below='sm'>
              <Image
                src={logoChair}
                maxH='100px'
                objectFit='cover'
                mx='12px'
                cursor='pointer'
                onClick={() => {
                  navigate('/')
                }}
              />
            </Hide>
            <Image
              src={logoText}
              maxH='100px'
              boxSize='auto'
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
              <MenuList onMouseEnter={onOpenServices} onMouseLeave={onCloseServices} minW='200px' w='400px'>
                <MenuItem>
                  <Link href='/services?service=rights'>מיצוי זכויות לגיל השלישי</Link>
                </MenuItem>
                <MenuItem>
                  <Link href='/services?service=legal'>תכנון משפטי – יפוי כח רפואי מתמשך/החלטות לגבי סוף החיים</Link>
                </MenuItem>
                <MenuItem>
                  <Link href='/services?service=logotherapy'>לוגותרפיה - יצירת משמעות בגיל השלישי</Link>
                </MenuItem>
                <MenuItem>
                  <Link href='/services?service=homeaid'>סיוע בשילוב עזרה ביתית</Link>
                </MenuItem>
                <MenuItem>
                  <Link href='/services?service=caregivers'>תמיכה ויעוץ לבני משפחה/מטפלים עיקריים</Link>
                </MenuItem>
                <MenuItem>
                  <Link href='/services?service=nursery'>מעבר לבית אבות/דיור מוגן</Link>
                </MenuItem>
                <MenuItem>
                  <Link href='/services?service=dementia'>התמודדות עם ירידה קוגנטיבית ודמנציה במשפחה</Link>
                </MenuItem>
                <MenuItem>
                  <Link href='/services?service=soultalk'>שיחת נפש</Link>
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
      </Hide>
    </>
  )
}

export default Header
