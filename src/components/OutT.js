import React from 'react'
import { Box,Text,Image} from '@chakra-ui/react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const OutT = ({pic,name ,des}) => {

  return (
    <Box
    className='pp'
    w={{base:"80%",md:'30%',lg:'21%'}
       }
       display='flex'
    >



          <Box
          className='op'
        transform='translateY(-90%)'
         transition='0.5s'
         opacity={0}
     display='flex'
     flexDirection={'column'}
     h='150px'
     p='0.5rem'
    borderTopLeftRadius={'2xl'}
    borderBottomLeftRadius={'2xl'}
     position={'relative'}
     m='auto'
     left={{base:'85%',md:'100%',lg:'85%'}}
     alignItems={'center'}
     justifyContent='center'
     gap='0.7rem'
     bg='black'
     >
    <a href='/'> 
        <InstagramIcon  style={{color:"white",fontSize:'1.5rem'}}/>
        </a>
         <a href='/'> 
        <LinkedInIcon style={{color:"white",fontSize:'1.5rem'}}/>
        </a>

         <a href='/'> 
       
        <TwitterIcon style={{color:"white",fontSize:'1.5rem'}}/>
        </a>

    
     </Box>
     <Box
     w='100%'
     borderRadius={'10px'}
    boxShadow="0px 5px 20px rgba(0,0,0,0.3)"
    border='10px solid white'
    display='flex'
    flexDir={'column'}
    justifyContent='center'
    alignItems={'center'}
    h={'300px'}
    gap='1rem'
     >
   <Image src={pic} alt='nothing' borderRadius={'8%'} w='70%' />
       <Text fontSize={'1.8rem'} fontWeight={'500'}>{name}</Text>
      <p >{des}</p>
     </Box>
    </Box>
  )
}

export default OutT
