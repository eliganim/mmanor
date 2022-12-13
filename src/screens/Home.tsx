import { useNavigate } from 'react-router-dom'
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Hide,
  HStack,
  Image,
  Spacer,
  Text,
  useBreakpoint,
} from '@chakra-ui/react'
import groupPhoto from '../assets/group-photo.png'

// import profilePhoto from '../assets/moriah-profile.jpeg'

const services = [
  {
    title: 'מיצוי זכויות לגיל השלישי',
    link: 'rights',
    icon: 'rights',
  },
  {
    title: 'יפוי כח רפואי מתמשך / החלטות לגבי סוף החיים',
    link: 'legal',
    icon: 'legal',
  },
  {
    title: 'לוגותרפיה - יצירת משמעות בגיל השלישי',
    link: 'logotherapy',
    icon: 'logotherapy',
  },
  {
    title: 'סיוע בשילוב עזרה ביתית',
    link: 'homeaid',
    icon: 'homeaid',
  },
  {
    title: 'תמיכה ויעוץ לבני משפחה/מטפלים עיקריים',
    link: 'caregivers',
    icon: 'caregivers',
  },
  {
    title: 'מעבר לבית אבות/דיור מוגן',
    link: 'nursery',
    icon: 'nursery',
  },
  {
    title: 'התמודדות עם ירידה קוגנטיבית ודמנציה במשפחה',
    link: 'dementia',
    icon: 'dementia',
  },
  {
    title: 'שיחת נפש',
    link: 'soultalk',
    icon: 'soultalk',
  },
]

const Home = () => {
  const navigate = useNavigate()
  const breakpoint = useBreakpoint()
  console.log(breakpoint)
  const isSmall = ['base', 'sm'].includes(breakpoint)
  const elementWidth = isSmall ? '135px' : '200px'

  const serviceBox = (service: { title: string; link: string; icon: string }) => {
    return (
      <Flex
        boxSize={elementWidth}
        mx='auto'
        px='10px'
        py='20px'
        border='0.5px solid'
        borderColor='sBlue'
        borderRadius='md'
        flexDir='column'
        bgColor='white'
        onClick={() => navigate(`services?service=${service.link}`)}
      >
        <Image
          mt={isSmall ? '10px' : '20px'}
          src={`/icons/${service.icon}.png`}
          boxSize={isSmall ? '30px' : '50px'}
          mx='auto'
        />
        <Spacer />
        <Text
          h='72px'
          textAlign='center'
          verticalAlign='center'
          fontWeight='extrabold'
          textColor='darkBrown'
          fontSize={isSmall ? 'sm' : 'md'}
        >
          {service.title}
        </Text>
      </Flex>
    )
  }

  return (
    <>
      <Hide below='md'>
        <Image
          position='absolute'
          maxH='310px'
          minH='310px'
          w='full'
          objectFit='cover'
          src={groupPhoto}
          opacity='15%'
        />
      </Hide>
      <Flex flexDir='column' align='center' justify='center'>
        <HStack px='20px' pt='20px'>
          <Box>
            <Text fontSize='2xl'>עובדת סוציאלית בעלת התמחות בתחום זקנה, שיקום ובריאות.</Text>
            <Text fontSize='2xl'>מעניקה יעוץ ותמיכה רגשית לאנשים בגיל הזקנה, לבני משפחה ומטפלים עיקריים.</Text>
            <br />
            <Text fontSize='lg'>הטיפולים מתקיימים בקליניקה בגבעת שמואל או בביקור בבית האדם המבוגר.</Text>
          </Box>
        </HStack>
        <Button
          onClick={() => navigate('/contact-me')}
          fontSize='xl'
          fontWeight='bold'
          w='200px'
          h='50px'
          mt='60px'
          _hover={{ bgColor: 'none' }}
          px='30px'
          borderRadius='full'
          color='white'
          bgColor='sBlue'
        >
          ליצירת קשר
        </Button>
      </Flex>

      {/* Services */}
      <Grid
        pt='80px'
        px='40px'
        mx='auto'
        gap='20px'
        maxW='800px'
        templateColumns={`repeat(auto-fit, minmax(${elementWidth}, 1fr))`}
      >
        {services.map((service) => (
          <GridItem>{serviceBox(service)}</GridItem>
        ))}
      </Grid>
    </>
  )
}

export default Home
