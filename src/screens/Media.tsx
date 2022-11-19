import { AspectRatio, Box, Heading } from '@chakra-ui/react'

const Media = () => {
  return (
    <Box w='1024px'>
      <Heading>מדיה</Heading>
      <br />
      <Heading size='md'>וידאו</Heading>
      <AspectRatio maxW='560px' ratio={16 / 9}>
        <iframe
          title='video'
          width='1280'
          height='720'
          src='https://www.youtube.com/embed/L_Uusn-nUrs?hl=he&modestbranding=1'
        />
      </AspectRatio>
      <br />
      <Heading size='md'>מאמרים</Heading>
    </Box>
  )
}

export default Media
