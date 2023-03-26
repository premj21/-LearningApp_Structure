import React from 'react'
import { Box ,Image,Text} from '@chakra-ui/react';


const AllCourses = () => {

  const dt = [
    {
     pic : "https://images.unsplash.com/photo-1517458776179-baae60e41ef2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
       name : 'NameProject'
    },
    {
     pic : "https://images.unsplash.com/photo-1517458776179-baae60e41ef2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
       name : 'NameProject'
    },
    {
     pic : "https://images.unsplash.com/photo-1517458776179-baae60e41ef2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
       name : 'NameProject'
    },
    {
     pic : "https://images.unsplash.com/photo-1517458776179-baae60e41ef2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
       name : 'NameProject'
    },
    {
     pic : "https://images.unsplash.com/photo-1517458776179-baae60e41ef2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
       name : 'NameProject'
    },
    {
     pic : "https://images.unsplash.com/photo-1517458776179-baae60e41ef2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
       name : 'NameProject'
    },
    {
     pic : "https://images.unsplash.com/photo-1517458776179-baae60e41ef2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
       name : 'NameProject'
    },
    {
     pic : "https://images.unsplash.com/photo-1517458776179-baae60e41ef2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
       name : 'NameProject'
    },
    {
     pic : "https://images.unsplash.com/photo-1517458776179-baae60e41ef2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
       name : 'NameProject'
    },
    {
     pic : "https://images.unsplash.com/photo-1517458776179-baae60e41ef2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
       name : 'NameProject'
    },
    {
     pic : "https://images.unsplash.com/photo-1517458776179-baae60e41ef2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
       name : 'NameProject'
    },
    {
     pic : "https://images.unsplash.com/photo-1517458776179-baae60e41ef2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
       name : 'NameProject'
    },
  ]
  return (
    <Box
    mt='4rem'
    mb='4rem'
    w='100%'
    display={'flex'}
    alignItems='center'
    justifyContent={'center'}
    flexWrap='wrap'
    gap={{base:'1.2rem',md:'1.2rem',lg:'1.3rem'}}
   
    >
      {
        dt.map((item)=>(
          <Box
        boxShadow="0px 5px 20px rgba(0,0,0,0.3)"
    border='10px solid white'
    display={'flex'}
    flexDirection='column'
    alignItems={'center'}
    justifyContent='center'
    w={{base:'291px',md:'200px',lg:'291px'}}
    maxW={'291px'}
    pb='1.5rem'
    mb='1rem'
    >
      <Image src={item.pic} alt='nothing' w='80%'  m='auto'/>
      <Text fontSize={'1.6rem'}>{item.name}</Text>
      <p style={{textAlign:'center'}}>hellow i am prem jadhav dfljfljfl andfgh fvlfdkj ljfg lj fgjaljg l kjfg</p>
    </Box>
        ))
      }
    </Box>
  )
}

export default AllCourses
