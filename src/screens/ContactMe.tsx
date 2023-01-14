import { useState } from 'react'
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
  Show,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import logoChair from '../assets/logo-chair.png'

const ContactMe = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isNameValid, setIsNameValid] = useState(true)
  const [isPhoneValid, setIsPhoneValid] = useState(true)
  const [isEmailValid, setIsEmailValid] = useState(true)

  const onSubmit = () => {
    if (!name) {
      setIsNameValid(false)
    }
    if (!phone) {
      setIsPhoneValid(false)
    }
    if (!email) {
      setIsEmailValid(false)
    }
    if (!name || !phone || !email) {
      return
    }

    setIsLoading(true)
    fetch('https://public.herotofu.com/v1/d3b03410-78d9-11ed-a126-b172cf164538', {
      method: 'POST',
      body: JSON.stringify({ name, phone, email, description }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        console.log(res)
        if (res.status >= 300) {
          setIsLoading(false)
          setIsError(true)
        } else {
          setSubmitted(true)
        }
      })
      .catch((err) => {
        setIsLoading(false)
        setIsError(true)
      })
  }

  if (isError) {
    return (
      <Flex justify='center'>
        <Show above='md'>
          <Image src={logoChair} />
        </Show>
        <Text>אירעה שגיאה, אנא נסה שנית או שלח מייל ישירות אל moriahmanor@gmail.com</Text>
      </Flex>
    )
  }

  return (
    <Flex justify='center'>
      <Show above='md'>
        <Image src={logoChair} />
      </Show>
      {submitted ? (
        <Text>תודה רבה, ניצור איתך קשר בהקדם</Text>
      ) : (
        <VStack w='50%' spacing='16px'>
          <FormControl isRequired isInvalid={!isNameValid}>
            <FormLabel>שם</FormLabel>
            <Input
              type='text'
              onChange={(event) => {
                setName(event.target.value)
                setIsNameValid(true)
              }}
            />
            <FormErrorMessage>שדה חובה</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={!isPhoneValid}>
            <FormLabel pt='16px'>טלפון</FormLabel>
            <Input
              type='tel'
              onChange={(event) => {
                setPhone(event.target.value)
                setIsPhoneValid(true)
              }}
            />
            <FormErrorMessage>שדה חובה</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={!isEmailValid}>
            <FormLabel pt='16px'>אימייל</FormLabel>
            <Input
              type='email'
              onChange={(event) => {
                setEmail(event.target.value)
                setIsEmailValid(true)
              }}
            />
            <FormErrorMessage>שדה חובה</FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel pt='16px'>תוכן הפניה</FormLabel>
            <Textarea
              onChange={(event) => {
                setDescription(event.target.value)
              }}
            />
          </FormControl>

          <Button
            isLoading={isLoading}
            onClick={() => onSubmit()}
            fontSize='xl'
            fontWeight='bold'
            w='200px'
            h='50px'
            _hover={{ bgColor: 'none' }}
            px='30px'
            borderRadius='full'
            color='white'
            bgColor='sBlue'
          >
            צרו קשר
          </Button>
        </VStack>
      )}
    </Flex>
  )
}

export default ContactMe
