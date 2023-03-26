import React from 'react'
import { Box,Image ,Input,Button} from "@chakra-ui/react";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

import pic from '../pics/contact.png';
import {
  FormControl,
  FormLabel,
} from '@chakra-ui/react'

const Contact = () => {

   

  return (
    <>

     <Box
       position={'absolute'}
       top={{base:'44',md:'40'}}
       left={{base:'12%',md:'20%'}}
        display='flex'
        flexDirection={{base:'column',md:'row',lg:'column'}}
        gap={{base:'0',md:'6rem',lg:'none'}}
    
     >
    <li> <a      href='./About'>
      <InstagramIcon style={{fontSize:'2rem',marginBottom:'1rem'}}/>
    </a></li>

    <li> <a   href='./Contact'>
      <LinkedInIcon style={{fontSize:'2rem',marginBottom:'1rem'}} />
      </a></li>
    <li> <a   href='./Course'>
      <GitHubIcon style={{fontSize:'2rem' ,marginBottom:'1rem'}}/>
      </a></li>
    <li> <a    href='./'>
     <EmailIcon style={{fontSize:'2rem',marginBottom:'1rem'}}/>
      </a></li>
</Box>


    <Box 
    w='100%'
    h={{base:'100vh',md:'60vh',lg:'70vh'}}
    display={'flex'}
    flexWrap='wrap'
    alignItems={'center'}
    justifyContent='center'
    mb={{base:'5rem',md:'1rem',lg:'8rem'}}
    overflowY={'hidden'}
    >
      <Box 
      w={{base:'100%',md:'60%'}}
       display={'flex'}
       alignItems='flex-end'
       justifyContent={'flex-end'}
      >
        <Image src={pic} alt='nothing'
        h={{base:'100%',md:'50vw',lg:'40vw'}}
        />
      </Box>
      <Box w={{base:'100%',md:'40%'}}

      display={'flex'}
      flexDirection='column'
      alignItems={'flex-start'}
      justifyContent='flex-start'
      >


        <form
        style={{width:'100%'}}
  action="https://formspree.io/f/mdovljoy"
  method="POST"
>
      <FormControl isRequired>
  <FormLabel>First name</FormLabel>
  <Input placeholder='First name' type='name' name='firstname'  />
</FormControl>
  <FormControl isRequired>
  <FormLabel>Last name</FormLabel>
  <Input placeholder='Last name'  type='name' name='lastname' />
</FormControl>
 <FormControl isRequired>
  <FormLabel>Email </FormLabel>
  <Input placeholder='Premjadhav378@gmail.com' type="email" name="email" />
</FormControl>
<FormControl>
  <FormLabel>Type Something</FormLabel>
  <Input placeholder='Your Wordss' type='textarea' name='message'/>
</FormControl>
 <Button
            mt={4}
            colorScheme='blackAlpha'
            type='submit'
          >
            Submit
          </Button>

          </form>
      </Box >





    </Box>
  
    </>
  )
}

export default Contact
